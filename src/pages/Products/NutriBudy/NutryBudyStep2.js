import React from 'react'
import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItemOption, IonItemOptions, IonItemSliding, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react"
import { useEffect, useState } from "react";
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons";

const NutryBudyStep2 = () => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol size="12">
                    <div>
                        <h3>
                            Tell us 3 Ingredients you eat or love
                        </h3>
                        <div className="N-profileInput" >
                            <IonLabel>Ingredient 1</IonLabel>
                            <IonInput
                                type="text"
                                label="Default input"
                                placeholder="Enter your Name"
                            ></IonInput>
                        </div>
                        <div className="N-profileInput" >
                            <IonLabel >Ingredient 1</IonLabel>
                            <IonInput
                                type="text"
                                label="Default input"
                                placeholder="Enter your Name"
                            ></IonInput>
                        </div>
                        <IonButton className="AddToFoodSetting ion-margin-vertical flex" size="default" shape="default" fill="outline">
                            <IonIcon slot="end" size="small" icon={add} />
                        </IonButton>
                    </div>
                </IonCol>
                <IonCol size="12">
                    <div className="">
                        <h3>
                            Tell us 2 ingredients you wish to avoid
                        </h3>
                        <div className="N-profileInput" >
                            <IonLabel>Ingredient 1</IonLabel>
                            <IonInput
                                type="text"
                                label="Default input"
                                placeholder="Enter your Name"
                            ></IonInput>
                        </div>
                        <div className="N-profileInput" >
                            <IonLabel >Ingredient 1</IonLabel>
                            <IonInput
                                type="text"
                                label="Default input"
                                placeholder="Enter your Name"
                            ></IonInput>
                        </div>
                        <IonButton className="AddToFoodSetting ion-margin-vertical flex" size="default" shape="default" fill="outline">
                            <IonIcon slot="end" size="small" icon={add} />
                        </IonButton>
                    </div>
                </IonCol>
                <IonCol size="12">
                    <div className="">
                        <h3>
                            Allergy Setup
                        </h3>
                        <div className="AllergyBox ion-padding-vertical">
                            <div className="ImgIcon">
                                <IonCheckbox id="icons1"></IonCheckbox>
                                <IonLabel for="icons1">
                                    <IonIcon size="large" fill="clear" icon={sunnyOutline} />
                                </IonLabel>
                                <IonTitle className="ion-no-padding">Lactose</IonTitle>
                            </div>
                            <div className="ImgIcon">
                                <IonCheckbox id="icons2"></IonCheckbox>
                                <IonLabel for="icons2">
                                    <IonIcon size="large" fill="clear" icon={sunnyOutline} />
                                </IonLabel>
                                <IonTitle className="ion-no-padding">Lactose</IonTitle>
                            </div>
                            <div className="ImgIcon">
                                <IonCheckbox id="icons3"></IonCheckbox>
                                <IonLabel for="icons3">
                                    <IonIcon size="large" fill="clear" icon={sunnyOutline} />
                                </IonLabel>
                                <IonTitle className="ion-no-padding">Lactose</IonTitle>
                            </div>
                            <div className="ImgIcon">
                                <IonCheckbox id="icons4"></IonCheckbox>
                                <IonLabel for="icons4">
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

export default NutryBudyStep2