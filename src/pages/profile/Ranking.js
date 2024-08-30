import React, { useState } from 'react'
import {
    IonSegment,
    IonSegmentButton,
    IonCol,
    IonGrid,
    IonRow,
    IonText,
    IonLabel,
    IonTitle,
    IonList,
    IonItem,
    IonButton,
    IonImg,
    IonPage,
    IonContent,
    IonHeader,
} from "@ionic/react";
const Ranking = () => {
    const [FriendTab, setSelectedTabFriend] = useState("friends");
    const handleTabChangeFriend = (event) => {
        setSelectedTabFriend(event.detail.value);
    };
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
                                    <IonTitle color="dark">Ranking</IonTitle>
                                </div>
                            </IonHeader>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid className="ion-padding-vertical ion-padding-horizontal">
                    <IonRow>
                        <IonCol>
                            <div>
                                <IonTitle className='ion-no-padding'>Current GotoChef level</IonTitle>
                                <h2 className='ion-no-margin ion-padding-vertical TextDanger'>Explorer</h2>
                                <IonText>Your magical journey to explore food begins here.</IonText>
                            </div>

                            <IonList lines='none'>
                                <IonItem className='ion-no-padding'>
                                    <IonTitle className='ion-no-padding'>Your Reviews </IonTitle>
                                    <h2 className='ion-no-margin'>1</h2>
                                </IonItem>
                                <IonItem className='ion-no-padding'>
                                    <IonTitle className='ion-no-padding'>Your Reviews </IonTitle>
                                    <h2 className='ion-no-margin'>1</h2>
                                </IonItem>
                                <IonItem className='ion-no-padding'>
                                    <IonTitle className='ion-no-padding'>Your Submit Reviews </IonTitle>
                                    <h2 className='ion-no-margin'>1</h2>
                                </IonItem>
                                <IonItem className='ion-no-padding'>
                                    <IonTitle className='ion-no-padding'>Your Followers</IonTitle>
                                    <h2 className='ion-no-margin'>0</h2>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText>
                                Next Level
                            </IonText>
                            <div>
                                <h2 className='TextDanger'>PASSIONATE</h2>
                                <p>Now that you have discovered your passion enjoy the ride ahead</p>
                                <p className='ion-no-margin'>You need 1001 points to unlock your next level</p>
                                <div className='click-here'>
                                    <p className='ion-no-margin'>How to earn points?</p>
                                    <IonButton fill='clear'>Click here to know</IonButton>
                                </div>
                            </div>

                            <IonSegment
                                value={FriendTab}
                                onIonChange={handleTabChangeFriend}
                                className="personalTab"
                            >
                                <IonSegmentButton value="friends">
                                    <IonLabel> Friends</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="city">
                                    <IonLabel> City</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="india">
                                    <IonLabel> INDIA</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>

                            {FriendTab === "friends" && (
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="12" className='ion-padding-top'>
                                            <div className="ListBlock">
                                                <div className="IconHome">
                                                    <img src="./assets/img/1525870462-Listing.jpg" alt="award" className='list-recipe' />
                                                </div>
                                                <div className='list-box'>
                                                    <div className="list-review">
                                                        <IonTitle color="dark" className="ion-no-padding">
                                                            Exclusive Product Stores
                                                        </IonTitle>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Reviews
                                                        </IonText>
                                                        <IonText className='review-count'>1</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Follower
                                                        </IonText>
                                                        <IonText className='review-count'>2</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            MySmartKitchen
                                                        </IonText>
                                                        <IonText className='review-count'>0</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Submit recipe
                                                        </IonText>
                                                        <IonText className='review-count'>3</IonText>
                                                    </div>
                                                </div>
                                            </div>
                                        </IonCol>
                                        <IonCol size="12" className='ion-padding-top'>
                                            <div className="ListBlock">
                                                <div className="IconHome">
                                                    <img src="./assets/img/sandwich.png" alt="award" className='list-recipe' />
                                                </div>
                                                <div className='list-box'>
                                                    <div className="list-review">
                                                        <IonTitle color="dark" className="ion-no-padding">
                                                            Exclusive Product Stores
                                                        </IonTitle>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Reviews
                                                        </IonText>
                                                        <IonText className='review-count'>1</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Follower
                                                        </IonText>
                                                        <IonText className='review-count'>2</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            MySmartKitchen
                                                        </IonText>
                                                        <IonText className='review-count'>0</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Submit recipe
                                                        </IonText>
                                                        <IonText className='review-count'>3</IonText>
                                                    </div>
                                                </div>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            )}
                            {FriendTab === "city" && (
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="12" className='ion-padding-top'>
                                            <div className="ListBlock">
                                                <div className="IconHome">
                                                    <img src="./assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg" alt="award" className='list-recipe' />
                                                </div>
                                                <div className='list-box'>
                                                    <div className="list-review">
                                                        <IonTitle color="dark" className="ion-no-padding">
                                                            Exclusive Product Stores
                                                        </IonTitle>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Reviews
                                                        </IonText>
                                                        <IonText className='review-count'>1</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Follower
                                                        </IonText>
                                                        <IonText className='review-count'>2</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            MySmartKitchen
                                                        </IonText>
                                                        <IonText className='review-count'>0</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Submit recipe
                                                        </IonText>
                                                        <IonText className='review-count'>3</IonText>
                                                    </div>
                                                </div>
                                            </div>
                                        </IonCol>
                                        <IonCol size="12" className='ion-padding-top'>
                                            <div className="ListBlock">
                                                <div className="IconHome">
                                                    <img src="./assets/img/sandwich.png" alt="award" className='list-recipe' />
                                                </div>
                                                <div className='list-box'>
                                                    <div className="list-review">
                                                        <IonTitle color="dark" className="ion-no-padding">
                                                            Exclusive Product Stores
                                                        </IonTitle>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Reviews
                                                        </IonText>
                                                        <IonText className='review-count'>1</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Follower
                                                        </IonText>
                                                        <IonText className='review-count'>2</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            MySmartKitchen
                                                        </IonText>
                                                        <IonText className='review-count'>0</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Submit recipe
                                                        </IonText>
                                                        <IonText className='review-count'>3</IonText>
                                                    </div>
                                                </div>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            )}
                            {FriendTab === "india" && (
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="12" className='ion-padding-top'>
                                            <div className="ListBlock">
                                                <div className="IconHome">
                                                    <img src="./assets/img/product-img.png" alt="award" className='list-recipe' />
                                                </div>
                                                <div className='list-box'>
                                                    <div className="list-review">
                                                        <IonTitle color="dark" className="ion-no-padding">
                                                            Exclusive Product Stores
                                                        </IonTitle>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Reviews
                                                        </IonText>
                                                        <IonText className='review-count'>1</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Follower
                                                        </IonText>
                                                        <IonText className='review-count'>2</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            MySmartKitchen
                                                        </IonText>
                                                        <IonText className='review-count'>0</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Submit recipe
                                                        </IonText>
                                                        <IonText className='review-count'>3</IonText>
                                                    </div>
                                                </div>
                                            </div>
                                        </IonCol>
                                        <IonCol size="12" className='ion-padding-top'>
                                            <div className="ListBlock">
                                                <div className="IconHome">
                                                    <img src="./assets/img/sandwich.png" alt="award" className='list-recipe' />
                                                </div>
                                                <div className='list-box'>
                                                    <div className="list-review">
                                                        <IonTitle color="dark" className="ion-no-padding">
                                                            Exclusive Product Stores
                                                        </IonTitle>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Reviews
                                                        </IonText>
                                                        <IonText className='review-count'>1</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Follower
                                                        </IonText>
                                                        <IonText className='review-count'>2</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            MySmartKitchen
                                                        </IonText>
                                                        <IonText className='review-count'>0</IonText>
                                                    </div>
                                                    <div className="list-review">
                                                        <IonText color="dark" className="ion-no-padding">
                                                            Submit recipe
                                                        </IonText>
                                                        <IonText className='review-count'>3</IonText>
                                                    </div>
                                                </div>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            )}

                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Ranking