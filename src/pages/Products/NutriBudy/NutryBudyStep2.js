import React, { useEffect, useState } from 'react';
import { IonButton, IonCol, IonGrid, IonIcon, IonRow, IonSelect, IonSelectOption, IonText, IonItem, IonLabel, IonInput } from "@ionic/react";
import { add } from "ionicons/icons";
import { Formik, Field, Form } from 'formik';
import { getApiDataWithAuth, postApiData } from "../../../utils/Utils";

const NutryBudyStep2 = () => {
    const [StepSecondData, setStepSecondData] = useState({});
    const [eatSuggestions, setEatSuggestions] = useState([]);
    const [loveSuggestions, setLoveSuggestions] = useState([]);
    const [avoidSuggestions, setAvoidSuggestions] = useState([]);
    const [initialValues, setInitialValues] = useState({
        food_type: [],
        ingredient_eat: ["", "", ""],
        ingredient_love: ["", "", ""],
        avoid_ingredient_1: ["", ""],
        id: "",
        allergy: [],
        allergy_icons: []
    });

    const stateList = async () => {
        try {
            const response = await getApiDataWithAuth("/getNutribuddy");
            if (response?.status === 200) {
                const data = response.data.data;
                setStepSecondData(data);
                setInitialValues({
                    food_type: data.food_type || [],
                    ingredient_eat: data.ingredient_eat || ["", "", ""],
                    ingredient_love: data.ingredient_love || ["", "", ""],
                    avoid_ingredient_1: data.avoid_ingredient_1 || ["", ""],
                    id: data.id || "",
                    allergy: data.allergy || [],
                    allergy_icons: data.allergy_icons || []
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        stateList();
    }, []);

    const handleSubmit = async (values) => {
        try {
            const obj = {
                veg_type: values.food_type,
                ingredient_eat: values.ingredient_eat,
                ingredient_love: values.ingredient_love,
                avoid_ingredient_1: values.avoid_ingredient_1,
                id: values.id,
                allergy: values.allergy,
                allergy_icons: values.allergy_icons
            }
            const response = await postApiData('/postStepSecond', obj);
            console.log("response", response);
        } catch (err) {
            console.log(err);
        }
        console.log('Form values', values);
    };

    const handleIngredientChange = async (index, value, setFieldValue, type) => {
        console.log('value', value);
        setFieldValue(`${type}.${index}`, value); // Update the field value immediately
        const keyword = value;
        try {
            const obj = {
                keyword: keyword
            }
            const response = await postApiData('/getIngredients', obj);
            console.log("post2", response.data.results);

            if (type === "ingredient_eat") setEatSuggestions(response.data.results);
            if (type === "ingredient_love") setLoveSuggestions(response.data.results);
            if (type === "avoid_ingredient_1") setAvoidSuggestions(response.data.results);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <IonGrid>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <IonRow>
                            <IonCol className="flex flex-column ion-align-items-center ion-justify-content-center ion-padding-top">
                                <IonItem lines='none' className="N-VegNon">
                                    <IonLabel className="StatementInfo">Veg</IonLabel>
                                    <input
                                        type='checkbox'
                                        checked={values.food_type.includes('vegetarian')}
                                        onChange={() => {
                                            const isChecked = values.food_type.includes('vegetarian');
                                            const newFocusHealth = isChecked
                                                ? values.food_type.filter(pref => pref !== 'vegetarian')
                                                : [...values.food_type, 'vegetarian'];
                                            setFieldValue('food_type', newFocusHealth);
                                        }}
                                    />
                                </IonItem>
                                <IonItem lines='none' className="N-VegNon">
                                    <IonLabel className="StatementInfo">Non-veg</IonLabel>
                                    <input
                                        type='checkbox'
                                        checked={values.food_type.includes('non-vegetarian')}
                                        onChange={() => {
                                            const isChecked = values.food_type.includes('non-vegetarian');
                                            const newFocusHealth = isChecked
                                                ? values.food_type.filter(pref => pref !== 'non-vegetarian' && pref !== 'egg')
                                                : [...new Set([...values.food_type, 'non-vegetarian', 'egg'])];
                                            setFieldValue('food_type', newFocusHealth);
                                        }}
                                    />
                                </IonItem>
                                <IonItem lines='none' className="N-VegNon">
                                    <IonLabel className="StatementInfo">Egg</IonLabel>
                                    <input
                                        type='checkbox'
                                        checked={values.food_type.includes('egg')}
                                        onChange={() => {
                                            const isChecked = values.food_type.includes('egg');
                                            const newFocusHealth = isChecked
                                                ? values.food_type.filter(pref => pref !== 'egg')
                                                : [...values.food_type, 'egg'];
                                            setFieldValue('food_type', newFocusHealth);
                                        }}
                                    />
                                </IonItem>
                            </IonCol>

                            <IonCol size="12">
                                <div>
                                    <h4>Tell us 3 Ingredients you Eat</h4>
                                    {[0, 1, 2].map((index) => (
                                        <div className="N-profileInput" key={index}>
                                            <IonInput
                                                type="text"
                                                value={values.ingredient_eat[index]}
                                                placeholder={`Ingredient ${index + 1}`}
                                                onIonChange={(e) => {
                                                    const value = e.detail.value;
                                                    handleIngredientChange(index, value, setFieldValue, 'ingredient_eat');
                                                }}
                                            />
                                            {eatSuggestions.length > 0 && (
                                                <IonSelect
                                                    interfaceOptions={{ header: "Select Ingredient" }}
                                                    onIonChange={(e) => {
                                                        setFieldValue(`ingredient_eat.${index}`, e.detail.value);
                                                        setEatSuggestions([]); // Clear the suggestions after selection
                                                    }}
                                                >
                                                    {eatSuggestions.map((item, i) => (
                                                        <IonSelectOption key={i} value={item.ingredients_name}>
                                                            {item.ingredients_name}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </IonCol>


                            <IonCol size="12">
                                <div>
                                    <h4>Tell us 3 Ingredients you love</h4>
                                    {[0, 1, 2].map((index) => (
                                        <div className="N-profileInput" key={index}>
                                            <IonInput
                                                type="text"
                                                value={values.ingredient_love[index]}
                                                placeholder={`Ingredient ${index + 1}`}
                                                onIonChange={(e) => {
                                                    const value = e.detail.value;
                                                    handleIngredientChange(index, value, setFieldValue, 'ingredient_love');
                                                }}
                                            />
                                            {loveSuggestions.length > 0 && (
                                                <IonSelect
                                                    interfaceOptions={{ header: "Select Ingredient" }}
                                                    onIonChange={(e) => {
                                                        setFieldValue(`ingredient_love.${index}`, e.detail.value);
                                                        setLoveSuggestions([]); // Clear the suggestions after selection
                                                    }}
                                                >
                                                    {loveSuggestions.map((item, i) => (
                                                        <IonSelectOption key={i} value={item.ingredients_name}>
                                                            {item.ingredients_name}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </IonCol>


                            <IonCol size="12">
                                <div>
                                    <h4>Tell us 2 Ingredients you wish to avoid</h4>
                                    {[0, 1].map((index) => (
                                        <div className="N-profileInput" key={index}>
                                            <IonInput
                                                type="text"
                                                value={values.avoid_ingredient_1[index]}
                                                placeholder={`Ingredient ${index + 1}`}
                                                onIonChange={(e) => {
                                                    const value = e.detail.value;
                                                    handleIngredientChange(index, value, setFieldValue, 'avoid_ingredient_1');
                                                }}
                                            />
                                            {avoidSuggestions.length > 0 && (
                                                <IonSelect
                                                    interfaceOptions={{ header: "Select Ingredient" }}
                                                    onIonChange={(e) => {
                                                        setFieldValue(`avoid_ingredient_1.${index}`, e.detail.value);
                                                        setAvoidSuggestions([]); // Clear the suggestions after selection
                                                    }}
                                                >
                                                    {avoidSuggestions.map((item, i) => (
                                                        <IonSelectOption key={i} value={item.ingredients_name}>
                                                            {item.ingredients_name}
                                                        </IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </IonCol>


                            <IonCol size="12">
                                <h3>Allergy Setup</h3>
                                <div className="AllergyBox ion-padding-vertical">
                                    <div className="ImgIcon">
                                        <input
                                            type="checkbox"
                                            id="allergy1"
                                            value="All Natural Only"
                                            checked={values.allergy.includes("All Natural Only")}
                                            onChange={() => {
                                                const updatedAllergy = values.allergy.includes("All Natural Only")
                                                    ? values.allergy.filter(item => item !== "All Natural Only")
                                                    : [...values.allergy, "All Natural Only"];
                                                setFieldValue('allergy', updatedAllergy);
                                            }}
                                        />
                                        <label htmlFor="allergy1">
                                            <img src="./assets/img/Go_VeganWhite_Icons.png" alt="All Natural Only" className="ProfileImg" />
                                            <IonText>All Natural Only</IonText>
                                        </label>
                                    </div>
                                    <div className="ImgIcon">
                                        <input
                                            type="checkbox"
                                            id="allergy2"
                                            value="Nuts"
                                            checked={values.allergy.includes("Nuts")}
                                            onChange={() => {
                                                const updatedAllergy = values.allergy.includes("Nuts")
                                                    ? values.allergy.filter(item => item !== "Nuts")
                                                    : [...values.allergy, "Nuts"];
                                                setFieldValue('allergy', updatedAllergy);
                                            }}
                                        />
                                        <label htmlFor="allergy2">
                                            <img src="./assets/img/Gluten_FreeWhite_Icons.png" alt="Nuts" className="ProfileImg" />
                                            <IonText>Nuts</IonText>
                                        </label>
                                    </div>
                                    <div className="ImgIcon">
                                        <input
                                            type="checkbox"
                                            id="allergy3"
                                            value="Gluten Intolerant"
                                            checked={values.allergy.includes("Gluten Intolerant")}
                                            onChange={() => {
                                                const updatedAllergy = values.allergy.includes("Gluten Intolerant")
                                                    ? values.allergy.filter(item => item !== "Gluten Intolerant")
                                                    : [...values.allergy, "Gluten Intolerant"];
                                                setFieldValue('allergy', updatedAllergy);
                                            }}
                                        />
                                        <label htmlFor="allergy3">
                                            <img src="./assets/img/KetoWhite_Icons.png" alt="Gluten Intolerant" className="ProfileImg" />
                                            <IonText>Gluten Intolerant</IonText>
                                        </label>
                                    </div>
                                    <div className="ImgIcon">
                                        <input
                                            type="checkbox"
                                            id="allergy4"
                                            value="Garlic"
                                            checked={values.allergy.includes("Garlic")}
                                            onChange={() => {
                                                const updatedAllergy = values.allergy.includes("Garlic")
                                                    ? values.allergy.filter(item => item !== "Garlic")
                                                    : [...values.allergy, "Garlic"];
                                                setFieldValue('allergy', updatedAllergy);
                                            }}
                                        />
                                        <label htmlFor="allergy4">
                                            <img src="./assets/img/Jain FriendlyWhite_Icons.png" alt="Garlic" className="ProfileImg" />
                                            <IonText>Garlic</IonText>
                                        </label>
                                    </div>
                                    <div className="ImgBtn">
                                        <IonButton fill="clear">
                                            <IonIcon size="large" icon={add} />
                                        </IonButton>
                                    </div>
                                </div>

                            </IonCol>
                            <IonCol size="12">
                                <div class="uploadPicture-button">
                                    <label htmlFor="AllergyPicture" class="UploadBtn">Upload Picture</label>
                                    <input type="file" id="AllergyPicture" accept="image/*" />
                                    <IonInput type="text"></IonInput>
                                </div>
                            </IonCol>
                            <div className="SkipBtn ion-padding-vertical ">
                                <IonButton className="Orangebtn" fill="clear" type='submit'>SAVE</IonButton>
                                <IonButton>Skip Process</IonButton>
                            </div>
                        </IonRow>
                    </Form>
                )}
            </Formik>
        </IonGrid>
    );
};

export default NutryBudyStep2;
