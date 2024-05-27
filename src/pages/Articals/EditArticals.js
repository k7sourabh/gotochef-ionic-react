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
    IonTitle,
    useIonToast
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
    const [categories, setCategories] = useState([]);
    const [sections, setSections] = useState([]);
    const history = useHistory();
    const { id } = useParams();
    const [present] = useIonToast();

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

    const [selectedSection, setSelectedSection] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        introText: Yup.string().required('Intro Text is required'),
        articleContent: Yup.string().required('Article Content is required'),
        highlights: Yup.string().required('Highlights are required'),
        tags: Yup.string().min(1, 'At least one tag is required').required('Tags are required'),
        category: Yup.string().required('Article Category is required'),
        section: Yup.string().required('Article Section is required'),
        image1: Yup.mixed().required('Image is required')
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
                    tags: data.tags.replace(/"/g, '') || '',
                    category: data.article_category || '',
                    section: data.article_section || ''
                });
                setImagePreview(data.images || null);
                setSelectedCategory(data.article_category || '');
                setSelectedSection(data.article_section || '');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const fetchArticleMetaData = async () => {
        try {
            const response = await getApiData('submit-article-get');
            setTags(response?.data?.data?.tags || []);
            setCategories(response?.data?.data?.article_category || []);
            setSections(response?.data?.data?.article_section || []);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchArticleMetaData();
        fetchArticleData();
    }, [id]);

    useEffect(() => {
        if (sections.length > 0) {
            const section = sections.find(item => item.id == formValues.section);
            if (section) setSelectedSection(section.id);
        }
    }, [sections, formValues.section]);

    useEffect(() => {
        if (categories.length > 0) {
            const category = categories.find(item => item.id == formValues.category);
            if (category) setSelectedCategory(category.id);
        }
    }, [categories, formValues.category]);

    const handleSubmit = async (values) => {
        try {
            const formData = new FormData();
            formData.append("articleName", values.title);
            formData.append("shortDescription", values.introText);
            formData.append("longDescription", values.articleContent);
            formData.append("highlights", values.highlights);
            formData.append("tags", values.tags);
            formData.append("article_category", values.category);
            formData.append("article_section", values.section);
            formData.append("mobileImages", values.image1);
            formData.append("article_id", id);

            const response = await postApiData("update-article", formData);

            presentToast("Top", response?.data?.message_response);
            setTimeout(() => {
                history.push("/articles");
            }, 2000);

        } catch (err) {
            console.log(err);
        }
    };

    const handleClear = () => {
        history.push("/articles");
    };

    const presentToast = (position, message) => {
        present({
            message: message,
            duration: 1500,
            position: position,
        });
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
                        onSubmit={handleSubmit}
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
                                                    style={{ color: "red" }}
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
                                                <ErrorMessage
                                                    name="introText"
                                                    component="div"
                                                    style={{ color: "red" }}
                                                    className="error-message error-text"
                                                />
                                                <IonTextarea
                                                    name='articleContent'
                                                    value={values.articleContent}
                                                    placeholder="Type something here"
                                                    onIonChange={(e) => setFieldValue("articleContent", e.target.value)}
                                                />
                                                <ErrorMessage
                                                    name="articleContent"
                                                    component="div"
                                                    style={{ color: "red" }}
                                                    className="error-message error-text"
                                                />
                                                <IonInput
                                                    className="ion-margin-vertical"
                                                    name="highlights"
                                                    type="text"
                                                    placeholder="Add Highlights"
                                                    value={values.highlights}
                                                    onIonChange={(e) => setFieldValue("highlights", e.target.value)}
                                                />
                                                <ErrorMessage
                                                    name="highlights"
                                                    component="div"
                                                    style={{ color: "red" }}
                                                    className="error-message error-text"
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
                                                <ErrorMessage
                                                    name="image1"
                                                    component="div"
                                                    style={{ color: "red" }}
                                                    className="error-message error-text"
                                                />
                                            </div>
                                        </IonCol>
                                        <IonCol>
                                            <div className='N-profileInput'>
                                                <IonSelect
                                                    name='tags'
                                                    placeholder='Add Tags'
                                                    className="ion-margin-vertical"
                                                    value={values.tags}
                                                    onIonChange={(e) => setFieldValue('tags', e.detail.value)}
                                                >
                                                    {tags.map((item, i) => (
                                                        <IonSelectOption key={i} value={item}>
                                                            {item}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                                <ErrorMessage
                                                    name="tags"
                                                    component="div"
                                                    style={{ color: "red" }}
                                                    className="error-message error-text"
                                                />
                                            </div>
                                            <div className='N-profileInput'>
                                                <IonSelect
                                                    name='category'
                                                    placeholder="Article Category"
                                                    value={selectedCategory}
                                                    onIonChange={(e) => {
                                                        const selectedCategoryId = e.detail.value;
                                                        setSelectedCategory(selectedCategoryId);
                                                        setFieldValue('category', selectedCategoryId);
                                                    }}
                                                >
                                                    {categories.map((item, i) => (
                                                        <IonSelectOption key={i} value={item.id}>
                                                            {item.category_name}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                                <ErrorMessage
                                                    name="category"
                                                    component="div"
                                                    style={{ color: "red" }}
                                                    className="error-message error-text"
                                                />
                                            </div>
                                            <div className='N-profileInput'>
                                                <IonSelect
                                                    name='section'
                                                    placeholder="Article Section"
                                                    value={selectedSection}
                                                    onIonChange={(e) => {
                                                        const selectedSectionId = e.detail.value;
                                                        setSelectedSection(selectedSectionId);
                                                        setFieldValue('section', selectedSectionId);
                                                    }}
                                                >
                                                    {sections.map((item, i) => (
                                                        <IonSelectOption key={i} value={item.id}>
                                                            {item.article_section}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                                <ErrorMessage
                                                    name="section"
                                                    component="div"
                                                    style={{ color: "red" }}
                                                    className="error-message error-text"
                                                />
                                            </div>
                                            <div className="flex ion-padding-top">
                                                <IonButton onClick={handleClear}>CANCEL</IonButton>
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
