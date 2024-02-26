import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle } from '@ionic/react'
import React from 'react'
import Header from '../../components/Header'

const LifeStyleSetting = () => {
    return (
        <IonPage>
            {/* <Header /> */}
            <IonContent>
            <IonHeader className="TitleHead bottom-shadow">
                  <IonButton className="backBtn" fill="clear" routerLink="/profile">
                     <i class="material-icons dark">west</i>
                  </IonButton>
                  <IonTitle color="dark">Life Style Setting</IonTitle>
               </IonHeader>
                <IonGrid className='ion-padding-horizontal'>
                    <h3>Health</h3>
                    <IonRow className='d-flex ion-justify-content-center'>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check1" />
                                <label for="Check1">
                                    <img src="./assets/img/imagesketo.png" alt="" className="ProfileImg" />
                                    <IonText>Lactose Lorem</IonText>
                                </label>
                            </div>
                            </IonCol>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check2" />
                                <label for="Check2">
                                    <img src="./assets/img/Liver.png" alt="" className="ProfileImg" />
                                    <IonText>Liver</IonText>
                                </label>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow className='d-flex ion-justify-content-center'>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check3" />
                                <label for="Check3">
                                    <img src="./assets/img/heart.png" alt="" className="ProfileImg" />
                                    <IonText>Lactose Lorem</IonText>
                                </label>
                            </div>
                            </IonCol>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check4" />
                                <label for="Check4">
                                    <img src="./assets/img/kidney.png" alt="" className="ProfileImg" />
                                    <IonText>Liver</IonText>
                                </label>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid className='ion-padding-horizontal'>
                    <h3>Activity</h3>
                   
                    <IonRow className='d-flex ion-justify-content-center'>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check13" />
                                <label for="Check13">
                                    <img src="./assets/img/Gym.jpg" alt="" className="ProfileImg" />
                                    <IonText className='img-text'>GYM / STRENGTH</IonText>
                                </label>
                            </div>
                            </IonCol>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check15" />
                                <label for="Check15">
                                    <img src="./assets/img/runners.jpg" alt="" className="ProfileImg" />
                                    <IonText>RUNNING / ENDURANCE</IonText>
                                </label>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow className='d-flex ion-justify-content-center'>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check16" />
                                <label for="Check16">
                                    <img src="./assets/img/longjobs.jpg" alt="" className="ProfileImg" />
                                    <IonText className='img-text'>LONG SITTING JOB</IonText>
                                </label>
                            </div>
                            </IonCol>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check17" />
                                <label for="Check17">
                                    <img src="./assets/img/activejob.jpg" alt="" className="ProfileImg" />
                                    <IonText>ACTIVE JOB</IonText>
                                </label>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow className='d-flex ion-justify-content-center'>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check18" />
                                <label for="Check18">
                                    <img src="./assets/img/homemaker.png" alt="" className="ProfileImg" />
                                    <IonText className='img-text'>HOME MAKER</IonText>
                                </label>
                            </div>
                            </IonCol>
                        <IonCol size='6'>
                            <div lines='none' className='LifeStyle'>
                                <input type="checkbox" id="Check19" />
                                <label for="Check19">
                                    <img src="./assets/img/student.png" alt="" className="ProfileImg" />
                                    <IonText>STUDENT</IonText>
                                </label>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton>Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default LifeStyleSetting