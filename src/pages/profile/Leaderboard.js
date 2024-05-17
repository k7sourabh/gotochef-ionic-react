import React from 'react'
import {
    IonSegment,
    IonSegmentButton,
    IonCol,
    IonGrid,
    IonPage,
    IonContent,
    IonRow,
    IonText,
    IonLabel,
    IonButton,
    IonHeader,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonIcon,
    IonChip,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { add, closeCircle, lockClosed, lockClosedOutline, refreshOutline, remove, removeCircleOutline, star } from "ionicons/icons";

const Leaderboard = () => {
    const [selectedTabladder, setSelectedTabladder] = useState("achievements");
    const handleTabChangeladder = (event) => {
        setSelectedTabladder(event.detail.value);
    };
    return (
        <>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol size="12">
                        <IonSegment
                            value={selectedTabladder}
                            onIonChange={handleTabChangeladder}
                            className="personalTab"
                        >
                            <IonSegmentButton value="achievements">
                                <IonLabel> Achievements & Badges</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="earnpoints">
                                <IonLabel> How to earn points</IonLabel>
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
                            <IonGrid className="ion-padding-vertical">
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
                        )}

                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default Leaderboard