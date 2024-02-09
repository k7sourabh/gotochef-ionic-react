import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle } from '@ionic/react'
import React from 'react'
import Header from '../../components/Header'

const SubmitArticals = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                        <i class="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">Submit Articals</IonTitle>
                </IonHeader>
                <IonGrid className='ion-padding-horizontal'>
                    <IonRow>
                        <IonCol>
                            <div className="N-profileInput">
                                <IonInput
                                    className="ion-margin-vertical"
                                    name="text"
                                    type="text"
                                    label="Default input"
                                    placeholder="Title"
                                ></IonInput>
                                <IonInput
                                    className="ion-margin-vertical"
                                    name="text"
                                    type="text"
                                    label="Default input"
                                    placeholder="Intro Text"
                                ></IonInput>
                                <IonTextarea label="Regular textarea" placeholder="Type something here"></IonTextarea>
                                <IonInput
                                    className="ion-margin-vertical"
                                    name="number"
                                    type="number"
                                    label="Default input"
                                    placeholder="Add Highlights"
                                ></IonInput>
                            </div>
                        </IonCol>
                        <IonCol size="12" className="flex flex-column  ion-align-items-center ion-justify-content-center">
                            <div className="EditprofileImg N-ProfileEdit">
                                <img src="./assets/img/img-person.jpg" alt="" className="ProfileImg" />
                                <div class="image-upload">
                                    <label for="file-input" className="N-EditProfile">
                                        <img src="./assets/img/edit.png" alt="" />
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
                            </div>
                        </IonCol>
                        <IonCol>
                            <div className="N-profileInput">
                                <IonInput
                                    className="ion-margin-vertical"
                                    name="text"
                                    type="text"
                                    label="Default input"
                                    placeholder="Add Tags"
                                ></IonInput>
                            </div>
                            <div className='N-profileInput'>
                                <IonSelect label="Default label" placeholder="Article Category">
                                    <IonSelectOption value="Tips">Tips and Techniques</IonSelectOption>
                                    <IonSelectOption value="HowTo">How To</IonSelectOption>
                                    <IonSelectOption value="Didyou">Did you Knows</IonSelectOption>
                                    <IonSelectOption value="Facts">Facts</IonSelectOption>
                                    <IonSelectOption value="Howit">How it grows</IonSelectOption>
                                    <IonSelectOption value="Inside">Inside India's Food Factories</IonSelectOption>
                                </IonSelect>
                            </div>
                            <div className='N-profileInput'>
                                <IonSelect label="Default label" placeholder="Article Section">
                                    <IonSelectOption value="1">Section1</IonSelectOption>
                                    <IonSelectOption value="2">Section2</IonSelectOption>
                                </IonSelect>
                            </div>
                            <div className="flex  ion-padding-top">
                                <IonButton>CANCEL</IonButton>
                                <IonButton className='ion-padding-start'>SUBMIT</IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default SubmitArticals