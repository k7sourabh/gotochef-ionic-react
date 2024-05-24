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
} from '@ionic/react';

import { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import { getApiData, postApiData } from '../../utils/Utils';

const EditArticles = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState([]);
    const [section, setSection] = useState([]);
    const history = useHistory();
    const { id } = useParams();

    const [formValues, setFormValues] = useState({
        title: '',
        introText: '',
        articleContent: '',
        highlights: '',
        image1: '',
        tags: '',
        category: '',
        section: ''
    });
    console.log("formValues",formValues)

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        introText: Yup.string().required('Intro Text is required'),
        articleContent: Yup.string().required('Article Content is required'),
        highlights: Yup.string(),
        tags: Yup.string(),
        category: Yup.string().required('Article Category is required'),
        section: Yup.string().required('Article Section is required')
    });

    const fetchArticleData = async () => {
        try {
            const response = await getApiData(`submit-article-edit/${id}`);
            if (response?.data?.data) {
                const data = response.data.data;
                setFormValues({
                    title: data.article_name || '',
                    introText: data.intro_text || '',
                    articleContent: data.article_description || '',
                    highlights: data.highlights || '',
                    image1: data.images || '',
                    tags: data.tags || '',
                    category: data.article_category || '',
                    section: data.article_section || ''
                });
            }
        } catch (err) {
            console.log(err);
            // Handle error here
        }
    };

    useEffect(() => {
        fetchArticleData();
    }, []);

    const handleSubmit = async (values) => {
        console.log("values", values);
        // Add the API call logic to submit the form data here.
    };

    const handleClear = () => {
        history.push("/articles");
    };

    return (
        <IonPage>
            <IonContent>
                <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                        <i className="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">Edit Articles</IonTitle>
                </IonHeader>
                {formValues && (
                    <Formik
                        initialValues={formValues}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handleSubmit(values);
                        }}
                    >
                        {({ values, setFieldValue }) => (
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
                                                    onIonChange={(e) => setFieldValue('title', e.target.value)}
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
                                                    onIonChange={(e) => setFieldValue("introText", e.target.value)}
                                                />
                                                <IonTextarea
                                                    name='articleContent'
                                                    value={values.articleContent}
                                                    placeholder="Type something here"
                                                    onIonChange={(e) => setFieldValue("articleContent", e.target.value)}
                                                />
                                                <IonInput
                                                    className="ion-margin-vertical"
                                                    name="highlights"
                                                    type="text"
                                                    placeholder="Add Highlights"
                                                    value={values.highlights}
                                                    onIonChange={(e) => setFieldValue("highlights", e.detail.value)}
                                                />
                                            </div>
                                        </IonCol>
                                        <IonCol size="12" className="flex flex-column ion-align-items-center ion-justify-content-center">
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
                                            <div className='N-profileInput'>
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
                                            </div>
                                            <div className='N-profileInput'>
                                                <IonSelect
                                                    name='category'
                                                    placeholder="Article Category"
                                                    value={values.category}
                                                    onIonChange={(e) => setFieldValue("category", e.detail.value)}
                                                >
                                                    {category.map((item, i) => (
                                                        <IonSelectOption key={i} value={item.id}>
                                                            {item.category_name}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                            </div>
                                            <div className='N-profileInput'>
                                                <IonSelect
                                                    name='section'
                                                    placeholder="Article Section"
                                                    value={values.section}
                                                    onIonChange={(e) => setFieldValue("section", e.detail.value)}
                                                >
                                                    {section.map((item, i) => (
                                                        <IonSelectOption key={i} value={item.id}>
                                                            {item.article_section}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                            </div>
                                            <div className="flex ion-padding-top">
                                                <IonButton onClick={() => handleClear()}>CANCEL</IonButton>
                                                <IonButton className='ion-padding-start' type='submit'>SUBMIT</IonButton>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </Form>
                        )}
                    </Formik>
                )}
            </IonContent>
        </IonPage>
    );
};

export default EditArticles;
