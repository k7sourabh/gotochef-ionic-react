import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItemOption, IonItemOptions, IonItemSliding, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react"
import Header from "../../../components/Header"
import { useEffect, useState } from "react";
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonInput } from '@ionic/react';
import { IonProgressBar } from '@ionic/react';
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons";
import NutryBudyStep1 from "./NutryBudyStep1";
import NutryBudyStep2 from "./NutryBudyStep2";
import NutriBudyStep4 from "./NutriBudyStep4";
import NutriBudyStep3 from "./NutriBudyStep3";

const NutriBudy = () => {
    const [selectedTab, setSelectedTab] = useState("step1");
    const handleTabChange = (event) => {
        setSelectedTab(event.detail.value);
    };
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 0.01);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    if (progress > 1) {
        setTimeout(() => {
            setProgress(0);
        }, 1000);
    }

    return (

        <IonPage>
            {/* <Header /> */}
            <IonContent fullscreen>
                <IonHeader className="TitleHead bottom-shadow">
                    <IonButton className="backBtn" fill="clear" routerLink="/home">
                        <i class="material-icons dark">west</i>
                    </IonButton>
                    <IonTitle color="dark">NutriBuddy</IonTitle>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div>
                                <div className="ion-padding" slot="content">
                                    <IonSegment
                                        scrollable
                                        value={selectedTab}
                                        onIonChange={handleTabChange}
                                        className="personalTab"
                                    >
                                        <IonSegmentButton value="step1">
                                            <IonLabel>Step1</IonLabel>
                                        </IonSegmentButton>
                                        <IonSegmentButton value="step2">
                                            <IonLabel>Step2</IonLabel>
                                        </IonSegmentButton>
                                        <IonSegmentButton value="step3">
                                            <IonLabel>Step3</IonLabel>
                                        </IonSegmentButton>
                                        <IonSegmentButton value="step4">
                                            <IonLabel>Step4</IonLabel>
                                        </IonSegmentButton>
                                    </IonSegment>
                                    {selectedTab === "step1" && (
                                       <NutryBudyStep1/>
                                    )}
                                    {selectedTab === "step2" && (
                                        <NutryBudyStep2/>
                                    )}

                                    {selectedTab === "step3" && (
                                      <NutriBudyStep3/>
                                    )}
                                    {selectedTab === "step4" && (
                                        <NutriBudyStep4 />
                                    )}
                                </div>
                            </div>


                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>

    )
}
export default NutriBudy