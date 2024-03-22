import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  useIonToast,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { getApiDataWithAuth, postApiDataWithAuth } from "../../utils/Utils";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import TagsInput from "react-tagsinput";

const EditSubmitRecipeStep3 = (props) => {
  const { setSelectedTab, recipeData } = props;
  const [data, setData] = useState({});
  const [tags, setTags] = useState([]);
  const [present] = useIonToast();
  const [initialValuesEdit, setInitialValuesEdit] = useState({
    recipeNotes: "",
    allergyInformation: "",
    selectDiet: "",
    selectCuisine: "",
    occasion: "",
    selectCourse: "",
    selectTag: [],
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    recipeNotes: Yup.string().required("Recipe notes is required"),
    allergyInformation: Yup.string().required(
      "Allergy information is required"
    ),
    selectDiet: Yup.string().required("Select Diet is required"),
    selectCuisine: Yup.string().required("Select cuisine is required"),
    occasion: Yup.string().required("Occasion is required"),
    selectCourse: Yup.string().required("Select course is required"),
    selectTag: Yup.array()
      .min(1, "Please tag")
      .of(Yup.string())
      .required("required"),
  });

  console.log("recipeData", recipeData);

  useEffect(() => {
    if (recipeData) {
      const {
        recipes_notes,
        allergy_info,
        diet,
        cuisinestype,
        foodscategory_id,
        occasions_id,
        tags,
      } = recipeData;

      setInitialValuesEdit((prev) => ({
        ...prev,
        recipeNotes: recipes_notes,
        allergyInformation: allergy_info,
        selectDiet: diet,
        selectCuisine: cuisinestype,
        occasion: occasions_id,
        selectCourse: foodscategory_id,
        selectTag: tags,
      }));
    }
    setIsFormVisible(true);
  }, [recipeData]);

  useEffect(() => {
    if (recipeData) {
      if (recipeData.used_product) {
        let newArr = tags.concat(recipeData.tags);
        setTags(newArr);
      }
    }
  }, [recipeData]);

  const dropDownData = async () => {
    try {
      const response = await getApiDataWithAuth(
        "/getRecipesDietsCusineOccasionCourseData"
      );
      console.log(response.data.data);
      setData(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    dropDownData();
  }, []);

  const handleSubmit = async (values) => {
    const id = localStorage.getItem("recipeId");
    const obj = {
      recipe_id: id,
      recipes_notes: values.recipeNotes,
      allergy_info: values.allergyInformation,
      diet: values.selectDiet,
      cuisinestypetest: values.selectCuisine,
      foodscategory_id: values.selectCourse,
      occasions_id: values.occasion,
      tags: values.selectTag,
    };
    try {
      const response = await postApiDataWithAuth("/saveRecipeThirdStep", obj);
      presentToast("Top", response?.data?.message);
      setSelectedTab("step4");
    } catch (err) {
      console.error(err);
    }
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
      {isFormVisible && (
        <Formik
          initialValues={initialValuesEdit}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => {
            console.log("dhfiduoil", values);
            return (
              <Form>
                <IonGrid>
                  <IonRow>
                    <IonCol size="12">
                      <h4>Notes & Tags</h4>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                      <IonText>Recipe Notes</IonText>
                      <div className="RecipeTextArea">
                        <IonTextarea
                          name="recipeNotes"
                          value={values.recipeNotes}
                          onIonChange={(e) =>
                            setFieldValue("recipeNotes", e.detail.value)
                          }
                        ></IonTextarea>
                        <ErrorMessage
                          color="danger"
                          name="recipeNotes"
                          component="div"
                          className="error-message error-text"
                        />
                      </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                      <IonText>Allergy Information</IonText>
                      <div className="RecipeTextArea">
                        <IonTextarea
                          name="allergyInformation"
                          value={values.allergyInformation}
                          onIonChange={(e) =>
                            setFieldValue("allergyInformation", e.detail.value)
                          }
                        ></IonTextarea>
                        <ErrorMessage
                          color="danger"
                          name="allergyInformation"
                          component="div"
                          className="error-message error-text"
                        />
                      </div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <h4>Tags</h4>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                      <IonText>Select Diet</IonText>
                      <div className="RecipeInput">
                        <IonSelect
                          label="Solid select"
                          labelPlacement="floating"
                          fill="solid"
                          placeholder="Select Diet"
                          name="selectDiet"
                          value={values.selectDiet}
                          onIonChange={(e) =>
                            setFieldValue("selectDiet", e.target.value)
                          }
                        >
                          {data &&
                            data?.diets?.map((value, index) => (
                              <IonSelectOption value={value.diet_name}>
                                {value.diet_name}
                              </IonSelectOption>
                            ))}
                        </IonSelect>
                        <ErrorMessage
                          color="danger"
                          name="selectDiet"
                          component="div"
                          className="error-message error-text"
                        />
                      </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                      <IonText>Select Cuisine</IonText>
                      <div className="RecipeInput">
                        <IonSelect
                          label="Solid select"
                          labelPlacement="floating"
                          fill="solid"
                          placeholder="Select Cuisine"
                          name="selectCuisine"
                          value={values.selectCuisine}
                          onIonChange={(e) =>
                            setFieldValue("selectCuisine", e.target.value)
                          }
                        >
                          {data &&
                            data?.cuisinestypes?.map((value, index) => (
                              <IonSelectOption value={value.cuisinesName}>
                                {value.cuisinesName}
                              </IonSelectOption>
                            ))}
                        </IonSelect>
                        <ErrorMessage
                          color="danger"
                          name="selectCuisine"
                          component="div"
                          className="error-message error-text"
                        />
                      </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                      <IonText>Select Course</IonText>
                      <div className="RecipeInput">
                        <IonSelect
                          label="Solid select"
                          labelPlacement="floating"
                          fill="solid"
                          placeholder="Select Course"
                          name="selectCourse"
                          value={values.selectCourse}
                          onIonChange={(e) =>
                            setFieldValue("selectCourse", e.target.value)
                          }
                        >
                          {data &&
                            data?.foodscategorys?.map((value, index) => (
                              <IonSelectOption value={value.name}>
                                {value.name}
                              </IonSelectOption>
                            ))}
                        </IonSelect>
                        <ErrorMessage
                          color="danger"
                          name="selectCourse"
                          component="div"
                          className="error-message error-text"
                        />
                      </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                      <IonText>Occasion</IonText>
                      <div className="RecipeInput">
                        <IonSelect
                          label="Solid select"
                          labelPlacement="floating"
                          fill="solid"
                          placeholder="Select Occasion"
                          name="occasion"
                          value={values.occasion}
                          onIonChange={(e) =>
                            setFieldValue("occasion", e.target.value)
                          }
                        >
                          {data &&
                            data?.occasionsids?.map((value, index) => (
                              <IonSelectOption value={value.occasionsName}>
                                {value.occasionsName}
                              </IonSelectOption>
                            ))}
                        </IonSelect>
                        <ErrorMessage
                          color="danger"
                          name="occasion"
                          component="div"
                          className="error-message error-text"
                        />
                      </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                      <IonText>Select Custom Tags*</IonText>
                      <div className="RecipeInput">
                        <TagsInput
                          name="selectTag"
                          placeholder="#HashTags"
                          value={tags}
                          onChange={(tags) => {
                            setFieldValue("selectTag", tags);
                            setTags(tags);
                          }}
                        />
                        <ErrorMessage
                          color="danger"
                          name="selectTag"
                          component="div"
                          className="error-message error-text"
                        />
                        {/* <IonInput fill="solid" placeholder="#HashTags"></IonInput> */}
                      </div>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ion-padding-top">
                    <IonCol className="flex ion-justify-content-between  ion-align-items-center">
                      <IonButton
                        fill="outline"
                        onClick={() => setSelectedTab("step2")}
                      >
                        Previous
                      </IonButton>
                      <IonButton type="submit" value="Submit">
                        Continue
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default EditSubmitRecipeStep3;
