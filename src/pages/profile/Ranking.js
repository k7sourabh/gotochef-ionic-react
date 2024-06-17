import React, { useEffect, useState } from 'react'
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
    IonSpinner,
} from "@ionic/react";
import { getApiData, postApiData } from "../../utils/Utils";


const Ranking = () => {
    const [RankingData, setRankingData] = useState({})
    const [FriendData, setFriendData] = useState({})
    const [loader, setLoader] = useState(false);
    const FetchRanking = async () => {
        setLoader(true)
        try {
            const response = await getApiData("/leaderboard-ranking");
            // console.log("response",response)
            setRankingData(response?.data?.ranking_data)
            setFriendData(response?.data?.ranking_data?.userpoints)
        } catch (err) {
            console.log(err)
        }
        setLoader(false)
    }
    useEffect(() => {
        FetchRanking();
    }, [])

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
                                <h2 className='ion-no-margin ion-padding-vertical TextDanger'>
                                    {
                                        RankingData &&
                                        RankingData?.level?.current_level
                                    }
                                </h2>
                                <IonText>Your magical journey to explore food begins here.</IonText>
                            </div>

                            <IonList lines='none'>
                                <IonItem className='ion-no-padding'>
                                    <IonTitle className='ion-no-padding'>Your Reviews </IonTitle>
                                    <h2 className='ion-no-margin'>
                                        {
                                            RankingData &&
                                            RankingData?.myleaderboard?.review
                                        }
                                    </h2>
                                </IonItem>
                                <IonItem className='ion-no-padding'>
                                    <IonTitle className='ion-no-padding'>Your Submit Reviews </IonTitle>
                                    <h2 className='ion-no-margin'>
                                        {
                                            RankingData &&
                                            RankingData?.myleaderboard?.submit_recipe
                                        }
                                    </h2>
                                </IonItem>
                                <IonItem className='ion-no-padding'>
                                    <IonTitle className='ion-no-padding'>Your Followers</IonTitle>
                                    <h2 className='ion-no-margin'>
                                        {
                                            RankingData &&
                                            RankingData?.myleaderboard?.follow

                                        }
                                    </h2>
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
                                <h2 className='TextDanger'>
                                    {
                                        RankingData &&
                                        RankingData?.level?.next_level
                                    }
                                </h2>
                                <p>Now that you have discovered your passion enjoy the ride ahead</p>
                                <p className='ion-no-margin'>You need 1001 points to unlock your next level</p>
                                <div className='click-here'>
                                    <p className='ion-no-margin'>How to earn points?</p>
                                    <IonButton fill='clear' routerLink='/earn-point'>Click here to know</IonButton>
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
                                        {
                                            FriendData?.map?.((item, i) => (
                                                <IonCol size="12" className='ion-padding-top' key={i}>
                                                    <div className="ListBlock">
                                                        <div className="IconHome">
                                                            <img src={item.user_images} alt="award" className='list-recipe'
                                                                onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = "/assets/img/img-placeholder.jpg";
                                                                }}
                                                            />
                                                        </div>
                                                        <div className='list-box'>
                                                            <div className="list-review">
                                                                <IonTitle color="dark" className="ion-no-padding">
                                                                    {item.user_name}
                                                                </IonTitle>
                                                            </div>
                                                            <div className="list-review">
                                                                <IonText color="dark" className="ion-no-padding">
                                                                    Reviews
                                                                </IonText>
                                                                <IonText className='review-count'>{item.review}</IonText>
                                                            </div>
                                                            <div className="list-review">
                                                                <IonText color="dark" className="ion-no-padding">
                                                                    Follower
                                                                </IonText>
                                                                <IonText className='review-count'>{item.follow}</IonText>
                                                            </div>
                                                            <div className="list-review">
                                                                <IonText color="dark" className="ion-no-padding">
                                                                    MySmartKitchen
                                                                </IonText>
                                                                <IonText className='review-count'>{item.mySmartKitchen}</IonText>
                                                            </div>
                                                            <div className="list-review">
                                                                <IonText color="dark" className="ion-no-padding">
                                                                    Submit recipe
                                                                </IonText>
                                                                <IonText className='review-count'>{item.submit_recipe}</IonText>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </IonCol>
                                            ))
                                        }
                                    </IonRow>
                                </IonGrid>
                            )}
                            {FriendTab === "city" && (
                                <IonGrid>
                                    {
                                        RankingData &&
                                            RankingData?.usercity.length > 0 ? (
                                            <IonRow>
                                                {
                                                    RankingData &&
                                                    RankingData?.usercity?.map((item, i) => (
                                                        <IonCol size="12" className='ion-padding-top' key={i}>
                                                            <div className="ListBlock">
                                                                <div className="IconHome">
                                                                    <img src={item.user_images} alt="award" className='list-recipe'
                                                                        onError={(e) => {
                                                                            e.target.onerror = null;
                                                                            e.target.src = "/assets/img/img-placeholder.jpg";
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className='list-box'>
                                                                    <div className="list-review">
                                                                        <IonTitle color="dark" className="ion-no-padding">
                                                                            {item.user_name}
                                                                        </IonTitle>
                                                                    </div>
                                                                    <div className="list-review">
                                                                        <IonText color="dark" className="ion-no-padding">
                                                                            Reviews
                                                                        </IonText>
                                                                        <IonText className='review-count'>{item.review}</IonText>
                                                                    </div>
                                                                    <div className="list-review">
                                                                        <IonText color="dark" className="ion-no-padding">
                                                                            Follower
                                                                        </IonText>
                                                                        <IonText className='review-count'>{item.follow}</IonText>
                                                                    </div>
                                                                    <div className="list-review">
                                                                        <IonText color="dark" className="ion-no-padding">
                                                                            MySmartKitchen
                                                                        </IonText>
                                                                        <IonText className='review-count'>{item.mySmartKitchen}</IonText>
                                                                    </div>
                                                                    <div className="list-review">
                                                                        <IonText color="dark" className="ion-no-padding">
                                                                            Submit recipe
                                                                        </IonText>
                                                                        <IonText className='review-count'>{item.submit_recipe}</IonText>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </IonCol>
                                                    ))
                                                }
                                            </IonRow>
                                        ) : (
                                            <IonGrid className="ion-padding-vertical ion-padding-horizontal">
                                                <IonRow>
                                                    <IonCol>
                                                        <div className="NoSubmitBtn">
                                                            <IonButton fill="clear">
                                                                No City Collection
                                                            </IonButton>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                        )
                                    }

                                </IonGrid>
                            )}
                            {FriendTab === "india" && (
                                <IonGrid>
                                    <IonRow>
                                        {
                                            RankingData &&
                                            RankingData?.userindia.slice(0, 10).map((item, i) => (
                                                <IonCol size="12" className='ion-padding-top' key={i}>
                                                    <div className="ListBlock">
                                                        <div className="IconHome">
                                                            <img src={item.user_images} alt="award" className='list-recipe'
                                                                onError={(e) => {
                                                                    e.target.onerror = null;
                                                                    e.target.src = "/assets/img/img-placeholder.jpg";
                                                                }}
                                                            />
                                                        </div>
                                                        <div className='list-box'>
                                                            <div className="list-review">
                                                                <IonTitle color="dark" className="ion-no-padding">
                                                                    {item.user_name}
                                                                </IonTitle>
                                                            </div>
                                                            <div className="list-review">
                                                                <IonText color="dark" className="ion-no-padding">
                                                                    Reviews
                                                                </IonText>
                                                                <IonText className='review-count'>{item.review}</IonText>
                                                            </div>
                                                            <div className="list-review">
                                                                <IonText color="dark" className="ion-no-padding">
                                                                    Follower
                                                                </IonText>
                                                                <IonText className='review-count'>{item.follow}</IonText>
                                                            </div>
                                                            <div className="list-review">
                                                                <IonText color="dark" className="ion-no-padding">
                                                                    MySmartKitchen
                                                                </IonText>
                                                                <IonText className='review-count'>{item.mySmartKitchen}</IonText>
                                                            </div>
                                                            <div className="list-review">
                                                                <IonText color="dark" className="ion-no-padding">
                                                                    Submit recipe
                                                                </IonText>
                                                                <IonText className='review-count'>{item.submit_recipe}</IonText>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </IonCol>
                                            ))
                                        }
                                    </IonRow>

                                </IonGrid>
                            )}

                        </IonCol>
                    </IonRow>

                </IonGrid>
                {loader && (
                    <div className="loader-container">
                        <IonSpinner name="crescent" />
                    </div>
                )}
            </IonContent>
        </IonPage>
    )
}

export default Ranking