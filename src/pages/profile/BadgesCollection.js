import { IonButton, IonContent, IonHeader, IonPage } from '@ionic/react'
import React from 'react'
import {
    IonSegment,
    IonSegmentButton,
    IonCol,
    IonGrid,
    IonRow,
    IonText,
    IonLabel,
    IonTitle,
    IonIcon
} from "@ionic/react";
import { lockClosedOutline } from 'ionicons/icons';

const BadgesCollection = () => {
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
                                    <IonTitle color="dark">Archivement and Badges</IonTitle>
                                </div>
                            </IonHeader>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>

                    <IonRow className='ion-padding-vertical'>
                        <IonCol size='6'>
                            <div className="review-award">
                                <img src="./assets/img/reviewRecipe.png" alt="award" />
                                <h4 className='ion-no-margin'>1 Review</h4>
                                <div className="line"></div>
                                <IonText>Review</IonText>
                            </div>
                        </IonCol>
                        <IonCol size='6'>
                            <div className="review-award">
                                <img src="./assets/img/reviewRecipe.png" alt="award" />
                                <h4 className='ion-no-margin'>1 Review</h4>
                                <div className="line"></div>
                                <IonText>Review</IonText>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-padding-vertical'>
                        <IonCol size='6'>
                            <div className="review-award">
                                <IonIcon
                                    color="primary"
                                    size="small"
                                    className='review-lock'
                                    icon={lockClosedOutline} />
                                <img src="./assets/img/helpful_review.png" alt="award" className='review-help' />
                                <h4 className='ion-no-margin'>1 Review</h4>
                                <div className="line"></div>
                                <IonText>Review</IonText>
                            </div>
                        </IonCol>
                        <IonCol size='6'>
                            <div className="review-award">
                                <IonIcon
                                    color="primary"
                                    size="small"
                                    className='review-lock'
                                    icon={lockClosedOutline} />
                                <img src="./assets/img/helpful_review.png" alt="award" className='review-help' />
                                <h4 className='ion-no-margin'>1 Review</h4>
                                <div className="line"></div>
                                <IonText>Review</IonText>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default BadgesCollection