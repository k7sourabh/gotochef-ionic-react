import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonPage,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle
} from '@ionic/react'

import Header from '../../components/Header'
import { getApiData, postApiData } from '../../utils/Utils';
import { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { image } from 'ionicons/icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const SubmitArticals = () => {
    const [tages, setTages] = useState({})
    const [category, setCategory] = useState({});
    const [section, setSection] = useState({});
    const [imagePreview, setImagePreview] = useState(null);
    const history=useHistory();

    const initialValues = {
        title: '',
        introText: '',
        articleContent: '',
        highlights: '',
        image1: "",
        tags: '',
        category: '',
        section: ''
    };
    const validateYupSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        introText: Yup.string().required('Intro Text is required'),
        articleContent: Yup.string().required('Article Content is required'),
        highlights: Yup.string(),
        tags: Yup.string(),
        category: Yup.string().required('Article Category is required'),
        section: Yup.string().required('Article Section is required')
    });

    const fetchArticalData = async () => {
        try {
            const response = await getApiData('submit-article-get')
            console.log("response", response);
            setTages(response?.data?.data?.tags)
            setCategory(response?.data?.data?.article_category);
            setSection(response?.data?.data?.article_section);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchArticalData();
    }, [])

    const handleSubmit = async(values, { resetForm }) => {
        try{
            const formData=new FormData();
            formData.append("article_name",values.title);
            formData.append("intro_text",values.introText);
            formData.append("article_description",values.articleContent);
            formData.append("images",values.image1);
            formData.append("tags",values.tags);
            formData.append("article_category",values.category);
            formData.append("article_section",values.section);
            const response = await postApiData('submit-article-post',formData)
          
            if(response?.data?.status){
                resetForm();
                setImagePreview(null);
                history.push("/articles");
            }
        }catch(err){
            console.log(err)
        }
      
    }

    const handleclear=(resetForm)=>{
        resetForm();
        setImagePreview(null);
        // history.push("/articles");
    }
    return (
        <IonPage>
            {/* {/ <Header /> /} */}
            <IonContent>
                <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                        <i class="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">Submit Articals</IonTitle>
                </IonHeader>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateYupSchema}
                    onSubmit={(values, { resetForm }) => {
                        handleSubmit(values, { resetForm });
                    }}
                >
                    {({ isSubmitting, setFieldValue, values, resetForm }) => {
                        return (
                            <Form>
                                <IonGrid className='ion-padding-horizontal'>
                                    <IonRow>
                                        <IonCol>
                                            <div className="N-profileInput">
                                                <IonInput
                                                    className="ion-margin-vertical"
                                                    name="title"
                                                    type="text"
                                                    placeholder="Title Name"
                                                    value={values.title}
                                                    onIonChange={(e) =>
                                                        setFieldValue('title', e.target.value)
                                                    }
                                                />
                                                <ErrorMessage
                                                    name="title"
                                                    component="div"
                                                    className="error-message error-text"
                                                />
                                                <IonInput
                                                    className="ion-margin-vertical"
                                                    name="introText"
                                                    type="text"
                                                    placeholder="Intro Text"
                                                    value={values.introText}
                                                    onIonChange={(e) => {
                                                        setFieldValue("introText", e.target.value);
                                                      
                                                    }}
                                                />

                                                <IonTextarea
                                                    name='articleContent'
                                                    value={values.articleContent}
                                                    label="Regular textarea"
                                                    placeholder="Type something here"
                                                    onIonChange={(e) =>
                                                        setFieldValue("articleContent", e.target.value)
                                                    }
                                                />
                                                <IonInput
                                                    className="ion-margin-vertical"
                                                    name="highlights"
                                                    type="number"
                                                    label="Default input"
                                                    placeholder="Add Highlights"
                                                    value={values.highlights}
                                                    onIonChange={(e) =>
                                                        setFieldValue("highlights", e.detail.value)}
                                                />
                                            </div>
                                        </IonCol>
                                        <IonCol size="12" className="flex flex-column  ion-align-items-center ion-justify-content-center">
                                            <div className="EditprofileImg N-ProfileEdit">
                                                {imagePreview ? (
                                                    <img src={imagePreview} alt="Selected" className="ProfileImg" />
                                                ) : (
                                                    <img src="./assets/img/img-person.jpg" alt="Placeholder" className="ProfileImg" />
                                                )}
                                                <div className="image-upload">
                                                    <label htmlFor="file-input" className="N-EditProfile">
                                                        <img src="./assets/img/edit.png" alt="Edit" />
                                                    </label>
                                                    <input id="file-input" type="file" name="image1" onChange={(e) => {
                                                        const file = e.target.files[0];
                                                        setImagePreview(URL.createObjectURL(file));
                                                        if (file) {
                                                            setFieldValue('image1', file);
                                                        }
                                                    }} />
                                                </div>
                                            </div>

                                        </IonCol>
                                        <IonCol>
                                            < div className='N-profileInput'>
                                                <IonSelect name='tags'
                                                    placeholder='Add Tags'
                                                    className="ion-margin-vertical"
                                                    value={values.tags}
                                                    onIonChange={(e) =>
                                                        setFieldValue('tags', e.target.value)}
                                                >
                                                    {tages?.map?.((item, i) => (
                                                        <IonSelectOption key={i} value={item}>
                                                            {item}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                            </div>
                                            <div className='N-profileInput'>
                                                <IonSelect
                                                    name='category'
                                                    placeholder="Article Category"
                                                    value={values.category}
                                                    onIonChange={(e) => {
                                                        setFieldValue("category", e.detail.value);
                                                       
                                                    }}
                                                >
                                                    {category?.map?.((item, i) => (
                                                        <IonSelectOption key={i} value={item.id}>
                                                            {item.category_name}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>


                                            </div>

                                            <div className='N-profileInput'>
                                                <IonSelect
                                                    placeholder="Article Section"
                                                    name='section'
                                                    value={values.section}
                                                    onIonChange={(e) => {
                                                        setFieldValue("section", e.detail.value);
                                                       
                                                    }}
                                                >
                                                    {section?.map?.((item, i) => (
                                                        <IonSelectOption key={i} value={item.id}>
                                                            {item.article_section}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>

                                            </div>
                                            <div className="flex  ion-padding-top">
                                                <IonButton onClick={()=>handleclear(resetForm)}>CANCEL</IonButton>
                                                <IonButton className='ion-padding-start' type='submit'>SUBMIT</IonButton>

                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </Form>
                        )
                    }}



                </Formik>

            </IonContent>
        </IonPage>
    )
}

export default SubmitArticals


