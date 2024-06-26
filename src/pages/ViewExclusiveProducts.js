import React, { useContext, useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonRow,
  IonSpinner,
  IonText,
  IonTitle,
  useIonLoading,
  useIonModal,
} from "@ionic/react";
import styles from "./Home.module.css";
import "./Home.css";
import {
  star,
  add,
  bookmarkOutline,
  heart,
  heartOutline,
  bookmark,
} from "ionicons/icons";
import "swiper/swiper-bundle.css";
import "@ionic/react/css/ionic-swiper.css";
import Header from "../components/Header";
// import axios from 'axios';
import { getApiData } from "../utils/Utils";
import VariantModal from "./VariantModal";
import { useCart } from "../contexts/CartProvider";
import NotifyMePopup from "../modal/NotifyMePopup";
import { useAuth } from "../context/AuthContext";

const ViewExclusiveProduct = () => {
  const [amountLoaded, setAmountLoaded] = useState(6);
  const { wishListPost, wishListedItems, bookMarkPost, bookMarkedItems } =
    useCart();
  const { notifyStatus } = useAuth();
  const [exclusiveProductData, setExclusiveProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isNotifyMe, setIsNotifyMe] = useState(false);
  const [notifyData, setNotifyData] = useState({});
  const [present, dismiss] = useIonModal(VariantModal, {
    customProp: selectedProduct,
    onDismiss: (data, role) => dismiss(data, role),
  });
  const [presentLoading] = useIonLoading();
  const [isLoading, setIsLoading] = useState(false);

  function openModal(item) {
    setSelectedProduct(item);
    present({
      cssClass: "addCartModal",
      onWillDismiss: (ev) => {
        if (ev.detail.role === "confirm") {
          presentLoading({
            message: "Product added to cart successfully!",
            duration: 1500,
            position: "bottom",
          });
        }
      },
    });
  }

  const exclusiveProduct = async () => {
    try {
      setIsLoading(true);
      const response = await getApiData("/getAllExclusiveProducts");
      setIsLoading(false);
      setExclusiveProduct(response?.data?.data);
    } catch (err) {
      setIsLoading(false);
      setExclusiveProduct([]);
      console.log(err);
    }
  };
  useEffect(() => {
    exclusiveProduct();
  }, []);

  const fetchMore = async (e) => {
    //	Increment the amount loaded by 6 for the next iteration
    setAmountLoaded((prevAmount) => prevAmount + 6);
    e.target.complete();
  };

  return (
    <IonPage id="home-page" className={styles.homePage}>
      {/* <Header /> */}

      <IonContent fullscreen>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/home">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Exclusive Product Stores</IonTitle>
        </IonHeader>
        <IonGrid className="ion-no-padding">
          <IonHeader className="TitleHead">
            <IonTitle>Exclusive Product Stores</IonTitle>
            <IonButton fill="clear" className="IconBtn"></IonButton>
          </IonHeader>
          <IonGrid className="ion-no-padding">
            <IonRow>
              {isLoading ? (
                <div className="loader-container">
                  <IonSpinner name="crescent" />
                </div>
              ) : exclusiveProductData && exclusiveProductData?.length > 0 ? (
                exclusiveProductData?.map((data, index) => (
                  <IonCol size="6" key={index}>
                    <IonCard className="ProductCard">
                      <IonCardHeader className="ProductThumb">
                        <div className="SmartKitchen">
                          <div className="counter">
                            <img
                              src="/assets/img/Mysmart.png"
                              alt="Images"
                              className="icon-img"
                            />

                            <span>{data?.imk_num}</span>
                          </div>
                          <img
                            src="/assets/img/veg-icon.svg"
                            alt="Images"
                            className="icon-img"
                          />
                        </div>
                        <IonButton
                          fill="clear"
                          className="blank-btn"
                          routerLink={`/product-details/${data?.product_id}`}
                        >
                          <img
                            src={
                              !data?.images
                                ? "/assets/img/img-placeholder.jpg"
                                : data?.images
                            }
                            alt="category cover"
                            className="MainProductThumb"
                          />
                        </IonButton>
                        <div className="BookMark">
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={
                              bookMarkedItems.indexOf(data?.product_id) < 0
                                ? bookmarkOutline
                                : bookmark
                            }
                            onClick={() => bookMarkPost(data)}
                          />
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={
                              wishListedItems.indexOf(data?.product_id) < 0
                                ? heartOutline
                                : heart
                            }
                            onClick={() => wishListPost(data)}
                          />
                        </div>
                      </IonCardHeader>

                      <IonCardContent className="ProductDetails">
                        <IonText className="ProductTitle">
                          {data?.productName}
                        </IonText>
                        <div className="PriceRating">
                          <div className="PriceText">
                            <IonText color="dark" className="CurrentPrice">
                              ₹ {data?.product_variant[0]?.offer_price}
                            </IonText>
                            <div className="OfferInfo">
                              <IonText color="dark" className="OldPrice">
                                {data?.product_variant[0]?.main_price}
                              </IonText>
                              <IonChip className="offerBedge">
                                {(
                                  ((data?.product_variant[0]?.main_price -
                                    data?.product_variant[0]?.offer_price) /
                                    data?.product_variant[0]?.main_price) *
                                  100
                                ).toFixed(0)}
                                % OFF
                              </IonChip>
                            </div>
                          </div>
                          <IonChip className="RateDesign">
                            <span>{data?.star_rating}</span>
                            <IonIcon color="light" size="small" icon={star} />
                          </IonChip>
                        </div>
                        {data?.status === notifyStatus ? (
                          <IonButton
                            className="AddToCartBtn"
                            size="default"
                            shape="round"
                            fill="outline"
                            onClick={() => openModal(data)}
                          >
                            <div className="addText">
                              Add
                              <IonIcon slot="end" size="small" icon={add} />
                            </div>
                          </IonButton>
                        ) : (
                          <IonButton
                            onClick={() => {
                              setNotifyData(data);
                              setIsNotifyMe(true);
                            }}
                            className="AddToCartBtn"
                            size="default"
                            shape="round"
                            fill="outline"
                          >
                            <div className="addText">Notify Me</div>
                          </IonButton>
                        )}
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))
              ) : (
                <IonText>Data not found</IonText>
              )}
            </IonRow>

            <IonInfiniteScroll threshold="100px" onIonInfinite={fetchMore}>
              <IonInfiniteScrollContent
                loadingSpinner="bubbles"
                loadingText="Fetching more..."
              ></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonGrid>
        </IonGrid>
      </IonContent>
      <NotifyMePopup
        isOpen={isNotifyMe}
        setIsOpen={setIsNotifyMe}
        notifyData={notifyData}
      />
    </IonPage>
  );
};

export default ViewExclusiveProduct;
