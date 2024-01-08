import {
  IonCol,
  IonGrid,
  IonPage,
  IonContent,
  IonRow,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonCol,
  IonGrid,
  IonPage,
  IonContent,
  IonRow,
  IonText,
  IonLabel,
} from "@ionic/react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { getApiDataWithAuth } from "../../utils/Utils";
import Header from "../../components/Header";
import { useState } from "react";
const Profile = () => {
  const [userProfieData, setUserProfileData] = useState({});
  const [selectedTab, setSelectedTab] = useState("Personal");
  console.log("selectedTab", selectedTab);
  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  const userProfile = async () => {
    try {
      const response = await getApiDataWithAuth("/user-dashboard");
      console.log("userDash", response);
      setUserProfileData(response?.data);
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
      <IonContent>
        <IonGrid className="profile-content">
          <IonRow>
            <IonCol>
              <div className="profileImg">
                <img
                  src={
                    userProfieData &&
                    userProfieData?.user_dashboard?.user_form_data?.avatar
                  }
                  alt="product pic"
                  onError={(e) => {
                    e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                    e.target.src = "./assets/img/img-person.jpg"; // Placeholder image URL
                  }}
                />
              </div>
              <IonPage>
                <Header />
                <IonContent>
                  <IonGrid>
                    <IonRow className="profile-top-bg"></IonRow>
                    <IonRow className="profile-content profileSpace">
                      <div className="profileImg">
                        {/* <img src="./assets/img/img-person.jpg" alt="" /> */}
                        <img src="/assets/img/profile.jpg" alt="Images"></img>
                      </div>
                      <IonLabel>
                        <h1>Chiara Bivitagirni</h1>
                        <h5>Passionate</h5>
                      </IonLabel>
                      {/* <div class="image-upload">
                                <label for="file-input" className="EditImg">
                                <img src="./assets/img/edit.png" alt="" />
                                </label>
                                <input id="file-input" type="file" />
                            </div> */}
                    </IonRow>
                    <IonRow className="Profile-bio">
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
                    <IonRow className="Profile-tab">
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
                              <IonCol>
                                <div
                                  className="DashBoardImg"
                                  routerLink="/exclusive-products"
                                >
                                  <img
                                    src="/assets/img/Mysmart.png"
                                    alt="Images"
                                    className="personalimages"
                                  />
                                  <IonText>Dashboard</IonText>
                                </div>
                              </IonCol>
                              <IonCol>
                                <div className="DashBoardImg">
                                  <img
                                    src="/assets/img/Home.png"
                                    alt="Images"
                                    className="personalimages"
                                  />
                                  <IonText>Dashboard</IonText>
                                </div>
                              </IonCol>
                              <IonCol>
                                <div className="DashBoardImg">
                                  <img
                                    src="/assets/img/Cart.png"
                                    alt="Images"
                                    className="personalimages"
                                  />
                                  <IonText>Dashboard</IonText>
                                </div>
                              </IonCol>
                            </IonRow>

                            <IonRow className="">
                              <IonCol>
                                <div className="DashBoardImg">
                                  <img
                                    src="/assets/img/Mysmart.png"
                                    alt="Images"
                                    className="personalimages"
                                  />
                                  <IonText>Dashboard</IonText>
                                </div>
                              </IonCol>
                              <IonCol>
                                <div className="DashBoardImg">
                                  <img
                                    src="/assets/img/Home.png"
                                    alt="Images"
                                    className="personalimages"
                                  />
                                  <IonText>Dashboard</IonText>
                                </div>
                              </IonCol>
                              <IonCol>
                                <div className="DashBoardImg">
                                  <img
                                    src="/assets/img/Cart.png"
                                    alt="Images"
                                    className="personalimages"
                                  />
                                  <IonText>Dashboard</IonText>
                                </div>
                              </IonCol>
                            </IonRow>
                          </IonGrid>
                        )}
                        {selectedTab === "SavedContent" && <div>sss</div>}
                        {selectedTab === "Leaderboard" && <div>jfjfkfjjfj</div>}
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonContent>
              </IonPage>
              {/* ) } */}
              <div class="image-upload">
                <label for="file-input" className="EditImg">
                  <img src="./assets/img/edit.png" alt="" />
                </label>
                <input id="file-input" type="file" />
              </div>
              <IonLabel>
                <h1>Member Since</h1>
                <h5>
                  {!userProfieData?.user_dashboard?.user_form_data?.created_at
                    ? "01 january 1970"
                    : userProfieData?.user_dashboard?.user_form_data
                        ?.created_at}
                </h5>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel className="profile_test">
                <h1>
                  {userProfieData?.user_data?.first_name}{" "}
                  {userProfieData?.user_data?.last_name}
                </h1>
                <h4>
                  <img src="./assets/img/Mysmart.png" alt="" />
                  {userProfieData?.user_dashboard?.user_level}
                  <span>
                    (level {userProfieData?.user_dashboard?.user_level_rank})
                  </span>
                </h4>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel className="profile_test">
                <h4>
                  <img src="./assets/img/location-icon.jpg" alt="" />
                  {userProfieData && userProfieData?.user_data?.city}
                </h4>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow className="ion-padding-top">
            <IonCol className="Profile-list">
              <IonLabel>
                <h3>Reviews</h3>
                <p>{userProfieData?.user_dashboard?.total_review}</p>
              </IonLabel>
              <IonLabel>
                <h3>Recipes</h3>
                <p>{userProfieData?.user_dashboard?.total_recipes}</p>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="Profile-list">
              <IonLabel>
                <h3>Followers</h3>
                <p>{userProfieData?.user_dashboard?.userfollwower}</p>
              </IonLabel>

              <IonLabel>
                <h3>Following</h3>
                <p>{userProfieData?.user_dashboard?.userfollwoing}</p>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="Profile-list last-child">
              <IonLabel>
                <h3>Badges Earned</h3>
                <p>{userProfieData?.user_dashboard?.my_badges[0]}</p>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
