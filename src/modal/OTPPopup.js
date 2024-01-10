import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCheckbox,
  IonFabButton,
  IonIcon,
  IonInput,
  IonModal,
  IonText,
  useIonToast,
} from "@ionic/react";
import { close } from "ionicons/icons";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import OTPInput from "react-otp-input";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { postApiData } from "../utils/Utils";

const OTPPopup = (props) => {
  const [otpButtonClicked, setOtpButtonClicked] = useState(true);
  const [verifiedClicked, setVerifiedClicked] = useState(false);
  const [resentOtpClicked, setResentOtpClicked] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtpInputBox, setShowOtpInputBox] = useState(false);
  const [present] = useIonToast();
  const history = useHistory();
  // console.log(showOtpInputBox);
  const validationSchema = Yup.object({
    number: Yup.string()
      .matches(/^[6-9]\d{9}$/, {
        message: "Please enter valid number.",
        excludeEmptyString: false,
      })
      .required("Phone number is required"),
  });
  const initialValues = {
    number: "",
  };

  const SendOtpSubmit = async (values) => {
    try {
      setShowOtpInputBox(true);
      let formdata = new FormData();
      formdata.append("mobile", values.number);
      const response = await postApiData("/send-otp", formdata);
    } catch (e) {
      console.log(e);
    }
    setVerifiedClicked(true);
    setOtpButtonClicked(false);
  };

  const handleOtpChange = (otp) => {
    const numericOtp = otp.replace(/\D/g, "");
    setOtp(numericOtp);
  };

  const verifyOtpSubmit = async (values) => {
    try {
      let formdata = new FormData();
      formdata.append("otp", otp);
      formdata.append("mobile", values.number);
      const response = await postApiData("/verify-otp", formdata);
      if (response?.data?.status === true) {
        presentToast("Top", response?.data?.message);
        localStorage.setItem("token", response?.data?.token?.original?.access_token);
        localStorage.setItem("userId", response?.data?.user_data?.id);
        setTimeout(() => {
          props.setIsOpen(false);
          history.push("/home");
        }, 2000);
      } else {
        presentToast("Top", response?.data?.message);
        setResentOtpClicked(true);
      }
    } catch (e) {
      setResentOtpClicked(true);
      presentToast("Top", e?.response?.data?.message);
      console.log(e);
    }
  };

  const reSendOTP = async(values) => {
    alert('hi')
    try {
      let formdata = new FormData();
    formdata.append("mobile", values.number);
    const response = await postApiData("/resend-otp", formdata);
    }catch (e) {
      console.log(e);
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
              if (otpButtonClicked && !verifiedClicked) {
                SendOtpSubmit(values);
              }
              if (verifiedClicked) {
                verifyOtpSubmit(values);
              }
              setSubmitting(false);
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
                    {showOtpInputBox && (
                      <OTPInput
                        value={otp}
                        name="optNumber"
                        onChange={handleOtpChange}
                        numInputs={4}
                        renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                        renderInput={(props) => (
                          <input
                            className="otp-inputChild"
                            type="number"
                            {...props}
                          />
                        )}
                      />
                    )}
                  </div>

                  <div className="btnGroup">
                    <IonButton
                      className="yallow-btn"
                      type="submit"
                      onClick={() => setOtpButtonClicked(true)}
                      disabled={verifiedClicked}
                    >
                      Send OTP
                    </IonButton>
                    <IonButton
                      type="submit"
                      onClick={() => setVerifiedClicked(true)}
                      disabled={!verifiedClicked}
                    >
                      Verify
                    </IonButton>
                  </div>
                  <IonText color="dark" className="resendCode">
                    Didn't receive the code?{" "}
                    <IonButton
                      fill="clear"
                      onClick={() => reSendOTP(values)}
                      // onClick={() => setResentOtpClicked(true)}
                      disabled={!resentOtpClicked}
                    >
                      Resend
                    </IonButton>
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
