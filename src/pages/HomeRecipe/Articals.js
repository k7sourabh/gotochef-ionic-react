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
   IonHeader,
   IonButton,
   IonTitle,
   IonCard
} from "@ionic/react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getApiData, postApiData } from '../../utils/Utils';

const Articals = () => {
   const [selectedTabladder, setSelectedTabladder] = useState("Submitted");
   const handleTabChangeladder = (event) => {
      setSelectedTabladder(event.detail.value);
   };
   const [submitdata, setSubmitData] = useState([]);
   const [approveddata, setApprovedData] = useState([]);


   const fetchArticalData = async () => {
      try {
         const response = await getApiData("my-articles")
         setSubmitData(response?.data?.my_articles?.submit_articles)
         setApprovedData(response?.data?.my_articles?.approved_articles)
      } catch (err) {
         console.log(err);
      }
   }
   const truncateText = (text, maxLength) => {              
      if (text.length > maxLength) {
         return text.substr(0, maxLength) + '...';
      }
      return text;
   };

   useEffect(() => {
      fetchArticalData();
   }, [])
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
                     <IonButton className="ion-padding-horizontal" fill="outline" size="small" shape="round" routerLink="/submit-articals">
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
                              {submitdata && submitdata.length > 0 ? (
                                 <IonRow>
                                    {
                                       submitdata?.map?.((item, i) => (

                                          <IonCol size="6" key={i}>
                                             <IonCard className="ArticalCard">
                                                <div className="vegIcon">
                                                   <img src="/assets/img/icon-veg.svg" alt="" />
                                                </div>
                                                <div className="RecentProducts">
                                                   <img
                                                      className="RecentUserImg"
                                                      src={item.images}
                                                      alt=""
                                                   />
                                                   <div className="bottomArtical">
                                                      <IonText>
                                                         {truncateText(item.highlights, 30)}
                                                      </IonText>
                                                      <div className="productRecipe">
                                                         <IonText className="ArticalTextName">{item.articleName}</IonText>
                                                         <IonText className="ArticalTextDate">{item.created_at}</IonText>
                                                      </div>
                                                      <div className=" productRecipe Articalpera">
                                                         <IonText>
                                                            {truncateText(item.longDescription, 100)}

                                                         </IonText>
                                                      </div>
                                                   </div>
                                                </div>
                                             </IonCard>
                                          </IonCol>
                                       ))}
                                 </IonRow>
                              ) : (
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
                           </IonGrid>
                        )}
                        {selectedTabladder === "Approved" && (
                           <IonGrid>
                              {approveddata && approveddata.length > 0 ? (
                                 <IonRow>
                                    {
                                       approveddata?.map?.((item, i) => (

                                          <IonCol size="6" key={i}>
                                             <IonCard className="ArticalCard">
                                                <div className="vegIcon">
                                                   <img src="/assets/img/icon-veg.svg" alt="" />
                                                </div>
                                                <div className="RecentProducts">
                                                   <img
                                                      className="RecentUserImg"
                                                      src={item.images}
                                                      alt=""
                                                   />
                                                   <div className="bottomArtical">
                                                      <IonText>
                                                         {truncateText(item.shortDescription, 25)}

                                                      </IonText>
                                                      <div className="productRecipe">
                                                         <IonText className="ArticalTextName">{item.approvedarticleName}</IonText>
                                                         <IonText className="ArticalTextDate">{item.created_at}</IonText>
                                                      </div>
                                                      <div className=" productRecipe Articalpera">
                                                         <IonText>
                                                            {truncateText(item.longDescription, 100)}
                                                         </IonText>
                                                      </div>
                                                   </div>
                                                </div>
                                             </IonCard>
                                          </IonCol>
                                       ))}
                                 </IonRow>
                              ) : (
                                 <IonGrid className="ion-padding-vertical ion-padding-horizontal">
                                    <IonRow>
                                       <IonCol>
                                          <div className="NoSubmitBtn">
                                             <IonButton fill="clear">
                                                No Approved Recipes
                                             </IonButton>
                                          </div>
                                       </IonCol>
                                    </IonRow>
                                 </IonGrid>
                              )}
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