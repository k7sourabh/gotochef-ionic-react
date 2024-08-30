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
import { useState } from "react";
import {  lockClosedOutline} from "ionicons/icons";
import EarnPoint from './EarnPoint';
import Ranking from './Ranking';

const Leaderboard = () => {
    const [selectedTabladder, setSelectedTabladder] = useState("achievements");
    const handleTabChangeladder = (event) => {
        setSelectedTabladder(event.detail.value);
    };
   
    return (
        <>
            <IonGrid >
                <IonRow>
                    <IonCol>
                        <IonTitle className='ion-no-padding ion-margin-top'>LEADERBOARD</IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="12">
                        <IonSegment
                            value={selectedTabladder}
                            onIonChange={handleTabChangeladder}
                            className="personalTab"
                        >
                            <IonSegmentButton value="achievements">
                                <IonLabel> Achieve & Badges</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="earnpoints">
                                <IonLabel> How to earn points</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="ranking">
                                <IonLabel> Ranking</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>


                        {selectedTabladder === "achievements" && (
                            <IonGrid class="ion-no-padding">
                                <IonRow className='ion-padding-vertical'>
                                    <IonCol>
                                        <IonTitle className='ion-no-padding'>
                                            BADGE COLLECTION
                                        </IonTitle>
                                    </IonCol>
                                </IonRow>
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
                        )}
                        {selectedTabladder === "earnpoints" && (
                        <EarnPoint />
                        )}
                        {selectedTabladder === "ranking" && (
                        <Ranking />
                        )}

                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default Leaderboard