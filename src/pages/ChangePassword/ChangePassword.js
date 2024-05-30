import { IonContent, IonGrid, IonPage, IonInput, IonRow, IonButton, IonHeader, IonTitle, useIonToast, IonSpinner } from "@ionic/react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { postApiDataWithAuth } from "../../utils/Utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const validationSchema = Yup.object().shape({
   oldPassword: Yup.string().required("Confirm password title is required"),
   newPassword: Yup
      .string()
      .required('Please Enter your password')
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

const ChangePassword = () => {
   const [present] = useIonToast();
   const history = useHistory();
   const [loader, setLoader] = useState(false);


   const initialValues = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
   };

   const handleSubmit = async (values, { resetForm }) => {
      setLoader(true)
      try {
         const obj = {
            old_password: values.oldPassword,
            new_password: values.newPassword,
            confirm_password: values.confirmPassword
         }
         const response = await postApiDataWithAuth("/update-user-password", obj);
         console.log(response?.data)
         if (response.data.user_status === true) {
            presentToast("Top", response?.data?.message_response);
            resetForm();
            history.push('/profile')
         } else {
            presentToast("Top", response?.data?.message_response);
         }
      } catch (err) {
         console.error(err);
      }
      setLoader(false)

   }

   const presentToast = (position, message) => {
      present({
         message: message,
         duration: 1500,
         position: position,
      });
   };

   return (
      <>
         <IonPage>
            {/* <Header /> */}
            <IonContent>
               <IonHeader className="TitleHead bottom-shadow">
                  <IonButton className="backBtn" fill="clear" routerLink="/profile">
                     <i class="material-icons dark">west</i>
                  </IonButton>
                  <IonTitle color="dark">Change Password</IonTitle>
               </IonHeader>
               <IonGrid className="ion-padding-horizontal">
                  <IonRow className=" Change-Password">
                     <h1 className="ion-padding-bottom">RESET PASSWORD</h1>
                     <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                           handleSubmit(values, { resetForm });
                        }}
                     >
                        {({ setFieldValue, values }) =>
                           <Form>
                              <div className="PswdloginForm">
                                 <div className="Chng-input">
                                    <IonInput
                                       label="Default input"
                                       placeholder="Old Password"
                                       fill="outline"
                                       name="oldPassword"
                                       type="password"
                                       value={values.oldPassword}
                                       onIonChange={(e) =>
                                          setFieldValue("oldPassword", e.target.value)
                                       }
                                    ></IonInput>
                                    <ErrorMessage
                                       color="danger"
                                       name="oldPassword"
                                       component="div"
                                       className="error-message error-text"
                                    />
                                    <IonInput
                                       label="Password input"
                                       type="password"
                                       fill="outline"
                                       placeholder="New Password"
                                       name="newPassword"
                                       value={values.newPassword}
                                       onIonChange={(e) =>
                                          setFieldValue("newPassword", e.target.value)
                                       }
                                    >
                                    </IonInput>
                                    <ErrorMessage
                                       color="danger"
                                       name="newPassword"
                                       component="div"
                                       className="error-message error-text"
                                    />
                                    <IonInput
                                       label="Password input"
                                       type="password"
                                       fill="outline"
                                       placeholder="Confirm Password"
                                       name="confirmPassword"
                                       value={values.confirmPassword}
                                       onIonChange={(e) =>
                                          setFieldValue("confirmPassword", e.target.value)
                                       }

                                    ></IonInput>
                                    <ErrorMessage
                                       color="danger"
                                       name="confirmPassword"
                                       component="div"
                                       className="error-message error-text"
                                    />
                                    <div className="reset-btn">
                                       <IonButton size="small" type="submit" value="Submit">Reset Password</IonButton>
                                       {loader && (
                                          <div className="loader-container">
                                             <IonSpinner name="crescent" />
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </div>

                           </Form>}
                     </Formik>

                  </IonRow>
               </IonGrid>

            </IonContent>
         </IonPage>


      </>
   )
}
export default ChangePassword;