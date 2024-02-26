import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTextarea, IonTitle } from '@ionic/react'
import React from 'react'
import Header from '../../components/Header'

const AddProduct = () => {
  return (
   <IonPage>
    {/* <Header/> */}
    <IonContent fullscreen>
    <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/profile">
                        <i class="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">ADD PRODUCT</IonTitle>
                </IonHeader>
                <IonGrid className='ion-padding-horizontal'>
                    <IonRow>
                        <IonCol>
                            <div className="N-profileInput">
                               
                                <IonLabel>Product Name*</IonLabel>
                                <IonInput
                                    className="ion-margin-bottom"
                                    name="text"
                                    type="text"
                                    label="Default input"
                                    placeholder="Product Name"
                                ></IonInput>
                               
                                <IonLabel>Brand Name*</IonLabel>
                                <IonInput
                                    className="ion-margin-vertical"
                                    name="text"
                                    type="text"
                                    label="Default input"
                                    placeholder="Brand Name"
                                ></IonInput>

                               
                                <IonLabel>Select Main Category*</IonLabel>
                                <IonSelect label="Default label" placeholder="Select Main Category" className='ion-margin-top'>
                                    <IonSelectOption value="Tips">Tips and Techniques</IonSelectOption>
                                    <IonSelectOption value="HowTo">How To</IonSelectOption>
                                    <IonSelectOption value="Didyou">Did you Knows</IonSelectOption>
                                    <IonSelectOption value="Facts">Facts</IonSelectOption>
                                    <IonSelectOption value="Howit">How it grows</IonSelectOption>
                                    <IonSelectOption value="Inside">Inside India's Food Factories</IonSelectOption>
                                </IonSelect>
                            
                                <div className='N-profileInput'>
                                <IonLabel>Product Sub Category</IonLabel>
                                <IonSelect label="Default label" placeholder="Product Sub Category" className='ion-margin-top'>
                                    <IonSelectOption value="Tips">Tips and Techniques</IonSelectOption>
                                    <IonSelectOption value="HowTo">How To</IonSelectOption>
                                    <IonSelectOption value="Didyou">Did you Knows</IonSelectOption>
                                    <IonSelectOption value="Facts">Facts</IonSelectOption>
                                    <IonSelectOption value="Howit">How it grows</IonSelectOption>
                                    <IonSelectOption value="Inside">Inside India's Food Factories</IonSelectOption>
                                </IonSelect>
                            </div>
                            </div>
                        </IonCol>
                        <IonCol size="12" className="flex   ion-align-items-center ion-justify-content-center add-product-profile">
                            <div className="EditprofileImg N-ProfileEdit">
                                <img src="./assets/img/img-person.jpg" alt="" className="ProfileImg" />
                                <div class="image-upload">
                                    <label for="file-input" className="N-EditProfile">
                                        <img src="./assets/img/edit.png" alt="" />
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
                            </div>
                            <div className="EditprofileImg N-ProfileEdit">
                                <img src="./assets/img/img-person.jpg" alt="" className="ProfileImg" />
                                <div class="image-upload">
                                    <label for="file-input" className="N-EditProfile">
                                        <img src="./assets/img/edit.png" alt="" />
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
                            </div>
                            <div className="EditprofileImg N-ProfileEdit">
                                <img src="./assets/img/img-person.jpg" alt="" className="ProfileImg" />
                                <div class="image-upload">
                                    <label for="file-input" className="N-EditProfile">
                                        <img src="./assets/img/edit.png" alt="" />
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
                            </div>
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
                            <div className="flex  ion-padding-top">
                                <IonButton>CANCEL</IonButton>
                                <IonButton className='ion-padding-start'>SAVE & FINISH</IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
    </IonContent>
   </IonPage>
  )
}

export default  AddProduct
