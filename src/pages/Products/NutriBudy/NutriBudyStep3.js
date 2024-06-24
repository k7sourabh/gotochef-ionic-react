import React, { useEffect, useState } from 'react';
import {
    IonButton, IonCheckbox, IonCol, IonGrid, IonLabel, IonRange, IonRow, IonText, IonInput, IonIcon,
    useIonToast,
    IonSpinner
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { getApiDataWithAuth, postApiData } from '../../../utils/Utils';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const NutriBudyStep3 = ({ onSkip }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [Toggle, setToggle] = useState(false)
    const [loader, setLoader] = useState(false);
    const [present] = useIonToast();



    const [formvalue, setFormvalue] = useState({
        sweet: 0,
        sour: 0,
        bitter: 0,
        salty: 0,
        umami: 0,
        diet_pref: [],
        id: "",
        food_like: [],
        food_icons: []
    });
    useEffect(() => {
        console.log("formvalue", formvalue)
    }, [formvalue])
    const validationSchema = Yup.object().shape({
        sweet: Yup.number().min(0).max(100),
        sour: Yup.number().min(0).max(100),
        bitter: Yup.number().min(0).max(100),
        salty: Yup.number().min(0).max(100),
        umami: Yup.number().min(0).max(100),
        diet_pref: Yup.array(),
        id: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getApiDataWithAuth('/getNutribuddy');
                if (response?.status === 200) {
                    const data = response.data.data;
                    setFormvalue({
                        sweet: data.sweet || 0,
                        sour: data.sour || 0,
                        bitter: data.bitter || 0,
                        salty: data.salty || 0,
                        umami: data.umami || 0,
                        diet_pref: data.diet_pref || [],
                        id: data.id || "",
                        food_like: data.food_like || [],
                        food_icons: data.food_icons || []
                    });
                    setImagePreview(data.food_icons || null);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (values) => {
        console.log("values", values)
        setLoader(true)
        try {
            const formData = new FormData();
            formData.append("sweet", values.sweet);
            formData.append("sour", values.sour);
            formData.append("bitter", values.bitter);
            formData.append("salty", values.salty);
            formData.append("umami", values.umami);
            formData.append("diet_pref", values.diet_pref);
            formData.append("id", values.id);
            formData.append("food_like", values.food_like);
            values.food_icons.forEach((icon, index) => {
                if (!icon.icon_food.startsWith("http:")) {
                    formData.append(`food_icons[${index}][icon_food]`, icon.icon_food);
                    formData.append(`food_icons[${index}][name]`, icon.name);
                }
            });
            const response = await postApiData('postStepThird', formData);
            presentToast("Top", response?.data?.message);
            setLoader(false)
        } catch (err) {
            console.log(err);
        }
        setLoader(false);
    };
    const presentToast = (position, message) => {
        present({
            message: message,
            duration: 1500,
            position: position,
        });
    };
    const deleteImage = async (foodname) => {
        console.log(foodname);
        try {
            const obj = {
                "foodname": foodname
            };

            const response = await postApiData("/nutribuddy-food-delete", obj);
            console.log("delete", response);
        } catch (err) {
            console.log(err);
        }
    };
    const dietdata = [
        { id: 'myCheckImg51', value: 'Keto', imgSrc: './assets/img/imagesketo.png', label: 'Keto' },
        { id: 'myCheckImg52', value: 'GlutenFree', imgSrc: './assets/img/imagesGluten.jpg', label: 'Gluten Free' },
        { id: 'myCheckImg53', value: 'JainFriedndly', imgSrc: './assets/img/pngwing.png', label: 'Jain Friendly' }
    ]

    return (
        <IonGrid className="ion-padding-bottom">
            <IonRow>
                <IonCol size="12" className="ion-no-padding">
                    <h3>Taste Preferences</h3>
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
                                <div className="progressBar">
                                    <div className="flex ion-justify-content-between ion-align-items-center">
                                        <IonLabel>Sweet</IonLabel>
                                        <IonLabel>{values.sweet}%</IonLabel>
                                    </div>
                                    <IonRange
                                        min={0}
                                        max={100}
                                        color="success"
                                        value={values.sweet}
                                        onIonChange={(e) => setFieldValue('sweet', e.detail.value)}
                                    />
                                    <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                        <span>I don’t like spicy food</span>
                                        <span>I love spicy food</span>
                                    </div>
                                </div>
                                <div className="progressBar ion-padding-top">
                                    <div className="flex ion-justify-content-between ion-align-items-center">
                                        <IonLabel>Sour</IonLabel>
                                        <IonLabel>{values.sour}%</IonLabel>
                                    </div>
                                    <IonRange
                                        min={0}
                                        max={100}
                                        color="warning"
                                        value={values.sour}
                                        onIonChange={(e) => setFieldValue('sour', e.detail.value)}
                                    />
                                    <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                        <span>I don’t like spicy food</span>
                                        <span>I love spicy food</span>
                                    </div>
                                </div>
                                <div className="progressBar ion-padding-top">
                                    <div className="flex ion-justify-content-between ion-align-items-center">
                                        <IonLabel>Bitter</IonLabel>
                                        <IonLabel>{values.bitter}%</IonLabel>
                                    </div>
                                    <IonRange
                                        min={0}
                                        max={100}
                                        color="primary"
                                        value={values.bitter}
                                        onIonChange={(e) => setFieldValue('bitter', e.detail.value)}
                                    />
                                    <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                        <span>I don't eat sweets</span>
                                        <span>I love sweets a lot</span>
                                    </div>
                                </div>
                                <div className="progressBar ion-padding-top">
                                    <div className="flex ion-justify-content-between ion-align-items-center">
                                        <IonLabel>Salty</IonLabel>
                                        <IonLabel>{values.salty}%</IonLabel>
                                    </div>
                                    <IonRange
                                        min={0}
                                        max={100}
                                        color="primary"
                                        value={values.salty}
                                        onIonChange={(e) => setFieldValue('salty', e.detail.value)}
                                    />
                                    <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                        <span>I like my food bland</span>
                                        <span>I love salty food</span>
                                    </div>
                                </div>
                                <div className="progressBar ion-padding-top">
                                    <div className="flex ion-justify-content-between ion-align-items-center">
                                        <IonLabel>Umami/Savoury</IonLabel>
                                        <IonLabel>{values.umami}%</IonLabel>
                                    </div>
                                    <IonRange
                                        min={0}
                                        max={100}
                                        color="warning"
                                        value={values.umami}
                                        onIonChange={(e) => setFieldValue('umami', e.detail.value)}
                                    />
                                    <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                        <span>I don’t like savoury food</span>
                                        <span>I love savoury food</span>
                                    </div>
                                </div>
                                <IonCol size="12" className="ion-padding-top">
                                    <h3>Diet Preferences (If Any)</h3>
                                    <div className="flex DietPreFerns">
                                        {dietdata.map(diet => (
                                            <div className="FillCheckBox ImgCheck" key={diet.id}>
                                                <input
                                                    type="checkbox"
                                                    id={diet.id}
                                                    checked={values.diet_pref.includes(diet.value)}
                                                    onChange={() => {
                                                        const newDietPref = values.diet_pref.includes(diet.value)
                                                            ? values.diet_pref.filter(pref => pref !== diet.value)
                                                            : [...values.diet_pref, diet.value];
                                                        setFieldValue('diet_pref', newDietPref);
                                                    }}
                                                />
                                                <label htmlFor={diet.id}>
                                                    <img src={diet.imgSrc} alt="" className="ProfileImg" />
                                                    <IonText>{diet.label}</IonText>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </IonCol>

                                <IonCol size="12" className="ion-padding-top">
                                    <h3>Which kind of food products would you like NB to recommend you?</h3>
                                    <div className="AllergyBox">
                                        <div className="ImgIcon">
                                            <input type="checkbox" id="myCheck2"
                                                checked={values.food_like.includes('NoPreservative')}
                                                onChange={() => {
                                                    const newfoodlike = values.food_like.includes('NoPreservative')
                                                        ? values.food_like.filter(pref => pref !== 'NoPreservative')
                                                        : [...values.food_like, 'NoPreservative'];
                                                    setFieldValue('food_like', newfoodlike);
                                                }}
                                            />
                                            <label htmlFor="myCheck2">
                                                <img src="./assets/img/No PreservativesWhite_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>No Preservative and Chemicals</IonText>
                                            </label>
                                        </div>
                                        <div className="ImgIcon">
                                            <input type="checkbox" id="myCheck4"
                                                checked={values.food_like.includes('NoSugar')}
                                                onChange={() => {
                                                    const newfoodlike = values.food_like.includes('NoSugar')
                                                        ? values.food_like.filter(pref => pref !== 'NoSugar')
                                                        : [...values.food_like, 'NoSugar'];
                                                    setFieldValue('food_like', newfoodlike);
                                                }}
                                            />
                                            <label htmlFor="myCheck4">
                                                <img src="./assets/img/No added sugarWhite_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>No Added Sugar</IonText>
                                            </label>
                                        </div>
                                        <div className="ImgIcon">
                                            <input type="checkbox" id="myCheck3"
                                                checked={values.food_like.includes('NaturalOnly')}
                                                onChange={() => {
                                                    const newfoodlike = values.food_like.includes('NaturalOnly')
                                                        ? values.food_like.filter(pref => pref !== 'NaturalOnly')
                                                        : [...values.food_like, 'NaturalOnly'];
                                                    setFieldValue('food_like', newfoodlike);
                                                }}
                                            />
                                            <label htmlFor="myCheck3">
                                                <img src="./assets/img/All Natural OnlyWhite_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>All Natural Only</IonText>
                                            </label>
                                            <IonCol size="12" className="ion-padding-vertical">
                                                {values.food_icons.map((icon, index) => (
                                                    <div key={index} className="foodIcon">
                                                        <input
                                                            type="checkbox"
                                                            id={`myCheck${index}`} // Ensure each checkbox has a unique ID
                                                            checked={values.food_like.includes(icon.name)} // Check if the current icon is included in food_like
                                                            onChange={() => {
                                                                const newfoodlike = values.food_like.includes(icon.name)
                                                                    ? values.food_like.filter(pref => pref !== icon.name) 
                                                                    : [...values.food_like, icon.name]; 
                                                                setFieldValue('food_like', newfoodlike); 
                                                            }}
                                                        />
                                                        <label htmlFor={`myCheck${index}`}>
                                                            <img src={icon.icon_food} alt="" className="ProfileImg" />
                                                            <IonText>{icon.name}</IonText>
                                                        </label>
                                                        <button onClick={() => deleteImage(icon.name)}>X</button>
                                                    </div>
                                                ))}

                                            </IonCol>
                                        </div>
                                        <div className="ImgBtn">
                                            <IonButton fill="clear" onClick={() => setToggle(!Toggle)}>
                                                <IonIcon size="large" icon={add} />
                                            </IonButton>
                                        </div>
                                    </div>

                                </IonCol>
                                <IonCol size="12" className="ion-padding-vertical">
                                    {
                                        Toggle ? (
                                            <div className="uploadPicture-button">
                                                <label className="UploadBtn">Upload Picture</label>
                                                <input
                                                    id="AllergyPicture"
                                                    type="file"
                                                    name="food_icons"
                                                    accept="image/.png*"
                                                    onChange={(e) => {
                                                        const file = e.target.files[0];
                                                        if (file) {
                                                            const newName = document.getElementById('ImageNameInput').value;
                                                            const newFoodIcon = { icon_food: URL.createObjectURL(file), name: newName };
                                                            const newFoodIcons = [...values.food_icons, newFoodIcon];
                                                            setFieldValue('food_icons', newFoodIcons);
                                                            console.log("newFoodIcon", newFoodIcon)
                                                        }
                                                    }}
                                                />

                                                <IonInput type="text" id="ImageNameInput" placeholder="Enter image name"
                                                />
                                            </div>
                                        ) : null
                                    }
                                </IonCol>
                                <IonCol>
                                    <div className="SkipBtn ion-padding-vertical">
                                        <IonButton className="Orangebtn" type="submit" fill="clear">SAVE</IonButton>
                                        {loader && (
                                            <div className="loader-container">
                                                <IonSpinner name="crescent" />
                                            </div>
                                        )}
                                        <IonButton onClick={onSkip}>Skip Process</IonButton>
                                    </div>
                                </IonCol>
                            </Form>
                        )}
                    </Formik>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default NutriBudyStep3;
