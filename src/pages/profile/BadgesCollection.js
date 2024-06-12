import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonPage,
    IonRow,
    IonSpinner,
    IonText,
    IonTitle,
  } from "@ionic/react";
  import { lockClosedOutline } from "ionicons/icons";
  import React, { useEffect, useState } from "react";
  import { getApiData } from "../../utils/Utils";
  
  const BadgesCollection = () => {
    const [badgesData, setBadgesData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
    const recipeDetails = async () => {
      try {
        setIsLoading(true);
        const response = await getApiData(`/badges-collection`);
        setIsLoading(false);
        setBadgesData(response?.data);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      recipeDetails();
    }, []);
    return (
      <IonPage>
        <IonContent>
          <IonHeader className="TitleHead bottom-shadow">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Badges</IonTitle>
          </IonHeader>
          <IonGrid class="ion-padding-horizontal">
            <IonRow className="ion-padding-vertical">
              <IonCol>
                <IonTitle className="ion-no-padding">BADGE COLLECTION</IonTitle>
              </IonCol>
            </IonRow>
            <IonRow className="ion-padding-vertical">
              {badgesData &&
                badgesData?.my_badges?.map((data, i) => (
                  <IonCol size="6" key={i}>
                    <div className="review-award">
                      <img
                        src={
                          !data.images
                            ? "/assets/img/img-placeholder.jpg"
                            : data.images
                        }
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/assets/img/img-placeholder.jpg";
                        }}
                        alt="award"
                      />
                      <h4 className="ion-no-margin">{data.num_review} Review</h4>
                      <div className="line"></div>
                      <IonText>Review</IonText>
                    </div>
                  </IonCol>
                ))}
            </IonRow>
  
            <IonRow className="ion-padding-vertical">
              {isLoading ? (
                <div className="loader-container">
                  <IonSpinner name="crescent" />
                </div>
              ) : badgesData && badgesData?.up_coming_badges?.length > 0 ? (
                badgesData?.up_coming_badges?.map((data, i) => (
                  <IonCol size="6">
                    <div className="review-award">
                      <IonIcon
                        color="primary"
                        size="small"
                        className="review-lock"
                        icon={lockClosedOutline}
                      />
                      <img
                        src={
                          !data.images
                            ? "/assets/img/img-placeholder.jpg"
                            : data.images
                        }
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/assets/img/img-placeholder.jpg";
                        }}
                        alt="award"
                      />
                      <h4 className="ion-no-margin">{data.num_review} Review</h4>
                      <div className="line"></div>
                      <IonText>Review</IonText>
                    </div>
                  </IonCol>
                ))
              ) : (
                <IonText>Data not found</IonText>
              )}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  

export default BadgesCollection