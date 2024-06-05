import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonIcon,
  IonSpinner,
  IonText,
} from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import React from "react";

const IngredientProduct = (props) => {
  const { productData, isLoading } = props;
  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <IonSpinner name="crescent" />
        </div>
      ) : productData && productData?.length > 0 ? (
        productData?.map((data, i) => (
          <IonCol size="6">
            <IonCard className="ProductCard" key={i}>
              <IonCardHeader className="ProductThumb">
                <div className="SmartKitchen">
                  <div className="counter">
                    <img
                      src="/assets/img/Mysmart.png"
                      alt="Images"
                      className="icon-img"
                    />
                    <span>{data?.imk_count}</span>
                  </div>
                </div>
                <img
                  src={
                    !data.images
                      ? "/assets/img/img-placeholder.jpg"
                      : data.images
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/img/img-placeholder.jpg";
                  }}
                  className="MainProductThumb"
                  alt="category cover"
                />

                <div className="BookMark">
                  <IonIcon color="primary" size="small" icon={heartOutline} />
                </div>
              </IonCardHeader>
              <IonCardContent className="ProductDetails">
                <IonText className="ProductTitle">
                  {data.ingredients_name}
                </IonText>
                <div className="PriceRating">
                  <IonText color="dark" className="CurrentPrice">
                    {data.descriptions}
                  </IonText>
                </div>
                <IonButton size="default" fill="outline" shape="round">
                  Details
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))
      ) : (
        <IonText>Data not found</IonText>
      )}
    </>
  );
};

export default IngredientProduct;
