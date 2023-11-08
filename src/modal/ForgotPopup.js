import { IonButton, IonInput, IonModal, IonText } from "@ionic/react";
import React, { useState } from "react";
import { postApiData } from "../utils/Utils";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const ForgotPopup = (props) => {

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const forgetPassword = async (values) => {
   const { email } = values;
    try {
      const formdata = new FormData();
      formdata.append("email", email);
      const response = await postApiData("/forgot-password", formdata);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <IonModal
        isOpen={props.isOpen}
        onDidDismiss={() => props.setIsOpen(false)}
        className="ForgotModal"
      >
        <div className="loginContainer">
          <IonText color="dark" className="title">
            Reset Password
          </IonText>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              forgetPassword(values);
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <div className="loginForm">
                  <IonInput
                    name="email"
                    onIonChange={(e) => setFieldValue("email", e.target.value)}
                    label="Default input"
                    placeholder="Enter your username/email"
                  ></IonInput>
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                  <div className="btnGroup">
                    <IonButton type="submit">Send Password</IonButton>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </IonModal>
    </>
  );
};

export default ForgotPopup;
