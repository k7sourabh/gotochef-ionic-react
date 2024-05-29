import {
    IonButton,
    IonCol,
    IonContent,
    IonHeader,
    IonInput,
    IonPage,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonGrid,
    useIonToast,
    useIonViewWillEnter
} from '@ionic/react';

import Header from '../../components/Header';
import { getApiData, postApiData } from '../../utils/Utils';
import { useEffect, useRef, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SubmitArticles = () => {
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [sections, setSections] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const history = useHistory();
    const [present] = useIonToast();
    const fileInputRef = useRef(null);

    const initialValues = {
        title: '',
        introText: '',
        articleContent: '',
        highlights: '',
        image1: null,
        tags: '',
        category: '',
        section: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        introText: Yup.string().required('Intro Text is required'),
        articleContent: Yup.string().required('Article Content is required'),
        highlights: Yup.string().required('Highlights Content is required'),
        image1: Yup.mixed().required('Image is required'),
        tags: Yup.string().required('Tags are required'),
        category: Yup.string().required('Article Category is required'),
        section: Yup.string().required('Article Section is required')
    });

    const fetchArticleData = async () => {
        setImagePreview(null);
        try {
            const response = await getApiData('submit-article-get');
            setTags(response?.data?.data?.tags || []);
            setCategories(response?.data?.data?.article_category || []);
            setSections(response?.data?.data?.article_section || []);
        } catch (err) {
            console.error(err);
        }
    };

    useIonViewWillEnter(() => {
        fetchArticleData();
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const formData = new FormData();
            formData.append("article_name", values.title);
            formData.append("intro_text", values.introText);
            formData.append("article_description", values.articleContent);
            formData.append("highlights", values.highlights);
            formData.append("images", values.image1);
            formData.append("tags", values.tags);
            formData.append("article_category", values.category);
            formData.append("article_section", values.section);

            const response = await postApiData('submit-article-post', formData);
            // console.log(response)
            if (response?.data?.status === 200) {
                presentToast("Top", response?.data?.message_response)

                resetForm();
                setImagePreview(null);
                setTimeout(() => {
                    history.push("/articles");
                }, 3000);
            }
        } catch (response) {
            presentToast("Top", response?.data?.message_response)
        }
    };

    const handleClear = (resetForm) => {
        resetForm();
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const presentToast = (position, message) => {
        present({
            message: message,
            duration: 1500,
            position: position,
        });
    };

    

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    useEffect(() => {
       
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);

    return (
        <IonPage>
            <IonContent>
                <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/articles">
                        <i className="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">Submit Articles</IonTitle>
                </IonHeader>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        handleSubmit(values, { resetForm });
                    }}
                >
                    {({ isSubmitting, setFieldValue, values, resetForm }) => (
                        <Form>
                            <IonGrid className='ion-padding-horizontal'>
                                <IonRow>
                                    <IonCol>
                                        <div className="N-profileInput">
                                            <label>Title</label>
                                            <IonInput
                                                className="ion-margin-vertical"
                                                name="title"
                                                type="text"
                                                placeholder="Title Name"
                                                value={values.title}
                                                onIonChange={(e) => setFieldValue('title', e.target.value)}
                                            />
                                            <ErrorMessage name="title" component="div" className="error-message error-text" />
                                            <label>Intro Text</label>
                                            <IonInput
                                                className="ion-margin-vertical"
                                                name="introText"
                                                type="text"
                                                placeholder="Intro Text"
                                                value={values.introText}
                                                onIonChange={(e) => setFieldValue("introText", e.target.value)}
                                            />
                                            <ErrorMessage name="introText" component="div" className="error-message error-text" />
                                            <label>Article Content</label>
                                            <IonTextarea
                                                name='articleContent'
                                                value={values.articleContent}
                                                placeholder="Type something here"
                                                onIonChange={(e) => setFieldValue("articleContent", e.target.value)}
                                            />
                                            <ErrorMessage name="articleContent" component="div" className="error-message error-text" />
                                            <label>Highlights</label>
                                            <IonInput
                                                className="ion-margin-vertical"
                                                name="highlights"
                                                type="text"
                                                placeholder="Add Highlights"
                                                value={values.highlights}
                                                onIonChange={(e) => setFieldValue("highlights", e.target.value)}
                                            />
                                            <ErrorMessage name="highlights" component="div" className="error-message error-text" />
                                        </div>
                                    </IonCol>

                                    <IonCol size="12" className="flex flex-column ion-align-items-center ion-justify-content-center">
                                        <div className="EditprofileImg N-ProfileEdit">
                                            {imagePreview ? (
                                                <img src={imagePreview} alt="Selected" className="ProfileImg" />
                                            ) : (
                                                <img src="./assets/img/img-person.jpg" alt="Placeholder" className="ProfileImg" />
                                            )}
                                            <div className="image-upload" onClick={handleImageClick}>
                                                <label  className="N-EditProfile">
                                                    <img src="./assets/img/edit.png" alt="Edit" />
                                                </label>
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    name="image1"
                                                    style={{ display: 'none' }}
                                                    onClick={(event) => { event.target.value = null }}
                                                    onChange={(e) => {
                                                        const file = e.target.files[0];
                                                        if (file) {
                                                            const objectUrl = URL.createObjectURL(file);
                                                            setImagePreview(objectUrl);
                                                            setFieldValue('image1', file);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <ErrorMessage name="image1" component="div" className="error-message error-text" />
                                        </div>
                                    </IonCol>

                                    <IonCol>
                                        <div className='N-profileInput'>
                                            <label>Tags</label>
                                            <IonSelect
                                                name='tags'
                                                placeholder='Add Tags'
                                                className="ion-margin-vertical"
                                                value={values.tags}
                                                onIonChange={(e) => setFieldValue('tags', e.target.value)}
                                            >
                                                {tags.map((item, i) => (
                                                    <IonSelectOption key={i} value={item}>
                                                        {item}
                                                    </IonSelectOption>
                                                ))}
                                            </IonSelect>
                                            <ErrorMessage name="tags" component="div" className="error-message error-text" />
                                        </div>
                                        <label>Article Category</label>
                                        <div className='N-profileInput'>
                                            <IonSelect
                                                name='category'
                                                placeholder="Article Category"
                                                value={values.category}
                                                onIonChange={(e) => setFieldValue("category", e.target.value)}
                                            >
                                                {categories.map((item, i) => (
                                                    <IonSelectOption key={i} value={item.id}>
                                                        {item.category_name}
                                                    </IonSelectOption>
                                                ))}
                                            </IonSelect>
                                            <ErrorMessage name="category" component="div" className="error-message error-text" />
                                        </div>
                                        <label>Article Section</label>
                                        <div className='N-profileInput'>
                                            <IonSelect
                                                placeholder="Article Section"
                                                name='section'
                                                value={values.section}
                                                onIonChange={(e) => setFieldValue("section", e.target.value)}
                                            >
                                                {sections.map((item, i) => (
                                                    <IonSelectOption key={i} value={item.id}>
                                                        {item.article_section}
                                                    </IonSelectOption>
                                                ))}
                                            </IonSelect>
                                            <ErrorMessage name="section" component="div" className="error-message error-text" />
                                        </div>

                                        <div className="flex ion-padding-top">
                                            <IonButton onClick={() => handleClear(resetForm)}>CANCEL</IonButton>
                                            <IonButton className='ion-padding-start' type='submit'>SUBMIT</IonButton>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </Form>
                    )}
                </Formik>
            </IonContent>
        </IonPage>
    );
};

export default SubmitArticles;
