import { IonSegment, IonSegmentButton, IonCol, IonGrid, IonPage, IonContent, IonRow, IonText, IonLabel, IonHeader, IonButton, IonTitle,  IonCard } from "@ionic/react";
import Header from "../../components/Header";
import { useState } from "react";

const Articals = () => {
   const [selectedTabladder, setSelectedTabladder] = useState("Submitted");
   const handleTabChangeladder = (event) => {
      setSelectedTabladder(event.detail.value);
   };
   return (
      <>
         <IonPage>
            {/* <Header /> */}
            <IonContent>
               <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
                  <div className="TitleHead">
                  <IonButton className="backBtn" fill="clear" routerLink="/profile">
                     <i class="material-icons dark">west</i>
                  </IonButton>
                  <IonTitle color="dark">My Articles</IonTitle>
                  </div>
                  <div className="flex ion-justify-content-end ion-align-items-end">
                  <IonButton  className="ion-padding-horizontal" fill="outline" size="small" shape="round" routerLink="/submit-articals">
                        <i class="material-icons dark">add</i>
                        </IonButton>
                  </div>
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
                                            <div className="flex ion-justify-content-between  ion-align-items-center ion-margin-top">
                                            <IonButton size="default" fill="outline"  class="md button button-default button-outline ion-activatable ion-focusable">edit</IonButton>
                                             <IonButton size="default" fill="outline"  class="md button button-default button-outline ion-activatable ion-focusable">remove</IonButton>
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
                                             <div className="flex ion-justify-content-between  ion-align-items-center ion-margin-top">
                                            <IonButton size="default" fill="outline"   class="md button button-default button-outline ion-activatable ion-focusable">edit</IonButton>
                                             <IonButton size="default" fill="outline"  class="md button button-default button-outline ion-activatable ion-focusable">remove</IonButton>
                                            </div>
                                          </div>
                                       </div>
                                    </IonCard>
                                 </IonCol>
                              </IonRow>
                           </IonGrid>
                        )}
                        {selectedTabladder === "Approved" && (
                          
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
                                         <div className="flex ion-justify-content-between  ion-align-items-center ion-margin-top">
                                            <IonButton size="default" fill="outline"   class="md button button-default button-outline ion-activatable ion-focusable">edit</IonButton>
                                             <IonButton size="default" fill="outline"  class="md button button-default button-outline ion-activatable ion-focusable">remove</IonButton>
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

                                         <div className="flex ion-justify-content-between  ion-align-items-center ion-margin-top">
                                            <IonButton size="default" fill="outline"   class="md button button-default button-outline ion-activatable ion-focusable">edit</IonButton>
                                             <IonButton size="default" fill="outline"  class="md button button-default button-outline ion-activatable ion-focusable">remove</IonButton>
                                            </div>
                                        
                                      </div>
                                   </div>
                                </IonCard>
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