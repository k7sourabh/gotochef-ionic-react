import React from 'react'
import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItemOption, IonItemOptions, IonItemSliding, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react"
import { useEffect, useState } from "react";
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons";
import { getApiDataWithAuth, postApiData } from '../../../utils/Utils';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
const NutriBudyStep4 = () => {
    const [stapFourth, setStepFourthData] = useState([])
    const [formvalue, setFormvalue] = useState({
        health: [],
        activity: [],
        focus_health: [],
        id: ""

    })
    const validationSchema = Yup.object().shape({

    })


    const fetchData = async () => {
        try {
            const response = await getApiDataWithAuth("/getNutribuddy")
            console.log("stapFour", response)
            if (response?.status === 200) {
                const data = response.data.data;
                setStepFourthData(data);
                setFormvalue({
                    health: data.health || [],
                    activity: data.activity || [],
                    focus_health: data.focus_health || [],
                    id: data.id || ""
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const handleSubmit = async (values) => {

        try {
            const obj = {
                id: values.id,
                activity: values.activity,
                focus_health: values.focus_health,
                health: values.health,
            }
            const responce = await postApiData("/postStepFourth", obj)
            console.log("post", responce)
        } catch (err) {
            console.log(err)
        }
        console.log(values)
    }
    return (
        <IonGrid className="ion-padding-bottom">
            <IonRow>
                <IonCol size="12">
                    <h3>Health</h3>
                    <Formik
                        initialValues={formvalue}
                        enableReinitialize
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handleSubmit(values);
                        }}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <div className="flex DietPreFerns">
                                    <div className="FillCheckBox ImgCheck">
                                        <input type="checkbox" id="myCheckImg1"
                                            checked={values.health.includes('Diabetics')}
                                            onChange={() => {
                                                const newHealth = values.health.includes('Diabetics')
                                                    ? values.health.filter(pref => pref !== 'Diabetics')
                                                    : [...values.health, 'Diabetics'];
                                                setFieldValue('health', newHealth);
                                            }}
                                        />
                                        <label for="myCheckImg1">
                                            <img src="./assets/img/DiabetesRed_Icons.png" alt="" className="ProfileImg" />
                                            <IonText>Diabetics</IonText>
                                        </label>
                                    </div>
                                    <div className="FillCheckBox ImgCheck">
                                        <input type="checkbox" id="myCheckImg2"
                                            checked={values.health.includes('Kidney')}
                                            onChange={() => {
                                                const newHealth = values.health.includes('Kidney')
                                                    ? values.health.filter(pref => pref !== 'Kidney')
                                                    : [...values.health, 'Kidney'];
                                                setFieldValue('health', newHealth);
                                            }}
                                        />
                                        <label for="myCheckImg2">
                                            <img src="./assets/img/KidneyRed_Icons.png" alt="" className="ProfileImg" />
                                            <IonText>Kidney</IonText>
                                        </label>
                                    </div>
                                    <div className="FillCheckBox ImgCheck">
                                        <input type="checkbox" id="myCheckImg3"
                                            checked={values.health.includes('Cholesterol')}
                                            onChange={() => {
                                                const newHealth = values.health.includes('Cholesterol')
                                                    ? values.health.filter(pref => pref !== 'Cholesterol')
                                                    : [...values.health, 'Cholesterol'];
                                                setFieldValue('health', newHealth);
                                            }} />
                                        <label for="myCheckImg3">
                                            <img src="./assets/img/CholesterolRed_Icons.png" alt="" className="ProfileImg" />
                                            <IonText>Cholesterol</IonText>
                                        </label>
                                    </div>
                                    <div className="FillCheckBox ImgCheck">
                                        <input type="checkbox" id="myCheckImg4"
                                            checked={values.health.includes('Liver')}
                                            onChange={() => {
                                                const newHealth = values.health.includes('Liver')
                                                    ? values.health.filter(pref => pref !== 'Liver')
                                                    : [...values.health, 'Liver'];
                                                setFieldValue('health', newHealth);
                                            }}
                                        />
                                        <label for="myCheckImg4">
                                            <img src="./assets/img/LiverRed_Icons.png" alt="" className="ProfileImg" />
                                            <IonText>Liver</IonText>
                                        </label>
                                    </div>
                                    <div className="FillCheckBox ImgCheck">
                                        <input type="checkbox" id="myCheckImg5"
                                            checked={values.health.includes('Obese')}
                                            onChange={() => {
                                                const newHealth = values.health.includes('Obese')
                                                    ? values.health.filter(pref => pref !== 'Obese')
                                                    : [...values.health, 'Obese'];
                                                setFieldValue('health', newHealth);
                                            }}
                                        />
                                        <label for="myCheckImg5">
                                            <img src="./assets/img/ObesityRed_Icons.png" alt="" className="ProfileImg" />
                                            <IonText>Obese</IonText>
                                        </label>
                                    </div>
                                    <div className="FillCheckBox ImgCheck">
                                        <input type="checkbox" id="myCheckImg12"
                                            checked={values.health.includes('Heart')}
                                            onChange={() => {
                                                const newHealth = values.health.includes('Heart')
                                                    ? values.health.filter(pref => pref !== 'Heart')
                                                    : [...values.health, 'Heart'];
                                                setFieldValue('health', newHealth);
                                            }}
                                        />
                                        <label for="myCheckImg12">
                                            <img src="./assets/img/HeartRed_Icons.png" alt="" className="ProfileImg" />
                                            <IonText>Heart</IonText>
                                        </label>
                                    </div>

                                </div>
                                <IonCol size="12">
                                    <h3>Activity</h3>
                                    <div className="flex DietPreFerns">
                                        <div className="FillCheckBox ImgCheck">
                                            <input type="checkbox" id="myCheckImg6"
                                                checked={values.activity.includes('GymStrength')}
                                                onChange={() => {
                                                    const newActivity = values.activity.includes('GymStrength')
                                                        ? values.activity.filter(pref => pref !== 'GymStrength')
                                                        : [...values.activity, 'GymStrength'];
                                                    setFieldValue('activity', newActivity);
                                                }}
                                            />
                                            <label for="myCheckImg6">
                                                <img src="./assets/img/Gym-StrengthRed_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>Gym / Strength</IonText>
                                            </label>
                                        </div>
                                        <div className="FillCheckBox ImgCheck">
                                            <input type="checkbox" id="myCheckImg7"
                                                checked={values.activity.includes('RunningEndurance')}
                                                onChange={() => {
                                                    const newActivity = values.activity.includes('RunningEndurance')
                                                        ? values.activity.filter(pref => pref !== 'RunningEndurance')
                                                        : [...values.activity, 'RunningEndurance'];
                                                    setFieldValue('activity', newActivity);
                                                }}
                                            />
                                            <label for="myCheckImg7">
                                                <img src="./assets/img/Running-EnduranceRed_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>Running / Endurance</IonText>
                                            </label>
                                        </div>
                                        <div className="FillCheckBox ImgCheck">
                                            <input type="checkbox" id="myCheckImg8"
                                                checked={values.activity.includes('ActivityJob')}
                                                onChange={() => {
                                                    const newActivity = values.activity.includes('ActivityJob')
                                                        ? values.activity.filter(pref => pref !== 'ActivityJob')
                                                        : [...values.activity, 'ActivityJob'];
                                                    setFieldValue('activity', newActivity);
                                                }} />
                                            <label htmlFor="myCheckImg8">
                                                <img src="./assets/img/Activity JobRed_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>Activity Job</IonText>
                                            </label>
                                        </div>
                                        <div className="FillCheckBox ImgCheck">
                                            <input type="checkbox" id="myCheckImg11"
                                                checked={values.activity.includes('SittingJob')}
                                                onChange={() => {
                                                    const newActivity = values.activity.includes('SittingJob')
                                                        ? values.activity.filter(pref => pref !== 'SittingJob')
                                                        : [...values.activity, 'SittingJob'];
                                                    setFieldValue('activity', newActivity);
                                                }} />
                                            <label htmlFor="myCheckImg11">
                                                <img src="./assets/img/Activity JobRed_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>Sitting Job</IonText>
                                            </label>
                                        </div>

                                        <div className="FillCheckBox ImgCheck">
                                            <input type="checkbox" id="myCheckImg9"
                                                checked={values.activity.includes('HomeMaker')}
                                                onChange={() => {
                                                    const newActivity = values.activity.includes('HomeMaker')
                                                        ? values.activity.filter(pref => pref !== 'HomeMaker')
                                                        : [...values.activity, 'HomeMaker'];
                                                    setFieldValue('activity', newActivity);
                                                }}
                                            />
                                            <label for="myCheckImg9">
                                                <img src="./assets/img/HomemakerRed_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>Home Maker</IonText>
                                            </label>
                                        </div>
                                        <div className="FillCheckBox ImgCheck">
                                            <input type="checkbox" id="myCheckImg10"
                                                checked={values.activity.includes('Student')}
                                                onChange={() => {
                                                    const newActivity = values.activity.includes('Student')
                                                        ? values.activity.filter(pref => pref !== 'Student')
                                                        : [...values.activity, 'Student'];
                                                    setFieldValue('activity', newActivity);
                                                }}
                                            />
                                            <label for="myCheckImg10">
                                                <img src="./assets/img/StudentRed_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>Student</IonText>
                                            </label>
                                        </div>

                                    </div>

                                </IonCol>
                                <IonRow>
                                    <IonCol size="12">
                                        <h4>Tell us which of these statements suit your current life situation the best</h4>
                                        <IonItem>
                                            <IonLabel className="StatementInfo">I am working professional, who has limited time to focus on health.</IonLabel>
                                            <IonCheckbox
                                               
                                                checked={formvalue.focus_health.includes('I am working professional, who has limited time to focus on health.')}
                                                onIonChange={() => {
                                                    const newfocus_health = values.focus_health.includes('I am working professional, who has limited time to focus on health.')
                                                        ? values.focus_health.filter(pref => pref !== 'I am working professional, who has limited time to focus on health.')
                                                        : [...values.focus_health, 'I am working professional, who has limited time to focus on health.'];
                                                    setFieldValue('focus_health', newfocus_health)
                                                }}>
                                            </IonCheckbox>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel className="StatementInfo">I am mother who has a career and kid(s) to focus on.</IonLabel>
                                            <IonCheckbox
                                                checked={values.focus_health.includes('I am mother who has a career and kid(s) to focus on.')}
                                                onIonChange={() => {
                                                    const newfocus_health = values.focus_health.includes('I am mother who has a career and kid(s) to focus on.')
                                                        ? values.focus_health.filter(pref => pref !== 'I am mother who has a career and kid(s) to focus on.')
                                                        : [...values.focus_health, 'I am mother who has a career and kid(s) to focus on.'];
                                                    setFieldValue('focus_health', newfocus_health)
                                                }}>
                                            </IonCheckbox>
                                        </IonItem>
                                

                                        <IonItem >
                                            <IonLabel className="StatementInfo">I am an active sports person. No matter how busy I am, I do play a sport or workout frequently.</IonLabel>
                                            <IonCheckbox
                                                checked={values.focus_health.includes('I am an active sports person. No matter how busy I am, I do play a sport or workout frequently.')}
                                                onIonChange={() => {
                                                    const newfocus_health = values.focus_health.includes('I am an active sports person. No matter how busy I am, I do play a sport or workout frequently.')
                                                        ? values.focus_health.filter(pref => pref !== 'I am an active sports person. No matter how busy I am, I do play a sport or workout frequently.')
                                                        : [...values.focus_health, 'I am an active sports person. No matter how busy I am, I do play a sport or workout frequently.'];
                                                    setFieldValue('focus_health', newfocus_health)
                                                }}
                                            ></IonCheckbox>
                                        </IonItem>
                                        <IonItem >
                                            <IonLabel className="StatementInfo">I live away from family and have to do all the cooking either by myself or my domestic help does it.</IonLabel>
                                            <IonCheckbox
                                                checked={values.focus_health.includes('I live away from family and have to do all the cooking either by myself or my domestic help does it.')}
                                                onIonChange={() => {
                                                    const newfocus_health = values.focus_health.includes('I live away from family and have to do all the cooking either by myself or my domestic help does it.')
                                                        ? values.focus_health.filter(pref => pref !== 'I live away from family and have to do all the cooking either by myself or my domestic help does it.')
                                                        : [...values.focus_health, 'I live away from family and have to do all the cooking either by myself or my domestic help does it.'];
                                                    setFieldValue('focus_health', newfocus_health)
                                                }}
                                            ></IonCheckbox>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel className="StatementInfo">I am studying and do not workout or play a sport.</IonLabel>
                                            <IonCheckbox
                                                checked={values.focus_health.includes('I am studying and do not workout or play a sport.')}
                                                onIonChange={() => {
                                                    const newfocus_health = values.focus_health.includes('I am studying and do not workout or play a sport.')
                                                        ? values.focus_health.filter(pref => pref !== 'I am studying and do not workout or play a sport.')
                                                        : [...values.focus_health, 'I am studying and do not workout or play a sport.'];
                                                    setFieldValue('focus_health', newfocus_health)
                                                }}
                                            ></IonCheckbox>
                                        </IonItem>
                                        <IonItem >
                                            <IonLabel className="StatementInfo">I am focussed on my health and buy only healthy food products.</IonLabel>
                                            <IonCheckbox
                                                checked={values.focus_health.includes('I am focussed on my health and buy only healthy food products.')}
                                                onIonChange={() => {
                                                    const newfocus_health = values.focus_health.includes('I am focussed on my health and buy only healthy food products.')
                                                        ? values.focus_health.filter(pref => pref !== 'I am focussed on my health and buy only healthy food products.')
                                                        : [...values.focus_health, 'I am focussed on my health and buy only healthy food products.'];
                                                    setFieldValue('focus_health', newfocus_health)
                                                }}
                                            ></IonCheckbox>
                                        </IonItem>
                                        <IonItem lines='none'>
                                            <IonLabel className="StatementInfo">I am homemaker and love to bake.</IonLabel>
                                            <IonCheckbox
                                                checked={values.focus_health.includes('I am homemaker and love to bake.')}
                                                onIonChange={() => {
                                                    const newfocus_health = values.focus_health.includes('I am homemaker and love to bake.')
                                                        ? values.focus_health.filter(pref => pref !== 'I am homemaker and love to bake.')
                                                        : [...values.focus_health, 'I am homemaker and love to bake.'];
                                                    setFieldValue('focus_health', newfocus_health)
                                                }}
                                            ></IonCheckbox>
                                        </IonItem>
                                    </IonCol>
                                    <IonCol>
                                        <div className="SkipBtn ion-padding-vertical ">
                                            <IonButton className="Orangebtn" fill="clear" type='submit'>SAVE</IonButton>
                                            <IonButton>Skip Process</IonButton>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </Form>
                        )}

                    </Formik>


                </IonCol>

            </IonRow>

        </IonGrid >
    )
}

export default NutriBudyStep4