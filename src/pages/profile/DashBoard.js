import {IonSegment,IonSegmentButton,IonCol, IonGrid, IonPage, IonContent, IonRow,IonText,  IonList, IonLabel, IonItem, IonIcon, IonImg } from "@ionic/react";
import Header from "../../components/Header";
import { fastFoodOutline, lockClosed, refreshCircleOutline, refreshOutline } from "ionicons/icons";
import {useState } from "react";



const Dashboard = () => {
    const [selectedTabladder, setSelectedTabladder] = useState("LadderStatus");
    const handleTabChangeladder = (event) => {
      setSelectedTabladder(event.detail.value);
    };
    return(
         <>
          <IonPage>
            <Header />
            <IonContent>
            <IonGrid className="ion-no-padding">
                    <IonRow className="DashBoard-tab">
                      <IonCol size="12">
                        <IonSegment
                          value={selectedTabladder}
                          onIonChange={handleTabChangeladder}
                          className="personalTab"
                        >
                          <IonSegmentButton value="LadderStatus">
                            <IonLabel>LadderStatus</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton value="MyBadges">
                            <IonLabel>My Badges</IonLabel>
                          </IonSegmentButton>
                          </IonSegment>
                          

                            {selectedTabladder === "LadderStatus" && (
                            <IonGrid>
                              <IonRow className="LadderContent">
                                <IonCol>
                                  <div className="passionateText">
                                  <img src="/assets/img/Mysmart.png" alt="Images"   className="personalimages" />
                                  <IonText>Passionate level(3)</IonText>
                                  </div>
                                  <div className="prohomeText">
                                  <img src="/assets/img/img-person.jpg" alt="Images"   className="personalimages" />
                                  <IonIcon color="dark" size="large" icon={lockClosed} />
                                  <div className="ion-padding-top">
                                  <IonText>ProHome</IonText>
                                  <ul className="ProHomeList">
                                    <li>Now that you have discovered your ProHome, enjoy the ride ahead</li>
                                    <li>You need 5001 points to unlock your next level</li>
                                    <li>How to earn points?</li>
                                  </ul>
                                  </div>
                                  </div>
                                </IonCol>
                              </IonRow>
                              <IonRow className="LadderContent">
                                <IonGrid className="">
                                <IonRow className="ViewsContent ion-padding-vertical">
                                    <IonCol size="4" className="TotalViews">
                                     <IonText>Total Views</IonText>
                                    </IonCol>
                                    <IonCol>
                                    <IonText>Last 7 Days</IonText>
                                    </IonCol>
                                    <IonCol>
                                    <IonText>Last 30 Days</IonText>
                                    </IonCol>
                                    <IonCol>
                                    <IonText>Last 30 Days</IonText>
                                    </IonCol>
                                    </IonRow>
                                <IonRow className="ion-padding-vertical">
                                    <IonCol size="4">
                                   <div className="RecipeContent">
                                   <IonIcon
                                        aria-hidden="true"
                                        icon={fastFoodOutline}
                                        slot="start"
                                    ></IonIcon>
                                        <IonText>Reviews</IonText>
                                        </div>
                                    </IonCol>
                                    <IonCol >
                                       <div className="RecipeRefresh">
                                       <IonIcon
                                            aria-hidden="true"
                                            icon={refreshCircleOutline}
                                            slot="start"
                                        ></IonIcon>
                                       </div>
                                    </IonCol>
                                    <IonCol>
                                    <div className="RecipeRefresh">
                                       <IonIcon
                                            aria-hidden="true"
                                            icon={refreshCircleOutline}
                                            slot="start"
                                        ></IonIcon>
                                       </div>
                                    </IonCol>
                                    <IonCol>
                                    <div className="RecipeRefresh">
                                       <IonIcon
                                            aria-hidden="true"
                                            icon={refreshCircleOutline}
                                            slot="start"
                                        ></IonIcon>
                                       </div>
                                    </IonCol>
                                    </IonRow>
                                <IonRow className="ion-padding-vertical">
                                    <IonCol size="4">
                                   <div className="RecipeContent">
                                        <IonIcon
                                            aria-hidden="true"
                                            icon={fastFoodOutline}
                                            slot="start"
                                        ></IonIcon>
                                        <IonText>Recipe</IonText>
                                        </div>
                                    </IonCol>
                                    <IonCol >
                                       <div className="RecipeRefresh">
                                       <IonIcon
                                            aria-hidden="true"
                                            icon={refreshCircleOutline}
                                            slot="start"
                                        ></IonIcon>
                                       </div>
                                    </IonCol>
                                    <IonCol>
                                    <div className="RecipeRefresh">
                                       <IonIcon
                                            aria-hidden="true"
                                            icon={refreshCircleOutline}
                                            slot="start"
                                        ></IonIcon>
                                       </div>
                                    </IonCol>
                                    <IonCol>
                                    <div className="RecipeRefresh">
                                       <IonIcon
                                            aria-hidden="true"
                                            icon={refreshCircleOutline}
                                            slot="start"
                                        ></IonIcon>
                                       </div>
                                    </IonCol>
                                    </IonRow>
                                </IonGrid>
                              </IonRow>
                              <IonRow className="MorefoodContent">
                                    <IonCol>
                                    <div className="MorefoodBox">
                                    <img src="/assets/img/Mysmart.png" alt="Images" class="TabIcon"/>
                                        <IonLabel>Food Enthusiast</IonLabel>
                                    </div>
                                    <div className="MorefoodBox">
                                    <img src="/assets/img/NutriBuddy.png" alt="Images" class="TabIcon" />
                                        <IonLabel>More than 7 times</IonLabel>
                                    </div>
                                    <div className="MorefoodBox">
                                    <img src="/assets/img/Cart.png" alt="Images" class="TabIcon" />
                                        <IonLabel>4 to 5 times a month</IonLabel>
                                    </div>
                                    </IonCol>
                              </IonRow>
                            </IonGrid>
                            )}
                            {selectedTabladder === "MyBadges" && (
                             <IonGrid className="ion-padding-vertical">
                                <IonRow>
                                   <IonCol size="6">
                                   <IonText className="verticalLine">Recent Achievement</IonText>
                                   </IonCol>
                                </IonRow>
                                <IonRow className="badgesImg ion-padding-vertical">
                                   <img src="/assets/img/award.png" alt="Images" class="TabIcon"/> 
                                   <IonText>1 Recipe</IonText>
                                </IonRow>
                                <IonRow>
                                <IonCol size="6">
                                   <IonText className="RecipeRefresh">Up Next</IonText>
                                   </IonCol>
                                </IonRow>
                                <IonRow className="badgesImg ion-padding-vertical">
                                   <img src="/assets/img/award.png" alt="Images" class="TabIcon"/> 
                                   <IonText>1 Like Review</IonText>
                                </IonRow>
                                <IonRow className="badgesImg ion-padding-vertical">
                                   <img src="/assets/img/award.png" alt="Images" class="TabIcon"/> 
                                   <IonText>5 Like Review</IonText>
                                </IonRow>
                                <IonRow className="badgesImg ion-padding-vertical">
                                   <img src="/assets/img/award.png" alt="Images" class="TabIcon"/> 
                                   <IonText>10 Like Review</IonText>
                                </IonRow>
                             </IonGrid>
                            )}

                           
                           
            </IonCol>
          </IonRow>
                </IonGrid>
            </IonContent>
            </IonPage>
         </>
    )
}
export  default Dashboard;