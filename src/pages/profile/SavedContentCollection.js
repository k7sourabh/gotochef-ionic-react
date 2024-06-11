import React from 'react';
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
} from "@ionic/react";
import { useState } from "react";
import { close } from "ionicons/icons";

const SavedContentCollection = () => {
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
                <IonRow className='ion-padding-vertical'>
                    <IonCol size='12'>
                        <IonTitle className='ion-no-padding'>
                            Collection
                        </IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                        <IonCard className="ProductCard">
                            <img
                                src="/assets/img/sandwich.png"
                                alt="category cover"
                                className="MainProductThumb"
                            />
                            <IonCardContent className="ion-no-padding ion-margin-top">
                                <IonText className="ProductTitle">
                                    Kesar Badam Flavour
                                </IonText>
                                <IonButton
                                    className="AddToCartBtn"
                                    size="default"
                                    shape="round"
                                    fill="outline">
                                    <div className="addText">Remove
                                        <IonIcon slot="end" size="small" icon={close} />
                                    </div>
                                </IonButton>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size="6">
                        <IonCard className="ProductCard">
                            <img
                                src="/assets/img/1525870462-Listing.jpg"
                                alt="category cover"
                                className="MainProductThumb"
                            />
                            <IonCardContent className="ion-no-padding ion-margin-top">
                                <IonText className="ProductTitle">
                                    Kesar Badam Flavour
                                </IonText>
                                <IonButton
                                    className="AddToCartBtn"
                                    size="default"
                                    shape="round"
                                    fill="outline">
                                    <div className="addText">Remove
                                        <IonIcon slot="end" size="small" icon={close} />
                                    </div>
                                </IonButton>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
  )
}

export default SavedContentCollection