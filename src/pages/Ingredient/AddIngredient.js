import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
} from "@ionic/react";
import { getApiData, postApiData } from '../../utils/Utils';
import { listOutline } from "ionicons/icons";
import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import AddingredientPopup from "../../modal/AddingredientPopup";


const AddIngredient = () => {
  const [Categorydata, setCategoryData] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const[responcedata,setResponceData]=useState();
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
 


  const initialValues = {
    Recipe: "",
    Category: "",
    Description: "",
    images: "null"
  };

  const validationSchema = Yup.object({
    Recipe: Yup.string().required('Recipe title is required'),
    Category: Yup.string().required('Category is required'),
    Description: Yup.string().max(250, 'Maximum 250 characters are allowed'),
    image1: Yup.mixed().required('Image is required'),
  });

  const category = async () => {
    try {
      const response = await getApiData("category-ingredient");
      setCategoryData(response.data.ingredient_category);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    category();
  }, []);


  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("ingredient_name", values.Recipe);
      formData.append("ingredient_category", values.Category);
      formData.append("short_description", values.Description);
      formData.append("images", values.image1);

      const response = await postApiData("ingredient-add", formData);
      console.log("response", response);
      if (response.data.status === 200) {
        setResponceData(response?.data?.message_response)
        setIsOpen(true)
        resetForm();
        setImagePreview(null);
        setTimeout(() => {
          history.push('/profile');
        }, 3000);

      }
    } catch (error) {
      console.error('Error submitting form', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="bottom-shadow flex ion-justify-content-between ion-align-items-center">
          <div className="TitleHead">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i className="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Add Ingredient</IonTitle>
          </div>
          <div className="flex ion-justify-content-end ion-align-items-end">
            <IonButton className="ion-padding-horizontal" fill="outline" size="small" shape="round" routerLink="/ingredient-list">
              <IonIcon size="default" fill="clear" icon={listOutline} />
            </IonButton>
          </div>
        </IonHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values, resetForm }) => (
            <Form>
              <IonRow className="ion-padding">
                <IonCol size="12" className="FormGroup">
                  <div className="EditprofileImg">
                    <img src={imagePreview ? imagePreview : "./assets/img/camera-placeholder.png"} alt="" className="ProfileImg" />
                    <div className="image-upload">
                      <label htmlFor="file-input" className="EditProfile">
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
                </IonCol>
                <IonCol size="12" className="FormGroup">
                  <IonText>Recipe Title*</IonText>
                  <IonInput
                    className="ion-margin-bottom"
                    name="Recipe"
                    type="text"
                    placeholder="Product Name"
                    value={values.Recipe}
                    onIonChange={(e) =>
                      setFieldValue('Recipe', e.target.value)
                    }
                  />
                  <ErrorMessage
                    name="Recipe"
                    component="div"
                    className="error-message error-text"
                  />
                  <span className="extraInfo">Example: Red Chilli, Black Pepper</span>
                </IonCol>
                <IonCol size="12" className="FormGroup">
                  <IonText>Category</IonText>
                  <Field
                    as={IonSelect}
                    name="Category"
                    className="fillInput"
                    placeholder="Please Select"
                    onIonChange={(e) => setFieldValue('Category', e.target.value)}
                  >
                    {Categorydata.map((category, index) => (
                      <IonSelectOption key={index} value={category.id}>
                        {category.category_name}
                      </IonSelectOption>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="Category"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>
                <IonCol size="12" className="FormGroup">
                  <IonText>Short Description</IonText>
                  <IonInput
                    className="ion-margin-bottom"
                    name="Description"
                    type="text"
                    placeholder="Product Name"
                    value={values.Description}
                    onIonChange={(e) =>
                      setFieldValue('Description', e.target.value)
                    }
                  />
                  <ErrorMessage
                    name="Description"
                    component="div"
                    className="error-message error-text"
                  />
                  <span className="extraInfo">Max. 250 characters</span>
                </IonCol>
                <IonCol size="12" className="BtnGroup">
                  <IonButton type="button" onClick={() => {
                    resetForm();
                    setImagePreview(null);
                  }}>
                    Clear
                  </IonButton>
                  <IonButton type="submit" disabled={isSubmitting}>
                    Save
                  </IonButton>
                </IonCol>
              </IonRow>
            </Form>
          )}
        </Formik>
        <AddingredientPopup isOpen={isOpen} setIsOpen={setIsOpen} responcedata={responcedata} />
      </IonContent>
    </IonPage >
  );
};

export default AddIngredient;
