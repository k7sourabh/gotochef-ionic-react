import { IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import styles from "./AddPayment.module.css";
import { arrowBack } from "ionicons/icons";
import Header from "../../components/Header";

const AddPayment = () => {
  return (
    <>
      <IonPage id="home-page" className={styles.homePage}>
      <Header/>

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
