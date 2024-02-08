import React from 'react'
import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItemOption, IonItemOptions, IonItemSliding, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react"
import { useEffect, useState } from "react";
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons";

const NutryBudyStep1 = () => {
    return (
        <IonGrid className="ion-padding-bottom">
            <IonRow>
                <IonCol size="12">
                    <h4>Personal Setting</h4>
                </IonCol>
                <IonCol size="12" className="ion-padding-bottom">
                    <div className="">
                        <IonRange min={0} max={100} className="range-custom-height ion-no-padding" ></IonRange>
                        <IonLabel slot="end" className="RangeTypelabel">100% Complete</IonLabel>
                    </div>
                    <div className="N-profileInput">
                        <IonInput
                            className="ion-margin-vertical"
                            name="text"
                            type="text"
                            label="Default input"
                            placeholder="Enter your Name"
                        ></IonInput>
                        <IonInput
                            className="ion-margin-vertical"
                            name="text"
                            type="text"
                            label="Default input"
                            placeholder="Enter your Last Name"
                        ></IonInput>
                        <IonInput
                            className="ion-margin-vertical"
                            name="email"
                            type="email"
                            label="Default input"
                            placeholder="Enter your Email"
                        ></IonInput>
                        <IonInput
                            className="ion-margin-vertical"
                            name="number"
                            type="number"
                            label="Default input"
                            placeholder="Enter your Phone Number"
                        ></IonInput>
                        <IonButton fill="clear" shape="round">Send OTP</IonButton>
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
                <IonCol className="flex flex-column  ion-align-items-center ion-justify-content-center ion-padding-top">
                    <IonItem lines="none" className="N-VegNon">
                        <IonLabel>Veg</IonLabel>
                        <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
                    </IonItem>
                    <IonItem lines="none" className="N-VegNon">
                        <IonLabel>Non-Veg</IonLabel>
                        <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
                    </IonItem>
                    <IonItem lines="none" className="N-VegNon">
                        <IonLabel >Egg</IonLabel>
                        <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default NutryBudyStep1
