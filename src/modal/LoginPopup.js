import React, { useState } from "react";
import {
  IonButton,
  IonFabButton,
  IonIcon,
  IonInput,
  IonModal,
  IonText,
  useIonToast,
} from "@ionic/react";
import { close } from "ionicons/icons";
import ForgotPopup from "./ForgotPopup";
import { postApiData } from "../utils/Utils";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../context/AuthContext";

const LoginPopup = (props) => {
  const [isOpenFgp, setIsOpenFgp] = useState(false);
  const [present] = useIonToast();
  const history = useHistory();
  const { login } = useAuth();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const loginSubmit = async (values) => {
    try {
      const formdata = new FormData();
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      const response = await postApiData("/login", formdata);
      if (response?.data?.status === 200) {
        localStorage.setItem("token", response?.data?.token?.original?.access_token);
        localStorage.setItem('auth', 'true')
        presentToast("Top", response?.data?.message_response);
        setTimeout(() => {
          props.setIsOpen(false);
          login(response?.data?.user_data);
          history.push("/home");
        }, 2000);
      } else {
        presentToast("Top", response?.data?.message_response);
      }
    } catch (e) {
      console.log(e);
      presentToast("Top", e.data.message_response);
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
            Login Here
          </IonText>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              loginSubmit(values);
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <div className="loginForm">
                  <div className="loginInput">
                    <img src="/assets/img/user.png" alt="Images" width="20" />
                    <IonInput
                      name="email"
                      onIonChange={(e) =>
                        setFieldValue("email", e.target.value)
                      }
                      label="Default input"
                      placeholder="Enter your username/email"
                    ></IonInput>
                  </div>
                  {errors.email && touched.email ? (
                    <span className="error-text">{errors.email}</span>
                  ) : null}

                  <div className="loginInput">
                    <img
                      src="/assets/img/password.png"
                      alt="Images"
                      width="20"
                    />
                    <IonInput
                      name="password"
                      type="password"
                      onIonChange={(e) =>
                        setFieldValue("password", e.target.value)
                      }
                      label="Default input"
                      placeholder="Enter your password"
                    ></IonInput>
                  </div>
                    {errors.password && touched.password ? (
                      <span className="error-text">{errors.password}</span>
                    ) : null}
                  <IonText
                    color="dark"
                    className="forgotPass"
                    onClick={() => props.setIsOpen(false) || setIsOpenFgp(true)}
                  >
                    Forgot Password?
                  </IonText>
                  <div className="btnGroup">
                    <IonButton type="submit">Login</IonButton>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <IonText color="dark" className="resendCode">
            Don’t have an account?{" "}
            <IonText
              onClick={() => {
                props.setIsOtpOpen(true);
                props.setIsOpen(false);
                setIsOpenFgp(false);
              }}
            >
              Signup Now
            </IonText>
          </IonText>

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
        </div>
      </IonModal>

      <ForgotPopup isOpen={isOpenFgp} setIsOpen={setIsOpenFgp} />
    </>
  );
};

export default LoginPopup;
