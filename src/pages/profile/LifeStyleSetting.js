import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonLabel,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    useIonToast
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { getApiData, postApiData } from '../../utils/Utils';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';

const LifeStyleSetting = () => {

    const [lifestyleHealth, setLifestyleHealth] = useState([]);
    const [lifestyleActivity, setLifestyleActivity] = useState([]);
    const history=useHistory()
    const [present] = useIonToast();

    const initialValues = {
        health: [],
        activity: []
    };


    const fetchLifeStyleData = async () => {
        try {
            const response = await getApiData("lifestyle-setting");
            setLifestyleActivity(response?.data?.lifestyle_activity || []);
            setLifestyleHealth(response?.data?.lifestyle_health || []);
        } catch (err) {
            console.log("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchLifeStyleData();
    }, []);

   

    const handleSubmit = async (values, { resetForm }) => {
        // console.log("values",values)
        try {
            const formData = new FormData();
            formData.append('health', JSON.stringify(values.health));
            formData.append('activity', JSON.stringify(values.activity));

            const response = await postApiData('lifestyle-setting-post', formData);
            // console.log("response", response);
            if(response?.data?.status===200){
                presentToast("Top", response?.data?.lifestyle_setting);
                setTimeout(()=>{
                    history.push("/profile")
                },3000)
               
            }
            resetForm();

        } catch (err) {
            console.log(err);
        }
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
            {/* <Header /> */}
            <IonContent>
                <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                        <i className="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">Life Style Setting</IonTitle>
                </IonHeader>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <IonGrid className='ion-padding-horizontal'>
                                <h3>Health</h3>
                                <IonRow className='d-flex ion-justify-content-center'>
                                    {lifestyleHealth?.map((item, i) => (
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
                                                    {/* <IonText>{item.setting_name}</IonText> */}
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
                                    {lifestyleActivity?.map((item, i) => (
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
                                        <IonButton type="submit"disabled={isSubmitting} >Save</IonButton>
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
export default LifeStyleSetting
