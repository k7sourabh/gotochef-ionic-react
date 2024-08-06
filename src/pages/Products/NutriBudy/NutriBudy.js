import { IonButton, IonCol, IonContent,  IonGrid, IonHeader,IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle } from "@ionic/react"
import { getApiDataWithAuth, postApiDataWithAuth } from "../../../utils/Utils";
import { useEffect, useState } from "react";
import {  IonLabel } from '@ionic/react';
import { IonProgressBar } from '@ionic/react';
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

    useEffect(()=>{
        stateList();
    },[]);

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
                    <IonRow className="ion-padding-horizontal ion-padding-top">
                        <IonCol>
                        <div className="">
                      {/* <IonRange
                        min={0}
                        max={100}
                        className="range-custom-height ion-no-padding"
                      ></IonRange> */}
                       <IonProgressBar  value="0.5"></IonProgressBar> 
                      <IonLabel slot="end" className="RangeTypelabel">
                        100% Complete
                      </IonLabel>
                    </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div>
                                <div  slot="content">
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
                                       <NutryBudyStep1 setSelectedTab={setSelectedTab}/>
                                    )}
                                    {selectedTab === "step2" && (
                                        <NutryBudyStep2 setSelectedTab={setSelectedTab}/>
                                    )}

                                    {selectedTab === "step3" && (
                                      <NutriBudyStep3 setSelectedTab={setSelectedTab}/>
                                    )}
                                    {selectedTab === "step4" && (
                                        <NutriBudyStep4 setSelectedTab={setSelectedTab}/>
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



 export const stateList = async () => {
    try {
     const response = await getApiDataWithAuth("/getNutribuddy");
      if (response?.status === 200) {
  
        console.log("NUTRI",response.data.data);
        localStorage.setItem("nutriresponse",JSON.stringify(response));
       
    }
    } catch (err) {
      console.error(err);
    }

  };

