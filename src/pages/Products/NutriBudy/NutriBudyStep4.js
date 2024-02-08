import React from 'react'
import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItemOption, IonItemOptions, IonItemSliding, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react"
import { useEffect, useState } from "react";
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons"; 

const NutriBudyStep4 = () => {
  return (
    <IonGrid className="ion-padding-bottom">
        <IonRow>
            <IonCol size="12">
                <h3>Health</h3>
                <div className="flex DietPreFerns">

                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images1"></IonCheckbox>
                        <IonLabel for="images1">
                            <img src="./assets/img/Cholesterol.png" alt="" className="ProfileImg" />
                            <IonText>Diabetics</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images2"></IonCheckbox>
                        <IonLabel for="images2">
                            <img src="./assets/img/heart.png" alt="" className="ProfileImg" />
                            <IonText>Kidney</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images3"></IonCheckbox>
                        <IonLabel for="images3">
                            <img src="./assets/img/runing.png" alt="" className="ProfileImg" />
                            <IonText>Cholesterol</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images4"></IonCheckbox>
                        <IonLabel for="images4">
                            <img src="./assets/img/Liver.png" alt="" className="ProfileImg" />
                            <IonText>Liver</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images5"></IonCheckbox>
                        <IonLabel for="images5">
                            <img src="./assets/img/Obese.png" alt="" className="ProfileImg" />
                            <IonText>Obese</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images6"></IonCheckbox>
                        <IonLabel for="images6">
                            <img src="./assets/img/kidney.png" alt="" className="ProfileImg" />
                            <IonText>Heart</IonText>
                        </IonLabel>
                    </div>
                </div>
            </IonCol>
            <IonCol size="12">
                <h3>Activity</h3>
                <div className="flex DietPreFerns">
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images"></IonCheckbox>
                        <IonLabel for="images">
                            <img src="./assets/img/strength-icon.webp" alt="" className="ProfileImg" />
                            <IonText>Gym / Strength</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images"></IonCheckbox>
                        <IonLabel for="images">
                            <img src="./assets/img/runing.png" alt="" className="ProfileImg" />
                            <IonText>Running / Endurance</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images"></IonCheckbox>
                        <IonLabel for="images">
                            <img src="./assets/img/profession-working.webp" alt="" className="ProfileImg" />
                            <IonText>Long Sitting Job</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images"></IonCheckbox>
                        <IonLabel for="images">
                            <img src="./assets/img/system.png" alt="" className="ProfileImg" />
                            <IonText>Student</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images"></IonCheckbox>
                        <IonLabel for="images">
                            <img src="./assets/img/shoping.png" alt="" className="ProfileImg" />
                            <IonText>Activity Job</IonText>
                        </IonLabel>
                    </div>
                    <div className="FillCheckBox ImgCheck">
                        <IonCheckbox id="images"></IonCheckbox>
                        <IonLabel for="images">
                            <img src="./assets/img/education.png" alt="" className="ProfileImg" />
                            <IonText>Home Maker</IonText>
                        </IonLabel>
                    </div>
                </div>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol size="12">
                <h5>Tell us which of these statements suit your current life situation the best</h5>
                <IonItem >
                    <IonLabel className="StatementInfo">I am working professional, who has limited time to focus on health.</IonLabel>
                    <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
                </IonItem>
                <IonItem >
                    <IonLabel className="StatementInfo">I am mother who has a career and kid(s) to focus on.</IonLabel>
                    <IonCheckbox></IonCheckbox>
                </IonItem>
                <IonItem >
                    <IonLabel className="StatementInfo">I am an active sports person. No matter how busy I am, I do play a sport or workout frequently.</IonLabel>
                    <IonCheckbox></IonCheckbox>
                </IonItem>
                <IonItem >
                    <IonLabel className="StatementInfo">I live away from family and have to do all the cooking either by myself or my domestic help does it.</IonLabel>
                    <IonCheckbox></IonCheckbox>
                </IonItem>
                <IonItem>
                    <IonLabel className="StatementInfo">I am studying and do not workout or play a sport.</IonLabel>
                    <IonCheckbox></IonCheckbox>
                </IonItem>
                <IonItem >
                    <IonLabel className="StatementInfo">I am focussed on my health and buy only healthy food products.</IonLabel>
                    <IonCheckbox></IonCheckbox>
                </IonItem>
                <IonItem >
                    <IonLabel className="StatementInfo">I am homemaker and love to bake.</IonLabel>
                    <IonCheckbox></IonCheckbox>
                </IonItem>
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

export default NutriBudyStep4