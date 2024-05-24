import {
  IonButton, IonCheckbox, IonCol, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonRange,
  IonRow, IonSegment, IonSegmentButton, IonTitle, IonGrid, IonText
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { getApiData, postApiData } from '../../utils/Utils';

const FoodAdd = () => {
  const [selectedTab, setSelectedTab] = useState("step1");
  const [foodtypeData, setFoodtypeData] = useState({});
  const [tastepreferences, setTastePreferences] = useState({});
  const [ingredientsfavlist, setIngredientsFavList] = useState([]);
  const [negativelist, setNegativeList] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [cookingtechniques, setCookingTechniques] = useState([]);

  const [isNonVegetarian, setIsNonVegetarian] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const [sweetPreference, setSweetPreference] = useState(0);
  const [sourPreference, setSourPreference] = useState(0);
  const [bitterPreference, setBitterPreference] = useState(0);
  const [saltyPreference, setSaltyPreference] = useState(0);
  const [umamiPreference, setUmamiPreference] = useState(0);
  const [trynew, setTrynew] = useState([]);
  const [trynew1, setTrynew1] = useState([]);


  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  const initialValues = {
    isNonVegetarian: false,
    isVegetarian: false,
    sweetPreference: 0,
    sourPreference: 0,
    bitterPreference: 0,
    saltyPreference: 0,
    umamiPreference: 0,
    cuisines: cuisines.map(cuisine => ({ setting_name: cuisine, checked: false })),
    cookingtechniques: cookingtechniques.map(technique => ({ setting_name: technique, checked: false }))
  };

  const validationSchema = Yup.object().shape({
    isNonVegetarian: Yup.boolean(),
    isVegetarian: Yup.boolean(),
    sweetPreference: Yup.number().min(0).max(100),
    sourPreference: Yup.number().min(0).max(100),
    bitterPreference: Yup.number().min(0).max(100),
    saltyPreference: Yup.number().min(0).max(100),
    umamiPreference: Yup.number().min(0).max(100),
    cuisines: Yup.array(),
    cookingtechniques: Yup.array(),
  });

  const fetchFood = async () => {
    try {
      const response = await getApiData("user-food-setting");
      console.log('response', response);
      const foodSettings = response?.data?.food_setting;
      setFoodtypeData(foodSettings?.foodtype);
      setTastePreferences(foodSettings?.taste_preferences);
      setIngredientsFavList(foodSettings?.ingredients_fav_list || []);
      setNegativeList(foodSettings?.ingredients_negative_list || []);
      setCuisines(foodSettings?.cuisines || []);
      setCookingTechniques(foodSettings?.cooking_techniques || []);

      setIsNonVegetarian(foodSettings?.foodtype?.non_vegetarian || false);
      setIsVegetarian(foodSettings?.foodtype?.vegetarian || false);
      setSweetPreference(foodSettings?.taste_preferences?.sweet || 0);
      setSourPreference(foodSettings?.taste_preferences?.sour || 0);
      setBitterPreference(foodSettings?.taste_preferences?.bitter || 0);
      setSaltyPreference(foodSettings?.taste_preferences?.salty || 0);
      setUmamiPreference(foodSettings?.taste_preferences?.umami || 0);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const handleNonVegetarianChange = (event) => {
    setIsNonVegetarian(event.target.checked);
    console.log('NON-VEGETARIAN:', event.target.checked);
  };

  const handleVegetarianChange = (event) => {
    setIsVegetarian(event.target.checked);
    console.log('VEGETARIAN:', event.target.checked);
  };

  const handleSubmit = async (values) => {
    console.log("values", values)
    try {

      const formData = {
        is_non_veg: values.isNonVegetarian ? "non-veg" : null,
        is_veg: values.isVegetarian ? "veg" : null,
        test_preference_sweet: values.sweetPreference,
        test_preference_sour: values.sourPreference,
        test_preference_bitter: values.bitterPreference,
        test_preference_salty: values.saltyPreference,
        test_preference_umami: values.umamiPreference,
        cooking_techniques: trynew1,
        cusines: trynew,
      }

      console.log("formData", formData)

      // Send data to API
      const response = await postApiData('save-food-setting', formData);
      console.log('Response:', response);
    } catch (error) {
      console.error("Error while saving data:", error);
    }
  };
  const handleCookingTechniqueChange = (e, technique) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setTrynew1(prevState => [...prevState, technique]);
    } else {
      setTrynew1(prevState => prevState.filter(item => item !== technique));
    }
  };
  const handleCuisineChange = (e, cuisine) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setTrynew(prevState => [...prevState, cuisine]);
    } else {
      setTrynew(prevState => prevState.filter(item => item !== cuisine));
    }
  };




  return (
    <IonPage>
      <IonContent>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/profile">
            <i className="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Food Setting</IonTitle>
        </IonHeader>
        <Formik
          enableReinitialize
          initialValues={{
            ...initialValues,
            isNonVegetarian,
            isVegetarian,
            sweetPreference,
            sourPreference,
            bitterPreference,
            saltyPreference,
            umamiPreference,
            cuisines: cuisines.map(c => ({ ...c, checked: c.flag })),
            cookingtechniques: cookingtechniques.map(ct => ({ ...ct, checked: ct.flag }))
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <IonGrid>
                <IonRow>
                  <IonCol size='6'>
                    <IonItem lines="none">
                      <IonLabel className="StatementInfo ion-margin-start">NON-VEGETARIAN</IonLabel>
                      <IonCheckbox
                        slot='start'
                        className='ion-no-margin'
                        checked={values.isNonVegetarian}
                        onIonChange={(e) => setFieldValue('isNonVegetarian', e.detail.checked)}
                      ></IonCheckbox>
                    </IonItem>
                  </IonCol>
                  <IonCol size='6'>
                    <IonItem lines="none">
                      <IonLabel className="StatementInfo ion-margin-start">VEGETARIAN</IonLabel>
                      <IonCheckbox
                        slot='start'
                        className='ion-no-margin'
                        checked={values.isVegetarian}
                        onIonChange={(e) => setFieldValue('isVegetarian', e.detail.checked)}
                      ></IonCheckbox>
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonGrid className='ion-padding-horizontal'>
                <IonRow>
                  <IonCol size="12" className="ion-no-padding">
                    <h3>Taste Preferences</h3>
                    <div className="progressBar">
                      <IonLabel>Sweet</IonLabel>
                      <IonRange min={0} max={100} color="success"
                        className="ion-no-padding range-custom-height"
                        value={values.sweetPreference}
                        onIonChange={e => setFieldValue('sweetPreference', e.detail.value)}
                      ></IonRange>
                      <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                        <span>I don’t like spicy food</span>
                        <span>I love spicy food</span>
                      </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                      <IonLabel>Sour</IonLabel>
                      <IonRange min={0} max={100}
                        color="warning"
                        className="ion-no-padding range-custom-height"
                        value={values.sourPreference}
                        onIonChange={e => setFieldValue('sourPreference', e.detail.value)}
                      ></IonRange>
                      <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                        <span>I don’t like spicy food</span>
                        <span>I love spicy food</span>
                      </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                      <IonLabel>Bitter</IonLabel>
                      <IonRange min={0} max={100} color="primary"
                        className="ion-no-padding range-custom-height"
                        value={values.bitterPreference}
                        onIonChange={e => setFieldValue('bitterPreference', e.detail.value)}
                      ></IonRange>
                      <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                        <span>I don't eat sweets</span>
                        <span>I love sweets alot</span>
                      </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                      <IonLabel>Salty</IonLabel>
                      <IonRange min={0} max={100} color="primary"
                        className="ion-no-padding range-custom-height"
                        value={values.saltyPreference}
                        onIonChange={e => setFieldValue('saltyPreference', e.detail.value)}
                      ></IonRange>
                      <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                        <span>I like my food bland</span>
                        <span>I love salty food</span>
                      </div>
                    </div>
                    <div className="progressBar ion-padding-top">
                      <IonLabel>Umami/Savoury</IonLabel>
                      <IonRange min={0} max={100}
                        color="warning"
                        className="ion-no-padding range-custom-height"
                        value={values.umamiPreference}
                        onIonChange={e => setFieldValue('umamiPreference', e.detail.value)}
                      ></IonRange>
                      <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                        <span>I don’t like savoury food</span>
                        <span>I love savoury food</span>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonGrid className='ion-padding-horizontal'>
                <IonRow>
                  <IonCol>
                    <h3>Ingredients</h3>
                    <IonSegment
                      scrollable
                      value={selectedTab}
                      onIonChange={handleTabChange}
                      className="personalTab"
                    >
                      <IonSegmentButton value="step1">
                        <IonLabel>Favorites List</IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="step2">
                        <IonLabel>Negative List</IonLabel>
                      </IonSegmentButton>
                    </IonSegment>
                    {selectedTab === "step1" && (
                      <div>
                        <h4>Favorite List</h4>
                        {ingredientsfavlist.length > 0 ? (
                          ingredientsfavlist.map((item, i) => (
                            <span key={i}>
                              <img src={item.images} alt={`Favorite item ${i}`} />
                            </span>
                          ))
                        ) : (
                          <p>No favorite ingredients available.</p>
                        )}
                      </div>
                    )}
                    {selectedTab === "step2" && (
                      <div>
                        <h4>Negative List</h4>
                        {negativelist.length > 0 ? (
                          negativelist.map((item, i) => (
                            <span key={i}>
                              <img src={item.images} alt={`Negative item ${i}`} />
                            </span>
                          ))
                        ) : (
                          <p>No negative ingredients available.</p>
                        )}
                      </div>
                    )}
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonGrid className='ion-padding-horizontal'>
                <h3>Cuisines</h3>
                <IonRow className='d-flex ion-justify-content-center'>
                  {cuisines?.map?.((item, i) => (
                    <IonCol size='5' key={i}>
                      <IonItem lines='none' className='box-shadow'>
                        <Field
                          type="checkbox"
                          name="Cuisines"
                          value={item.cuisines_name}
                          id={`Cuisines${i}`}
                          onChange={(e) => handleCuisineChange(e, item.cuisines_name)}
                        />



                        <IonLabel htmlFor={`Cuisines${i}`}>
                          <IonText className='img-text'>{item.cuisines_name}</IonText>
                        </IonLabel>

                      </IonItem>
                    </IonCol>
                  ))}

                </IonRow>
              </IonGrid>
              <IonGrid className='ion-padding-horizontal'>
                <h3>Cooking Techniques</h3>
                <IonRow className='d-flex ion-justify-content-center'>
                  {cookingtechniques?.map?.((item, i) => (
                    <IonCol size='5' key={i}>
                      <IonItem lines='none' className='box-shadow'>


                        <Field
                          type="checkbox"
                          name="Cooking"
                          value={item.cooking_techniques_name}
                          id={`Cooking${i}`}
                          onChange={(e) => handleCookingTechniqueChange(e, item.cooking_techniques_name)}
                        />

                        <label htmlFor={`Cooking${i}`}>

                          <IonText className='img-text'>{item.cooking_techniques_name}</IonText>
                        </label>

                      </IonItem>
                    </IonCol>
                  ))}

                </IonRow>
              </IonGrid>
              <IonGrid className='ion-padding-horizontal ion-padding-vertical'>
                <IonRow>
                  <IonCol>
                    <IonButton type="submit">SAVE</IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default FoodAdd;
