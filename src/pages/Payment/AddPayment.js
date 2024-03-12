import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonText,
  IonTitle,
  useIonToast,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import styles from "./AddPayment.module.css";
import Header from "../../components/Header";
import { useCart } from "../../contexts/CartProvider";
import { useAuth } from "../../context/AuthContext";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { getApiDataWithAuth, postApiDataWithAuth } from "../../utils/Utils";
import OrderConfirm from "../Products/OrderConfirm";
import useRazorpay from "react-razorpay";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddPayment = () => {
  const { cartItems } = useCart();
  const { userData } = useAuth();
  const [Razorpay] = useRazorpay();
  const [cartTotal, setCartTotal] = useState(0);
  const [addressData, setCurrentUserAddressData] = useState({});
  const [cartData, setCartData] = useState([]);
  const [formValues, setFormValues] = useState({
    firstname: "",
    email: "",
    mobile: "",
    paymentMethod: "",
    amount: "",
  });
  const history = useHistory();
  const [present] = useIonToast();
  const [showSubmit, SetShowSubmit] = useState(true);

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    mobile: Yup.string()
      .required("Mobile number is required")
      .matches(/^[6-9]\d{9}$/, {
        message: "Please enter valid number.",
      }),
    paymentMethod: Yup.string().required("Please select a payment method"),
  });

  useEffect(() => {
    setCartTotal(
      cartItems.reduce(
        (total, item) =>
          total + item.quantity * parseInt(item.prod_details.offer_price),
        0
      )
    );
  }, [cartItems]);

  useEffect(() => {
    if (cartTotal > 0) {
      SetShowSubmit(false);
    }
  }, [cartTotal]);

  const userProfile = async () => {
    setFormValues({
      firstname: userData.first_name || "",
      email: userData.email || "",
      mobile: userData.mobile || "",
      paymentMethod: "",
      amount: cartTotal,
    });
  };

  useEffect(() => {
    userProfile();
  }, [userData]);

  const userAddress = async () => {
    try {
      const response = await getApiDataWithAuth("/get-user-address-list");
      setCurrentUserAddressData(
        response?.data?.data[response?.data?.data.length - 1]
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    userAddress();
  }, []);

  const profileSettingPost = async (values) => {
    if (values.paymentMethod === "cod") {
      handleOrderConfirm();
    } else {
      const modifiedCartItems = cartItems.map((item) => {
        const {
          prod_details,
          pro_variant_id,
          product_id,
          quantity,
          variant,
          ...rest
        } = item;
        const proVariantId = item?.pro_variant_id || "0";
        return {
          pro_variant_id: proVariantId.toString(),
          product_id: product_id.toString(),
          quantity: quantity.toString(),
          variant: variant.toString(),
        };
      });

      try {
        const obj = {
          user_id: userData.user_id,
          firstname: values.firstname,
          email: values.email,
          address: addressData.address,
          pincode: addressData.postal_code,
          payment_type: "razorpay",
          mobile: values.mobile,
          city: addressData.cityname,
          state: addressData.statename,
          cart_data: modifiedCartItems,
        };
        const response = await postApiDataWithAuth("/checkout", obj);
        if (response?.status === 200) {
          console.log("iddd", response?.data, response?.data.data.order_id);
          handlePayment(
            response?.data?.result.id,
            response?.data?.data?.order_id
          );
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleOrderConfirm = () => {
    history.push("/order-confirm");
  };

  const handleOrderFail = () => {
    history.push("/order-fail");
  };

  const handlePayment = async (orderIdd, db_orderId) => {
    // const order = await createOrder(orderIdd); //  Create order on your backend
    console.log("orderIdd", orderIdd);

    const options = {
      key: "rzp_test_5o9k2e6rhLHdsH",
      amount: cartTotal * 100,
      currency: "INR",
      name: "testing",
      description: "Test Transaction",
      // image: "https://example.com/your_logo",
      order_id: orderIdd, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: async function (response) {
        console.log("response", response, response.razorpay_payment_id);
        try {
          const obj = {
            user_id: userData.user_id,
            order_id: db_orderId,
            payment_id: response.razorpay_payment_id,
            amount: cartTotal * 100,
            payment_gateway_resp: response,
          };
          console.log(obj);
          const apiResponse = await postApiDataWithAuth(
            "/payment-capture",
            obj
          );
          console.log("dklhtiorrio", apiResponse);
          if (apiResponse.data.status === true) {
            presentToast("Top", response?.data?.message);
            handleOrderConfirm();
          }
        } catch (err) {
          console.error(err);
          presentToast("Top", err?.data?.message);
        }
      },
      prefill: {
        name: userData.first_name,
        email: userData.email,
        contact: userData.mobile,
      },
      notes: {
        address: addressData.address,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      console.log("response Error", response);
      presentToast("Top", response.error.step);
      presentToast("Top", response.error.description);
      handleOrderFail();
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });

    rzp1.open();
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
      <IonPage id="home-page" className={styles.homePage}>
        <IonContent fullscreen>
          <IonHeader className="TitleHead bottom-shadow">
            <IonButton className="backBtn" fill="clear" routerLink="/cart">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Checkout</IonTitle>
          </IonHeader>
          {formValues && formValues.firstname && (
            <Formik
              initialValues={formValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                profileSettingPost(values);
              }}
            >
              {({ setFieldValue, values, errors, touched }) => (
                <Form>
                  <IonGrid className="ion-no-padding ">
                    <IonRow className="ion-padding">
                      <IonCol size="12">
                        <IonItem>
                          <IonInput
                            label="firstname"
                            labelPlacement="floating"
                            placeholder="First name"
                            name="firstname"
                            value={values && values?.firstname}
                            onIonChange={(e) =>
                              setFieldValue("firstname", e.detail.value)
                            }
                          ></IonInput>
                          <ErrorMessage
                            color="danger"
                            name="firstname"
                            component="div"
                            className="error-message error-text"
                          />
                        </IonItem>
                      </IonCol>
                      <IonCol size="12">
                        <IonItem>
                          <IonInput
                            label="Email"
                            labelPlacement="floating"
                            placeholder="Email"
                            name="email"
                            value={values && values?.email}
                            onIonChange={(e) =>
                              setFieldValue("email", e.detail.value)
                            }
                          ></IonInput>
                          <ErrorMessage
                            color="danger"
                            name="email"
                            component="div"
                            className="error-message error-text"
                          />
                        </IonItem>
                      </IonCol>
                      <IonCol size="12">
                        <IonItem>
                          <IonInput
                            label="Mobile"
                            labelPlacement="floating"
                            placeholder="Mobile"
                            name="mobile"
                            value={values && values?.mobile}
                            onIonChange={(e) =>
                              setFieldValue("mobile", e.detail.value)
                            }
                          ></IonInput>
                          <ErrorMessage
                            color="danger"
                            name="mobile"
                            component="div"
                            className="error-message error-text"
                          />
                        </IonItem>
                      </IonCol>

                      <IonCol size="12">
                        <IonItem>
                          <IonInput
                            label="Address"
                            labelPlacement="floating"
                            placeholder="Address"
                            name="address"
                            // value={values && values?.address}
                            disabled
                            value={`${addressData.address} ${addressData.cityname} ${addressData.statename}`}
                          ></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>

                    <IonItem>
                      <IonText color="dark">Payment Method: </IonText>
                      <IonRadioGroup
                        onIonChange={(e) =>
                          setFieldValue("paymentMethod", e.detail.value)
                        }
                      >
                        <IonItem>
                          <IonLabel>Cod</IonLabel>
                          <IonRadio name="paymentMethod" value="cod" />
                        </IonItem>

                        <IonItem>
                          <IonLabel>Razorpay</IonLabel>
                          <IonRadio name="paymentMethod" value="razorpay" />
                        </IonItem>
                      </IonRadioGroup>
                      {errors.paymentMethod && touched.paymentMethod ? (
                        <div className="error-message error-text">
                          {errors.paymentMethod}
                        </div>
                      ) : null}
                    </IonItem>

                    <IonRow className="ion-padding-horizontal ion-padding-bottom ion-justify-content-between">
                      <IonCol size="5">
                        <IonText>Total Amount</IonText>
                      </IonCol>
                      <IonCol size="3" className="ion-text-right">
                        <IonText name="amount">{cartTotal}</IonText>
                      </IonCol>
                    </IonRow>

                    <IonRow className="ion-padding-vertical ion-padding-horizontal">
                      <IonCol size="12">
                        <IonButton
                          type="submit"
                          expand="full"
                          disabled={showSubmit}
                        >
                          Save & Checkout
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </Form>
              )}
            </Formik>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default AddPayment;
