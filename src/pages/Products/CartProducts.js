/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  addOutline,
  arrowBack,
  cart,
  checkmarkSharp,
  chevronBackOutline,
  removeOutline,
  trashOutline,
} from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { CartStore, removeFromCart } from "../../data/CartStore";
import { ProductStore } from "../../data/ProductStore";
import Header from "../../components/Header";

import styles from "./CartProducts.module.css";

const CartProducts = () => {
  const cartRef = useRef();
  const products = ProductStore.useState((s) => s.products);
  const shopCart = CartStore.useState((s) => s.product_ids);
  const [cartProducts, setCartProducts] = useState([]);
  const [amountLoaded /* , setAmountLoaded */] = useState(6);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getCartProducts = () => {
      setCartProducts([]);
      setTotal(0);

      shopCart.forEach((product) => {
        var favouriteParts = product.split("/");
        var categorySlug = favouriteParts[0];
        var productID = favouriteParts[1];

        const tempCategory = products.filter((p) => p.slug === categorySlug)[0];
        const tempProduct = tempCategory.products.filter(
          (p) => parseInt(p.id) === parseInt(productID)
        )[0];

        const tempCartProduct = {
          category: tempCategory,
          product: tempProduct,
        };

        setTotal(
          (prevTotal) =>
            prevTotal + parseInt(tempProduct.price.replace("£", ""))
        );
        setCartProducts((prevSearchResults) => [
          ...prevSearchResults,
          tempCartProduct,
        ]);
      });
    };

    getCartProducts();
  }, [shopCart]);

  //   const fetchMore = async (e) => {
  //     //	Increment the amount loaded by 6 for the next iteration
  //     setAmountLoaded((prevAmount) => prevAmount + 6);
  //     e.target.complete();
  //   };

  const removeProductFromCart = async (index) => {
    removeFromCart(index);
  };

  return (
    <IonPage id="category-page" className={styles.categoryPage}>
      <Header />

      <IonContent fullscreen>
        <IonHeader className={styles.boxshadow}>
          <div className="flex ion-justify-content-between ion-padding ion-align-items-center">
          <IonIcon color="dark" icon={arrowBack} />
            <IonTitle size="large" className={styles.mainhead}>
              Review Cart
            </IonTitle>
          </div>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size="12">
                  <IonGrid className={styles.paymentlist} >
                     <IonRow className={styles.paymentrow}>
                        <IonCol className={styles.paylogo} size="2">
                        <img
                        src="/assets/img/kissan-sauce.png"
                     alt="Images"
                     />
                        </IonCol>

                        <IonCol className={styles.paycontent} size="4">
                           <IonText>Kissan Fresh Tomato Sauce 500G</IonText>
                           <IonText>By Kissan<br />
                           500 Grams</IonText>
                        </IonCol>

                        <IonCol size="3">
                          <div className={styles.counteritem}>
                            <IonButton fill="" className="ion-no-padding" size="small">
                              <IonIcon icon={addOutline} />
                            </IonButton>
                              <IonText>1</IonText>
                            <IonButton fill="" className="ion-no-padding" size="small">
                              <IonIcon icon={removeOutline} />
                            </IonButton>
                            
                            </div>  
                        </IonCol>

                        <IonCol size="3" className={styles.pricecontent}>
                        <IonText>120.00</IonText>
                           <IonText>160.00
                           </IonText>
                        </IonCol>
                     </IonRow>
                  </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>

      <IonFooter className={styles.cartFooter}>
        <div className={styles.cartCheckout}>
          <IonCardSubtitle>

          </IonCardSubtitle>

          <IonButton color="primary">
          Rs{total.toFixed(2)}
            &nbsp;Checkout
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default CartProducts;
