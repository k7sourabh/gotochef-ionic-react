import React from 'react'
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonText,
    IonTitle
} from "@ionic/react";


const EarnPoint = () => {
    return (
        <IonPage>
            <IonContent>
            <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
                                <div className="TitleHead">
                                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                                        <i class="material-icons dark">west</i>
                                    </IonButton>
                                    <IonTitle color="dark">How to earn point</IonTitle>
                                </div>
                            </IonHeader>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid className="ion-padding-vertical ion-padding-horizontal">
                    <IonRow className='ion-padding-vertical'>
                        <IonCol className='ion-text-center'>
                            <IonTitle className='ion-no-padding     ion-margin-bottom'>
                                How Do I Earn Points?
                            </IonTitle>
                            <IonText >Every time you contribute to GoToChef, you earn GoToChef points. Here’s a list of what you can contribute, and how much it’s worth.</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding about-name'>Profile</IonTitle>
                            <div className='about-profile ion-padding-vertical'>
                                <IonText>Complete Your Profile</IonText>
                                <p className='ion-no-margin'><span>200</span>Points</p>
                            </div>
                        </IonCol>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding about-name'>Product</IonTitle>
                            <div className='about-profile ion-padding-vertical'>
                                <IonText>Write Review</IonText>
                                <p className='ion-no-margin'><span>100</span>Points</p>
                            </div>
                            <div className='about-profile ion-padding-vertical'>
                                <IonText>First Review</IonText>
                                <p className='ion-no-margin'><span>150</span>Points</p>
                            </div>
                            <div className='about-profile ion-padding-vertical'>
                                <IonText>Share Your Review</IonText>
                                <p className='ion-no-margin'><span>25</span>Points</p>
                            </div>
                            <div className='about-profile ion-padding-vertical'>
                                <IonText>Like Reviews</IonText>
                                <p className='ion-no-margin'><span>10</span>Points</p>
                            </div>
                        </IonCol>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding about-name'> Recipe</IonTitle>
                            <div className='about-profile ion-padding-vertical'>
                                <IonText>Submit Recipe</IonText>
                                <p className='ion-no-margin'><span>100</span>Points</p>
                            </div>
                            <div className='about-profile ion-padding-vertical'>
                                <IonText>Cooked It</IonText>
                                <p className='ion-no-margin'><span>25</span>Points</p>
                            </div>
                            <div className='about-profile ion-padding-vertical'>
                                <IonText>Mark Favorite</IonText>
                                <p className='ion-no-margin'><span>10</span>Points</p>
                            </div>
                        </IonCol>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding about-name'> MySmartKitchenTM</IonTitle>
                            <div className='about-profile     ion-padding-vertical'>
                                <IonText>MySmartKitchenTM Product or Ingredient</IonText>
                                <p className='ion-no-margin'><span>10</span>Points</p>
                            </div>
                        </IonCol>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding about-name'> Articles</IonTitle>
                            <div className='about-profile     ion-padding-vertical'>
                                <IonText>Submit an Articles</IonText>
                                <p className='ion-no-margin'><span>200</span>Points</p>
                            </div>
                        </IonCol>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding about-name'> Ingredients</IonTitle>
                            <div className='about-profile     ion-padding-vertical'>
                                <IonText>Any Ingredient Action</IonText>
                                <p className='ion-no-margin'><span>10</span>Points</p>
                            </div>
                        </IonCol>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding about-name'> Follow</IonTitle>
                            <div className='about-profile     ion-padding-vertical'>
                                <IonText>User</IonText>
                                <p className='ion-no-margin'><span>10</span>Points</p>
                            </div>
                            <div className='about-profile     ion-padding-vertical'>
                                <IonText>Brand</IonText>
                                <p className='ion-no-margin'><span>10</span>Points</p>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default EarnPoint