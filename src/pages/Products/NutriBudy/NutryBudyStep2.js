import React, { useEffect, useState } from 'react';
import {
    IonButton, IonCol, IonGrid, IonIcon, IonRow, IonSelect, IonSelectOption, IonText, IonItem, IonLabel, IonInput,
    IonCheckbox,
    IonSpinner,
    useIonToast
} from "@ionic/react";
import { add } from "ionicons/icons";
import { Formik, Form } from 'formik';
import { getApiData, postApiData } from "../../../utils/Utils";

const NutryBudyStep2 = ({ onSkip }) => {
    const [eatSuggestions, setEatSuggestions] = useState([]);
    const [loveSuggestions, setLoveSuggestions] = useState([]);
    const [avoidSuggestions, setAvoidSuggestions] = useState([]);
    const [activeSuggestion, setActiveSuggestion] = useState(null);
    const [handleUpload, sethandleUploadPicture] = useState(false)
    const [loader, setLoader] = useState(false);
    const [present] = useIonToast();

    const [checkedValues, setCheckedValues] = useState([]);

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
        setLoader(true)
        try {
            const response = await getApiData("/getNutribuddy");
            if (response?.status === 200) {
                const data = response.data.data;
                setInitialValues({
                    food_type: data.food_type || [],
                    ingredient_eat: data.ingredient_eat || ["", "", ""],
                    ingredient_love: data.ingredient_love || ["", "", ""],
                    avoid_ingredient_1: data.avoid_ingredient_1 || ["", ""],
                    id: data.id || "",
                    allergy: data.allergy || [],
                    allergy_icons: data.allergy_icons || []
                });
                setCheckedValues(data.food_type || [],)
            }
        } catch (err) {
            console.log(err);
        }
        setLoader(false)
    };

    useEffect(() => {
        stateList();
    }, []);
    useEffect(() => {
        console.log(initialValues)
    }, [initialValues])

    const handleSubmit = async (values) => {
        setLoader(true)
        try {
            const formData = new FormData()
            formData.append("veg_type", checkedValues)
            formData.append('ingredient_eat', values.ingredient_eat)
            formData.append('ingredient_love', values.ingredient_love)
            formData.append('avoid_ingredient_1', values.avoid_ingredient_1)
            formData.append('id', values.id)
            formData.append('allergy', values.allergy)
            formData.append('allergy_icons', values.allergy_icons)

            const response = await postApiData('/postStepSecond', formData);
            stateList();
            presentToast("Top", response?.data?.message);

        } catch (err) {
            console.log(err);
        }
        console.log( values);
        setLoader(false)
    };

    const handleIngredientChange = async (index, value, setFieldValue, type) => {
        setFieldValue(`${type}.${index}`, value);
        setActiveSuggestion(type);
        const keyword = value;
        try {
            const obj = { keyword: keyword };
            const response = await postApiData('/getIngredients', obj);
            if (type === "ingredient_eat") {
                setEatSuggestions(response.data.results);
                setLoveSuggestions([]);
                setAvoidSuggestions([]);
            } else if (type === "ingredient_love") {
                setLoveSuggestions(response.data.results);
                setEatSuggestions([]);
                setAvoidSuggestions([]);
            } else if (type === "avoid_ingredient_1") {
                setAvoidSuggestions(response.data.results);
                setEatSuggestions([]);
                setLoveSuggestions([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteImage = async (food) => {
        console.log("allergyname", food)
        try {
            const obj = { "allergyname": food };
            const response = await postApiData("/nutribuddy-allergy-delete", obj);
            console.log("delete", response);
        } catch (err) {
            console.log(err);
        }
    }

    const Foodtype = [
        { value: 'vegetarian', label: "Veg" },
        { value: "non-vegetarian", label: "Non-veg" },
        { value: "egg", label: "Egg" }
    ];
   

    const presentToast = (position, message) => {
        present({
            message,
            duration: 1500,
            position,
        });
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
                                    {Foodtype.map((option) => (
                                        <IonItem key={option.value}>
                                            <IonLabel className="StatementInfo">{option.label}</IonLabel>
                                            <IonCheckbox
                                                className="ion-margin-start"
                                                checked={checkedValues.includes(option.value)}
                                                value={option.value}
                                                onIonChange={(event) => {
                                                    const isChecked = event.detail.checked;
                                                    const value = event.target.value;

                                                    if (isChecked) {
                                                        setCheckedValues((prevValues) => [
                                                            ...prevValues,
                                                            value,
                                                        ]);
                                                    } else {
                                                        setCheckedValues((prevValues) =>
                                                            prevValues.filter(
                                                                (item) => item !== value
                                                            )
                                                        );
                                                    }
                                                }}
                                            />
                                        </IonItem>
                                    ))}
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
                                            {activeSuggestion === "ingredient_eat" && eatSuggestions.length > 0 && (
                                                <IonSelect
                                                    interfaceOptions={{ header: "Select Ingredient" }}
                                                    onIonChange={(e) => {
                                                        setFieldValue(`ingredient_eat.${index}`, e.detail.value);
                                                        setEatSuggestions([]);
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
                                            {activeSuggestion === "ingredient_love" && loveSuggestions.length > 0 && (
                                                <IonSelect
                                                    interfaceOptions={{ header: "Select Ingredient" }}
                                                    onIonChange={(e) => {
                                                        setFieldValue(`ingredient_love.${index}`, e.detail.value);
                                                        setLoveSuggestions([]);
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
                                            {activeSuggestion === "avoid_ingredient_1" && avoidSuggestions.length > 0 && (
                                                <IonSelect
                                                    interfaceOptions={{ header: "Select Ingredient" }}
                                                    onIonChange={(e) => {
                                                        setFieldValue(`avoid_ingredient_1.${index}`, e.detail.value);
                                                        setAvoidSuggestions([]);
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
                                    <div className="ImgIcon">
                                        {values.allergy_icons.map((icon, index) => (
                                            <label key={index} htmlFor={`allergy${index}`}>
                                                <input
                                                    type="checkbox"
                                                    id={`allergy${index}`}
                                                    value={icon.name}
                                                    checked={values.allergy.includes(icon.name)}
                                                    onChange={() => {
                                                        const updatedAllergy = values.allergy.includes(icon.name)
                                                            ? values.allergy.filter(item => item !== icon.name)
                                                            : [...values.allergy, icon.name];
                                                        setFieldValue('allergy', updatedAllergy);
                                                    }}
                                                />
                                                <img src={icon.icon} alt={icon.name} className="ProfileImg" />
                                                <IonText>{icon.name}</IonText>
                                                <IonButton onClick={() => deleteImage(icon.name)}>delete</IonButton>
                                            </label>
                                        ))}
                                    </div>
                                    <div className="ImgBtn">
                                        <IonButton fill="clear" onClick={() => sethandleUploadPicture(!handleUpload)} >
                                            <IonIcon size="large" icon={add} />
                                        </IonButton>
                                    </div>
                                </div>

                            </IonCol>
                            <IonCol size="12">
                                {
                                    handleUpload ? (
                                        <div className="uploadPicture-button">
                                            <label className="UploadBtn">Upload Picture</label>
                                            <input
                                                id="AllergyPicture"
                                                type="file"
                                                name="allergy_icons"
                                                accept="image/png"
                                                onChange={(e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                        const newName = document.getElementById('ImageNameInput').value;
                                                        const newFoodIcon = { icon: URL.createObjectURL(file), name: newName };
                                                        const newFoodIcons = [...values.allergy_icons, newFoodIcon];
                                                        setFieldValue('allergy_icons', newFoodIcons);
                                                    }
                                                }}
                                            />
                                            <IonInput
                                                type="text"
                                                id="ImageNameInput"
                                                placeholder="Enter image name"
                                                value={values.newImageName}
                                                onIonChange={(e) => {
                                                    const newName = e.detail.value;
                                                    setFieldValue('newImageName', newName);
                                                }}
                                            />
                                        </div>
                                    ) : null
                                }
                            </IonCol>
                            <div className="SkipBtn ion-padding-vertical ">
                                <IonButton className="Orangebtn" fill="clear" type='submit'>SAVE</IonButton>
                                {loader && (
                                    <div className="loader-container">
                                        <IonSpinner name="crescent" />
                                    </div>
                                )}
                                <IonButton onClick={onSkip}> Skip Process</IonButton>
                            </div>
                        </IonRow>
                    </Form>
                )}
            </Formik>
        </IonGrid>
    );
};

export default NutryBudyStep2;
