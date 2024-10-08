import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  useIonToast,
} from "@ionic/react";
import { ErrorMessage, Form, Formik } from "formik";
import { timeOutline, closeOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { getApiDataWithAuth, postApiDataWithAuth } from "../../utils/Utils";
import TagsInput from "react-tagsinput";
import { useAuth } from "../../context/AuthContext";

const SubmitRecipeStep1 = (props) => {
  const { setSelectedTab } = props;
  const { userData } = useAuth();
  const [foodType, setFoodType] = useState([]);
  const [typeLevel, setTypeLevel] = useState([]);
  const [techniquesArr, setTechniquesArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tags, setTags] = useState([]);
  const [showTeq, setShowTeq] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [present] = useIonToast();

  const Hours = Array.from({ length: 24 }, (_, index) => index);
  const Minutes = Array.from({ length: 60 }, (_, index) => index);

  const validationSchema = Yup.object().shape({
    recipeTitle: Yup.string().required("Recipe Title is required"),
    selectLevel: Yup.string().required("Select Level is required"),
    selectFoodType: Yup.string().required("Select Food Type is required"),
    recipeDescription: Yup.string().required("Recipe Description is required"),
    cookTime: Yup.string().required("required"),
    cookTimeMinute: Yup.string().required("required"),
    prepTime: Yup.string().required("required"),
    prepTimeMinute: Yup.string().required("required"),
    serve: Yup.string().required("required"),
    // selectTechniques: Yup.string().required("Select Techniques is required"),
    selectProducts: Yup.array()
      .min(1, "Please tag")
      .of(Yup.string())
      .required("Select Products is required"),
  });

  const initialValues = {
    recipeTitle: "",
    selectLevel: "",
    selectFoodType: "",
    recipeDescription: "",
    cookTime: "",
    prepTime: "",
    serve: "",
    selectTechniques: "",
    selectProducts: [],
    cookTimeMinute: "",
    prepTimeMinute: "",
  };

  const getRecipesTypeFoodTypeData = async () => {
    try {
      const response = await getApiDataWithAuth("/getRecipesTypeFoodTypeData");
      setFoodType(response?.data?.data?.foodType);
      setTypeLevel(response?.data?.data?.type);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRecipesTypeFoodTypeData();
  }, []);

  const handleSelectTeq = async (event) => {
    const item = event.target.value;

    if (item) {
      try {
        const response = await postApiDataWithAuth(
          "/recipes-technique-search",
          {
            keyword: item,
          }
        );
        setShowTeq(response?.data?.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      setIsOpen(false);
      setShowTeq([]);
    }
    setSearchTerm(item);
  };

  const handleSubmit = async (values) => {
    console.log("userdata",userData);
    const obj = {
      user_id: userData.user_id,
      recipe_id: "",
      recipesName: values.recipeTitle,
      prep_level: values.selectLevel,
      foodtype: values.selectFoodType,
      prep_time: values.prepTime - values.prepTimeMinute,
      cook_time: values.cookTime - values.cookTimeMinute,
      serving: values.serve,
      technique: techniquesArr,
      used_product: tags,
      longDescription: values.recipeDescription,
    };
    try {
      const response = await postApiDataWithAuth("/saveRecipeFirstStep", obj);
      presentToast("Top", response?.data?.message);
      localStorage.setItem("recipeId", response.data.user_data.id);
      setSelectedTab("step2");
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (showTeq && showTeq?.length > 0) {
      setIsOpen(true);
    }
  }, [showTeq]);

  const handleRemoveTag = (data) => {
    const arr = techniquesArr.filter((tag, i) => {
      return tag !== data;
    });
    setTechniquesArr(arr);
  };

  const presentToast = (position, message) => {
    present({
      message: message,
      duration: 1500,
      position: position,
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <IonGrid className="ion-no-padding">
              <IonRow className="ion-padding-vertical ion-margin-top">
                <IonCol size="12" className="FormGroup">
                  <IonText>Recipe Title</IonText>
                  <IonInput
                    fill="solid"
                    className="fillInput"
                    name="recipeTitle"
                    type="text"
                    placeholder="Enter your Title"
                    value={values.recipeTitle}
                    onIonChange={(e) =>
                      setFieldValue("recipeTitle", e.detail.value)
                    }
                  ></IonInput>
                  <ErrorMessage
                    color="danger"
                    name="recipeTitle"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Select Level</IonText>
                  <IonSelect
                    className="fillInput"
                    label="Solid select"
                    placeholder="Please Select"
                    name="selectLevel"
                    labelPlacement="floating"
                    fill="solid"
                    onIonChange={(e) =>
                      setFieldValue("selectLevel", e.target.value)
                    }
                  >
                    {typeLevel &&
                      typeLevel?.map((data, index) => (
                        <IonSelectOption value={data} key={index}>
                          {data}
                        </IonSelectOption>
                      ))}
                  </IonSelect>
                  <ErrorMessage
                    color="danger"
                    name="selectLevel"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Select Food Type</IonText>
                  <IonSelect
                    className="fillInput"
                    label="Solid select"
                    labelPlacement="floating"
                    fill="solid"
                    placeholder="Select Food Type"
                    name="selectFoodType"
                    onIonChange={(e) =>
                      setFieldValue("selectFoodType", e.target.value)
                    }
                  >
                    {foodType &&
                      foodType?.map((data, index) => (
                        <IonSelectOption value={data} key={index}>
                          {data}
                        </IonSelectOption>
                      ))}
                  </IonSelect>
                  <ErrorMessage
                    color="danger"
                    name="selectFoodType"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Recipe Description</IonText>
                  <IonTextarea
                    className="fillInput fillTextarea"
                    placeholder="Please add description here and method in the section below"
                    name="recipeDescription"
                    onIonChange={(e) =>
                      setFieldValue("recipeDescription", e.detail.value)
                    }
                  ></IonTextarea>
                  <ErrorMessage
                    color="danger"
                    name="recipeDescription"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>
                    Cook Time <IonIcon icon={timeOutline}></IonIcon>
                  </IonText>
                  <div className="timeSelectBox">
                    <div className="timeSelect">
                      <IonSelect
                        className="fillInput"
                        placeholder="Select Hours"
                        name="cookTime"
                        onIonChange={(e) =>
                          setFieldValue("cookTime", e.target.value)
                        }
                      >
                        {Hours &&
                          Hours?.map((data, index) => (
                            <IonSelectOption value={data} key={index}>
                              {data}
                            </IonSelectOption>
                          ))}
                      </IonSelect>

                      <ErrorMessage
                        color="danger"
                        name="cookTime"
                        component="div"
                        className="error-message error-text"
                      />
                    </div>

                    <div className="timeSelect">
                      <IonSelect
                        className="fillInput"
                        placeholder="Select minute"
                        name="cookTimeMinute"
                        onIonChange={(e) =>
                          setFieldValue("cookTimeMinute", e.target.value)
                        }
                      >
                        {Minutes &&
                          Minutes?.map((data, index) => (
                            <IonSelectOption value={data} key={index}>
                              {data}
                            </IonSelectOption>
                          ))}
                      </IonSelect>

                      <ErrorMessage
                        color="danger"
                        name="cookTimeMinute"
                        component="div"
                        className="error-message error-text"
                      />
                    </div>
                  </div>
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>
                    Prep Time <IonIcon icon={timeOutline}></IonIcon>
                  </IonText>
                  <div className="timeSelectBox">
                    <div className="timeSelect">
                      <IonSelect
                        className="fillInput"
                        placeholder="Select Hours"
                        name="prepTime"
                        onIonChange={(e) =>
                          setFieldValue("prepTime", e.target.value)
                        }
                      >
                        {Hours &&
                          Hours?.map((data, index) => (
                            <IonSelectOption value={data} key={index}>
                              {data}
                            </IonSelectOption>
                          ))}
                      </IonSelect>
                      <ErrorMessage
                        color="danger"
                        name="prepTime"
                        component="div"
                        className="error-message error-text"
                      />
                    </div>

                    <div className="timeSelect">
                      <IonSelect
                        className="fillInput"
                        placeholder="Select minute"
                        name="prepTimeMinute"
                        onIonChange={(e) =>
                          setFieldValue("prepTimeMinute", e.target.value)
                        }
                      >
                        {Minutes &&
                          Minutes?.map((data, index) => (
                            <IonSelectOption value={data} key={index}>
                              {data}
                            </IonSelectOption>
                          ))}
                      </IonSelect>
                      <ErrorMessage
                        color="danger"
                        name="prepTimeMinute"
                        component="div"
                        className="error-message error-text"
                      />
                    </div>
                  </div>
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Serve</IonText>
                  <IonInput
                    className="fillInput"
                    fill="solid"
                    placeholder="Serve"
                    name="serve"
                    onIonChange={(e) => setFieldValue("serve", e.detail.value)}
                  ></IonInput>
                  <ErrorMessage
                    color="danger"
                    name="serve"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Select Techniques</IonText>
                  <IonInput
                    className="fillInput"
                    fill="solid"
                    placeholder="Techniques"
                    name="selectTechniques"
                    onIonChange={(e) => {
                      handleSelectTeq(e);
                      setFieldValue("selectTechniques", e.detail.value);
                    }}
                  ></IonInput>
                  <ErrorMessage
                    color="danger"
                    name="selectTechniques"
                    component="div"
                    className="error-message error-text"
                  />

                  {isOpen && (
                    <IonList className="suggestionList">
                      {showTeq &&
                        showTeq?.map((data, index) => (
                          <IonItem
                            className="ion-no-padding"
                            value={data.technique_name}
                            onClick={() => {
                              setTechniquesArr((prev) => [
                                ...prev,
                                data.technique_name,
                              ]);
                              setShowTeq([]);
                              setIsOpen(false);
                            }}
                            key={index}
                          >
                            {data.technique_name}
                          </IonItem>
                        ))}
                    </IonList>
                  )}
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Techniques</IonText>
                  <div className="RecipeTextArea Recipebox tagArea">
                    {techniquesArr &&
                      techniquesArr.map((data, i) => (
                        <div className="ProBtn" key={i}>
                          <IonText>{data}</IonText>
                          <IonButton
                            fill="none"
                            className="text-button"
                            onClick={() => handleRemoveTag(data)}
                          >
                            <IonIcon
                              size="medium"
                              aria-hidden="true"
                              icon={closeOutline}
                              slot="start"
                            />
                          </IonButton>
                        </div>
                      ))}
                  </div>
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Select Products</IonText>

                  <div className="TagsInput-block">
                    <TagsInput
                      name="selectProducts"
                      value={tags}
                      onChange={(tags) => {
                        setFieldValue("selectProducts", tags);
                        setTags(tags);
                      }}
                    />
                    <ErrorMessage
                      color="danger"
                      name="selectProducts"
                      component="div"
                      className="error-message error-text"
                    />
                  </div>
                </IonCol>

                <IonCol size="12">
                  <IonButton type="submit" value="Submit" expand="full">
                    Continue
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SubmitRecipeStep1;
