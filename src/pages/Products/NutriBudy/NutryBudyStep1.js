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
  IonItem,
  IonLabel,
  IonInput,
  useIonViewWillEnter
} from "@ionic/react";
import { useEffect, useState } from "react";
import { getApiDataWithAuth, postApiData } from "../../../utils/Utils";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

const NutryBudyStep1 = () => {
  const [stepFirstData, setStepFirstData] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    height: "",
    weight: "",
    dob: "",
    gender: "",
    image: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "Enter a valid contact number"
      )
      .required("Phone number is required"),
    height: Yup.number().required("Height is required"),
    weight: Yup.number().required("Weight is required"),
    dob: Yup.string().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().notRequired(),  // Make password not required initially
    confirmPassword: Yup.string().when('password', {
      is: password => password && password.length > 0,  // Check if password is provided
      then: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm Password is required"),
      otherwise: Yup.string().notRequired(),
    })
  });

  const stateList = async () => {
    try {
      const response = await getApiDataWithAuth("/getNutribuddy");
      console.log("response",response)
      if (response?.status === 200) {
        const data = response.data.data;
        setStepFirstData(data);
        setFormValues((prevValues) => ({
          ...prevValues,
          name: data?.name || "",
          lastName: data?.last_name || "",
          email: data?.email || "",
          number: data?.mobile || "",
          height: data?.height || "",
          weight: data?.weight || "",
          dob: data?.dob || "",
          gender: data?.gender || "",
          image: data?.image || "",
          id: data?.id || "",
          password: "", 
          confirmPassword: "", 
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    stateList();
  }, []);

  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue("image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    // console.log('values',values)
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("last_name", values.lastName);
      formData.append("mobile", values.number);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("weight", values.weight);
      formData.append("height", values.height);
      formData.append("dob", values.dob);
      formData.append("gender", values.gender);
      formData.append("image", values.image);
      formData.append("user_id", values.id);
      formData.append("confrompassword", values.confirmPassword); 
      console.log('formData',formData)

      const response = await postApiData("postStepFirst", formData); 
      console.log("response1",response)
    } catch (err) {
      console.log(err);
    }
    resetForm();
  };

  return (
    <IonGrid className="ion-padding-bottom">
      <div>
        {formValues && formValues?.name && (
          <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values, { resetForm });
            }}
          >
            {({ isSubmitting, setFieldValue, values, resetForm }) => (
              <Form>
                <IonRow>
                  <IonCol size="12">
                    <h4>Personal Setting</h4>
                  </IonCol>
                  <IonCol size="12" className="ion-padding-bottom">
                    <div className="N-profileInput">
                    <lable>Name</lable>
                      <IonInput
                        className="ion-margin-vertical"
                        name="name"
                        type="text"
                        placeholder="Enter your Name"
                        value={values?.name}
                        onIonChange={(e) =>
                          setFieldValue("name", e.detail.value)
                        }
                      ></IonInput>
                      <ErrorMessage component="div" name="name" style={{ color: "red" }}/>
                      <label>Last Name</label>
                      <IonInput
                        className="ion-margin-vertical"
                        name="lastName"
                        type="text"
                        placeholder="Enter your Last Name"
                        value={values.lastName}
                        onIonChange={(e) =>
                          setFieldValue("lastName", e.detail.value)
                        }
                      ></IonInput>
                      <ErrorMessage component="div" name="lastName" style={{ color: "red" }}/>
                     <label>Email</label>
                      <IonInput
                        className="ion-margin-vertical"
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        value={values.email}
                        readonly
                      ></IonInput>
                      <ErrorMessage component="div" name="email" style={{ color: "red" }}/>
                     <label> Mob.Number</label>
                      <IonInput
                        className="ion-margin-vertical"
                        name="number"
                        type="number"
                        placeholder="Enter your Phone Number"
                        value={values.number}
                        readonly
                      ></IonInput>
                      <ErrorMessage component="div" name="number" style={{ color: "red" }}/>
                     <label>Height</label>
                      <IonInput
                        className="ion-margin-vertical"
                        name="height"
                        type="number"
                        step="0.1"
                        placeholder="Enter your Height(e.g.,5.5)"
                        value={values.height}
                        onIonChange={(e) =>
                          setFieldValue("height", e.detail.value)
                        }
                      ></IonInput>
                      <ErrorMessage component="div" name="height" style={{ color: "red" }}/>
                      <label>Weight</label>
                      <IonInput
                        className="ion-margin-vertical"
                        name="weight"
                        type="number"
                        step="0.1"
                        placeholder="Enter your Weight"
                        value={values.weight}
                        onIonChange={(e) =>
                          setFieldValue("weight", e.detail.value)
                        }
                      ></IonInput>
                      <ErrorMessage component="div" name="weight" style={{ color: "red" }}/>
                      <label>Password</label>
                      <IonInput
                        className="ion-margin-vertical"
                        name="password"
                        type="password"
                        placeholder="Enter your Password"
                        value={values.password}
                        onIonChange={(e) =>
                          setFieldValue("password", e.detail.value)
                        }
                      ></IonInput>
                      <ErrorMessage component="div" name="password" style={{ color: "red" }}/>
                     <label>Confirm Password</label>
                      <IonInput
                        className="ion-margin-vertical"
                        name="confirmPassword"
                        type="password"
                        placeholder="Enter your Confirm Password"
                        value={values.confirmPassword}
                        onIonChange={(e) =>
                          setFieldValue("confirmPassword", e.detail.value)
                        }
                      ></IonInput>
                      <ErrorMessage component="div" name="confirmPassword" style={{ color: "red" }}/>

                      <IonLabel>Enter Your DOB</IonLabel>
                      <IonInput
                        className="ion-margin-vertical"
                        name="dob"
                        type="date"
                        placeholder="Enter your DOB"
                        value={values.dob}
                        onIonChange={(e) =>
                          setFieldValue("dob", e.detail.value)
                        }
                      ></IonInput>
                      <ErrorMessage component="div" name="dob" style={{ color: "red" }}/>

                      <div>
                        <label>Gender</label>
                        <IonRadioGroup
                          name="gender"
                          value={values.gender}
                          onIonChange={(e) =>
                            setFieldValue("gender", e.detail.value)
                          }
                          className="flex ion-justify-content-center ion-align-items-center"
                        >
                          <IonItem lines="none">
                            <IonLabel>Female</IonLabel>
                            <IonRadio
                              slot="start"
                              value="female"
                              checked={values.gender === "female"}
                            />
                          </IonItem>
                          <IonItem lines="none">
                            <IonLabel>Male</IonLabel>
                            <IonRadio
                              slot="start"
                              value="male"
                              checked={values.gender === "male"}
                            />
                          </IonItem>
                        </IonRadioGroup>
                        <ErrorMessage component="div" name="gender" style={{ color: "red" }}/>

                      </div>
                    </div>
                  </IonCol>
                  <IonCol
                    size="12"
                    className="flex flex-column  ion-align-items-center ion-justify-content-center"
                  >
                    <div className="EditprofileImg N-ProfileEdit">
                      <img
                        src={values.image || "./assets/img/img-person.jpg"}
                        alt="Profile"
                        className="ProfileImg"
                      />
                      <div className="image-upload">
                        <label htmlFor="file-input" className="N-EditProfile">
                          <img src="./assets/img/edit.png" alt="Edit" />
                        </label>
                        <input
                          id="file-input"
                          type="file"
                          onChange={(e) => handleFileChange(e, setFieldValue)}
                        />
                      </div>
                    </div>
                  </IonCol>
                  <IonCol className="ion-justify-content-center flex ion-padding-top">
                    <IonButton
                      fill="clear"
                      type="submit"
                      className="Orangebtn md button button-clear ion-activatable ion-focusable"
                    >
                      SAVE
                    </IonButton>
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
