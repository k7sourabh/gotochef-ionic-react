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
                            <input type="checkbox" id="myCheckImg1" />
                            <label for="myCheckImg1">
                                <img src="./assets/img/Cholesterol.png" alt="" className="ProfileImg" />
                                <IonText>Gym / Strength</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg2" />
                            <label for="myCheckImg2">
                                <img src="./assets/img/glucose-meter.png" alt="" className="ProfileImg" />
                                <IonText>Gym / Strength</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg3" />
                            <label for="myCheckImg3">
                                <img src="./assets/img/Cholesterol.png" alt="" className="ProfileImg" />
                                <IonText>Gym / Strength</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg4" />
                            <label for="myCheckImg4">
                                <img src="./assets/img/Liver.png" alt="" className="ProfileImg" />
                                <IonText>Gym / Strength</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg5" />
                            <label for="myCheckImg5">
                                <img src="./assets/img/kidney.png" alt="" className="ProfileImg" />
                                <IonText>Gym / Strength</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg12" />
                            <label for="myCheckImg12">
                                <img src="./assets/img/Heart.png" alt="" className="ProfileImg" />
                                <IonText>Gym / Strength</IonText>
                            </label>
                        </div>

                    </div>
                </IonCol>
                <IonCol size="12">
                    <h3>Activity</h3>
                    <div className="flex DietPreFerns">
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg6" />
                            <label for="myCheckImg6">
                                <img src="./assets/img/strength-icon.webp" alt="" className="ProfileImg" />
                                <IonText>Gym / Strength</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg7" />
                            <label for="myCheckImg7">
                                <img src="./assets/img/runing.png" alt="" className="ProfileImg" />
                                <IonText>Running / Endurance</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg8" />
                            <label for="myCheckImg8">
                                <img src="./assets/img/profession-working.webp" alt="" className="ProfileImg" />
                                <IonText>Long Sitting Job</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg9" />
                            <label for="myCheckImg9">
                                <img src="./assets/img/system.png" alt="" className="ProfileImg" />
                                <IonText>Student</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg10" />
                            <label for="myCheckImg10">
                                <img src="./assets/img/shoping.png" alt="" className="ProfileImg" />
                                <IonText>Activity Job</IonText>
                            </label>
                        </div>
                        <div className="FillCheckBox ImgCheck">
                            <input type="checkbox" id="myCheckImg11" />
                            <label for="myCheckImg11">
                                <img src="./assets/img/education.png" alt="" className="ProfileImg" />
                                <IonText>Home Maker</IonText>
                            </label>
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
                    <IonItem  lines='none'>
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