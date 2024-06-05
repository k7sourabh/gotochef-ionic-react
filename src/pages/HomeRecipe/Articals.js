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
   IonCard,
   useIonToast,
   IonIcon,
   IonAlert,
   useIonViewWillEnter
} from "@ionic/react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getApiData, postApiData } from '../../utils/Utils';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { close, pencilOutline } from "ionicons/icons";

const Articals = () => {
   const [selectedTabladder, setSelectedTabladder] = useState("Submitted");
   const handleTabChangeladder = (event) => {
      setSelectedTabladder(event.detail.value);
   };
   const [submitdata, setSubmitData] = useState([]);
   const [approveddata, setApprovedData] = useState([]);
   const history = useHistory();
   const [present] = useIonToast();
   const [showAlert, setShowAlert] = useState(false);
   const [articleToDelete, setArticleToDelete] = useState(null);

   const fetchArticalData = async () => {
      try {
         const response = await getApiData("my-articles");
         setSubmitData(response?.data?.my_articles?.submit_articles);
         setApprovedData(response?.data?.my_articles?.approved_articles);
      } catch (err) {
         console.log(err);
      }
   };

   useIonViewWillEnter(() => {
      fetchArticalData();
   });

   const truncateText = (text, maxLength) => {
      if (text && text.length > maxLength) {
         return text.substr(0, maxLength) + '...';
      }
      return text;
   };

   const handleEdit = (id) => {
      history.push(`/edit-articals/${id}`);
   };

   const handleRemove = async (articalId) => {
      setShowAlert(true);
      setArticleToDelete(articalId);
   };

   const confirmRemove = async () => {
      try {
         const obj = {
            'article_id': articleToDelete,
         };
         const response = await postApiData("delete-article", obj);
         if (response.status === 200) {
            presentToast("Top", response?.data?.message_response);
            fetchArticalData();
         }
      } catch (err) {
         console.log(err);
      }
      setShowAlert(false);
      setArticleToDelete(null);
   };

   const handleView = (slug) => {
      history.push(`/artical-detail/:${slug}`);
   };

   const presentToast = (position, message) => {
      present({
         message: message,
         duration: 1500,
         position: position,
      });
   };

   return (
      <>
         <IonPage>
            {/* <Header /> */}
            <IonContent>
               <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
                  <div className="TitleHead">
                     <IonButton className="backBtn" fill="clear" routerLink="/profile">
                        <i className="material-icons dark">west</i>
                     </IonButton>
                     <IonTitle color="dark">My Articles</IonTitle>
                  </div>
                  <div className="flex ion-justify-content-end ion-align-items-end">
                     <IonButton className="ion-padding-horizontal" fill="outline" size="small" shape="round" routerLink="/submit-articals">
                        <i className="material-icons dark">add</i>
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
                                    {submitdata?.map?.((item, i) => (
                                       <IonCol size="6" key={i}>
                                          <IonCard className="ArticalCard">
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
                                                   <div className="productRecipe Articalpera">
                                                      <IonText>
                                                         {truncateText(item.longDescription, 100)}
                                                      </IonText>
                                                   </div>
                                                   <div className="flex ion-justify-content-evenly ion-align-items-center ion-margin-top">
                                                      <IonButton onClick={() => handleEdit(item.id)} size='default' fill='outline' shape='round'>
                                                         <IonIcon size="default" icon={pencilOutline} />
                                                      </IonButton>
                                                      <IonButton onClick={() => handleRemove(item.id)} size='default' fill='outline' shape='round'>
                                                         <IonIcon size="default" icon={close} />
                                                      </IonButton>
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
                                    {approveddata?.map?.((item, i) => (
                                       <IonCol size="6" key={i}>
                                          <IonCard className="ArticalCard">
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
                                                   <div className="productRecipe Articalpera">
                                                      <IonText>
                                                         {truncateText(item.longDescription, 100)}
                                                      </IonText>
                                                   </div>
                                                </div>
                                                <IonButton onClick={() => handleView(item.slug)} size="default" fill="outline" className="ion-margin-top">View</IonButton>
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

            <IonAlert
               isOpen={showAlert}
               onDidDismiss={() => setShowAlert(false)}
               header={'Confirm Delete'}
               message={'Are you sure you want to delete this article?'}
               buttons={[
                  {
                     text: 'Cancel',
                     role: 'cancel',
                     handler: () => {
                        setShowAlert(false);
                        setArticleToDelete(null);
                     }
                  },
                  {
                     text: 'Delete',
                     handler: () => {
                        confirmRemove();
                     }
                  }
               ]}
            />
         </IonPage>
      </>
   );
};

export default Articals;
