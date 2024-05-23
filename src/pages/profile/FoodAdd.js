import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonTitle } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { getApiData, postApiData } from '../../utils/Utils';


const FoodAdd = () => {
  const [selectedTab, setSelectedTab] = useState("step1");
  const [FoodtypeData, setFoodtypeData] = useState({})
  // console.log('FoodtypeData',FoodtypeData)
  const [tastepreferences, setTastePreferences] = useState({});
  // console.log("tastepreferences",tastepreferences);
  const [ingredientsfavlist, setIngredientsFavList] = useState({})
  console.log("ingredientsfavlist", ingredientsfavlist)
  const [negativelist, setnegativelist] = useState({});
  console.log('negativelist1', negativelist);
  const [cuisines, setCuisines] = useState({})
  // console.log("cuisines",cuisines);
  const [cookingtechniques, setCookingTechniques] = useState({})
  // console.log('cookingtechniques',cookingtechniques);

  const [isNonVegetarian, setIsNonVegetarian] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  // State variables for each taste preference
  const [sweetPreference, setSweetPreference] = useState(0);
  const [sourPreference, setSourPreference] = useState(0);
  console.log('sourPreference', sourPreference)
  const [bitterPreference, setBitterPreference] = useState(0);
  const [saltyPreference, setSaltyPreference] = useState(0);
  const [umamiPreference, setUmamiPreference] = useState(0);
  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  const fetchFood = async () => {
    try {
      const response = await getApiData("user-food-setting")
      console.log('response', response)
      const foodSettings = response?.data?.food_setting;
      setFoodtypeData(foodSettings?.foodtype);
      setTastePreferences(foodSettings?.taste_preferences);
      setIngredientsFavList(foodSettings?.ingredients_fav_list);
      setnegativelist(foodSettings?.ingredients_negative_list);
      setCuisines(foodSettings?.cuisines);
      setCookingTechniques(foodSettings?.cooking_techniques);

      setSweetPreference(foodSettings?.taste_preferences?.sweet || 0);
      setSourPreference(foodSettings?.taste_preferences?.sour || 0);
      setBitterPreference(foodSettings?.taste_preferences?.bitter || 0);
      setSaltyPreference(foodSettings?.taste_preferences?.salty || 0);
      setUmamiPreference(foodSettings?.taste_preferences?.umami || 0);
    } catch (err) {
      console.log(err)
    }
  }

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
  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/profile">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Food Setting</IonTitle>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size='6'>
              <IonItem lines="none">
                <IonLabel className="StatementInfo ion-margin-start" for="veg">NON-VEGETARIAN</IonLabel>
                <IonCheckbox
                  slot='start'
                  id='non-veg'
                  className='ion-no-margin'
                  checked={isNonVegetarian}
                  onIonChange={handleNonVegetarianChange} ></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='6'>
              <IonItem lines="none">
                <IonLabel className="StatementInfo ion-margin-start" for="veg" >VEGETARIAN</IonLabel>
                <IonCheckbox
                  slot='start'
                  id='veg'
                  className='ion-no-margin'
                  checked={isVegetarian}
                  onIonChange={handleVegetarianChange}></IonCheckbox>
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
                  value={sweetPreference}
                  onIonChange={e => setSweetPreference(e.detail.value)}
                >
                </IonRange>
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
                  value={sourPreference}
                  onIonChange={e => setSourPreference(e.detail.value)}
                > </IonRange>
                <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                  <span>I don’t like spicy food</span>
                  <span>I love spicy food</span>
                </div>
              </div>
              <div className="progressBar ion-padding-top">
                <IonLabel>Bitter</IonLabel>
                <IonRange min={0} max={100} color="primary"
                  className="ion-no-padding range-custom-height"
                  value={bitterPreference}
                  onIonChange={e => setBitterPreference(e.detail.value)}
                > </IonRange>
                <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                  <span>I don't eat sweets</span>
                  <span>I love sweets alot</span>
                </div>
              </div>
              <div className="progressBar ion-padding-top">
                <IonLabel>Salty</IonLabel>
                <IonRange min={0} max={100} color="primary"
                  className="ion-no-padding range-custom-height"
                  value={saltyPreference}
                  onIonChange={e => setSaltyPreference(e.detail.value)}
                > </IonRange>
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
                  value={umamiPreference}
                  onIonChange={e => setUmamiPreference(e.detail.value)}
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
                        <img src={item.images} alt='img' />
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
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>African</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>French</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Mughlai</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Chinese</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Italian</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Madhya Pradesh</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Italian</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Madhya Pradesh</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className='ion-padding-horizontal'>
          <h3>Cooking Techniques</h3>
          <IonRow className='d-flex ion-justify-content-center'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Baking</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Deep Frying</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Grill/BBQ</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Roasting</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Boiling</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Microwave</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Slow Cooking</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Steaming</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className='ion-padding-horizontal ion-padding-vertical'>
          <IonRow>
            <IonCol>
              <IonButton>SAVE</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default FoodAdd
