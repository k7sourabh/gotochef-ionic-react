import { IonSegment, IonSegmentButton, IonCol, IonGrid, IonPage, IonContent, IonRow, IonText, IonList, IonLabel, IonItem, IonButton, IonIcon, IonHeader, IonTitle } from "@ionic/react";
import Header from "../../components/Header";
import { useState } from "react";
import { arrowBack } from "ionicons/icons";



const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("Personal");
  console.log("selectedTab", selectedTab)
  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  return (
    <IonPage>
      <Header />
      <IonContent className="profilepage">
        <IonHeader className="TitleHead">
          <IonButton className="backBtn" fill="clear" routerLink="/home">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">My Profile</IonTitle>
        </IonHeader>

        <IonGrid class="ion-no-padding">
          <IonRow className="profile-top-bg"></IonRow>
          <IonRow className="profile-content ion-margin-horizontal">
            <div className="profileImg">
              <img src="/assets/img/profile.jpg" alt="Images"></img>
            </div>
            <IonLabel >
              <h1>Chiara Bivitagirni</h1>
              <h5>Passionate</h5>
            </IonLabel>
          </IonRow>
          <IonRow className="Profile-bio ion-margin-top ion-margin-horizontal">
            <IonCol>
              <div className="profileBioText">
                <IonText>Oct 13,2020</IonText>
                <IonText>joinered</IonText>
              </div>
            </IonCol>
            <IonCol>
              <div className="profileBioText">
                <IonText>95</IonText>
                <IonText>Points</IonText>
              </div>
            </IonCol>
            <IonCol>
              <div className="profileBioText">
                <IonText>1.2k</IonText>
                <IonText>Followers</IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-no-padding">
          <IonRow className="Profile-tab ion-margin">
            <IonCol size="12">
              <IonSegment
                value={selectedTab}
                onIonChange={handleTabChange}
                className="personalTab"
              >
                <IonSegmentButton value="Personal">
                  <IonLabel>Personal</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="SavedContent">
                  <IonLabel>Saved Content</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Leaderboard">
                  <IonLabel>Leaderboard</IonLabel>
                </IonSegmentButton>
              </IonSegment>

              {selectedTab === "Personal" && (
                <IonGrid>
                  <IonRow className="">
                    <IonCol size="4">
                      <IonButton fill="clear" routerLink="/dashboard" className='CardBtn'>
                        <div className="DashBoardImg">
                          <img src="/assets/img/dashbord.png" alt="Images" className="personalimages" />
                          <IonText>Dashboard</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className='CardBtn'>
                        <div className="DashBoardImg">
                          <img src="/assets/img/addproduct.png" alt="Images" className="personalimages" />
                          <IonText>Add Product</IonText>
                        </div>
                      </IonButton>
                    </IonCol>
                    <IonCol size="4">
                      <IonButton fill="clear" className='CardBtn'>
                        <div className="DashBoardImg">
                          <img src="/assets/img/ingrediant.png" alt="Images" className="personalimages" />
                          <IonText>Add Ingredient</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" routerLink="/recipe-page" className='CardBtn'>
                        <div className="DashBoardImg" >
                          <img src="/assets/img/Recipes.png" alt="Images" className="personalimages" />
                          <IonText>My Recipes</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className='CardBtn'>
                        <div className="DashBoardImg">
                          <img src="/assets/img/Articles.png" alt="Images" className="personalimages" />
                          <IonText>My Articles</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className='CardBtn'>
                        <div className="DashBoardImg">
                          <img src="/assets/img/ProfileSettings.png" alt="Images" className="personalimages" />
                          <IonText>Profile Settings</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className='CardBtn'>
                        <div className="DashBoardImg">
                          <img src="/assets/img/PasswordImg.png" alt="Images" className="personalimages" />
                          <IonText>Change Password</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className='CardBtn'>
                        <div className="DashBoardImg">
                          <img src="/assets/img/Food.png" alt="Images" className="personalimages" />
                          <IonText>Food Settings</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className='CardBtn'>
                        <div className="DashBoardImg">
                          <img src="/assets/img/Lifestyle.png" alt="Images" className="personalimages" />
                          <IonText>Lifestyle Settings</IonText>
                        </div>
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>

              )}
              {selectedTab === "SavedContent" && (
                <div>sss</div>
              )}
              {selectedTab === "Leaderboard" && (
                <div>jfjfkfjjfj</div>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  )
}

export default Profile;