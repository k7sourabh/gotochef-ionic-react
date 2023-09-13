import { IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import styles from "./AddPayment.module.css";
import { arrowBack } from "ionicons/icons";

const AddPayment = () => {
  return (
    <>
      <IonPage id="home-page" className={styles.homePage}>
        <IonHeader>
          <IonToolbar>
            <IonGrid className="ion-no-padding">
              <IonRow className="ion-justify-content-between ion-padding ion-align-items-center">
                <IonCol size="4">
                  <div className="LogoGroup">
                    <img
                      src="/assets/img/MainLogo.png"
                      alt="Images"
                      className="logoSize"
                    />
                    <img
                      src="/assets/img/ScanIcon.png"
                      alt="Images"
                      className="logoSize"
                    />
                  </div>
                </IonCol>
                <IonCol size="6" className="ion-justify-content-end">
                  <IonButtons className="ion-justify-content-end">
                    <IonButton>
                      <img
                        src="/assets/img/Search.png"
                        alt="Images"
                        className="TopBarIcons"
                      />
                    </IonButton>
                    <IonButton>
                      <img
                        src="/assets/img/edit.png"
                        alt="Images"
                        className="TopBarIcons"
                      />
                    </IonButton>
                    <IonButton routerLink="/favourites">
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

        <IonContent fullscreen>
        <IonHeader className={styles.boxshadow}>
          <div className="flex ion-justify-content-between TitleBar ion-padding ion-align-items-center">
          <IonIcon color="dark" icon={arrowBack} />
            <IonTitle size="large" className={styles.mainhead}>
              Payment Methods
            </IonTitle>
          </div>
        </IonHeader>

        <IonGrid className="ion-no-padding ">
            <IonRow className={styles.backgroundClrr}>
               <IonCol size="12" className="ion-padding ion-padding-top">
                  <IonText className={styles.headingtext}>
                     Saved Payments Options
                  </IonText>
               </IonCol>
            </IonRow>
            <IonRow>
               <IonCol size="12">
                  <IonGrid className={styles.paymentlist} >
                     <IonRow className={styles.paymentrow}>
                        <IonCol className={styles.paylogo}>
                        <img
                        src="/assets/img/Amazon-pay.png"
                     alt="Images"
                     />
                        </IonCol>

                        <IonCol className={styles.paycontent}>
                           <IonText>Amazon Pay</IonText>
                           <IonText>Balance : Rs 150</IonText>
                        </IonCol>
                     </IonRow>
                  </IonGrid>
               </IonCol>
               <IonCol size="12">
                  <IonGrid className={styles.paymentlist} >
                     <IonRow className={styles.paymentrow}>
                        <IonCol className={styles.paylogo}>
                        <img
                        src="/assets/img/Lzypay.jpg"
                     alt="Images"
                     />
                        </IonCol>

                        <IonCol className={styles.paycontent}>
                           <IonText>LazyPay</IonText>
                           <IonText>Clear Your Dues by 18 July 2023</IonText>
                        </IonCol>
                     </IonRow>
                  </IonGrid>
               </IonCol>
               <IonCol size="12">
                  <IonGrid className={styles.paymentlist} >
                     <IonRow className={styles.paymentrow}>
                        <IonCol className={styles.paylogo}>
                        <img
                        src="/assets/img/icici.png"
                     alt="Images"
                     />
                        </IonCol>

                        <IonCol className={styles.paycontent}>
                           <IonText>ICICI Credit</IonText>
                           <IonText>XXXX-XXXXXX 2023</IonText>
                        </IonCol>
                     </IonRow>
                  </IonGrid>
               </IonCol>
               <IonCol size="12">
                  <IonGrid className={styles.paymentlist} >
                     <IonRow className={styles.paymentrow}>
                        <IonCol className={styles.paylogo}>
                        <img
                        src="/assets/img/Amazon-pay.png"
                     alt="Images"
                     />
                        </IonCol>

                        <IonCol className={styles.paycontent}>
                           <IonText>One Credit Card</IonText>
                           <IonText>XXXX-XXXXXX 5931</IonText>
                        </IonCol>
                     </IonRow>
                  </IonGrid>
               </IonCol>
            </IonRow>
        </IonGrid>


            
                  

        </IonContent>
      </IonPage>
    </>
  );
};

export default AddPayment;
