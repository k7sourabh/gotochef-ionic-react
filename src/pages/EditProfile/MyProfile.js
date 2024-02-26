import { IonButton, IonCard, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonText, IonTitle } from "@ionic/react"
import { atCircleOutline, bookmarkOutline, person, pint, star, timeOutline } from "ionicons/icons"
import Header from "../../components/Header"

const MyProfile = () => {
    return (
        <IonPage>
            {/* <Header /> */}
            <IonContent fullscreen={true}>
            <IonHeader className="TitleHead bottom-shadow">
                  <IonButton className="backBtn" fill="clear" routerLink="/home">
                     <i class="material-icons dark">west</i>
                  </IonButton>
                  <IonTitle color="dark">My Profile</IonTitle>
               </IonHeader>
                <IonGrid className="ion-padding-horizontal">
                    <IonRow>
                        <IonCol>
                            <div className="MyProfileContent">
                                <div className="MyProfileImg">
                                    <img src="/assets/img/profile.jpg" alt="" />
                                    <IonTitle>Deepanjali</IonTitle>
                                    <IonText>Passionate</IonText>
                                </div>
                                <div>
                                    <div className="ProfileData">
                                        <div className="ProfileFollowers">
                                            <IonTitle>52</IonTitle>
                                            <IonText>Recipes Submitted</IonText>
                                        </div>
                                        <div className="ProfileFollowers">
                                            <IonTitle>1003</IonTitle>
                                            <IonText>Followers</IonText>
                                        </div>
                                        <div className="ProfileFollowers">
                                            <IonTitle>654</IonTitle>
                                            <IonText>Following</IonText>
                                        </div>
                                    </div>
                                    <div className="MyprofileReview ion-padding-horizontal">
                                        <img src="/assets/img/right-arrow.png" alt="" />
                                        <IonChip class="GreenDesign ion-padding-vertical md ion-activatable">
                                            <span>0</span>
                                            <ion-icon icon="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Star</title><path d='M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z'/></svg>" color="light" size="small" role="img" class="md ion-color ion-color-light icon-small"></ion-icon></IonChip>
                                    </div>
                                </div>
                            </div>
                            <div className="ion-padding-vertical">
                                <IonTitle className="ion-no-padding">About Me:</IonTitle>
                                <p className="ion-no-margin">Lorem ipsum dolor sit amet, consectetuer adipisc-
                                    ing elit, sed diam nonummy nibh euismod tincid-
                                    unt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci
                                    tation ullamcorper suscipit lobortis nisl ut aliquip
                                    ex ea commodo consequat. Duis autem vel eum
                                    iriure dolor in hendrerit in</p>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow className="ion-padding-vertical ion-padding-horizontal ion-align-items-center">
                        <IonCol size="6">
                            <IonTitle color="dark" class="ion-no-padding">
                                Recent
                            </IonTitle>
                        </IonCol>
                        <IonCol size="6" className="ion-text-right">
                            <IonLabel>See All</IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow>
          <IonCol size="6">
            <IonCard className="ProductCard">
              <div className="vegIcon">
                <img src="/assets/img/icon-veg.svg" alt="" />
                <IonButton fill="clear" className="saveIcon">
                  <IonIcon
                    size="large"
                    color="danger"
                    icon={bookmarkOutline}
                  />
                </IonButton>
              </div>
              <div className="RecentProducts">
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
                    <img src="/assets/img/editIcon.png" alt="Images" />
                      <IonLabel>Snacks</IonLabel>
                    </div>
                    <div className="ProfileRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={person}
                        slot="start"
                      >
                      </IonIcon>
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
                  <IonIcon
                    size="large"
                    color="danger"
                    icon={bookmarkOutline}
                  />
                </IonButton>
              </div>
              <div className="RecentProducts">
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
                      <img src="/assets/img/editIcon.png" alt="Images" />
                      <IonLabel>Snacks</IonLabel>
                    </div>
                    <div className="ProfileRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={person}
                        slot="start"
                      >
                      </IonIcon>
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
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default MyProfile