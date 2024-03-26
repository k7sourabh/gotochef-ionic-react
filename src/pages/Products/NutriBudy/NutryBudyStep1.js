import React from "react";
import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonDatetime,
  IonGrid,
  IonPopover,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonRow,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { IonItem, IonLabel, IonInput } from "@ionic/react";
import { getApiDataWithAuth } from "../../../utils/Utils";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const NutryBudyStep1 = () => {
  const [stepFirstData, setStepFirstData] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    foodType: "",
    image: "",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    // address2: Yup.string(),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.number().required("Email is required"),
    number: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "Enter valid contact number"
      )
      .required("Phone number is a required"),
    foodType: Yup.string().required("foodType is required"),
  });

  const initialValues = {
    name: stepFirstData?.name || "",
    lastName: stepFirstData?.last_name || "",
    email: stepFirstData?.email || "",
    number: stepFirstData?.mobile || "",
    foodType: stepFirstData?.last_name || "",
  };

  const stateList = async () => {
    try {
      const response = await getApiDataWithAuth("/getNutribuddy");
      if (response?.status === 200) {
        setStepFirstData(response?.data?.data);
        setFormValues({
          name: response?.data?.data?.name || "",
          lastName: response?.data?.data?.last_name || "",
          email: response?.data?.data?.email || "",
          number: response?.data?.data?.mobile || "",
          foodType: response?.data?.data?.food_type[0] || "",
          image: response?.data?.data?.image || "",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    stateList();
  }, []);

  return (
    <IonGrid className="ion-padding-bottom">
      <div>
        {formValues && formValues?.name && (
          <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              //   handleSubmit(values);
            }}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form>
                <IonRow>
                  <IonCol size="12">
                    <h4>Personal Setting</h4>
                  </IonCol>
                  <IonCol size="12" className="ion-padding-bottom">
                    <div className="N-profileInput">
                      <IonInput
                        className="ion-margin-vertical"
                        name="name"
                        type="text"
                        placeholder="Enter your Name"
                        value={values && values?.name}
                        onIonChange={(e) =>
                          setFieldValue("name", e.detail.value)
                        }
                      ></IonInput>

                      <IonInput
                        className="ion-margin-vertical"
                        name="lastName"
                        type="text"
                        label="Default input"
                        placeholder="Enter your Last Name"
                        value={values.lastName}
                        onIonChange={(e) =>
                          setFieldValue("lastName", e.detail.value)
                        }
                      ></IonInput>

                      <IonInput
                        className="ion-margin-vertical"
                        name="email"
                        type="email"
                        label="Default input"
                        placeholder="Enter your Email"
                        value={values.email}
                        onIonChange={(e) =>
                          setFieldValue("email", e.detail.value)
                        }
                      ></IonInput>

                      <IonInput
                        className="ion-margin-vertical"
                        name="number"
                        type="number"
                        label="Default input"
                        placeholder="Enter your Phone Number"
                        value={values.number}
                        onIonChange={(e) =>
                          setFieldValue("number", e.detail.value)
                        }
                      ></IonInput>
                      <IonInput
                        className="ion-margin-vertical"
                        name="number"
                        type="number"
                        label="Default input"
                        placeholder="Enter your Height"
                      ></IonInput>
                      <IonInput
                        className="ion-margin-vertical"
                        name="number"
                        type="number"
                        label="Default input"
                        placeholder="Enter your Weight"
                      ></IonInput>
                      <IonLabel>Enter Your DOB</IonLabel>
                      <IonInput
                        className="ion-margin-vertical"
                        name="dob"
                        type="date"
                        label="DOB"
                        placeholder="Enter your DOB"
                      ></IonInput>
                      <div>
                        <IonRadioGroup className="flex ion-justify-content-center ion-align-items-center">
                          <IonItem lines="none">
                            <IonLabel>Female</IonLabel>
                            <IonRadio slot="start" value="option1" />
                          </IonItem>
                          <IonItem lines="none">
                            <IonLabel>Male</IonLabel>
                            <IonRadio slot="start" value="option2" />
                          </IonItem>
                        </IonRadioGroup>
                      </div>
                    </div>
                  </IonCol>
                  <IonCol
                    size="12"
                    className="flex flex-column  ion-align-items-center ion-justify-content-center"
                  >
                    <div className="EditprofileImg N-ProfileEdit">
                      <img
                        src="./assets/img/img-person.jpg"
                        alt=""
                        className="ProfileImg"
                      />
                      <div class="image-upload">
                        <label for="file-input" className="N-EditProfile">
                          {/* src={
                          !category?.images
                            ? "/assets/img/img-placeholder.jpg"
                            : category?.images
                        } */}
                          <img
                            src={
                              values.image
                                ? values.image
                                : "./assets/img/edit.png"
                            }
                            alt=""
                          />
                        </label>
                        <input id="file-input" type="file" />
                      </div>
                    </div>
                  </IonCol>
                  <IonCol className="ion-justify-content-center flex ion-padding-top">
                    <IonButton fill="clear" class="Orangebtn md button button-clear ion-activatable ion-focusable">SAVE</IonButton>
                  </IonCol>
                </IonRow>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </IonGrid>
  );
};

export default NutryBudyStep1;
