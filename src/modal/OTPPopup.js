import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCheckbox,
  IonFabButton,
  IonIcon,
  IonInput,
  IonLabel,
  IonModal,
  IonText,
} from "@ionic/react";
import { close } from "ionicons/icons";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";

const OTPPopup = (props) => {
  const validationSchema = Yup.object({
    number: Yup.string()
      .matches(/^[6-9]\d{9}$/, {
        message: "Please enter valid number.",
        excludeEmptyString: false,
      })
      .required("Phone number is required"),
    otpDigit1: Yup.string().matches(/^\d$/, "Digit 1 must be a single digit"),
    otpDigit2: Yup.string().matches(/^\d$/, "Digit 2 must be a single digit"),
    otpDigit3: Yup.string().matches(/^\d$/, "Digit 3 must be a single digit"),
    otpDigit4: Yup.string().matches(/^\d$/, "Digit 4 must be a single digit"),
  });
  const initialValues = {
    number: "",
    otpDigit1: "",
    otpDigit2: "",
    otpDigit3: "",
    otpDigit4: "",
  };

  //   const handleSubmit = (values) => {
  //    console.log("hi")
  //     console.log(values)
  //      console.log(values.otpDigit1+values.otpDigit2+values.otpDigit3+values.otpDigit4)
  //      let formdata = new FormData();
  //      formdata.append('otp', values.otpDigit1+values.otpDigit2+values.otpDigit3+values.otpDigit4);
  //      formdata.append('mobile', values.number);
  //      axios.post("https://uat.justgotochef.com/api/verify-otp",formdata).then((response)=>{
  //         console.log(response)
  //     })
  //     // setSubmitting(false);
  //   };

  return (
    <>
      <IonModal isOpen={props.isOpen} className="loginModal">
        <div className="loginContainer">
          <IonFabButton
            className="closeButton"
            onClick={() => props.setIsOpen(false)}
          >
            <IonIcon icon={close}></IonIcon>
          </IonFabButton>
          <IonText color="dark" className="title">
            Verify your mobile number to signup
          </IonText>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              // console.log(values);
              let formdata = new FormData();
              formdata.append("mobile", values.number);

              axios
                .post("https://uat.justgotochef.com/api/send-otp", formdata)
                .then((response) => {
                  console.log(response);
                });
              setSubmitting(false);

              // let formdata1 = new FormData();
              // formdata1.append(
              //   "otp",
              //   values.otpDigit1 +
              //     values.otpDigit2 +
              //     values.otpDigit3 +
              //     values.otpDigit4
              // );
              // formdata1.append("mobile", values.number);
              // axios
              //   .post("https://uat.justgotochef.com/api/verify-otp", formdata1)
              //   .then((response) => {
              //     console.log(response);
              //   });
            }}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, values, handleChange, isValid }) => (
              <Form>
                <div className="contactNumber-inputGroup">
                  <IonText color="dark">+91</IonText>
                  <Field
                    label="Number"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter your mobile number"
                    name="number"
                    //   type="number"
                    as={IonInput}
                    onIonChange={handleChange}
                  />
                  <ErrorMessage
                    className="error-text"
                    name="number"
                    component={IonText}
                  />
                </div>

                <div className="OTPGroup">
                  <div className="OTPInput">
                    <Field
                      name="otpDigit1"
                      type="text"
                      maxLength="1"
                      as={IonInput}
                      onIonChange={handleChange}
                    ></Field>
                    <Field
                      name="otpDigit2"
                      type="text"
                      maxLength="1"
                      as={IonInput}
                      onIonChange={handleChange}
                    ></Field>
                    <Field
                      name="otpDigit3"
                      type="text"
                      maxLength="1"
                      as={IonInput}
                      onIonChange={handleChange}
                    ></Field>
                    <Field
                      name="otpDigit4"
                      type="text"
                      maxLength="1"
                      as={IonInput}
                      onIonChange={handleChange}
                    ></Field>
                    <ErrorMessage
                      className="error-text"
                      name="otpDigit1"
                      component={IonText}
                    />
                    <ErrorMessage
                      className="error-text"
                      name="otpDigit2"
                      component={IonText}
                    />
                    <ErrorMessage
                      className="error-text"
                      name="otpDigit3"
                      component={IonText}
                    />
                    <ErrorMessage
                      className="error-text"
                      name="otpDigit4"
                      component={IonText}
                    />
                  </div>

                  <div className="btnGroup">
                    <IonButton
                      className="yallow-btn"
                      type="submit"
                      disabled={!isValid || isSubmitting}
                    >
                      Send OTP
                    </IonButton>
                    <IonButton
                      type="submit"
                      //   onClick={()=>handleSubmit(values)}
                    >
                      Verify
                    </IonButton>
                  </div>
                  <IonText color="dark" className="resendCode">
                    Didn't receive the code? <IonText>Resend</IonText>
                  </IonText>
                </div>
              </Form>
            )}
          </Formik>
          <div className="orDivider">
            <span>OR</span>
          </div>

          <div className="SignupGroup">
            <IonText color="dark">Signup with</IonText>
            <div className="SignupSocials">
              <IonButton fill="clear">
                <img src="/assets/img/facebook-icon.png" alt="Images" />
              </IonButton>
              <IonButton fill="clear">
                <img src="/assets/img/google-icon.png" alt="Images" />
              </IonButton>
              <IonButton fill="clear">
                <img src="/assets/img/apple-icon.png" alt="Images" />
              </IonButton>
            </div>
          </div>

          <div className="TermsGroup">
            <div className="checkGroup">
              <IonCheckbox labelPlacement="end"></IonCheckbox>
              <IonText color="dark">
                I hereby accept the <IonText>Terms and Conditions</IonText>of
                GotoChe
              </IonText>
            </div>
            <div className="checkGroup">
              <IonCheckbox labelPlacement="end"></IonCheckbox>
              <IonText color="dark">
                I hereby accept the <IonText>Privacy Policy</IonText>of GotoChe
              </IonText>
            </div>
          </div>
        </div>
      </IonModal>
    </>
  );
};

export default OTPPopup;
