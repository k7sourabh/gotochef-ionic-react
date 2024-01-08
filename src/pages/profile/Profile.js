import {IonSegment,IonSegmentButton,IonCol, IonGrid, IonPage, IonContent, IonRow,IonText,  IonList, IonLabel, IonItem } from "@ionic/react";
import Header from "../../components/Header";
import {useState } from "react";



const Profile = () => {
    const [selectedTab, setSelectedTab] = useState("Personal");
    console.log("selectedTab", selectedTab)
    const handleTabChange = (event) => {
      setSelectedTab(event.detail.value);
    };
  
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid>
                    <IonRow className="profile-top-bg">

                    </IonRow>
                    <IonRow  className="profile-content profileSpace">
                            <div className="profileImg">
                                {/* <img src="./assets/img/img-person.jpg" alt="" /> */}
                                <img src="/assets/img/profile.jpg" alt="Images"></img>
                            </div>
                            <IonLabel >
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
                                  <div className="DashBoardImg"  routerLink="/exclusive-products">
                                  <img src="/assets/img/Mysmart.png" alt="Images"  className="personalimages" />
                                  <IonText>Dashboard</IonText>
                                  </div>
                              </IonCol>
                              <IonCol>
                              <div className="DashBoardImg">
                              <img src="/assets/img/Home.png" alt="Images"  className="personalimages"/>
                                  <IonText>Dashboard</IonText>
                                  </div>
                              </IonCol>
                              <IonCol>
                              <div className="DashBoardImg">
                              <img src="/assets/img/Cart.png" alt="Images"   className="personalimages"/>
                                  <IonText>Dashboard</IonText>
                                  </div>
                              </IonCol>
                            </IonRow>
                            
                              <IonRow className="">
                              <IonCol>
                                  <div className="DashBoardImg">
                                  <img src="/assets/img/Mysmart.png" alt="Images" className="personalimages" />
                                  <IonText>Dashboard</IonText>
                                  </div>
                              </IonCol>
                              <IonCol>
                              <div className="DashBoardImg">
                              <img src="/assets/img/Home.png" alt="Images" className="personalimages" />
                                  <IonText>Dashboard</IonText>
                                  </div>
                              </IonCol>
                              <IonCol>
                              <div className="DashBoardImg">
                              <img src="/assets/img/Cart.png" alt="Images" className="personalimages" />
                                  <IonText>Dashboard</IonText>
                                  </div>
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