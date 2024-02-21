import {
  IonButton,
  IonInput,
  IonModal,
  IonText,
  useIonToast,
} from "@ionic/react";
import React, { useState } from "react";
import { postApiData, postApiDataWithAuth } from "../utils/Utils";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";

const NotifyMePopup = (props) => {
  const { isOpen, setIsOpen, notifyData } = props;
  const { userData } = useAuth();
  const [present] = useIonToast();

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    number: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "Enter valid contact number"
      )
      .required("Phone number is a required"),
  });

  const NotifyMeData = async (values) => {
    const { name, email, number } = values;
    try {
      const obj = {
        quantity: "1",
        product_id: notifyData?.product_id,
        product_variant_id: `${notifyData?.product_variant[0].weight}${notifyData?.product_variant[0].weight_type}`,
        name: name,
        email: email,
        mobile: number,
        user_id: "3996",
      };
      const response = await postApiDataWithAuth("/notify-me", obj);
      if (response?.data?.status === 200) {
        presentToast("Top", response?.data?.message);
        setIsOpen(false);
      } else {
        presentToast("Top", response?.data?.message);
        setIsOpen(false);
      }
    } catch (e) {
      console.log(e);
      presentToast("Top", e?.data?.message);
      setIsOpen(false);
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
      <IonModal
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
        className="ForgotModal"
      >
        <div className="loginContainer">
          <IonText color="dark" className="title">
            Notify Me
          </IonText>
          {userData === null ? (
            <Formik
              initialValues={{
                name: "",
                email: "",
                number: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                NotifyMeData(values);
              }}
            >
              {({ errors, touched, setFieldValue }) => (
                <Form>
                  <div>
                    <IonInput
                      name="name"
                      onIonChange={(e) => setFieldValue("name", e.target.value)}
                      label="Default input"
                      placeholder="Name"
                      className="ion-margin-top"
                    ></IonInput>
                    {errors.name && touched.name ? (
                      <div className="error-message error-text">
                        {errors.name}
                      </div>
                    ) : null}

                    <IonInput
                      name="email"
                      onIonChange={(e) =>
                        setFieldValue("email", e.target.value)
                      }
                      label="Default input"
                      placeholder="Email"
                      className="ion-margin-top"
                    ></IonInput>
                    {errors.email && touched.email ? (
                      <div className="error-message error-text">
                        {errors.email}
                      </div>
                    ) : null}

                    <IonInput
                      name="number"
                      onIonChange={(e) =>
                        setFieldValue("number", e.target.value)
                      }
                      label="Default input"
                      placeholder="number"
                      className="ion-margin-top"
                    ></IonInput>
                    {errors.number && touched.number ? (
                      <div className="error-message error-text">
                        {errors.number}
                      </div>
                    ) : null}

                    <div className="btnGroup flex ion-margin-top">
                      <IonButton type="submit">Save</IonButton>
                      <IonButton onClick={() => setIsOpen(false)}>
                        Close
                      </IonButton>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{
                name: userData?.first_name || "",
                email: userData?.email || "",
                number: userData?.mobile || "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                NotifyMeData(values);
              }}
            >
              {({ errors, touched, setFieldValue, values }) => (
                <Form>
                  <div>
                    <IonInput
                      name="name"
                      onIonChange={(e) => setFieldValue("name", e.target.value)}
                      label="Default input"
                      placeholder="Name"
                      value={values && values?.name}
                      className="ion-margin-top"
                    ></IonInput>
                    {errors.name && touched.name ? (
                      <div className="error-message error-text" color="danger">
                        {errors.name}
                      </div>
                    ) : null}

                    <IonInput
                      name="email"
                      onIonChange={(e) =>
                        setFieldValue("email", e.target.value)
                      }
                      label="Default input"
                      placeholder="Email"
                      value={values && values?.email}
                      className="ion-margin-top"
                    ></IonInput>
                    {errors.email && touched.email ? (
                      <div className="error-message error-text" color="danger">
                        {errors.email}
                      </div>
                    ) : null}

                    <IonInput
                      name="number"
                      onIonChange={(e) =>
                        setFieldValue("number", e.target.value)
                      }
                      label="Default input"
                      placeholder="number"
                      value={values && values?.number}
                      className="ion-margin-top"
                    ></IonInput>
                    {errors.number && touched.number ? (
                      <div className="error-message error-text" color="danger">
                        {errors.number}
                      </div>
                    ) : null}

                    <div className="btnGroup flex ion-margin-top">
                      <IonButton type="submit">Save</IonButton>
                      <IonButton onClick={() => setIsOpen(false)}>
                        Close
                      </IonButton>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </IonModal>
    </>
  );
};

export default NotifyMePopup;
