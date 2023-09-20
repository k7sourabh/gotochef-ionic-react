/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import {
  add,
  remove,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { CartStore, } from "../../data/CartStore";
import { ProductStore } from "../../data/ProductStore";
import Header from "../../components/Header";
import styles from "./CartProducts.module.css";

const CartProducts = () => {
  const products = ProductStore.useState((s) => s.products);
  const shopCart = CartStore.useState((s) => s.product_ids);
  const [cartProducts, setCartProducts] = useState([]);
  const [/* total */, setTotal] = useState(0);

  useEffect(() => {
    console.log(cartProducts);
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



  return (
    <IonPage id="category-page">
      <Header />

      <IonContent fullscreen>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="IconBtn" fill="clear">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Review Cart</IonTitle>
        </IonHeader>

        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <IonItemSliding className={styles.ItemSlide}>
                <IonItem>
                  <IonLabel>
                    <div className={styles.productDetails}>
                      <div className={styles.productThumb}>
                        <img src="/assets/img/product-img.png" alt="Images" />
                      </div>

                      <div className={styles.productInfo}>
                        <IonText color="dark" className={styles.productTitle}>Kissan Fresh Tamato</IonText>
                        <IonText color="dark" className={styles.productCate}>By Kissan</IonText>
                        <IonText color="dark" className={styles.productQty}>500gms</IonText>
                      </div>
                    </div>

                    <div className="QtyBlock">
                      <IonButton fill="clear" className='IconBtn'>
                        <IonIcon color="dark" size="large" icon={remove} />
                      </IonButton>

                      <IonInput value="1"></IonInput>

                      <IonButton fill="clear" className='IconBtn'>
                        <IonIcon color="dark" size="large" icon={add} />
                      </IonButton>
                    </div>

                    <div className={styles.priceInfo}>
                      <IonText color="dark" className={styles.currentPrice}>₹110.00</IonText>
                      <IonText color="dark" className={styles.oldPrice}>₹160.00</IonText>
                    </div>
                  </IonLabel>
                </IonItem>

                <IonItemOptions>
                  <IonItemOption color="secondary">Save</IonItemOption>
                  <IonItemOption color="danger">Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CartProducts;
