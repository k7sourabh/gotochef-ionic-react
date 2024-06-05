import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import { lockClosedOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { getApiData } from "../../utils/Utils";

const Badges = () => {
  const [badgesData, setBadgesData] = useState({});

  const recipeDetails = async () => {
    try {
      const response = await getApiData(`/badges-collection`);
      console.log(response?.data);
      setBadgesData(response?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    recipeDetails();
  }, []);
  console.log(badgesData?.my_badges);
  return (
    <IonPage>
      <IonContent>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/dashboard">
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
                <IonCol size="6">
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
            {badgesData &&
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
              ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Badges;
