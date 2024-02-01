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
  IonText,
  IonTitle,
} from "@ionic/react";
import styles from "./Home.module.css";
import "./Home.css";
import {
  star,
  add,
  bookmarkOutline,
  chevronForwardCircleSharp,
  heart,
  heartOutline,
} from "ionicons/icons";
import "swiper/swiper-bundle.css";
import "@ionic/react/css/ionic-swiper.css";
import Header from "../components/Header";
// import axios from 'axios';
import { getApiData } from "../utils/Utils";

const ViewExclusiveProduct = () => {
  const [amountLoaded, setAmountLoaded] = useState(6)
  const [exclusiveProductData, setExclusiveProduct] = useState([]);


  const exclusiveProduct = async () => {
    const response = await getApiData("/getAllExclusiveProducts");
    setExclusiveProduct(response?.data?.data);
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
      <Header />

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
            <IonButton fill="clear" className="IconBtn">
            </IonButton>
          </IonHeader>
          <IonGrid className="ion-no-padding">
            <IonRow>
                {exclusiveProductData?.map((data,index)=>(
              <IonCol size="6" key={index}>
                <IonCard className="ProductCard" routerLink={`/product-details/${data ?.product_id}`}>
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

                    <img
                      src={!data?.images ? "/assets/img/img-placeholder.jpg" : data?.images}
                      alt="category cover"
                      className="MainProductThumb"
                    />
                    <div className="BookMark">
                      <IonIcon
                        color="primary"
                        size="small"
                        icon={bookmarkOutline}
                      />
                      <IonIcon
                          color="primary"
                          size="small"  
                          icon={heartOutline}
                        />
                    </div>
                  </IonCardHeader>

                  <IonCardContent className="ProductDetails">
                    <IonText className="ProductTitle">{data?.productName}</IonText>
                    <div className="PriceRating">
                      <div className="PriceText">
                      <IonText color="dark" className="CurrentPrice">
                      ₹ {data?.product_variant[0]?.offer_price}
                      </IonText>
                      <div className="OfferInfo">
                      <IonText color="dark" className="OldPrice">
                      {data?.product_variant[0]?.main_price}
                      </IonText>
                      <IonChip className="offerBedge">{((data?.product_variant[0]?.main_price-data?.product_variant[0]?.offer_price)/data?.product_variant[0]?.main_price * 100).toFixed(0)}% OFF</IonChip>
                    </div>
                      </div>
                      <IonChip className="RateDesign">
                        <span>{data?.star_rating}</span>
                        <IonIcon color="light" size="small" icon={star} />
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
               ))}
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
    </IonPage>
  );
};

export default ViewExclusiveProduct;
