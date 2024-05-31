import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRange,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  useIonToast,
} from "@ionic/react";

import React, { useEffect, useState } from "react";
import { getApiData, postApiData } from "../../utils/Utils";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// const validationSchema = Yup.object().shape({
//   isVeg: Yup.string().required("required"),
// });

const FoodAdd = () => {
  const [selectedTab, setSelectedTab] = useState("step1");
  const [foodSettingData, setFoodSettingData] = useState({});
  const [formValues, setFormValues] = useState({
    isNonVeg: "",
    isVeg: "",
    sweetPreference: "",
    sourPreference: "",
    bitterPreference: "",
    saltyPreference: "",
    umamiPreference: "",
    cookingTechniques: [],
    cusines: [],
  });
  const [checkedValues, setCheckedValues] = useState([]);
  const [checkedValuesCookings, setCheckedValuesCookings] = useState([]);
  const [showRequireCusines, setShowRequireCusines] = useState(false);
  const [showRequireCooking, setShowRequireCooking] = useState(false);
  const [present] = useIonToast();
  const history = useHistory();

  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  const getFoodSetting = async () => {
    try {
      const response = await getApiData("user-food-setting");
      if (response?.data?.status === 200) {
        setFoodSettingData(response?.data?.food_setting);
        setFormValues({
          isVeg: response?.data?.food_setting?.foodtype.is_veg || "",
          isNonVeg: response?.data?.food_setting?.foodtype.is_non_veg || "",
          sweetPreference:
            response?.data?.food_setting?.taste_preferences
              .test_preference_sweet || "",
          sourPreference:
            response?.data?.food_setting?.taste_preferences
              .test_preference_sour || "",
          bitterPreference:
            response?.data?.food_setting?.taste_preferences
              .test_preference_bitter || "",
          saltyPreference:
            response?.data?.food_setting?.taste_preferences
              .test_preference_salty || "",
          umamiPreference:
            response?.data?.food_setting?.taste_preferences
              .test_preference_umami || "",
          cookingTechniques: [],
          cusines: [],
        });

        response?.data?.food_setting?.cuisines.filter((val) => {
          if (val.flag === 1) {
            setCheckedValues((prev) => [...prev, val.cuisines_name]);
          }
        });

        response?.data?.food_setting?.cooking_techniques.filter((val) => {
          if (val.flag === 1) {
            setCheckedValuesCookings((prev) => [
              ...prev,
              val.cooking_techniques_name,
            ]);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFoodSetting();
  }, []);

  useEffect(() => {
    if (checkedValuesCookings) {
      if (checkedValuesCookings.length > 0) {
        setShowRequireCooking(true);
      } else {
        setShowRequireCooking(false);
      }
    }
  }, [checkedValuesCookings]);

  useEffect(() => {
    if (checkedValues) {
      if (checkedValues.length > 0) {
        setShowRequireCusines(true);
      } else {
        setShowRequireCusines(false);
      }
    }
  }, [checkedValues]);

  const handleSubmit = async (values) => {
    try {
      const obj = {
        is_non_veg: values.isNonVeg,
        is_veg: "veg",
        test_preference_sweet: values.sweetPreference,
        test_preference_sour: values.sourPreference,
        test_preference_bitter: values.bitterPreference,
        test_preference_salty: values.saltyPreference,
        test_preference_umami: values.umamiPreference,
        cooking_techniques: checkedValuesCookings,
        cusines: checkedValues,
      };
      const response = await postApiData("save-food-setting", obj);
      presentToast("Top", response?.data?.message_response);
    } catch (error) {
      console.error("Error while saving data:", error);
    }
  };

  const deleteFavIngredient = async (id) => {
    try {
      const response = await getApiData(`/delete-fav-ingredient/${id}`);
      getFoodSetting();
      if (response?.data?.status === 200) {
        presentToast("Top", response?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNagIngredient = async (id) => {
    try {
      const response = await getApiData(`/delete-neg-ingredient/${id}`);
      getFoodSetting();
      if (response?.data?.status === 200) {
        presentToast("Top", response?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const readMore = (slug) => {
    history.push(`/ingredient-detail/${slug}`);
  };

  const presentToast = (position, message) => {
    present({
      message: message,
      duration: 1500,
      position: position,
    });
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
        {formValues && formValues.sweetPreference && (
          <Formik
            initialValues={formValues}
            // validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ isSubmitting, setFieldValue, values }) => {
              return (
                <Form>
                  <>
                    <IonGrid>
                      <IonRow>
                        <IonCol size="6">
                          <IonItem lines="none">
                            <IonLabel
                              className="StatementInfo ion-margin-start"
                              for="non-veg"
                            >
                              NON-VEGETARIAN
                            </IonLabel>
                            <IonCheckbox
                              slot="start"
                              id="non-veg"
                              className="ion-no-margin"
                              name="isNonVeg"
                              checked={values.isNonVeg === "non-veg"}
                              value="non-veg"
                              onIonChange={(e) => {
                                const isChecked = e.detail.checked;
                                const value = e.target.value;
                                if (isChecked) {
                                  setFieldValue("isNonVeg", value);
                                } else {
                                  setFieldValue("isNonVeg", ""); // Clear the value if unchecked
                                }
                              }}
                            ></IonCheckbox>
                          </IonItem>
                        </IonCol>
                        <IonCol size="6">
                          <IonItem lines="none">
                            <IonLabel
                              className="StatementInfo ion-margin-start"
                              for="veg"
                            >
                              VEGETARIAN
                            </IonLabel>
                            <IonCheckbox
                              slot="start"
                              id="veg"
                              className="ion-no-margin"
                              name="isVeg"
                              checked
                              value="veg"
                            ></IonCheckbox>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                    <IonGrid className="ion-padding-horizontal">
                      <IonRow>
                        <IonCol size="12" className="ion-no-padding">
                          <h3>Taste Preferences</h3>
                          <div className="progressBar">
                            <IonLabel>Sweet</IonLabel>
                            <IonRange
                              min={0}
                              max={10}
                              color="success"
                              className="ion-no-padding range-custom-height"
                              name="sweetPreference"
                              value={values.sweetPreference}
                              onIonChange={(e) => {
                                setFieldValue(
                                  "sweetPreference",
                                  e.detail.value
                                );
                              }}
                            ></IonRange>
                            <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                              <span>I don’t like spicy food</span>
                              <span>I love spicy food</span>
                            </div>
                          </div>
                          <div className="progressBar ion-padding-top">
                            <IonLabel>Sour</IonLabel>
                            <IonRange
                              min={0}
                              max={10}
                              color="warning"
                              className="ion-no-padding range-custom-height"
                              name="sourPreference"
                              value={values.sourPreference}
                              onIonChange={(e) => {
                                setFieldValue("sourPreference", e.detail.value);
                              }}
                            >
                              {" "}
                            </IonRange>
                            <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                              <span>I don’t like spicy food</span>
                              <span>I love spicy food</span>
                            </div>
                          </div>
                          <div className="progressBar ion-padding-top">
                            <IonLabel>Bitter</IonLabel>
                            <IonRange
                              min={0}
                              max={10}
                              color="primary"
                              className="ion-no-padding range-custom-height"
                              name="bitterPreference"
                              value={values.bitterPreference}
                              onIonChange={(e) => {
                                setFieldValue(
                                  "bitterPreference",
                                  e.detail.value
                                );
                              }}
                            >
                              {" "}
                            </IonRange>
                            <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                              <span>I don't eat sweets</span>
                              <span>I love sweets alot</span>
                            </div>
                          </div>
                          <div className="progressBar ion-padding-top">
                            <IonLabel>Salty</IonLabel>
                            <IonRange
                              min={0}
                              max={10}
                              color="primary"
                              className="ion-no-padding range-custom-height"
                              name="saltyPreference"
                              value={values.saltyPreference}
                              onIonChange={(e) => {
                                setFieldValue(
                                  "saltyPreference",
                                  e.detail.value
                                );
                              }}
                            >
                              {" "}
                            </IonRange>
                            <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                              <span>I like my food bland</span>
                              <span>I love salty food</span>
                            </div>
                          </div>
                          <div className="progressBar ion-padding-top">
                            <IonLabel>Umami/Savoury</IonLabel>
                            <IonRange
                              min={0}
                              max={10}
                              color="warning"
                              className="ion-no-padding range-custom-height"
                              name="umamiPreference"
                              value={values.umamiPreference}
                              onIonChange={(e) => {
                                setFieldValue(
                                  "umamiPreference",
                                  e.detail.value
                                );
                              }}
                            ></IonRange>
                            <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                              <span>I don’t like savoury food</span>
                              <span>I love savoury food</span>
                            </div>
                          </div>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                    <IonGrid className="ion-padding-horizontal">
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
                              {foodSettingData &&
                              foodSettingData?.ingredients_fav_list &&
                              foodSettingData.ingredients_fav_list?.length >
                                0 ? (
                                foodSettingData?.ingredients_fav_list?.map(
                                  (item, i) => (
                                    <>
                                      <span key={i}>
                                        <img
                                          src={
                                            !item.images
                                              ? "/assets/img/img-placeholder.jpg"
                                              : item.images
                                          }
                                          onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                              "/assets/img/img-placeholder.jpg";
                                          }}
                                          // src={item.images}
                                          alt={`Favorite item ${i}`}
                                        />
                                      </span>
                                      <h4>{item?.technical_name}</h4>
                                      <IonText>
                                        {item?.descriptions.substring(0, 100) +
                                          "..."}
                                      </IonText>
                                      <IonButton
                                        onClick={() => readMore(item.slug)}
                                      >
                                        Read More
                                      </IonButton>
                                      <IonButton
                                        onClick={() =>
                                          deleteFavIngredient(item.id)
                                        }
                                      >
                                        Delete
                                      </IonButton>
                                    </>
                                  )
                                )
                              ) : (
                                <p>No favorite ingredients available.</p>
                              )}
                            </div>
                          )}
                          {selectedTab === "step2" && (
                            <div>
                              <h4>Negative List</h4>
                              {foodSettingData &&
                              foodSettingData?.ingredients_negative_list &&
                              foodSettingData?.ingredients_negative_list
                                .length > 0 ? (
                                foodSettingData?.ingredients_negative_list?.map(
                                  (item, i) => (
                                    <>
                                      <span key={i}>
                                        <img
                                          src={
                                            !item.images
                                              ? "/assets/img/img-placeholder.jpg"
                                              : item.images
                                          }
                                          alt={`Negative item ${i}`}
                                          onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                              "/assets/img/img-placeholder.jpg";
                                          }}
                                        />
                                      </span>
                                      <h4>{item?.technical_name}</h4>
                                      <IonText>
                                        {item?.descriptions.substring(0, 100) +
                                          "..."}
                                      </IonText>
                                      <IonButton
                                        onClick={() => readMore(item.slug)}
                                      >
                                        Read More
                                      </IonButton>
                                      <IonButton
                                        onClick={() =>
                                          deleteNagIngredient(item.id)
                                        }
                                      >
                                        Delete
                                      </IonButton>
                                    </>
                                  )
                                )
                              ) : (
                                <p>No negative ingredients available.</p>
                              )}
                            </div>
                          )}
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                    <IonGrid className="ion-padding-horizontal">
                      <h3>Cuisines</h3>
                      <IonRow className="d-flex ion-justify-content-center">
                        {foodSettingData &&
                          foodSettingData?.cuisines &&
                          foodSettingData?.cuisines?.map((data, i) => (
                            <IonCol size="5" key={i}>
                              <IonItem lines="none" className="box-shadow">
                                <IonLabel>{data.cuisines_name}</IonLabel>
                                <IonCheckbox
                                  className="ion-margin-start"
                                  checked={checkedValues.includes(
                                    data.cuisines_name
                                  )}
                                  name="cusines"
                                  value={data.cuisines_name}
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
                                ></IonCheckbox>
                              </IonItem>
                            </IonCol>
                          ))}
                        {!showRequireCusines && (
                          <IonText color="danger">
                            At least one cuisines needs to be here
                          </IonText>
                        )}
                      </IonRow>
                    </IonGrid>
                    <IonGrid className="ion-padding-horizontal">
                      <h3>Cooking Techniques</h3>
                      <IonRow className="d-flex ion-justify-content-center">
                        {foodSettingData &&
                          foodSettingData?.cooking_techniques &&
                          foodSettingData?.cooking_techniques?.map(
                            (data, i) => (
                              <IonCol size="5" key={i}>
                                <IonItem lines="none" className="box-shadow">
                                  <IonLabel>
                                    {data.cooking_techniques_name}
                                  </IonLabel>
                                  <IonCheckbox
                                    className="ion-margin-start"
                                    checked={checkedValuesCookings.includes(
                                      data.cooking_techniques_name
                                    )}
                                    name="cookingTechniques"
                                    value={data.cooking_techniques_name}
                                    onIonChange={(event) => {
                                      const isChecked = event.detail.checked;
                                      const value = event.target.value;
                                      if (isChecked) {
                                        setCheckedValuesCookings(
                                          (prevValues) => [...prevValues, value]
                                        );
                                      } else {
                                        setCheckedValuesCookings((prevValues) =>
                                          prevValues.filter(
                                            (item) => item !== value
                                          )
                                        );
                                      }
                                    }}
                                  ></IonCheckbox>
                                </IonItem>
                              </IonCol>
                            )
                          )}
                        {!showRequireCooking && (
                          <IonText color="danger">
                            At least one cooking techniques needs to be here
                          </IonText>
                        )}
                      </IonRow>
                    </IonGrid>
                    <IonGrid className="ion-padding-horizontal ion-padding-vertical">
                      <IonRow>
                        <IonCol>
                          <IonButton
                            type="submit"
                            disabled={
                              !showRequireCooking || !showRequireCusines
                            }
                          >
                            SAVE
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </>
                </Form>
              );
            }}
          </Formik>
        )}
      </IonContent>
    </IonPage>
  );
};

export default FoodAdd;
