import React, { useState } from 'react'
import { IonButton, IonFabButton, IonIcon, IonInput, IonModal, IonText } from '@ionic/react'
import { close } from "ionicons/icons";
import ForgotPopup from './ForgotPopup';

const LoginPopup = (props) => {
   const [isOpenFgp, setIsOpenFgp] = useState(false);
   return (
      <>
         <IonModal isOpen={props.isOpen} className='loginModal'>
            <div className="loginContainer">
               <IonFabButton className="closeButton" onClick={() => props.setIsOpen(false)}>
                  <IonIcon icon={close}></IonIcon>
               </IonFabButton>
               <IonText color="dark" className="title">Login Here</IonText>
               <div className="loginForm">
                  <div className="loginInput">
                     <img src="/assets/img/user.png" alt="Images" width="20" />
                     <IonInput label="Default input" placeholder="Enter your username/email"></IonInput>
                  </div>

                  <div className="loginInput">
                     <img src="/assets/img/password.png" alt="Images" width="20" />
                     <IonInput label="Default input" placeholder="Enter your password"></IonInput>
                  </div>
                  <IonText color="dark" className="forgotPass" onClick={() => (props.setIsOpen(false) || setIsOpenFgp(true)
                  )}>Forgot Password?</IonText>
                  <div className="btnGroup">
                     <IonButton>Login</IonButton>
                  </div>
               </div>

               <IonText color="dark" className="resendCode">Don’t have an account? <IonText>Signup Now</IonText></IonText>

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
   )
}

export default LoginPopup
