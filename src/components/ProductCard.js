/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonCol,
  IonIcon,
  IonText,
  useIonLoading,
  useIonModal,
} from "@ionic/react";
import {
  add,
  bookmarkOutline,
  heartOutline,
  heart,
  star,
  bookmark,
} from "ionicons/icons";
import { useState } from "react";
import VariantModal from "../pages/VariantModal";
import { useCart } from "../contexts/CartProvider";
import NotifyMePopup from "../modal/NotifyMePopup";
import { useAuth } from "../context/AuthContext";

const ProductCard = (props) => {
  const { product, index } = props;
  const { wishListPost, wishListedItems, bookMarkPost, bookMarkedItems } =
    useCart();
  const { notifyStatus } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isNotifyMe, setIsNotifyMe] = useState(false);
  const [notifyData, setNotifyData] = useState({});
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

  return (
    <IonCol size="6" key={`category_product_list_${index}`}>
      <IonCard className="ProductCard">
        <IonCardHeader className="ProductThumb">
          <div className="SmartKitchen">
            <div className="counter">
              <img
                src="/assets/img/Mysmart.png"
                alt="Images"
                className="icon-img"
              />
              <span>{product?.imk_num}</span>
            </div>
          </div>

          <IonButton
            fill="clear"
            className="blank-btn"
            routerLink={`/product-details/${product?.product_id}`}
          >
            <img
              src={product?.images}
              alt="category cover"
              className="MainProductThumb"
              onError={(e) => {
                e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                e.target.src = "/assets/img/img-placeholder.jpg"; // Placeholder image URL
              }}
            />
          </IonButton>
          <div className="BookMark">
            <IonIcon
              color="primary"
              size="small"
              icon={
                bookMarkedItems.indexOf(product?.product_id) < 0
                  ? bookmarkOutline
                  : bookmark
              }
              onClick={() => bookMarkPost(product)}
            />
          </div>
          <IonIcon
            color="primary"
            size="small"
            icon={
              wishListedItems.indexOf(product?.product_id) < 0
                ? heartOutline
                : heart
            }
            onClick={() => wishListPost(product)}
          />
        </IonCardHeader>

        <IonCardContent className="ProductDetails">
          <IonText className="ProductTitle">{product?.productName}</IonText>
          <div className="PriceRating">
            <div className="PriceText">
              <IonText color="dark" className="CurrentPrice">
                {product &&
                  product.product_variant &&
                  product.product_variant[0] &&
                  product?.product_variant[0].offer_price}
              </IonText>
              <div className="OfferInfo">
                <IonText color="dark" className="OldPrice">
                  {product &&
                    product.product_variant &&
                    product.product_variant[0] &&
                    product?.product_variant[0]?.main_price}
                </IonText>
                <IonChip className="offerBedge">
                  {product &&
                    product.product_variant &&
                    product.product_variant[0] &&
                    (
                      ((product?.product_variant[0]?.main_price -
                        product?.product_variant[0]?.offer_price) /
                        product?.product_variant[0]?.main_price) *
                      100
                    ).toFixed(0)}
                  % OFF
                </IonChip>
              </div>
            </div>

            <IonChip className="RateDesign">
              <span>{product?.total_rating}</span>
              <IonIcon color="light" size="small" icon={star} />
            </IonChip>
          </div>
          {product?.status === notifyStatus ? (
            <IonButton
              className="AddToCartBtn"
              size="default"
              shape="round"
              fill="outline"
              onClick={() => openModal(product)}
            >
              <div className="addText">
                Add
                <IonIcon slot="end" size="small" icon={add} />
              </div>
            </IonButton>
          ) : (
            <IonButton
              onClick={() => {
                setNotifyData(product);
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
      <NotifyMePopup
        isOpen={isNotifyMe}
        setIsOpen={setIsNotifyMe}
        notifyData={notifyData}
      />
    </IonCol>
  );
};

export default ProductCard;
