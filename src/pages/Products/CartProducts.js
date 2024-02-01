/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonButton,
  IonButtons,
  IonChip,
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
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, remove, home, closeCircle, closeCircleOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { CartStore } from "../../data/CartStore";
import { ProductStore } from "../../data/ProductStore";
import Header from "../../components/Header";
import styles from "./CartProducts.module.css";
import { useCart } from "../../contexts/CartProvider";
import { set } from "./../../services/Storage";
import LoginPopup from "../../modal/LoginPopup";
import OTPPopup from "../../modal/OTPPopup";
import { useAuth } from "../../context/AuthContext";
import { postApiData } from "../../utils/Utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Form } from "formik";

const CartProducts = () => {
  const products = ProductStore.useState((s) => s.products);
  const shopCart = CartStore.useState((s) => s.product_ids);
  const [isOpenOtp, setIsOpenOtp] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [, /* total */ setTotal] = useState(0);
  const [isOpenChange, setIsOpenChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const {cartItems, setCartItems, removeFromCart} = useCart();
  const [cartTotal, setCartTotal] = useState(0);
  const {authenticated} = useAuth();
  const history = useHistory();

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

  useEffect(()=> {
    setCartTotal(cartItems.reduce((total, item) => total + item.quantity * parseInt(item.prod_details.offer_price), 0));
  }, [cartItems])

  const handleQuantityChange = (product, quantity) => {
    if(quantity === 0) {
      removeFromCart(product);
      return;
    }
    let cart = [...cartItems];
    let index = cartItems.findIndex(
      (cartItem) => cartItem.product_id === product.product_id && cartItem.pro_variant_id === product.pro_variant_id
    );
    cart[index].quantity = quantity;
    setCartItems(cart);
    set("cartItems",cart);
  }

  const handleCheckout = () => {
    history.push("/order-confirm");
  }

  return (
    <IonPage id="cart-page">
      <Header />

      <IonContent fullscreen>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/main-category">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Review Cart</IonTitle>
        </IonHeader>
    {/* <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Sliding Item with End Options</IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption>Favorite</IonItemOption>
          <IonItemOption color="danger">Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">Archive</IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>Sliding Item with Start Options</IonLabel>
        </IonItem>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">Archive</IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>Sliding Item with Options on Both Sides</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption>Favorite</IonItemOption>
          <IonItemOption color="danger">Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList> */}
        <IonGrid className="ion-no-padding">
          <IonRow className="bottom-shadow">
            <IonCol size="12">
            <IonList className="ion-padding-top OrderList">
              {cartItems && cartItems.map((item, index) => 

              <IonItemSliding key={index} className={styles.ItemSlide}>
                <IonItem lines="none">
                  <div className="CardAdd">
                    <div className={styles.productDetails}>
                      <div className={styles.productThumb}>
                        <img src={item.prod_details.image || "/assets/img/product-img.png"} alt="Images" />
                      </div>
                      <div className={styles.productInfo}>
                        <IonText color="dark" className={styles.productTitle}>
                          {item.prod_details.name}
                        </IonText>
                        <div className="BrandQnty">
                          <div className="BrandName">
                          <IonText color="dark" className={styles.productCate}>
                          By ssdssd {item.prod_details.brand_name}
                        </IonText>
                        <IonText color="dark" className={styles.productQty}>
                          {item.variant}
                        </IonText>
                          </div>
                          <div>
                          
                          <div className="QtyBlock">
                         <IonButton onClick={()=>handleQuantityChange(item, item.quantity - 1)} fill="clear" className="IconBtn">
                        <IonIcon color="dark" size="large" icon={remove} />
                      </IonButton>

                      <IonInput readonly value={item.quantity}></IonInput>

                      <IonButton onClick={()=>handleQuantityChange(item, item.quantity + 1)} fill="clear" className="IconBtn">
                        <IonIcon color="dark" size="large" icon={add} />
                      </IonButton>
                    </div>
                  
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className={styles.priceInfo}>
                      <IonText color="dark" className={styles.currentPrice}>
                        ₹{item.prod_details.offer_price*item.quantity}
                      </IonText>
                      <IonText color="dark" className={styles.oldPrice}>
                        ₹{item.prod_details.main_price}
                      </IonText>
                    </div>
                    </div>
                </IonItem>

                <IonItemOptions>
                  <IonItemOption onClick={() => removeFromCart(item)} color="danger">Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>)}


              </IonList>
              
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding-top">
            <IonCol>
              <IonTitle color="dark">Saved For later</IonTitle>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding-horizontal ion-padding-vertical bottom-shadow">
            <IonCol size="4">
              <IonSkeletonText
                animated={true}
                style={{ width: "100%", height: "150px" }}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="4">
              <IonSkeletonText
                animated={true}
                style={{ width: "100%", height: "150px" }}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="4">
              <IonSkeletonText
                animated={true}
                style={{ width: "100%", height: "150px" }}
              ></IonSkeletonText>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding bottom-shadow">
            <IonCol size="6" className="ion-padding-top">
              <IonTitle color="dark" className="ion-no-padding">
                Apply Coupon
              </IonTitle>
              <IonText color="success" className="SaveMoreText">
                Save more with coupons available for you
              </IonText>
            </IonCol>
            <IonCol size="6" className="">
              <div className="CouponGroup">
                <IonInput
                  className="CouponInput"
                  placeholder="Enter Coupon Code"
                ></IonInput>
                <IonButton className="ApplyBtn" fill="clear">
                  Apply
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="BgColor ion-padding bottom-shadow">
            <IonCol size="12">
              <IonText>
                Your Total Savings <span>$94.00</span>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding">
            <IonCol size="12">
              <IonTitle color="dark" className="ion-no-padding">
                Bill Details
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-horizontal ion-padding-bottom ion-justify-content-between">
            <IonCol size="5">
              <IonText>Subtotal</IonText>
            </IonCol>
            <IonCol size="3" className="ion-text-right">
              <IonText>{cartTotal}</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-horizontal ion-padding-bottom ion-justify-content-between">
            <IonCol size="5">
              <IonText>Delivery Fee</IonText>
            </IonCol>
            <IonCol size="3" className="ion-text-right">
              <IonText>Free</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-horizontal ion-padding-bottom ion-justify-content-between">
            <IonCol size="5">
              <IonText>Quantity</IonText>
            </IonCol>
            <IonCol size="3" className="ion-text-right">
              <IonText>0</IonText>
            </IonCol>
          </IonRow>
          {/* <IonRow className="ion-padding-horizontal ion-padding-bottom ion-justify-content-between">
            <IonCol size="5">
              <IonText>Discount</IonText>
            </IonCol>
            <IonCol size="3" className="ion-text-right">
              <IonText>11.00</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-horizontal ion-padding-bottom ion-justify-content-between">
            <IonCol size="5">
              <IonText>Coupan</IonText>
            </IonCol>
            <IonCol size="3" className="ion-text-right">
              <IonText>11.00</IonText>
            </IonCol>
          </IonRow> */}
          <div className="Divider"></div>
          <IonRow className="ion-padding-horizontal ion-padding ion-justify-content-between bottom-shadow">
            <IonCol size="5">
              <IonText className="ToPay">
                <strong>To Pay</strong>
              </IonText>
            </IonCol>
            <IonCol size="3" className="ion-text-right">
              <IonText>
                <strong>{cartTotal}</strong>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding bottom-shadow">
            <IonCol size="12">
              <IonTitle color="dark" className="ion-no-padding">
                Cancellation Policy
              </IonTitle>
              <IonText className="PolicyText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding bottom-shadow padd-80">
            <IonCol size="12">
              <div className="AddressBlock">
                <div className="IconHome">
                  <IonIcon color="primary" size="large" icon={home} />
                </div>
                <div className="Address">
                  <IonTitle color="dark" className="ion-no-padding">
                    Delivering to <strong>Home</strong>
                  </IonTitle>
                  <IonText className="AddressText">
                    10-3-85/4, Flat No 402, Pandit Rao Nilayam, Hyderabad
                  </IonText>
                </div>
                <div className="AddressChangeBtn">
                  <IonButton fill="clear" expand="block" onClick={() => setIsOpenChange(true)}>CHANGE</IonButton>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div className="BootomViewCart ion-padding">
          <div className={styles.priceInfo}>
            <div className="addButn">
              <div className="OfferInfo FlexCols">
                <div className="FlexPro">
                  <IonText color="dark">485.00</IonText>
                  <IonChip className="offerBedge">16 Saved</IonChip>
                </div>
              </div>
              <IonButton
                onClick={() => {authenticated? handleCheckout() :setIsOpenLogin(true)}}
                className="AddToCart"
                size="default"
                shape="round"
                fill="solid"
                color="warning"
              >
                <div className="flex ion-justify-content-between ion-align-items-center w-full">
                  Place Order
                </div>
              </IonButton>
            </div>
          </div>
        </div>

        <IonModal isOpen={isOpenChange} size="small"  className="myModel">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Address</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => setIsOpenChange(false)}>
                  <IonIcon color="dark" size="large" icon={closeCircleOutline} />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

             <IonButton fill="clear" >
             <div className="IconHome">
                <IonIcon color="primary" size="large" icon={home} />
              </div>
              <div className="Address ion-padding-horizontal">
                <IonTitle color="dark" className="ion-no-padding">
                  Delivering to <strong>Home</strong>
                </IonTitle>
                <IonText className="AddressText">
                  10-3-85/4, Flat No 402, Pandit Rao Nilayam, Hyderabad
                </IonText>

              </div>
             </IonButton>
             <IonButton fill="clear">
             <div className="IconHome">
                <IonIcon color="primary" size="large" icon={home} />
              </div>
              <div className="Address ion-padding-horizontal">
                <IonTitle color="dark" className="ion-no-padding">
                  Delivering to <strong>Home</strong>
                </IonTitle>
                <IonText className="AddressText">
                  10-3-85/4, Flat No 402, Pandit Rao Nilayam, Hyderabad
                </IonText>

              </div>
             </IonButton>
             <IonItem className="ion-margin-vertical" lines="none">
             <IonButton className="AddToCartBtn" size="small" shape="round" fill="outline" expand="block"
             onClick={() => setIsOpen(true)}>
              <div className="addText">
                Add Address
                <IonIcon slot="end" size="small" icon={add}/>
              </div>
              </IonButton>
             </IonItem>
            </IonContent>
          </IonModal>
          <IonModal isOpen={isOpen} size="small"  className="myModel">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Edit new address</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>
                <IonIcon color="dark" size="large" icon={closeCircleOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList>
            <IonItem>
               <IonInput type="text" label="Text input" placeholder="Select Your Address"></IonInput>
              </IonItem>
              <IonItem className="ion-padding-top">
                <IonSelect label="Default label" placeholder="Select Your City">
                  <IonSelectOption value="apple">Indore</IonSelectOption>
                  <IonSelectOption value="banana">Bhopal</IonSelectOption>
                  <IonSelectOption value="orange">Mumbai</IonSelectOption>
                  <IonSelectOption value="orange">Delhi</IonSelectOption>
                  <IonSelectOption value="orange">Dhar</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem className="ion-padding-top">
              <IonInput type="number" label="Text input" placeholder="Select Your PIN Code"></IonInput>
              </IonItem>
              <IonItem className="ion-padding-top">
              <IonInput type="text" label="Text input" placeholder="Select Your State"></IonInput>
              </IonItem>
              <IonItem  className="ion-padding-top">
              <IonInput type="text" label="Text input" placeholder="Select Your Country"></IonInput>
              </IonItem>
              <IonItem lines="none" className="ion-padding-top">
              <IonButton size="large">
                Submit
              </IonButton>
              </IonItem>
             
              
              
            </IonList>
          </IonContent>
        </IonModal>
        
      </IonContent>

      <LoginPopup
        isOpen={isOpenLogin}
        setIsOpen={setIsOpenLogin}
        isOtpOpen={isOpenOtp}
        setIsOtpOpen={setIsOpenOtp}
      />
      <OTPPopup isOpen={isOpenOtp} setIsOpen={setIsOpenOtp} />
    </IonPage>
  );
};

export default CartProducts;
