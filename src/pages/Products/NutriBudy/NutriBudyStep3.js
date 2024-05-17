import React from 'react'
import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItemOption, IonItemOptions, IonItemSliding, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react"
import { useEffect, useState } from "react";
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons";

const NutriBudyStep3 = () => {
    return (
        <IonGrid className="ion-padding-bottom">
            <IonRow>
                <IonCol size="12" className="ion-no-padding">
                    <h3>Taste Preferences</h3>
                    <div className="progressBar">
                        <div className='flex ion-justify-content-between ion-align-items-center'>
                        <IonLabel>Sweet</IonLabel>
                        <IonLabel>20%</IonLabel>
                        </div>
                        <IonRange min={0} max={100} color="success" className="ion-no-padding range-custom-height" >
                        </IonRange>
                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                            <span>I don’t like spicy food</span>
                            <span>I love spicy food</span>
                        </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                    <div className='flex ion-justify-content-between ion-align-items-center'>
                        <IonLabel>Sour</IonLabel>
                        <IonLabel>50%</IonLabel>
                        </div>
                        <IonRange min={0} max={100} color="warning" className="ion-no-padding range-custom-height" > </IonRange>
                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                            <span>I don’t like spicy food</span>
                            <span>I love spicy food</span>
                        </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                    <div className='flex ion-justify-content-between ion-align-items-center'>
                        <IonLabel>Bitter</IonLabel>
                        <IonLabel>40%</IonLabel>
                        </div>
                        <IonRange min={0} max={100} color="primary" className="ion-no-padding range-custom-height"  > </IonRange>
                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                            <span>I don't eat sweets</span>
                            <span>I love sweets alot</span>
                        </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                    <div className='flex ion-justify-content-between ion-align-items-center'>
                        <IonLabel>Salty</IonLabel>
                        <IonLabel>30%</IonLabel>
                        </div>
                        <IonRange min={0} max={100} color="primary" className="ion-no-padding range-custom-height" > </IonRange>
                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                            <span>I like my food bland</span>
                            <span>I love salty food</span>
                        </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                        <div className='flex ion-justify-content-between ion-align-items-center'>
                        <IonLabel>Umami/Savoury</IonLabel>
                        <IonLabel>10%</IonLabel>
                        </div>
                        <IonRange min={0} max={100} color="warning" className="ion-no-padding range-custom-height"></IonRange>
                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                            <span>I don’t like savoury food</span>
                            <span>I love savoury food</span>
                        </div>
                    </div>
                </IonCol>
                <IonCol size="12" className="ion-padding-top">
                    <h3>Diet Preferences (If Any)</h3>
                    <div className="flex DietPreFerns">
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg51" />
                            <label for="myCheckImg51">
                                <img src="./assets/img/imagesketo.png" alt="" className="ProfileImg" />
                                <IonText>Keto</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg52" />
                            <label for="myCheckImg52">
                                <img src="./assets/img/imagesGluten.jpg" alt="" className="ProfileImg" />
                                <IonText>Gluten Free</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg53" />
                            <label for="myCheckImg53">
                                <img src="./assets/img/pngwing.png" alt="" className="ProfileImg" />
                                <IonText>Jain Friedndly</IonText>
                            </label>
                        </div>
                    </div>
                </IonCol>
                <IonCol size="12" className="ion-padding-top">
                    <h3>Which kind of food products would You like NB to recommend you?</h3>
                    <div className="AllergyBox">
                    <div className="ImgIcon">
                            <input type="checkbox" id="myCheck2" />
                            <label for="myCheck2">
                            <img src="./assets/img/No PreservativesWhite_Icons.png" alt="" className="ProfileImg" />
                                <IonText>No Preservative and Chemicals</IonText>
                            </label>
                        </div>
                        <div className="ImgIcon">
                            <input type="checkbox" id="myCheck4" />
                            <label for="myCheck4">
                            <img src="./assets/img/No added sugarWhite_Icons.png" alt="" className="ProfileImg" />
                                <IonText>No Added Sugar</IonText>
                            </label>
                        </div>
                        <div className="ImgIcon">
                            <input type="checkbox" id="myCheck3" />
                            <label for="myCheck3">
                            <img src="./assets/img/All Natural OnlyWhite_Icons.png" alt="" className="ProfileImg" />
                                <IonText>All Natural Only</IonText>
                            </label>
                        </div>
                        
                        <div className="ImgBtn">
                            <IonButton fill="clear">
                                <IonIcon size="large" icon={add} />
                            </IonButton>
                        </div>
                    </div>
                </IonCol>
                <IonCol size="12"  className='ion-padding-vertical'>
                    <div class="uploadPicture-button">
                        <label for="" class="UploadBtn">Upload Picture</label>
                        <input type="file" id="AllergyPicture" accept="image/*" />
                        <IonInput type="text"></IonInput>
                    </div>
                </IonCol>
                <IonCol>
                    <div className="SkipBtn ion-padding-vertical ">
                        <IonButton className="Orangebtn" fill="clear">SAVE</IonButton>
                        <IonButton>Skip Process</IonButton>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default NutriBudyStep3