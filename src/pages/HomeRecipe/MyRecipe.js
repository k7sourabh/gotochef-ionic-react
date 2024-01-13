import React, { } from "react";
import Header from "../../components/Header";
import {
  IonButton,
  IonCard,
  IonChip,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import {
  atCircleOutline,
  bookmarkOutline,
  person,
  pint,
  star,
  timeOutline,
} from "ionicons/icons";

const MyRecipe = () => {

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/profile">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">My Recipe</IonTitle>
        </IonHeader>

        <IonRow className="ion-padding-vertical">
          <IonCol size="6">
            <IonCard className="ProductCard">
              <div className="vegIcon">
                <img src="/assets/img/icon-veg.svg" alt="" />
                <IonButton fill="clear" className="saveIcon">
                  <IonIcon size="large" color="danger" icon={bookmarkOutline} />
                </IonButton>
              </div>
              <div className="RecentProducts">
                <div className="RecipePro">
                  <img
                    className="RecentUserImg"
                    src="/assets/img/1525870462-Listing.jpg"
                    alt=""
                  />
                  <div className="TimeingBar">
                    <div className="ReciRow">
                      <IonIcon icon={atCircleOutline}></IonIcon>
                      <IonLabel>Medium</IonLabel>
                    </div>
                    <div className="ReciRow">
                      <IonIcon icon={timeOutline}></IonIcon>
                      <IonLabel>30 min</IonLabel>
                    </div>
                  </div>

                </div>

                <div className="bottomRecipe">
                  <div className="productRecipe">
                    <span>Chicken Caesar Salad</span>
                    <div className="productRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={pint}
                        slot="start"
                      ></IonIcon>
                      <IonLabel>Breakfast</IonLabel>
                    </div>
                  </div>
                  <div className="productRecipe">
                    <div className="ProfileRecipe">
                      <img src="/assets/img/profile.jpg" alt="Images" />
                      <IonLabel>Deepanjali</IonLabel>
                    </div>
                    <div className="ProfileRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={person}
                        slot="start"
                      ></IonIcon>
                      <span>2</span>
                      <IonChip className="GreenDesign">
                        <span>0</span>
                        <IonIcon color="light" size="small" icon={star} />
                      </IonChip>
                    </div>
                  </div>
                </div>
              </div>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard className="ProductCard">
              <div className="vegIcon">
                <img src="/assets/img/icon-veg.svg" alt="" />
                <IonButton fill="clear" className="saveIcon">
                  <IonIcon size="large" color="danger" icon={bookmarkOutline} />
                </IonButton>
              </div>
              <div className="RecentProducts">
                <div className="RecipePro">
                  <img
                    className="RecentUserImg"
                    src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                    alt=""
                  />
                  <div className="TimeingBar">
                    <div className="ReciRow">
                      <IonIcon icon={atCircleOutline}></IonIcon>
                      <IonLabel>Medium</IonLabel>
                    </div>
                    <div className="ReciRow">
                      <IonIcon icon={timeOutline}></IonIcon>
                      <IonLabel>30 min</IonLabel>
                    </div>
                  </div>

                </div>

                <div className="bottomRecipe">
                  <div className="productRecipe">
                    <span>Chicken Caesar Salad</span>
                    <div className="productRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={pint}
                        slot="start"
                      ></IonIcon>
                      <IonLabel>Breakfast</IonLabel>
                    </div>
                  </div>
                  <div className="productRecipe">
                    <div className="ProfileRecipe">
                      <img src="/assets/img/profile.jpg" alt="Images" />
                      <IonLabel>Deepanjali</IonLabel>
                    </div>
                    <div className="ProfileRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={person}
                        slot="start"
                      ></IonIcon>
                      <span>2</span>
                      <IonChip className="GreenDesign">
                        <span>0</span>
                        <IonIcon color="light" size="small" icon={star} />
                      </IonChip>
                    </div>
                  </div>
                </div>
              </div>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard className="ProductCard">
              <div className="vegIcon">
                <img src="/assets/img/icon-veg.svg" alt="" />
                <IonButton fill="clear" className="saveIcon">
                  <IonIcon size="large" color="danger" icon={bookmarkOutline} />
                </IonButton>
              </div>
              <div className="RecentProducts">
                <div className="RecipePro">
                  <img
                    className="RecentUserImg"
                    src="/assets/img/1525870462-Listing.jpg"
                    alt=""
                  />
                  <div className="TimeingBar">
                    <div className="ReciRow">
                      <IonIcon icon={atCircleOutline}></IonIcon>
                      <IonLabel>Medium</IonLabel>
                    </div>
                    <div className="ReciRow">
                      <IonIcon icon={timeOutline}></IonIcon>
                      <IonLabel>30 min</IonLabel>
                    </div>
                  </div>

                </div>

                <div className="bottomRecipe">
                  <div className="productRecipe">
                    <span>Chicken Caesar Salad</span>
                    <div className="productRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={pint}
                        slot="start"
                      ></IonIcon>
                      <IonLabel>Breakfast</IonLabel>
                    </div>
                  </div>
                  <div className="productRecipe">
                    <div className="ProfileRecipe">
                      <img src="/assets/img/profile.jpg" alt="Images" />
                      <IonLabel>Deepanjali</IonLabel>
                    </div>
                    <div className="ProfileRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={person}
                        slot="start"
                      ></IonIcon>
                      <span>2</span>
                      <IonChip className="GreenDesign">
                        <span>0</span>
                        <IonIcon color="light" size="small" icon={star} />
                      </IonChip>
                    </div>
                  </div>
                </div>
              </div>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard className="ProductCard">
              <div className="vegIcon">
                <img src="/assets/img/icon-veg.svg" alt="" />
                <IonButton fill="clear" className="saveIcon">
                  <IonIcon size="large" color="danger" icon={bookmarkOutline} />
                </IonButton>
              </div>
              <div className="RecentProducts">
                <div className="RecipePro">
                  <img
                    className="RecentUserImg"
                    src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                    alt=""
                  />
                  <div className="TimeingBar">
                    <div className="ReciRow">
                      <IonIcon icon={atCircleOutline}></IonIcon>
                      <IonLabel>Medium</IonLabel>
                    </div>
                    <div className="ReciRow">
                      <IonIcon icon={timeOutline}></IonIcon>
                      <IonLabel>30 min</IonLabel>
                    </div>
                  </div>

                </div>

                <div className="bottomRecipe">
                  <div className="productRecipe">
                    <span>Chicken Caesar Salad</span>
                    <div className="productRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={pint}
                        slot="start"
                      ></IonIcon>
                      <IonLabel>Breakfast</IonLabel>
                    </div>
                  </div>

                  <div className="productRecipe">
                    <div className="ProfileRecipe">
                      <img src="/assets/img/profile.jpg" alt="Images" />
                      <IonLabel>Deepanjali</IonLabel>
                    </div>
                    <div className="ProfileRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={person}
                        slot="start"
                      ></IonIcon>
                      <span>2</span>
                      <IonChip className="GreenDesign">
                        <span>0</span>
                        <IonIcon color="light" size="small" icon={star} />
                      </IonChip>
                    </div>
                  </div>
                </div>
              </div>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default MyRecipe;
