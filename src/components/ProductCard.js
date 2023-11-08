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
} from "@ionic/react";
import { add, bookmarkOutline, star } from "ionicons/icons";

const ProductCard = (props) => {
  const { product, index } = props;
  
  return (
    <IonCol size="6" key={`category_product_list_${index}`}>
      <IonCard
        routerLink={`/product-details/${product?.product_id}`}
        className="ProductCard"
      >
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
          <img
            src={product?.images}
            alt="category cover"
            className="MainProductThumb"
            onError={(e) => {
              e.target.onerror = null; // Remove the event handler to prevent an infinite loop
              e.target.src = "/assets/img/img-placeholder.jpg"; // Placeholder image URL
            }}
          />
          <div className="BookMark">
            <IonIcon color="primary" size="small" icon={bookmarkOutline} />
          </div>
        </IonCardHeader>

        <IonCardContent className="ProductDetails">
          <IonText className="ProductTitle">{product?.productName}</IonText>
          <div className="PriceRating">
            <IonText color="dark" className="CurrentPrice">
              {product &&
                product.product_variant_result &&
                product.product_variant_result[0] && product?.product_variant_result[0].offer_price}
            </IonText>
            <IonChip className="RateDesign">
              <span>{product?.total_rating}</span>
              <IonIcon color="light" size="small" icon={star} />
            </IonChip>
          </div>

          <div className="OfferInfo">
            <IonText color="dark" className="OldPrice">
              {product &&
                product.product_variant_result &&
                product.product_variant_result[0] && product?.product_variant_result[0]?.main_price}
            </IonText>
            <IonChip className="offerBedge">
              {product &&
                product.product_variant_result &&
                product.product_variant_result[0] &&
                (
                  ((product?.product_variant_result[0]?.main_price -
                    product?.product_variant_result[0]?.offer_price) /
                    product?.product_variant_result[0]?.main_price) *
                  100
                ).toFixed(0)}
              % OFF
            </IonChip>
          </div>

          <IonButton
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
    </IonCol>
  );
};

export default ProductCard;
