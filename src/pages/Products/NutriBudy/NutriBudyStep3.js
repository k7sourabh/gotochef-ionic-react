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
                        <IonLabel>Sweet</IonLabel>
                        <IonRange min={0} max={100} color="success" className="ion-no-padding range-custom-height" >
                        </IonRange>
                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                            <span>I don’t like spicy food</span>
                            <span>I love spicy food</span>
                        </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                        <IonLabel>Sour</IonLabel>
                        <IonRange min={0} max={100} color="warning" className="ion-no-padding range-custom-height" > </IonRange>
                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                            <span>I don’t like spicy food</span>
                            <span>I love spicy food</span>
                        </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                        <IonLabel>Bitter</IonLabel>
                        <IonRange min={0} max={100} color="primary" className="ion-no-padding range-custom-height"  > </IonRange>
                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                            <span>I don't eat sweets</span>
                            <span>I love sweets alot</span>
                        </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                        <IonLabel>Salty</IonLabel>
                        <IonRange min={0} max={100} color="primary" className="ion-no-padding range-custom-height" > </IonRange>
                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                            <span>I like my food bland</span>
                            <span>I love salty food</span>
                        </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                        <IonLabel>Umami/Savoury</IonLabel>
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
                            <IonButton fill="clear">
                                <IonCheckbox> </IonCheckbox>
                                <img src="./assets/img/imagesketo.png" alt="" className="ProfileImg" />
                            </IonButton>
                            <span className="ion-no-padding">Lactose Lorem</span>
                        </div>

                        <div className="FillCheckBox ImgCheck">
                            <IonButton fill="clear">
                                <IonCheckbox> </IonCheckbox>
                                <img src="./assets/img/imagesGluten.jpg" alt="" className="ProfileImg" />
                            </IonButton>
                            <IonText>Gluten Free</IonText>
                        </div>
                    </div>
                </IonCol>
                <IonCol size="12" className="ion-padding-top">
                    <h3>Which kind of food products would You like NB to recommend you?</h3>
                    <div className="AllergyBox">
                        <div className="ImgIcon">
                            <IonCheckbox id="icon1"></IonCheckbox>
                            <IonLabel for="icon1">
                                <IonIcon size="large" fill="clear" icon={sunnyOutline} />
                            </IonLabel>
                            <IonTitle className="ion-no-padding">Lactose</IonTitle>
                        </div>
                        <div className="ImgIcon">
                            <IonCheckbox id="icon2"></IonCheckbox>
                            <IonLabel for="icon2">
                                <IonIcon size="large" fill="clear" icon={sunnyOutline} />
                            </IonLabel>
                            <IonTitle className="ion-no-padding">Lactose</IonTitle>
                        </div>
                        <div className="ImgIcon">
                            <IonCheckbox id="icon3"></IonCheckbox>
                            <IonLabel for="icon3">
                                <IonIcon size="large" fill="clear" icon={sunnyOutline} />
                            </IonLabel>
                            <IonTitle className="ion-no-padding">Lactose</IonTitle>
                        </div>
                        <div className="ImgIcon">
                            <IonCheckbox id="icon4"></IonCheckbox>
                            <IonLabel for="icon4">
                                <IonIcon size="large" fill="clear" icon={sunnyOutline} />
                            </IonLabel>
                            <IonTitle className="ion-no-padding">Lactose</IonTitle>
                        </div>

                        <div className="ImgIcon">
                            <IonButton fill="clear" >
                                <IonIcon size="large" icon={add} className="Orangebtn" />
                            </IonButton>
                            <IonTitle className="ion-no-padding">Lactose</IonTitle>
                        </div>

                    </div>
                </IonCol>
                <IonCol size="12">
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