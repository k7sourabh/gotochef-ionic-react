import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonLabel,
    IonPage,
    IonRow,
    IonSpinner,
    IonText,
    IonTitle,
    useIonToast
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { getApiData, postApiData } from '../../utils/Utils';
import { useHistory } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LifeStyleSetting = () => {
    const [lifestyleHealth, setLifestyleHealth] = useState([]);
    const [lifestyleActivity, setLifestyleActivity] = useState([]);
    const [loading, setLoading] = useState(false);
    const [initialValues, setInitialValues] = useState(
        {
            health: [],
            activity: []
        });
    const history = useHistory();
    const [present] = useIonToast();

    const fetchLifeStyleData = async () => {
        try {
            const response = await getApiData("lifestyle-setting");
            const selectedHealth = response?.data?.lifestyle_health?.filter(item => item.flag === 1).map(item => item.setting_name) || [];
            const selectedActivity = response?.data?.lifestyle_activity?.filter(item => item.flag === 1).map(item => item.setting_name) || [];

            setLifestyleActivity(response?.data?.lifestyle_activity || []);
            setLifestyleHealth(response?.data?.lifestyle_health || []);
            setInitialValues({
                health: selectedHealth,
                activity: selectedActivity
            });
        } catch (err) {
            console.log("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchLifeStyleData();
    },[]);

    const presentToast = (position, message) => {
        present({
            message: message,
            duration: 1500,
            position: position,
        });
    };

    const validationSchema = Yup.object().shape({
        health: Yup.array().min(1, 'Select at least one health option'),
        activity: Yup.array().min(1, 'Select at least one activity')
    });

    const handleSubmit = async (values) => {
         setLoading(true)
        try {
            const response = await postApiData('lifestyle-setting-post', values);
            if (response?.data?.status === 200) {
                presentToast("Top", response?.data?.lifestyle_setting);
                setTimeout(() => {
                    history.push("/profile");
                }, 3000);
            }
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
   
        setLoading(false);
    };

    return (
        <IonPage>
            <IonContent>
                <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                        <i className="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">Life Style Setting</IonTitle>
                </IonHeader>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values }) => (
                        <Form>
                            <IonGrid className='ion-padding-horizontal'>
                                <h3>Health</h3>
                                <IonRow className='d-flex ion-justify-content-center'>
                                    {lifestyleHealth.map((item, i) => (
                                        <IonCol size='6' key={i}>
                                            <div lines='none' className='LifeStyle'>
                                                <Field
                                                    type="checkbox"
                                                    name="health"
                                                    value={item.setting_name}
                                                    id={`CheckHealth${i}`}
                                                />
                                                <label htmlFor={`CheckHealth${i}`}>
                                                    <img src={item.images} alt="Health Setting" className="ProfileImg" />
                                                </label>
                                            </div>
                                        </IonCol>
                                    ))}
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <ErrorMessage name="health" component="div" style={{ color: 'red', textAlign: 'center' }} />
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                            <IonGrid className='ion-padding-horizontal'>
                                <h3>Activity</h3>
                                <IonRow className='d-flex ion-justify-content-center'>
                                    {lifestyleActivity.map((item, i) => (
                                        <IonCol size='6' key={i}>
                                            <div lines='none' className='LifeStyle'>
                                                <Field
                                                    type="checkbox"
                                                    name="activity"
                                                    value={item.setting_name}
                                                    id={`CheckActivity${i}`}
                                                />
                                                <label htmlFor={`CheckActivity${i}`}>
                                                    <img src={item.images} alt="" className="ProfileImg" />
                                                    <IonText className='img-text'>{item.setting_name}</IonText>
                                                </label>
                                            </div>
                                        </IonCol>
                                    ))}
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <ErrorMessage name="activity" component="div" style={{ color: 'red', textAlign: 'center' }} />
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonButton type="submit">Save</IonButton>
                                        {loading && (
                                                    <div className="loading-overlay">
                                                        <IonSpinner name="crescent" />
                                                    </div>
                                                )} 
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

export default LifeStyleSetting;
