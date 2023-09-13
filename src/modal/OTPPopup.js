import React from 'react'
import { IonButton, IonCheckbox, IonFabButton, IonIcon, IonInput, IonModal, IonText } from '@ionic/react'
import { close } from "ionicons/icons";

const OTPPopup = (props) => {
   return (
      <>
         <IonModal isOpen={props.isOpen} className='loginModal'>
            <div className="loginContainer">
               <IonFabButton className="closeButton" onClick={() => props.setIsOpen(false)}>
                  <IonIcon icon={close}></IonIcon>
               </IonFabButton>
               <IonText color="dark" className="title">Verify your mobile number to signup</IonText>
               <div className="contactNumber-inputGroup">
                  <IonText color="dark">+91</IonText>
                  <IonInput label="Default input" placeholder="Enter your mobile number"></IonInput>
               </div>

               <div className="OTPGroup">
                  <div className="OTPInput">
                     <IonInput type="number"></IonInput>
                     <IonInput type="number"></IonInput>
                     <IonInput type="number"></IonInput>
                     <IonInput type="number"></IonInput>
                  </div>

                  <div className="btnGroup">
                     <IonButton className="yallow-btn">Send OTP</IonButton>
                     <IonButton>Verify</IonButton>
                  </div>
                  <IonText color="dark" className="resendCode">Didn't receive the code? <IonText>Resend</IonText></IonText>
               </div>

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
                     <IonText color="dark">I hereby accept the <IonText>Terms and Conditions</IonText>of GotoChe</IonText>
                  </div>
                  <div className="checkGroup">
                     <IonCheckbox labelPlacement="end"></IonCheckbox>
                     <IonText color="dark">I hereby accept the <IonText>Privacy Policy</IonText>of GotoChe</IonText>
                  </div>
               </div>
            </div>
         </IonModal>
      </>
   )
}

export default OTPPopup
