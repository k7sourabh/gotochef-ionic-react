import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonRow,
  IonText,
  useIonToast,
} from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { postApiDataWithAuth } from "../../utils/Utils";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const EditSubmitRecipeStep2 = (props) => {
  const { setSelectedTab, recipeData } = props;
  const [present] = useIonToast();
  const [initialValuesEdit, setInitialValuesEdit] = useState({
    ingredients: [{ data: "", qty: "" }],
    steps: [""],
    blogLink: "",
    youtubeLink: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (recipeData) {
      const { quantity, directions, blogger_url, youtube_link } = recipeData;

      setInitialValuesEdit((prev) => ({
        ...prev,
        ingredients: (quantity &&
          quantity?.map((item) => ({
            data: item.item,
            qty: item.qty,
          }))) || [{ data: "", qty: "" }],
        steps: directions || [""],
        blogLink: blogger_url || "",
        youtubeLink: youtube_link || "",
      }));
    }
    setIsFormVisible(true);
  }, [recipeData]);

  const validationSchema = Yup.object().shape({
    ingredients: Yup.array().of(
      Yup.object().shape({
        data: Yup.string().required("Ingredient name is required"),
        qty: Yup.string().required("Quantity is required"),
      })
    ),
    steps: Yup.array().of(
      Yup.string().required("Step description is required")
    ),
    blogLink: Yup.string().required("Blog link is required"),
    // youtubeLink: Yup.string().required("Youtube link is required"),
  });

  const handleSubmit = async (values) => {
    const obj = {
      recipe_id: id,
      ingredientdata: values.ingredients,
      directions: values.steps,
      blogger_url: values.blogLink,
      youtube_link: values.youtubeLink,
    };

    try {
      const response = await postApiDataWithAuth("/saveRecipeSecondStep", obj);
      presentToast("Top", response?.data?.message);
      setSelectedTab("step3");
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
          {({ values, setFieldValue }) => {
            return (
              <Form>
                <FieldArray
                  name="ingredients"
                  render={({ remove, push }) => (
                    <>
                      <IonGrid>
                        <IonCol size="12">
                          <h4>Preparation Procedure edit</h4>
                        </IonCol>
                        {values.ingredients &&
                          values.ingredients.length > 0 &&
                          values.ingredients.map((name, index) => (
                            <div key={index}>
                              <IonRow>
                                <IonCol size="12">
                                  <div className="MainSubmitRow">
                                    <div className="IngredientsInfo">
                                      <IonText>Ingredients</IonText>
                                    </div>

                                    <div className="QuantityInfo">
                                      <IonText>Quantity</IonText>
                                    </div>
                                    <div className="ActionInfo">
                                      <IonText></IonText>
                                    </div>
                                  </div>
                                </IonCol>
                              </IonRow>
                              <IonRow>
                                <IonCol size="12">
                                  <div className="MainSubmitRow">
                                    <div className="IngredientsInfo">
                                      <div className="RecipeInput">
                                        <IonInput
                                          fill="solid"
                                          name={`ingredients.${index}.data`}
                                          value={values.ingredients[index].data}
                                          onIonChange={(e) =>
                                            setFieldValue(
                                              `ingredients.${index}.data`,
                                              e.detail.value
                                            )
                                          }
                                        ></IonInput>
                                        <ErrorMessage
                                          color="danger"
                                          name={`ingredients.${index}.data`}
                                          component="div"
                                          className="error-message error-text"
                                        />
                                      </div>
                                    </div>

                                    <div className="QuantityInfo">
                                      <div className="RecipeInput">
                                        <IonInput
                                          fill="solid"
                                          name={`ingredients.${index}.qty`}
                                          value={values.ingredients[index].qty}
                                          onIonChange={(e) =>
                                            setFieldValue(
                                              `ingredients.${index}.qty`,
                                              e.detail.value
                                            )
                                          }
                                        ></IonInput>
                                        <ErrorMessage
                                          color="danger"
                                          name={`ingredients.${index}.qty`}
                                          component="div"
                                          className="error-message error-text"
                                        />
                                      </div>
                                    </div>
                                    <div className="ActionInfo">
                                      <IonButton
                                        fill="clear"
                                        onClick={() => remove(index)}
                                      >
                                        <IonIcon
                                          size="default"
                                          icon={trashOutline}
                                          slot="start"
                                        ></IonIcon>
                                      </IonButton>
                                    </div>
                                  </div>
                                </IonCol>
                              </IonRow>
                            </div>
                          ))}

                        <IonRow className="ion-padding-top">
                          <IonCol className="flex ion-justify-content-center ion-align-items-center">
                            <IonButton
                              fill="outline"
                              shape="round"
                              size="default"
                              onClick={() => push({ data: "", qty: "" })}
                            >
                              Add
                            </IonButton>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </>
                  )}
                />

                <FieldArray
                  name="steps"
                  render={({ remove, push }) => (
                    <>
                      <IonGrid>
                        <IonRow>
                          <IonCol size="12">
                            <div className="MainSubmitRow">
                              <div className="IngredientsInfo">
                                <IonText>Steps / Method</IonText>
                              </div>
                            </div>
                          </IonCol>
                        </IonRow>

                        {values.steps &&
                          values.steps.length > 0 &&
                          values.steps.map((name, stepsIndex) => (
                            <div key={stepsIndex}>
                              <IonRow>
                                <IonCol size="12">
                                  <div className="MainSubmitRow">
                                    <div className="IngredientsInfoMethod">
                                      <div className="RecipeInput">
                                        <IonInput
                                          fill="solid"
                                          name={`steps.${stepsIndex}`}
                                          value={values.steps[stepsIndex]}
                                          onIonChange={(e) =>
                                            setFieldValue(
                                              `steps.${stepsIndex}`,
                                              e.detail.value
                                            )
                                          }
                                        ></IonInput>
                                        <ErrorMessage
                                          color="danger"
                                          name={`steps.${stepsIndex}`}
                                          component="div"
                                          className="error-message error-text"
                                        />
                                      </div>
                                    </div>
                                    <div className="ActionInfo">
                                      <IonButton
                                        fill="clear"
                                        onClick={() => remove(stepsIndex)}
                                      >
                                        <IonIcon
                                          size="default"
                                          icon={trashOutline}
                                          slot="start"
                                        ></IonIcon>
                                      </IonButton>
                                    </div>
                                  </div>
                                </IonCol>
                              </IonRow>
                            </div>
                          ))}

                        <IonRow className="ion-padding-top">
                          <IonCol className="flex ion-justify-content-center ion-align-items-center">
                            <IonButton
                              fill="outline"
                              shape="round"
                              size="default"
                              onClick={() => push("")}
                            >
                              Add
                            </IonButton>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </>
                  )}
                />

                <IonGrid>
                  <IonRow>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                      <IonText>Blog Link</IonText>
                      <div className="RecipeInput">
                        <IonInput
                          fill="solid"
                          name="blogLink"
                          value={values.blogLink}
                          onIonChange={(e) =>
                            setFieldValue(`blogLink`, e.detail.value)
                          }
                        ></IonInput>
                        <ErrorMessage
                          color="danger"
                          name="blogLink"
                          component="div"
                          className="error-message error-text"
                        />
                      </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                      <IonText>Youtube Link</IonText>
                      <div className="RecipeInput">
                        <IonInput
                          fill="solid"
                          value={values.youtubeLink}
                          name="youtubeLink"
                          onIonChange={(e) =>
                            setFieldValue(`youtubeLink`, e.detail.value)
                          }
                        ></IonInput>
                        {/* <ErrorMessage
                          color="danger"
                          name="youtubeLink"
                          component="div"
                          className="error-message error-text"
                        /> */}
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                <IonGrid>
                  <IonRow>
                    <IonCol className="flex ion-justify-content-between  ion-align-items-center">
                      <IonButton
                        fill="outline"
                        onClick={() => setSelectedTab("step1")}
                      >
                        Previous
                      </IonButton>
                      <IonButton type="submit">Continue</IonButton>
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

export default EditSubmitRecipeStep2;
