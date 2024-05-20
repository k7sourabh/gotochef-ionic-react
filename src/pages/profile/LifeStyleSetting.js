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
import { useHistory } from 'react-router';

const LifeStyleSetting = () => {
    const [lifestyleHealth, setLifestyleHealth] = useState([]);
    const [lifestyleActivity, setLifestyleActivity] = useState([]);
    const [selectedHealth, setSelectedHealth] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState([]);
    const history = useHistory();
    const [present] = useIonToast();

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

    const handleHealthChange = (event) => {
        const { value, checked } = event.target;
        setSelectedHealth((prevSelected) =>
            checked ? [...prevSelected, value] : prevSelected.filter((item) => item !== value)
        );
    };

    const handleActivityChange = (event) => {
        const { value, checked } = event.target;
        setSelectedActivity((prevSelected) =>
            checked ? [...prevSelected, value] : prevSelected.filter((item) => item !== value)
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('health', JSON.stringify(selectedHealth));
            formData.append('activity', JSON.stringify(selectedActivity));

            const response = await postApiData('lifestyle-setting-post', formData);
            if (response?.data?.status === 200) {
                presentToast("Top", response?.data?.lifestyle_setting);
                setSelectedHealth([]);  // Reset selected health
                setSelectedActivity([]);  // Reset selected activity
                setTimeout(() => {
                    history.push("/profile");
                }, 3000);
            }
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
            <IonContent>
                <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                        <i className="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">Life Style Setting</IonTitle>
                </IonHeader>
                <form onSubmit={handleSubmit}>
                    <IonGrid className='ion-padding-horizontal'>
                        <h3>Health</h3>
                        <IonRow className='d-flex ion-justify-content-center'>
                            {lifestyleHealth.map((item, i) => (
                                <IonCol size='6' key={i}>
                                    <div lines='none' className='LifeStyle'>
                                        <input
                                            type="checkbox"
                                            name="health"
                                            value={item.setting_name}
                                            id={`CheckHealth${i}`}
                                            onChange={handleHealthChange}
                                            checked={selectedHealth.includes(item.setting_name)}
                                        />
                                        <label htmlFor={`CheckHealth${i}`}>
                                            <img src={item.images} alt="Health Setting" className="ProfileImg" />
                                        </label>
                                    </div>
                                </IonCol>
                            ))}
                        </IonRow>
                    </IonGrid>
                    <IonGrid className='ion-padding-horizontal'>
                        <h3>Activity</h3>
                        <IonRow className='d-flex ion-justify-content-center'>
                            {lifestyleActivity.map((item, i) => (
                                <IonCol size='6' key={i}>
                                    <div lines='none' className='LifeStyle'>
                                        <input
                                            type="checkbox"
                                            name="activity"
                                            value={item.setting_name}
                                            id={`CheckActivity${i}`}
                                            onChange={handleActivityChange}
                                            checked={selectedActivity.includes(item.setting_name)}
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
                                <IonButton type="submit">Save</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default LifeStyleSetting;
