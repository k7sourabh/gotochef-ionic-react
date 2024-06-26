import React, { useEffect, useState } from "react";
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
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  useIonModal,
  useIonLoading,
  IonSpinner,
} from "@ionic/react";
import styles from "./Home.module.css";
import "./Home.css";
import {
  star,
  add,
  bookmarkOutline,
  chevronForwardCircleSharp,
  heartOutline,
  heart,
  bookmark,
} from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "@ionic/react/css/ionic-swiper.css";
import Header from "../components/Header";
import { getApiData } from "../utils/Utils";
import { useLogo } from "../contexts/ApiProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import VariantModal from "./VariantModal";
import { useCart } from "../contexts/CartProvider";
import NotifyMePopup from "../modal/NotifyMePopup";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { wishListPost, wishListedItems, bookMarkPost, bookMarkedItems } =
    useCart();
  const { notifyStatus } = useAuth();
  const [exclusiveProductData, setExclusiveProduct] = useState([]);
  const [trendingProductsData, setTrendingProductsData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isNotifyMe, setIsNotifyMe] = useState(false);
  const [notifyData, setNotifyData] = useState({});
  const [present, dismiss] = useIonModal(VariantModal, {
    customProp: selectedProduct,
    onDismiss: (data, role) => dismiss(data, role),
  });
  const [presentLoading] = useIonLoading();
  const { headerImage } = useLogo();
  const history = useHistory();
  const [isloading, setisloading] = useState(false);
  const [isloadingTrands, setisloadingTrands] = useState(false);

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
      setisloading(true);
      const response = await getApiData("/getExclusiveProducts");
      setisloading(false);
      setExclusiveProduct(response?.data?.data);
    } catch (err) {
      setisloading(false);
      setExclusiveProduct([]);
      console.log(err);
    }
  };

  useEffect(() => {
    exclusiveProduct();
  }, []);

  const trendingProducts = async () => {
    try {
      setisloadingTrands(true);
      const response = await getApiData("/getTrendingProducts/5/0");
      setisloadingTrands(false);
      setTrendingProductsData(response?.data?.data);
    } catch (err) {
      setisloadingTrands(false);
      setTrendingProductsData([]);
      console.log(err);
    }
  };

  useEffect(() => {
    trendingProducts();
  }, []);

  return (
    <IonPage id="home-page" className={styles.homePage}>
      {/* <Header /> */}

      <IonContent fullscreen>
        <Swiper>
          <SwiperSlide>
            <img
              src={headerImage.home_banner}
              alt="Images"
              className="Banners"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={headerImage.home_banner}
              alt="Images"
              className="Banners"
            />
          </SwiperSlide>
        </Swiper>

        <IonGrid className="ion-no-padding manage-product">
          <IonHeader className="TitleHead">
            <IonTitle>Exclusive Product Stores</IonTitle>
            <IonButton
              fill="clear"
              className="IconBtn"
              size="small"
              routerLink="/exclusive-products"
            >
              <IonIcon
                color="dark"
                size="large"
                icon={chevronForwardCircleSharp}
              />
            </IonButton>
          </IonHeader>
          <Swiper slidesPerView={2}>
            {isloading ? (
              <div className="loader-container">
                <IonSpinner name="crescent" />
              </div>
            ) : exclusiveProductData && exclusiveProductData?.length > 0 ? (
              exclusiveProductData?.map((category, index) => {
                return (
                  <SwiperSlide key={index}>
                    <IonCard className="ProductCard">
                      <IonCardHeader className="ProductThumb">
                        <div className="SmartKitchen">
                          <div className="counter">
                            <img
                              src="/assets/img/Mysmart.png"
                              alt="Images"
                              className="icon-img"
                            />
                            <span>{category?.imk_num}</span>
                          </div>
                          {category?.foodtype === "vegetarian" ? (
                            <img
                              src="/assets/img/veg-icon.svg"
                              alt="Images"
                              className="icon-img"
                            />
                          ) : (
                            <img
                              src="/assets/img/non-veg-icon.svg"
                              alt="Images"
                              className="icon-img"
                            />
                          )}
                        </div>

                        <img
                          src={
                            !category?.images
                              ? "/assets/img/img-placeholder.jpg"
                              : category?.images
                          }
                          alt=""
                          onClick={() =>
                            history.push(
                              `/product-details/${category?.product_id}`
                            )
                          }
                          className="MainProductThumb"
                        />
                        <div className="BookMark">
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={
                              bookMarkedItems.indexOf(category?.product_id) < 0
                                ? bookmarkOutline
                                : bookmark
                            }
                            onClick={() => bookMarkPost(category)}
                          />
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={
                              wishListedItems.indexOf(category?.product_id) < 0
                                ? heartOutline
                                : heart
                            }
                            onClick={() => wishListPost(category)}
                          />
                        </div>
                      </IonCardHeader>

                      <IonCardContent className="ProductDetails">
                        <IonText
                          onClick={() =>
                            history.push(
                              `/product-details/${category?.product_id}`
                            )
                          }
                          className="ProductTitle"
                        >
                          {category?.productName}
                        </IonText>
                        <IonText className="ProductBrandname">
                          {category?.brand_name}
                        </IonText>
                        <div className="PriceRating">
                          <div className="PriceText">
                            <IonText color="dark" className="CurrentPrice">
                              ₹ {category?.product_variant[0]?.offer_price}
                            </IonText>
                            <div className="OfferInfo">
                              <IonText color="dark" className="OldPrice">
                                {category?.product_variant[0]?.main_price}
                              </IonText>

                              <IonChip className="offerBedge">
                                {(
                                  ((category?.product_variant[0]?.main_price -
                                    category?.product_variant[0]?.offer_price) /
                                    category?.product_variant[0]?.main_price) *
                                  100
                                ).toFixed(0)}
                                % OFF
                              </IonChip>
                            </div>
                          </div>

                          <IonChip className="RateDesign">
                            <span>{category?.star_rating}</span>
                            <IonIcon color="light" size="small" icon={star} />
                          </IonChip>
                        </div>

                        {category?.status === notifyStatus ? (
                          <IonButton
                            onClick={() => openModal(category)}
                            className="AddToCartBtn"
                            size="default"
                            shape="round"
                            fill="outline"
                          >
                            <div className="addText">
                              Add
                              <IonIcon slot="end" size="small" icon={add} />
                            </div>
                          </IonButton>
                        ) : (
                          <IonButton
                            onClick={() => {
                              setNotifyData(category);
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
                  </SwiperSlide>
                );
              })
            ) : (
              <IonText>No data found</IonText>
            )}
          </Swiper>

          <IonRow className="ion-padding">
            <IonCol size="12" className="flex ion-justify-content-center">
              <IonButton
                size="default"
                fill="outline"
                routerLink="/exclusive-products"
              >
                View More
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding manage-product">
          <IonHeader className="TitleHead">
            <IonTitle>See What’s Trending</IonTitle>
            <IonButton
              fill="clear"
              className="IconBtn"
              size="small"
              routerLink="/trending-products"
            >
              <IonIcon
                color="dark"
                size="large"
                icon={chevronForwardCircleSharp}
              />
            </IonButton>
          </IonHeader>

          <Swiper slidesPerView={2} className={styles.swipertab}>
            {isloadingTrands ? (
              <div className="loader-container">
                <IonSpinner name="crescent" />
              </div>
            ) : trendingProductsData && trendingProductsData?.length > 0 ? (
              trendingProductsData?.map((category, index) => {
                return (
                  <SwiperSlide key={index}>
                    <IonCard className="ProductCard">
                      <IonCardHeader className="ProductThumb">
                        <div className="SmartKitchen">
                          <div className="counter">
                            <img
                              src="/assets/img/Mysmart.png"
                              alt="Images"
                              className="icon-img"
                            />
                            <span>{category?.imk_num}</span>
                          </div>
                          {category?.foodtype === "vegetarian" ? (
                            <img
                              src="/assets/img/veg-icon.svg"
                              alt="Images"
                              className="icon-img"
                            />
                          ) : (
                            <img
                              src="/assets/img/non-veg-icon.svg"
                              alt="Images"
                              className="icon-img"
                            />
                          )}
                        </div>

                        <img
                          src={
                            !category?.images
                              ? "/assets/img/img-placeholder.jpg"
                              : category?.images
                          }
                          alt={category?.slug}
                          onClick={() =>
                            history.push(
                              `/product-details/${category?.product_id}`
                            )
                          }
                          className="MainProductThumb"
                        />
                        <div className="BookMark">
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={
                              bookMarkedItems.indexOf(category?.product_id) < 0
                                ? bookmarkOutline
                                : bookmark
                            }
                            onClick={() => bookMarkPost(category)}
                          />
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={
                              wishListedItems.indexOf(category?.product_id) < 0
                                ? heartOutline
                                : heart
                            }
                            onClick={() => wishListPost(category)}
                          />
                        </div>
                      </IonCardHeader>

                      <IonCardContent className="ProductDetails">
                        <IonText
                          onClick={() =>
                            history.push(
                              `/product-details/${category?.product_id}`
                            )
                          }
                          className="ProductTitle"
                        >
                          {category?.productName}
                        </IonText>
                        <IonText className="ProductBrandname">
                          {category?.brand_name}
                        </IonText>
                        <div className="PriceRating">
                          <div className="PriceText">
                            <IonText color="dark" className="CurrentPrice">
                              ₹ {category?.product_variant[0].offer_price}
                            </IonText>
                            <div className="OfferInfo">
                              <IonText color="dark" className="OldPrice">
                                {category?.product_variant[0]?.main_price}
                              </IonText>
                              <IonChip className="offerBedge">
                                {(
                                  ((category?.product_variant[0]?.main_price -
                                    category?.product_variant[0]?.offer_price) /
                                    category?.product_variant[0]?.main_price) *
                                  100
                                ).toFixed(0)}
                                % OFF
                              </IonChip>
                            </div>
                          </div>
                          <IonChip className="RateDesign">
                            <span>{category?.star_rating}</span>
                            <IonIcon color="light" size="small" icon={star} />
                          </IonChip>
                        </div>

                        {category?.status === notifyStatus ? (
                          <IonButton
                            onClick={() => openModal(category)}
                            className="AddToCartBtn"
                            size="default"
                            shape="round"
                            fill="outline"
                          >
                            <div className="addText">
                              Add
                              <IonIcon slot="end" size="small" icon={add} />
                            </div>
                          </IonButton>
                        ) : (
                          <IonButton
                            onClick={() => {
                              setNotifyData(category);
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
                  </SwiperSlide>
                );
              })
            ) : (
              <IonText>No data found</IonText>
            )}
          </Swiper>

          <IonRow className="ion-padding">
            <IonCol size="12" className="flex ion-justify-content-center">
              <IonButton
                size="default"
                fill="outline"
                routerLink="/trending-products"
              >
                View More
              </IonButton>
            </IonCol>
          </IonRow>
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

export default Home;
