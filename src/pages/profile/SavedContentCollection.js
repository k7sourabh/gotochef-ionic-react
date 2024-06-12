import React, { useEffect } from 'react';
import {
    IonCol,
    IonGrid,
    IonRow,
    IonText,
    IonButton,
    IonTitle,
    IonCard,
    IonCardContent,
    IonIcon,
    IonPage,
    IonContent,
    IonHeader,
    useIonToast,
    IonSpinner,
} from "@ionic/react";
import { useState } from "react";
import { close } from "ionicons/icons";
import { getApiData, postApiData } from "../../utils/Utils";


const SavedContentCollection = () => {
    const [present] = useIonToast();
    const [loader, setLoader] = useState(false);
    const [collectionsData, setCollectionsData] = useState([]);
    
    const fetchCollection = async () => {
        setLoader(true)
        try {
            const response = await getApiData("my-collections");
            if (response?.data?.status === 200) {
                setCollectionsData(response?.data?.my_collections)
            }
        } catch (err) {
            console.log(err)
        }
        setLoader(false)
    }

    useEffect(() => {
        fetchCollection();
    }, [])

    const handleRemove = async (id) => {
        setLoader(true)
        try {
            const response = await getApiData(`/delete-collection/${id}`)
            console.log("response", response)
            presentToast("Top", response?.data?.message_response);
        } catch (err) {
            console.log(err)
        }
        setLoader(false)
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
                <IonGrid>
                    <IonRow className='ion-padding-vertical'>
                        <IonCol size='12'>
                            <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
                                <div className="TitleHead">
                                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                                        <i class="material-icons dark">west</i>
                                    </IonButton>
                                    <IonTitle color="dark">Saved Collection</IonTitle>
                                </div>
                            </IonHeader>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    {
                        collectionsData && collectionsData.length > 0 ? (
                            <React.Fragment>
                                <IonRow className='ion-padding-vertical'>
                                    <IonCol size='12'>
                                        <IonTitle className='ion-no-padding'>
                                            Collection
                                        </IonTitle>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    {collectionsData.map((collection, index) => (
                                        <IonCol size="6" key={index}>
                                            <IonCard className="ProductCard">
                                                <img
                                                    src={collection.listing_image}
                                                    alt="category cover"
                                                    className="MainProductThumb"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "/assets/img/img-placeholder.jpg";
                                                    }}
                                                />
                                                <IonCardContent className="ion-no-padding ion-margin-top">
                                                    <IonText className="ProductTitle">
                                                        {collection.collection_title}
                                                    </IonText>
                                                    <IonButton
                                                        className="AddToCartBtn"
                                                        size="default"
                                                        shape="round"
                                                        fill="outline">
                                                        <div className="addText" onClick={() => handleRemove(collection.id)}>Remove
                                                            <IonIcon slot="end" size="small" icon={close} />
                                                        </div>
                                                    </IonButton>
                                                    {loader && (
                                                        <div className="loader-container">
                                                            <IonSpinner name="crescent" />
                                                        </div>
                                                    )}
                                                </IonCardContent>
                                            </IonCard>
                                        </IonCol>
                                    ))}
                                </IonRow>
                            </React.Fragment>
                        ) : (
                            <IonGrid className="ion-padding-vertical ion-padding-horizontal">
                                <IonRow>
                                    <IonCol>
                                        <div className="NoSubmitBtn">
                                            <IonButton fill="clear">
                                                No Saved Collection
                                            </IonButton>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        )
                    }
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default SavedContentCollection