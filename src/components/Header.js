import React, { useState } from 'react'
import { IonButton, IonButtons, IonCol, IonGrid, IonHeader, IonRow, IonToolbar } from '@ionic/react'
import LoginPopup from '../modal/LoginPopup';
import OTPPopup from '../modal/OTPPopup';

const Header = () => {

   const [isOpenOtp, setIsOpenOtp] = useState(false);
   const [isOpenLogin, setIsOpenLogin] = useState(false);
   return (
      <>
         <IonHeader>
            <IonToolbar>
               <IonGrid className="ion-no-padding">
                  <IonRow className="ion-justify-content-between ion-padding ion-align-items-center">
                     <IonCol size="auto">
                        <div className="LogoGroup">
                           <img
                              src="/assets/img/MainLogo.png"
                              alt="Images"
                              className="mainLogo"
                           />
                           <img
                              src="/assets/img/ScanIcon.png"
                              alt="Images"
                              className="logoTag"
                           />
                        </div>
                     </IonCol>

                     <IonCol size="auto" className="ion-justify-content-end">
                        <IonButtons className="ion-justify-content-end">
                           <IonButton className='IconBtn' >
                              <img
                                 src="/assets/img/Search.png"
                                 alt="Images"
                                 className="TopBarIcons"
                              />
                           </IonButton>

                           <IonButton onClick={() => setIsOpenLogin(true)} className='IconBtn'>
                              <img
                                 src="/assets/img/edit.png"
                                 alt="Images"
                                 className="TopBarIcons"
                              />
                           </IonButton>

                           <IonButton routerLink="/favourites" className='IconBtn'>
                              <img
                                 src="/assets/img/menu.png"
                                 alt="Images"
                                 className="TopBarIcons"
                              />
                           </IonButton>
                        </IonButtons>
                     </IonCol>
                  </IonRow>
               </IonGrid>
            </IonToolbar>
         </IonHeader>

         <LoginPopup isOpen={isOpenLogin} setIsOpen={setIsOpenLogin} isOtpOpen={isOpenOtp} setIsOtpOpen={setIsOpenOtp} />
         <OTPPopup isOpen={isOpenOtp} setIsOpen={setIsOpenOtp} />
      </>
   )
}

export default Header