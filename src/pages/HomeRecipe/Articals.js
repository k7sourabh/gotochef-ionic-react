import { IonSegment, IonSegmentButton, IonCol, IonGrid, IonPage, IonContent, IonRow, IonText, IonList, IonLabel, IonItem, IonIcon, IonImg, IonHeader, IonButton, IonTitle, IonChip, IonCard } from "@ionic/react";
import Header from "../../components/Header";
import { useState } from "react";
import { atCircleOutline, bookmarkOutline, lockClosed, person, pint, refreshCircleOutline, star, timeOutline } from "ionicons/icons";

const Articals = () => {
   const [selectedTabladder, setSelectedTabladder] = useState("Submitted");
   const handleTabChangeladder = (event) => {
      setSelectedTabladder(event.detail.value);
   };
   return (
      <>
         <IonPage>
            <Header />
            <IonContent>
               <IonHeader className="TitleHead bottom-shadow">
                  <IonButton className="backBtn" fill="clear" routerLink="/home">
                     <i class="material-icons dark">west</i>
                  </IonButton>
                  <IonTitle color="dark">My Artical</IonTitle>
               </IonHeader>
               <IonGrid className="ion-no-padding">
                  <IonRow className="ion-padding-horizontal">
                     <IonCol size="12">
                        <IonSegment
                           value={selectedTabladder}
                           onIonChange={handleTabChangeladder}
                           className="personalTab"
                        >
                           <IonSegmentButton value="Submitted">
                              <IonLabel>Submitted</IonLabel>
                           </IonSegmentButton>
                           <IonSegmentButton value="Approved">
                              <IonLabel>Approved</IonLabel>
                           </IonSegmentButton>
                        </IonSegment>


                        {selectedTabladder === "Submitted" && (
                           <IonGrid>
                              <IonRow>
                                 <IonCol size="6">
                                    <IonCard className="ArticalCard">
                                       <div className="vegIcon">
                                          <img src="/assets/img/icon-veg.svg" alt="" />
                                       </div>
                                       <div className="RecentProducts">
                                          <img
                                             className="RecentUserImg"
                                             src="/assets/img/1525870462-Listing.jpg"
                                             alt=""
                                          />
                                          <div className="bottomArtical">
                                                <IonText>
                                                   Margerrita Pizza: A classic food to relish
                                                </IonText>
                                             <div className="productRecipe">
                                                <IonText className="ArticalTextName">By Chiara</IonText>
                                                <IonText className="ArticalTextDate">15 Oct, 2020</IonText>
                                             </div>
                                             <div className=" productRecipe Articalpera">
                                                <IonText>
                                                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                   diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                   aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos-
                                                   trud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                                </IonText>
                                             </div>
                                          </div>
                                       </div>
                                    </IonCard>
                                 </IonCol>
                                 <IonCol size="6">
                                    <IonCard className="ArticalCard">
                                       <div className="vegIcon">
                                          <img src="/assets/img/icon-veg.svg" alt="" />
                                       </div>
                                       <div className="RecentProducts">
                                          <img
                                             className="RecentUserImg"
                                             src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                                             alt=""
                                          />
                                          <div className="bottomArtical">
                                                <IonText>
                                                   Margerrita Pizza: A classic food to relish
                                                </IonText>
                                             <div className="productRecipe">
                                                <IonText className="ArticalTextName">By Chiara</IonText>
                                                <IonText className="ArticalTextDate">15 Oct, 2020</IonText>
                                             </div>
                                             <div className=" productRecipe Articalpera">
                                                <IonText>
                                                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                   diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                   aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos-
                                                   trud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                                </IonText>
                                             </div>
                                          </div>
                                       </div>
                                    </IonCard>
                                 </IonCol>
                              </IonRow>
                           </IonGrid>
                        )}
                        {selectedTabladder === "Approved" && (
                           <IonGrid className="ion-padding-vertical ion-padding-horizontal">
                              <IonRow>
                                 <IonCol>
                                    <div className="NoSubmitBtn">
                                       <IonButton fill="clear">
                                             No Submitted Recipes
                                       </IonButton>
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
      </>
   )

}
export default Articals