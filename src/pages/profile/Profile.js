import { IonCol, IonGrid, IonPage, IonContent, IonRow, IonImg, IonText, IonTitle, IonList, IonLabel, IonItem } from "@ionic/react";
import Header from "../../components/Header";
const Profile = () => {
    return (
        <IonPage>
            <Header />
            <IonContent >

                <IonGrid className="profile-content">
                    <IonRow>
                        <IonCol >
                            <div className="profileImg">
                                <img src="./assets/img/img-person.jpg" alt="" />
                            </div>
                           
                            <div class="image-upload">
                                <label for="file-input" className="EditImg">
                                <img src="./assets/img/edit.png" alt="" />
                                </label>

                                <input id="file-input" type="file" />
                            </div>
                            <IonLabel>
                                <h1>Member Since</h1>
                                <h5>5 may,2023</h5>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonLabel className="profile_test">
                                <h1>TEST LAST NAME</h1>
                                <h4><img src="./assets/img/Mysmart.png" alt="" />Explorer<span>(level1)</span></h4>
                            </IonLabel>
                        </IonCol>

                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonLabel className="profile_test">
                                <h4><img src="./assets/img/location-icon.jpg" alt="" />AKOLA</h4>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow className="ion-padding-top">
                        <IonCol className="Profile-list">
                            <IonLabel>
                                <h3>Reviews</h3>
                                <p>0</p>
                            </IonLabel>
                            <IonLabel>
                                <h3>Recipes</h3>
                                <p>0</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow >
                        <IonCol className="Profile-list" >
                            <IonLabel>
                                <h3>Followers</h3>
                                <p>0</p>
                            </IonLabel>

                            <IonLabel>
                                <h3>Following</h3>
                                <p>0</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow >
                        <IonCol className="Profile-list last-child">
                            <IonLabel>
                                <h3>Badges Earned</h3>
                                <p>0</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    )
}

export default Profile;