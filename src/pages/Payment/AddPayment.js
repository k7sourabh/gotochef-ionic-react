import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import styles from "./AddPayment.module.css";
import Header from "../../components/Header";
import { useCart } from "../../contexts/CartProvider";

const AddPayment = () => {
  const { cartItems } = useCart();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce(
        (total, item) =>
          total + item.quantity * parseInt(item.prod_details.offer_price),
        0
      )
    );
  }, [cartItems]);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }


  async function displayRazorpay() {

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    console.log('cartTotal', cartTotal)
    const options = {
      key: "rzp_test_5o9k2e6rhLHdsH", // Enter the Key ID generated from the Dashboard
      amount: cartTotal * 100,
      // currency: currency,
      name: "testing",
      description: "Test Transaction",
      // image: { logo },
      // order_id: order_id,
      handler: async function (response) {
        console.log('response', response)
      },
      prefill: {
        name: "testing",
        email: "testing@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "dummy address",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <IonPage id="home-page" className={styles.homePage}>
        {/* <Header /> */}

        <IonContent fullscreen>
          <IonHeader className="TitleHead bottom-shadow">
            <IonButton className="backBtn" fill="clear" routerLink="/cart">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Checkout</IonTitle>
          </IonHeader>

          <IonGrid className="ion-no-padding ">
            <IonRow className="ion-padding">
              <IonCol size="12">
                <IonItem>
                  <IonInput
                    label="Name"
                    labelPlacement="floating"
                    placeholder="Name"
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="12">
                <IonItem>
                  <IonInput
                    label="Email (Optional)"
                    labelPlacement="floating"
                    placeholder="Email (Optional)"
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="12">
                <IonItem>
                  <IonInput
                    label="Mobile"
                    labelPlacement="floating"
                    placeholder="Mobile"
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>


            {/* <IonRow className={styles.backgroundClrr}>
              <IonCol size="12" className="ion-padding ion-padding-top">
                <IonText className={styles.headingtext}>
                  Saved Payments Options
                </IonText>
              </IonCol>
            </IonRow> */}
            {/* <IonRow className="ion-padding-horizontal">
              <IonCol size="12">
                <IonGrid className={styles.paymentlist}>
                  <IonRow className={styles.paymentrow}>
                    <IonCol className={styles.paylogo}>
                      <img src="/assets/img/Amazon-pay.png" alt="Images" />
                    </IonCol>

                    <IonCol className={styles.paycontent}>
                      <IonText>Amazon Pay</IonText>
                      <IonText>Balance : Rs 150</IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
              <IonCol size="12">
                <IonGrid className={styles.paymentlist}>
                  <IonRow className={styles.paymentrow}>
                    <IonCol className={styles.paylogo}>
                      <img src="/assets/img/Lzypay.jpg" alt="Images" />
                    </IonCol>

                    <IonCol className={styles.paycontent}>
                      <IonText>LazyPay</IonText>
                      <IonText>Clear Your Dues by 18 July 2023</IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
              <IonCol size="12">
                <IonGrid className={styles.paymentlist}>
                  <IonRow className={styles.paymentrow}>
                    <IonCol className={styles.paylogo}>
                      <img src="/assets/img/icici.png" alt="Images" />
                    </IonCol>

                    <IonCol className={styles.paycontent}>
                      <IonText>ICICI Credit</IonText>
                      <IonText>XXXX-XXXXXX 2023</IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
              <IonCol size="12">
                <IonGrid className={styles.paymentlist}>
                  <IonRow className={styles.paymentrow}>
                    <IonCol className={styles.paylogo}>
                      <img src="/assets/img/Amazon-pay.png" alt="Images" />
                    </IonCol>

                    <IonCol className={styles.paycontent}>
                      <IonText>One Credit Card</IonText>
                      <IonText>XXXX-XXXXXX 5931</IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
            </IonRow> */}
            <IonRow className="ion-padding-vertical ion-padding-horizontal">
              <IonCol size="12">
                <IonButton expand="full" onClick={displayRazorpay}>Save & Checkout</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default AddPayment;
