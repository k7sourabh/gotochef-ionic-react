import React from 'react'
import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItemOption,   IonSpinner,IonItemOptions, IonItemSliding, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react"
import { useEffect, useState } from "react";
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { useIonToast } from "@ionic/react";
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons";
import { postApiDataWithAuth } from "../../../utils/Utils";
import { Field, Formik,Form} from 'formik';



const NutriBudyStep4 = ({stateList,nutridata}) => {
    const [present] = useIonToast();
    const [loader, setLoader] = useState(false);
    const [formValues, setFormValues] = useState({
        health: "",
        activity:"",
        focus_health:"",
      });

      useEffect(() => {
        setFormValues({
            health: nutridata?.data?.data?.health|| "",
            activity: nutridata?.data?.data?.activity || "",
            focus_health: nutridata?.data?.data?.focus_health || "",
          }); 
      }, [nutridata]);

      const handleSubmit=async(values)=>{
        setLoader(true);
        try{
            const formdata =new FormData();
            formdata.append("id","115");
            formdata.append("health",values.health);
            formdata.append("activity",values.activity);
            formdata.append("focus_health",values.focus_health);
            const response= await postApiDataWithAuth("/postStepFourth",formdata);
      
            if(response?.status===200){
                presentToast("Top", response?.data?.message);
                stateList();
            }
        }catch(error){
            console.log("Api Error",error);
        }
        setLoader(false);

      }

      const presentToast = (position, message) => {
        present({
          message: message,
          duration: 1500,
          position: position,
        });
      };
    return (
        <IonGrid className="ion-padding-bottom">
            <Formik
               enableReinitialize={true} 
               initialValues={formValues}
               onSubmit={handleSubmit}
            >
            {({setFieldValue, values}) => (
                <Form>
                    <IonRow>
                        <IonCol size="12">
                            <h3>Health</h3>
                            <div className="flex DietPreFerns">
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" name="health" value="Diabetics"id="myCheckImg1" />
                                    <label for="myCheckImg1">
                                        <img src="./assets/img/DiabetesRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Diabetics</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                    name ="health" value="Kidney"id="myCheckImg2" />
                                    <label for="myCheckImg2">
                                        <img src="./assets/img/KidneyRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Kidney</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox"
                                     name ="health" value="Cholesterol" id="myCheckImg3" />
                                    <label for="myCheckImg3">
                                        <img src="./assets/img/CholesterolRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Cholesterol</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                    name="health" value="liver"
                                    id="myCheckImg4" />
                                    <label for="myCheckImg4">
                                        <img src="./assets/img/LiverRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Liver</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                    name="health" value="Obese"
                                    id="myCheckImg5" />
                                    <label for="myCheckImg5">
                                        <img src="./assets/img/ObesityRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Obese</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                    name="health" value="Heart"
                                    id="myCheckImg12" />
                                    <label for="myCheckImg12">
                                        <img src="./assets/img/HeartRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Heart</IonText>
                                    </label>
                                </div>

                            </div>
                        </IonCol>
                        <IonCol size="12">
                            <h3>Activity</h3>
                            <div className="flex DietPreFerns">
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                    name="activity" value="Gym"id="myCheckImg6" />
                                    <label for="myCheckImg6">
                                        <img src="./assets/img/Gym-StrengthRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Gym / Strength</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                    name="activity" value="Running"
                                    id="myCheckImg7" />
                                    <label for="myCheckImg7">
                                        <img src="./assets/img/Running-EnduranceRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Running / Endurance</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                     name="activity" value="ActivityJob" id="myCheckImg8" />
                                    <label for="myCheckImg8">
                                        <img src="./assets/img/Activity JobRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Activity Job</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                     name="activity" value="HomeMaker"id="myCheckImg9" />
                                    <label for="myCheckImg9">
                                        <img src="./assets/img/HomemakerRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Home Maker</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                     name="activity" value="Student"id="myCheckImg10" />
                                    <label for="myCheckImg10">
                                        <img src="./assets/img/StudentRed_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Student</IonText>
                                    </label>
                                </div>
                                <div className="FillCheckBox ImgCheck">
                                    <Field type="checkbox" 
                                     name="activity" value="SittingJob"id="myCheckImg11" />
                                    <label for="myCheckImg11">
                                        <img src="" alt="" className="ProfileImg" />
                                        <IonText>Sitting Job</IonText>
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
                                <Field type="checkbox"
                                 name="focus_health"
                                 value="I am working professional, who has limited time to focus on health."
                                ></Field>
                                {/* <IonCheckbox>I agree to the terms and conditions</IonCheckbox> */}
                            </IonItem>
                            <IonItem >
                                <IonLabel className="StatementInfo">I am mother who has a career and kid's to focus on.</IonLabel>
                                <Field type="checkbox"
                                name="focus_health"
                                value="I am mother who has a career and kid's to focus on."
                                ></Field>
                            </IonItem>
                            <IonItem >
                                <IonLabel className="StatementInfo">I am an active sports person. No matter how busy I am, I do play a sport or workout frequently.</IonLabel>
                                <Field type="checkbox"
                                 name="focus_health"
                                 value="I am an active sports person. No matter how busy I am, I do play a sport or workout frequently."
                                ></Field>
                            </IonItem>
                            <IonItem >
                                <IonLabel className="StatementInfo">I live away from family and have to do all the cooking either by myself or my domestic help does it.</IonLabel>
                                <Field type="checkbox"
                                 name="focus_health"
                                 value="I live away from family and have to do all the cooking either by myself or my domestic help does it."
                                ></Field>
                            </IonItem>
                            <IonItem>
                                <IonLabel className="StatementInfo">I am studying and do not workout or play a sport.</IonLabel>
                                <Field type="checkbox"
                                 name="focus_health"
                                 value="I am studying and do not workout or play a sport."
                                ></Field>
                            </IonItem>
                            <IonItem >
                                <IonLabel className="StatementInfo">I am focussed on my health and buy only healthy food products.</IonLabel>
                                <Field type="checkbox"
                                 name="focus_health"
                                 value="I am focussed on my health and buy only healthy food products."
                                ></Field>
                            </IonItem>
                            <IonItem  lines='none'>
                                <IonLabel className="StatementInfo">I am homemaker and love to bake.</IonLabel>
                                <Field type="checkbox"
                                 name="focus_health"
                                 value="I am homemaker and love to bake."
                                ></Field>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <div className="SkipBtn ion-padding-vertical ">
                                <IonButton className="Orangebtn" fill="clear" type="submit">SAVE</IonButton>
                                {loader && (
                                    <div className="loader-container">
                                    <IonSpinner name="crescent" />
                                    </div>
                                )}
                                
                            </div>
                        </IonCol>
                        
                    </IonRow>
                </Form>
            )}
            </Formik>
        </IonGrid>
    )
}

export default NutriBudyStep4

