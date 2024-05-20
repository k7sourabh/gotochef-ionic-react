import {
    IonButton,
    IonCol,
    IonContent,
    IonHeader,
    IonInput,
    IonLabel,
    IonPage,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonGrid,
    useIonToast,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { getApiData, postApiData } from '../../utils/Utils';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import AddProductPopup from '../../modal/AddProductPopup';

const AddProduct = () => {
    const [Categorydata, setCategoryData] = useState([]);
    const [subCategorydata, setSubCategoryData] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const [imagePreview2, setImagePreview2] = useState(null);
    const [imagePreview3, setImagePreview3] = useState(null);
    const [imagePreview4, setImagePreview4] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [responcedata,setResponceData]=useState({})

    const [present] = useIonToast();
    const history = useHistory();

    const initialValues = {
        Productname: '',
        Category: '',
        subCategory: '',
        Brandname: '',
        image1: null,
        image2: null,
        image3: null,
        image4: null,
    };

    const validateForm = Yup.object().shape({
        Productname: Yup.string().required('Product name is required'),
        Brandname: Yup.string().required('Brand name is required'),
        Category: Yup.string().required('Category is required'),
        subCategory: Yup.string().required('Subcategory is required'),
        image1: Yup.mixed().required('Product image is required'),
    });

    const Categorylist = async () => {
        try {
            const response = await getApiData('/category-list');
            setCategoryData(response?.data?.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        Categorylist();
    }, []);

    const handleStateChange = async (proid) => {
        if(proid){
            try {
                const response = await getApiData(`getSubcatProductlist/${proid}`);
                setSubCategoryData(response?.data?.subcat_data);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const formData = new FormData();
            formData.append('product_name', values.Productname);
            formData.append('manufacturers_name', values.Brandname);
            formData.append('product_main_category', values.Category);
            formData.append('product_sub_category', values.subCategory);
            formData.append('image1', values.image1);
            formData.append('image2', values.image2);
            formData.append('image3', values.image3);
            formData.append('image4', values.image4);

            const response = await postApiData('user-add-product', formData);

            if (response.data.status === 200) {
                presentToast("Top", response?.data?.message_response);
                setResponceData(response?.data?.message_response)
                setIsOpen(true);
                resetForm();
                setImagePreview(null);
                setImagePreview2(null);
                setImagePreview3(null);
                setImagePreview4(null);
                setTimeout(() => {
                    history.push('/profile');
                }, 3000);
            }
        } catch (errors) {
            console.errors('Error submitting the form', errors);
            presentToast("Top", errors);
        }
    };
    const  clearForm=(resetForm)=>{
        resetForm();
        setImagePreview(null);
        setImagePreview2(null);
        setImagePreview3(null);
        setImagePreview4(null);
    }

    const presentToast = (position, message) => {
        present({
            message: message,
            duration: 1500,
            position: position,
        });
    };
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                        <i className="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">ADD PRODUCT</IonTitle>
                </IonHeader>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateForm}
                    onSubmit={(values, { resetForm }) => {
                        handleSubmit(values, { resetForm });
                    }}
                >
                    {({ isSubmitting, setFieldValue, values,resetForm }) => {
                        return (
                            <Form>
                                <IonGrid className="ion-padding-horizontal">
                                    <IonRow>
                                        <IonCol>
                                            <div className="N-profileInput">
                                                <IonLabel>Product Name*</IonLabel>
                                                <IonInput
                                                    className="ion-margin-bottom"
                                                    name="Productname"
                                                    type="text"
                                                    placeholder="Product Name"
                                                    value={values.Productname}
                                                    onIonChange={(e) =>
                                                        setFieldValue('Productname', e.target.value)
                                                    }
                                                />
                                                <ErrorMessage
                                                    name="Productname"
                                                    component="div"
                                                    className="error-message error-text"
                                                />

                                                <IonLabel>Brand Name*</IonLabel>
                                                <IonInput
                                                    className="ion-margin-vertical"
                                                    name="Brandname"
                                                    type="text"
                                                    placeholder="Brand Name"
                                                    value={values.Brandname}
                                                    onIonChange={(e) =>
                                                        setFieldValue('Brandname', e.target.value)
                                                    }
                                                />
                                                <ErrorMessage
                                                    name="Brandname"
                                                    component="div"
                                                    className="error-message error-text"
                                                />

                                                <IonLabel>Select Main Category*</IonLabel>
                                                <IonSelect
                                                    placeholder="Select Main Category"
                                                    className="ion-margin-top"
                                                    name="Category"
                                                    value={values.Category}
                                                    onIonChange={(e) => {
                                                        const value = e.target.value;
                                                        handleStateChange(
                                                            value
                                                        )
                                                        setFieldValue('Category', value);
                                                       
                                                    }}
                                                >
                                                    {Categorydata &&
                                                        Categorydata.map((item, i) => (
                                                            <IonSelectOption key={i} value={item.id}>
                                                                {item.category_name}
                                                            </IonSelectOption>
                                                        ))}
                                                </IonSelect>
                                                <ErrorMessage
                                                    name="Category"
                                                    component="div"
                                                    className="error-message error-text"
                                                />

                                                <div className="N-profileInput">
                                                    <IonLabel>Product Sub Category*</IonLabel>
                                                    <IonSelect
                                                        placeholder="Product Sub Category"
                                                        className="ion-margin-top"
                                                        name="subCategory"
                                                        value={values.subCategory}
                                                        onIonChange={(e) => {
                                                            setFieldValue('subCategory', e.target.value);
                                                        }}
                                                    >
                                                        {subCategorydata &&
                                                            subCategorydata.map((item, i) => (
                                                                <IonSelectOption key={i} value={item.id}>
                                                                    {item.sub_category_name}
                                                                </IonSelectOption>
                                                            ))}
                                                    </IonSelect>
                                                    <ErrorMessage
                                                        name="subCategory"
                                                        component="div"
                                                        className="error-message error-text"
                                                    />
                                                </div>
                                            </div>
                                        </IonCol>
                                        <IonCol size="12" className="flex ion-align-items-center ion-justify-content-center add-product-profile">
                                            <div className="EditprofileImg N-ProfileEdit">
                                                <img src={imagePreview ? imagePreview : "./assets/img/camera-placeholder.png"}
                                                    alt="" className="ProfileImg" />
                                                <div className="image-upload">
                                                    <label htmlFor="file-input" className="N-EditProfile">
                                                        <img src="./assets/img/edit.png" alt="" />
                                                    </label>
                                                    <input id="file-input" type="file" name='image1'
                                                        onChange={(e) => {
                                                            const file = e.target.files[0];
                                                            setImagePreview(URL.createObjectURL(file));
                                                            if (file) {
                                                                setFieldValue('image1', file);
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                <ErrorMessage
                                                    name="image1"
                                                    component="div"
                                                    className="error-message error-text"
                                                />
                                            </div>

                                            <div className="EditprofileImg N-ProfileEdit">
                                                <img src={imagePreview2 ? imagePreview2 : "./assets/img/camera-placeholder.png"}
                                                    alt="" className="ProfileImg" />
                                                <div className="image-upload">
                                                    <label htmlFor="file-input2" className="N-EditProfile">
                                                        <img src="./assets/img/edit.png" alt="" />
                                                    </label>
                                                    <input id="file-input2" type="file" name='image2'
                                                        onChange={(e) => {
                                                            const file = e.target.files[0];
                                                            setImagePreview2(URL.createObjectURL(file));
                                                            if (file) {
                                                                setFieldValue('image2', file);
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                <ErrorMessage
                                                    name="image2"
                                                    component="div"
                                                    className="error-message error-text"
                                                />
                                            </div>
                                            <div className="EditprofileImg N-ProfileEdit">
                                                <img src={imagePreview3 ? imagePreview3 : "./assets/img/camera-placeholder.png"}
                                                    alt="" className="ProfileImg" />
                                                <div className="image-upload">
                                                    <label htmlFor="file-input3" className="N-EditProfile">
                                                        <img src="./assets/img/edit.png" alt="" />
                                                    </label>
                                                    <input id="file-input3" type="file" name='image3'
                                                        onChange={(e) => {
                                                            const file = e.target.files[0];
                                                            setImagePreview3(URL.createObjectURL(file));
                                                            if (file) {
                                                                setFieldValue('image3', file);
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                <ErrorMessage
                                                    name="image3"
                                                    component="div"
                                                    className="error-message error-text"
                                                />
                                            </div>
                                            <div className="EditprofileImg N-ProfileEdit">
                                                <img src={imagePreview4 ? imagePreview4 : "./assets/img/camera-placeholder.png"}
                                                    alt="" className="ProfileImg" />
                                                <div className="image-upload">
                                                    <label htmlFor="file-input4" className="N-EditProfile">
                                                        <img src="./assets/img/edit.png" alt="" />
                                                    </label>
                                                    <input id="file-input4" type="file" name='image4'
                                                        onChange={(e) => {
                                                            const file = e.target.files[0];
                                                            setImagePreview4(URL.createObjectURL(file));
                                                            if (file) {
                                                                setFieldValue('image4', file);
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                <ErrorMessage
                                                    name="image4"
                                                    component="div"
                                                    className="error-message error-text"
                                                />
                                            </div>
                                        </IonCol>

                                        <IonCol>
                                            <div className="flex ion-padding-top">
                                                <IonButton
                                                    onClick={() => {
                                                        clearForm(resetForm);
                                                    }}
                                                >
                                                    CANCEL
                                                </IonButton>
                                                <IonButton type="submit" className="ion-padding-start">
                                                    SAVE & FINISH
                                                </IonButton>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </Form>
                        );
                    }}
                </Formik>
               
                <AddProductPopup isOpen={isOpen} setIsOpen={setIsOpen} responcedata={responcedata} />
            </IonContent>
        </IonPage>
    );
};

export default AddProduct;
