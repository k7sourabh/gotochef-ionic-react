import React from "react";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonRow,
  IonText,
} from "@ionic/react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { postApiDataWithAuth } from "../../utils/Utils";

const SubmitRecipeStep4 = (props) => {
  const { setSelectedTab } = props;

  const validationSchema = Yup.object().shape({
    images: Yup.string().required("Cover image is required"),
  });

  const initialValues = {
    images: "",
    images_opt1: "",
    images_opt2: "",
  };

  const handleSubmit = async (values) => {
    console.log(values);
    const id = localStorage.getItem("recipeId");

    try {
      const formdata = new FormData();
      formdata.append("images", values.images);
      formdata.append("images_opt1", values.images_opt1);
      formdata.append("images_opt2", values.images_opt2);
      formdata.append("recipe_id", 1787);

      const response = await postApiDataWithAuth(
        "/saveRecipeLastStep",
        formdata
      );
      //   presentToast("Top", response?.data?.message);
      console.log(response.data.user_data.id);
    } catch (err) {
      console.error(err);
    }
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
            <IonGrid>
              <IonRow>
                <IonCol>
                  <label for="Cover-Profile" class="cover-img-upload">
                    <IonText>Select Cover Image</IonText>
                    <img
                      // src="/assets/img/camera-placeholder.png"
                      src={values?.images}
                      alt=""
                      onError={(e) => {
                        e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                        e.target.src = "/assets/img/camera-placeholder.png"; // Placeholder image URL
                      }}
                    />
                  </label>
                  <input
                    name="images"
                    id="Cover-Profile"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      console.log(file);
                      if (file) {
                        setFieldValue("images", file);
                      }
                    }}
                  />
                  <ErrorMessage
                    color="danger"
                    name="images"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="RecipeSelectImage">
                    <div>
                      <label for="Cover-Profile" class="cover-img-upload">
                        <IonText>Select Image</IonText>
                        <img src="/assets/img/camera-placeholder.png" alt="" />
                      </label>
                      <input
                        name="images_opt1"
                        id="Cover-Profile1"
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          console.log(file);
                          if (file) {
                            console.log("file", file);
                            setFieldValue("images_opt1", file);
                          }
                        }}
                      />
                    </div>
                    <div>
                      <label for="Cover-Profile" class="cover-img-upload">
                        <IonText>Select Image</IonText>
                        <img src="/assets/img/camera-placeholder.png" alt="" />
                      </label>
                      <input
                        name="images_opt2"
                        id="Cover-Profile2"
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          console.log(file);
                          if (file) {
                            setFieldValue("images_opt2", file);
                          }
                        }}
                      />
                    </div>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-top">
                <IonCol className="flex ion-justify-content-between  ion-align-items-center">
                  <IonButton
                    fill="outline"
                    onClick={() => setSelectedTab("step3")}
                  >
                    Previous
                  </IonButton>
                  <IonButton type="submit" value="Submit">
                    Submit
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

export default SubmitRecipeStep4;
