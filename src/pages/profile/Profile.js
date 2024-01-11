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
  IonButton,
  IonHeader,
  IonTitle,
} from "@ionic/react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getApiData } from "../../utils/Utils";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("Personal");
  const [userProfileData, setUserProfileData] = useState({});
  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  const userProfile = async () => {
    try {
      const response = await getApiData(`/user-dashboard`);
      setUserProfileData(response?.data?.user_dashboard?.user_form_data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userProfile();
  }, []);

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
              <img
                src={userProfileData?.avatar}
                alt="Images"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "/assets/img/img-placeholder.jpg";
                }}
              ></img>
            </div>
            <IonLabel>
              <h1>
                {userProfileData?.first_name} {userProfileData?.last_name}
              </h1>
              <h5>Passionate</h5>
            </IonLabel>
          </IonRow>
          <IonRow className="Profile-bio ion-margin-top ion-margin-horizontal">
            <IonCol>
              <div className="profileBioText">
                <IonText>
                  {userProfileData &&
                    userProfileData?.created_at?.split(" ")[0]}
                </IonText>
                <IonText>joinered</IonText>
              </div>
            </IonCol>
            <IonCol>
              <div className="profileBioText">
                <IonText>{userProfileData?.total_points}</IonText>
                <IonText>Points</IonText>
              </div>
            </IonCol>
            {/* <IonCol>
              <div className="profileBioText">
                <IonText>1.2k</IonText>
                <IonText>Followers</IonText>
              </div>
            </IonCol> */}
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
                      <IonButton
                        fill="clear"
                        routerLink="/dashboard"
                        className="CardBtn"
                      >
                        <div className="DashBoardImg">
                          <img
                            src="/assets/img/dashbord.png"
                            alt="Images"
                            className="personalimages"
                          />
                          <IonText>Dashboard</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    {/* <IonCol size="4">
                      <IonButton fill="clear" className="CardBtn">
                        <div className="DashBoardImg">
                          <img
                            src="/assets/img/addproduct.png"
                            alt="Images"
                            className="personalimages"
                          />
                          <IonText>Add Product</IonText>
                        </div>
                      </IonButton>
                    </IonCol> */}

                    <IonCol size="4">
                      <IonButton fill="clear" className="CardBtn" routerLink="/add-ingredient">
                        <div className="DashBoardImg">
                          <img
                            src="/assets/img/ingrediant.png"
                            alt="Images"
                            className="personalimages"
                          />
                          <IonText>Add Ingredient</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton
                        fill="clear"
                        routerLink="/my-recipe"
                        className="CardBtn"
                      >
                        <div className="DashBoardImg">
                          <img
                            src="/assets/img/Recipes.png"
                            alt="Images"
                            className="personalimages"
                          />
                          <IonText>My Recipes</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className="CardBtn" routerLink="/articals">
                        <div className="DashBoardImg">
                          <img
                            src="/assets/img/Articles.png"
                            alt="Images"
                            className="personalimages"
                          />
                          <IonText>My Articles</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className="CardBtn" routerLink="/edit-profile">
                        <div className="DashBoardImg">
                          <img
                            src="/assets/img/ProfileSettings.png"
                            alt="Images"
                            className="personalimages"
                          />
                          <IonText>Profile Settings</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className="CardBtn" routerLink="/change-password">
                        <div className="DashBoardImg">
                          <img
                            src="/assets/img/PasswordImg.png"
                            alt="Images"
                            className="personalimages"
                          />
                          <IonText>Change Password</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    {/* <IonCol size="4">
                      <IonButton fill="clear" className="CardBtn">
                        <div className="DashBoardImg">
                          <img
                            src="/assets/img/Food.png"
                            alt="Images"
                            className="personalimages"
                          />
                          <IonText>Food Settings</IonText>
                        </div>
                      </IonButton>
                    </IonCol>

                    <IonCol size="4">
                      <IonButton fill="clear" className="CardBtn">
                        <div className="DashBoardImg">
                          <img
                            src="/assets/img/Lifestyle.png"
                            alt="Images"
                            className="personalimages"
                          />
                          <IonText>Lifestyle Settings</IonText>
                        </div>
                      </IonButton>
                    </IonCol> */}
                  </IonRow>
                </IonGrid>
              )}
              {selectedTab === "SavedContent" && <div className="ion-padding">Coming Soon</div>}
              {selectedTab === "Leaderboard" && <div className="ion-padding">Coming Soon</div>}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
