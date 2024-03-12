import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonIcon,
  IonText,
  useIonLoading,
  useIonModal,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "@ionic/react/css/ionic-swiper.css";

import {
  star,
  add,
  bookmarkOutline,
  heartOutline,
  heart,
  bookmark,
  closeCircle,
} from "ionicons/icons";
import { getApiDataWithAuth } from "../../utils/Utils";
import { useCart } from "../../contexts/CartProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import VariantModal from "../VariantModal";

const SaveForLater = () => {
  const {
    wishListPost,
    wishListedItems,
    bookMarkPost,
    bookMarkedItems,
    saveForLaterData,
  } = useCart();
  const [saveForLaterData1, setSaveForLaterData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const history = useHistory();
  const [present, dismiss] = useIonModal(VariantModal, {
    customProp: selectedProduct,
    onDismiss: (data, role) => dismiss(data, role),
  });
  const [presentLoading] = useIonLoading();

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

  const getSaveForLater = async () => {
    try {
      const response = await getApiDataWithAuth("/get-product-bookmark");
      setSaveForLaterData(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSaveForLater();
  }, [bookMarkedItems]);
  

  const removeItem = (data) => {
    bookMarkPost(data);
    setTimeout(() => {
        getSaveForLater();
    }, 500);
  };

  return (
    <>
      <Swiper slidesPerView={2}>
        {saveForLaterData1 &&
          saveForLaterData1?.map((category, index) => {
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
                      {category?.foodtype === "non-vegetarian" ? (
                        <img
                          src="/assets/img/non-veg-icon.svg"
                          alt="Images"
                          className="icon-img"
                        />
                      ) : (
                        <img
                          src="/assets/img/veg-icon.svg"
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
                        history.push(`/product-details/${category?.product_id}`)
                      }
                      className="MainProductThumb"
                    />

                    <div className="BookMark">
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

                    <IonIcon
                      color="primary"
                      size="small"
                      icon={closeCircle}
                      onClick={() => {
                        removeItem(category);
                      }}
                    />
                  </IonCardHeader>

                  <IonCardContent className="ProductDetails">
                    <IonText
                      onClick={() =>
                        history.push(`/product-details/${category?.product_id}`)
                      }
                      className="ProductTitle"
                    >
                      {category?.productName}
                    </IonText>
                    <IonText className="ProductBrandname">
                      {category?.brand_name}
                    </IonText>
                    <div className="PriceRating">
                      {category?.product_variant &&
                        category?.product_variant[0].length > 0 && (
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
                        )}

                      <IonChip className="RateDesign">
                        <span>{category?.star_rating}</span>
                        <IonIcon color="light" size="small" icon={star} />
                      </IonChip>
                    </div>

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
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default SaveForLater;
