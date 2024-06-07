import React, { useEffect, useState } from 'react';
import {
    IonButton, IonCol, IonGrid, IonRow, IonText, IonItem, IonLabel, IonSpinner, useIonToast
} from "@ionic/react";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { getApiDataWithAuth, postApiData } from '../../../utils/Utils';

const NutriBudyStep4 = () => {
    const [stepFourthData, setStepFourthData] = useState([]);
    const [present] = useIonToast();
    const [loader, setLoader] = useState(false);
    const [formValue, setFormValue] = useState({
        health: [],
        activity: [],
        focus_health: [],
        id: ""
    });

    const validationSchema = Yup.object().shape({});

    const fetchData = async () => {
        try {
            const response = await getApiDataWithAuth("/getNutribuddy");
            console.log("stepFour", response);
            if (response?.status === 200) {
                const data = response.data.data;
                setStepFourthData(data);
                setFormValue({
                    health: data.health || [],
                    activity: data.activity || [],
                    focus_health: data.focus_health || [],
                    id: data.id || ""
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (values) => {
        setLoader(true);
        try {
            const obj = {
                id: values.id,
                activity: values.activity,
                focus_health: values.focus_health,
                health: values.health,
            };
            const response = await postApiData("/postStepFourth", obj);
            console.log("post", response);
            presentToast("Top", response?.data?.message);
        } catch (err) {
            console.log(err);
        }
        setLoader(false);
    };

    const presentToast = (position, message) => {
        present({
            message,
            duration: 1500,
            position,
        });
    };

    const checkboxes = [
        {
            key: 'health',
            options: [
                { value: 'Diabetics', label: 'Diabetics', imgSrc: './assets/img/DiabetesRed_Icons.png' },
                { value: 'Kidney', label: 'Kidney', imgSrc: './assets/img/KidneyRed_Icons.png' },
                { value: 'Cholesterol', label: 'Cholesterol', imgSrc: './assets/img/CholesterolRed_Icons.png' },
                { value: 'Liver', label: 'Liver', imgSrc: './assets/img/LiverRed_Icons.png' },
                { value: 'Obese', label: 'Obese', imgSrc: './assets/img/ObesityRed_Icons.png' },
                { value: 'Heart', label: 'Heart', imgSrc: './assets/img/HeartRed_Icons.png' },
            ]
        },
        {
            key: 'activity',
            options: [
                { value: 'GymStrength', label: 'Gym / Strength', imgSrc: './assets/img/Gym-StrengthRed_Icons.png' },
                { value: 'RunningEndurance', label: 'Running / Endurance', imgSrc: './assets/img/Running-EnduranceRed_Icons.png' },
                { value: 'ActivityJob', label: 'Activity Job', imgSrc: './assets/img/Activity JobRed_Icons.png' },
                { value: 'SittingJob', label: 'Sitting Job', imgSrc: './assets/img/Long Sitting JobRed_Icons.png' },
                { value: 'HomeMaker', label: 'Home Maker', imgSrc: './assets/img/HomemakerRed_Icons.png' },
                { value: 'Student', label: 'Student', imgSrc: './assets/img/StudentRed_Icons.png' },
            ]
        }
    ];

    const focusHealthOptions = [
        "I am working professional, who has limited time to focus on health.",
        "I am mother who has a career and kid(s) to focus on.",
        "I am an active sports person. No matter how busy I am, I do play a sport or workout frequently.",
        "I live away from family and have to do all the cooking either by myself or my domestic help does it.",
        "I am studying and do not workout or play a sport.",
        "I am focussed on my health and buy only healthy food products.",
        "I am homemaker and love to bake."
    ];

    const renderCheckboxes = (values, setFieldValue, checkboxGroup) => (
        checkboxGroup.map(({ key, options }) => (
            <div key={key}>
                <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                <div className="flex DietPreFerns">
                    {options.map(({ value, label, imgSrc }) => (
                        <div className="FillCheckBox ImgCheck" key={value}>
                            <input type="checkbox" id={`myCheckImg-${value}`}
                                checked={values[key].includes(value)}
                                onChange={() => {
                                    const newValues = values[key].includes(value)
                                        ? values[key].filter(pref => pref !== value)
                                        : [...values[key], value];
                                    setFieldValue(key, newValues);
                                }}
                            />
                            <label htmlFor={`myCheckImg-${value}`}>
                                <img src={imgSrc} alt={label} className="ProfileImg" />
                                <IonText>{label}</IonText>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        ))
    );

    return (
        <IonGrid className="ion-padding-bottom">
            <IonRow>
                <IonCol size="12">
                    <Formik
                        initialValues={formValue}
                        enableReinitialize
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                {renderCheckboxes(values, setFieldValue, checkboxes)}
                                <IonCol size="12">
                                    <h3>Focus Health</h3>
                                    {focusHealthOptions.map(option => (
                                        <IonItem key={option}>
                                            <IonLabel className="StatementInfo">{option}</IonLabel>
                                            <input type='checkbox'
                                                checked={values.focus_health.includes(option)}
                                                onChange={() => {
                                                    const newfocus_health = values.focus_health.includes(option)
                                                        ? values.focus_health.filter(pref => pref !== option)
                                                        : [...values.focus_health, option];
                                                    setFieldValue('focus_health', newfocus_health);
                                                }}
                                            />
                                        </IonItem>
                                    ))}
                                </IonCol>
                                <IonRow>
                                    <IonCol size="12">
                                        <div className="SkipBtn ion-padding-vertical">
                                            <IonButton className="Orangebtn" fill="clear" type='submit'>SAVE</IonButton>
                                            {loader && (
                                                <div className="loader-container">
                                                    <IonSpinner name="crescent" />
                                                </div>
                                            )}
                                            <IonButton>Skip Process</IonButton>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </Form>
                        )}
                    </Formik>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default NutriBudyStep4;
