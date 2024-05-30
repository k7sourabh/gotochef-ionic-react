import { IonSegment, IonSegmentButton, IonCol, IonGrid, IonPage, IonContent, IonRow, IonText, IonLabel, IonIcon, IonHeader, IonButton, IonTitle } from "@ionic/react";
import Header from "../../components/Header";
import { lockClosed, refreshCircleOutline, refreshOutline, thumbsUp, thumbsUpOutline } from "ionicons/icons";
import { useState } from "react";



const Dashboard = () => {
   const [selectedTabladder, setSelectedTabladder] = useState("LadderStatus");
   const handleTabChangeladder = (event) => {
      setSelectedTabladder(event.detail.value);
   };
   return (
      <>
         <IonPage>
            {/* <Header /> */}
            <IonContent>
               <IonHeader className="TitleHead bottom-shadow">
                  <IonButton className="backBtn" fill="clear" routerLink="/profile">
                     <i class="material-icons dark">west</i>
                  </IonButton>
                  <IonTitle color="dark">Dashboard</IonTitle>
               </IonHeader>
               <IonGrid className="ion-no-padding">
                  <IonRow className="ion-padding-horizontal">
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
                           <IonGrid class="ion-no-padding">
                              <IonRow className="LadderContent">
                                 <IonCol>
                                    <div className="passionateText">
                                       <img src="/assets/img/dash-img.png" alt="Images" />
                                       <IonText>Passionate level(3)</IonText>
                                    </div>
                                    <div className="prohomeText">
                                       <div className="profileLock">
                                          <img src="/assets/img/img-person.jpg" alt="Images" />
                                          <IonIcon color="dark" size="large" icon={lockClosed} />
                                       </div>
                                       <div className="">
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
                                 <IonGrid class="ion-no-padding">
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
                                             <img src="/assets/img/review.png" alt="" />
                                             <IonText>Reviews</IonText>
                                          </div>
                                       </IonCol>
                                       <IonCol >
                                          <div className="RecipeRefresh">
                                             <IonIcon
                                                aria-hidden="true"
                                                icon={refreshOutline}
                                                slot="start"
                                             ></IonIcon>
                                          </div>
                                       </IonCol>
                                       <IonCol>
                                          <div className="RecipeRefresh">
                                             <IonIcon
                                                aria-hidden="true"
                                                icon={refreshOutline}
                                                slot="start"
                                             ></IonIcon>
                                          </div>
                                       </IonCol>
                                       <IonCol>
                                          <div className="RecipeRefresh">
                                             <IonIcon
                                                aria-hidden="true"
                                                icon={refreshOutline}
                                                slot="start"
                                             ></IonIcon>
                                          </div>
                                       </IonCol>
                                    </IonRow>
                                    <IonRow className="ion-padding-vertical">
                                       <IonCol size="4">
                                          <div className="RecipeContent">
                                             <img src="/assets/img/Recipes.png" alt="" />
                                             <IonText>Recipe</IonText>
                                          </div>
                                       </IonCol>
                                       <IonCol >
                                          <div className="RecipeRefresh">
                                             <IonIcon
                                                aria-hidden="true"
                                                icon={refreshOutline}
                                                slot="start"
                                             ></IonIcon>
                                          </div>
                                       </IonCol>
                                       <IonCol>
                                          <div className="RecipeRefresh">
                                             <IonIcon
                                                aria-hidden="true"
                                                icon={refreshOutline}
                                                slot="start"
                                             ></IonIcon>
                                          </div>
                                       </IonCol>
                                       <IonCol>
                                          <div className="RecipeRefresh">
                                             <IonIcon
                                                aria-hidden="true"
                                                icon={refreshOutline}
                                                slot="start"
                                             ></IonIcon>
                                          </div>
                                       </IonCol>
                                    </IonRow>
                                 </IonGrid>
                              </IonRow>
                              <IonRow className="MorefoodContent">
                                 <IonCol size="12" className="flex ion-justify-content-between ion-align-items-center">
                                    <div className="MorefoodBox">
                                       <img src="/assets/img/review.png" alt="Images" class="TabIcon" />
                                       <IonLabel>Total Reviews</IonLabel>
                                    </div>
                                    <div className="ReviewCount">
                                       <IonText>16 Review</IonText>
                                    </div>
                                    </IonCol>
                                    <IonCol size="12" className="flex ion-justify-content-between ion-align-items-center">
                                    <div className="MorefoodBox">
                                    <IonIcon
                                                aria-hidden="true"
                                                icon={thumbsUpOutline}
                                                slot="start"
                                                size="large"
                                                className="LikeIcon">

                                                </IonIcon>
                                       <IonLabel>Like</IonLabel>
                                    </div>
                                    <div className="ReviewCount">
                                       <IonText>0 Likes</IonText>
                                    </div>
                                    </IonCol>
                                    <IonCol size="12" className="flex ion-justify-content-between ion-align-items-center">
                                    <div className="MorefoodBox">
                                       <img src="/assets/img/Recipes.png" alt="Images" class="TabIcon" />
                                       <IonLabel>Recipes</IonLabel>
                                    </div>
                                    <div className="ReviewCount">
                                       <IonText>1 Recipe</IonText>
                                    </div>
                                 </IonCol>
                              </IonRow>
                           </IonGrid>
                        )}
                        {selectedTabladder === "MyBadges" && (
                           <IonGrid className="ion-padding-vertical">
                              <IonRow className="flex ion-align-items-center">
                                 <IonCol size="6">
                                    <IonText className="verticalLine">Recent Achievement</IonText>
                                 </IonCol>
                                 <IonCol size="6" className="flex ion-justify-content-end" >
                                    <IonButton fill="clear"  routerLink="/badges">View Collection</IonButton>
                                 </IonCol>
                              </IonRow>
                              <IonRow className="badgesImg ion-padding-vertical">
                                 <img src="/assets/img/award.png" alt="Images" class="TabIcon" />
                                 <IonText>1 Recipe</IonText>
                              </IonRow>
                              <IonRow>
                                 <IonCol size="6">
                                    <IonText className="RecipeRefresh">Up Next</IonText>
                                 </IonCol>
                              </IonRow>
                              <IonRow className="badgesImg ion-padding-vertical">
                                 <img src="/assets/img/award.png" alt="Images" class="TabIcon" />
                                 <IonText>1 Like Review</IonText>
                              </IonRow>
                              <IonRow className="badgesImg ion-padding-vertical">
                                 <img src="/assets/img/award.png" alt="Images" class="TabIcon" />
                                 <IonText>5 Like Review</IonText>
                              </IonRow>
                              <IonRow className="badgesImg ion-padding-vertical">
                                 <img src="/assets/img/award.png" alt="Images" class="TabIcon" />
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
export default Dashboard;