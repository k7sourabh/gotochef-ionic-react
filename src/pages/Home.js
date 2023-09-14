import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
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
} from "@ionic/react";

import styles from "./Home.module.css";
import "./Home.css";
import { star, add, bookmarkOutline ,chevronForwardCircleSharp } from "ionicons/icons";

import { ProductStore } from "../data/ProductStore";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import LoginPopup from "../modal/LoginPopup";
import OTPPopup from "../modal/OTPPopup";
import Header from "../components/Header";

const Home = () => {
  const products = ProductStore.useState((s) => s.products);

  // const favourites = FavouritesStore.useState((s) => s.product_ids);
  // const shopCart = CartStore.useState((s) =>  s.product_ids);
  // console.log(products, "products")

  const modal = useRef(null);
  console.log(modal.current)

  return (
    <IonPage id="home-page" className={styles.homePage}>
      <Header/>

      <IonContent fullscreen>
        <Swiper>
          <SwiperSlide>
            <img
              src="/assets/img/recipe-banner.jpg"
              alt="Images"
              className="Banners"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/assets/img/recipe-banner.jpg"
              alt="Images"
              className="Banners"
            />
          </SwiperSlide>
        </Swiper>

        <IonHeader>
          <div className="flex ion-justify-content-between TitleBar ion-padding ion-align-items-center">
            <IonTitle size="large" className="ion-no-padding">
              Exclusive Product Stores
            </IonTitle>
            <IonIcon color="dark" size="large" icon={chevronForwardCircleSharp} />
          </div>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <Swiper slidesPerView={2}>
              {products.map((category, index) => {
                return (
                  <SwiperSlide key={index}>
                    <IonCol size="12">
                      <IonCard
                        routerLink={`/category/${category.slug}`}
                        className={styles.categoryCard}
                      >
                        <div className="SmartKitchen">
                          <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
                          <img src="/assets/img/veg-icon.svg" alt="Images" className="icon-img" />
                        </div>

                        <img
                          src={category.cover}
                          alt="category cover"
                          className="MainImg"
                        />
                        <div className="BookMark">
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={bookmarkOutline}
                          />
                        </div>
                      </IonCard>

                      <IonCardContent className="BoxContent">
                        <IonCardSubtitle>{category.name}</IonCardSubtitle>
                        <IonText color="dark" className="TextContent">
                          <h3 className="ProPrice">352.00</h3>
                          <IonChip className="RateDesign">
                            3 <IonIcon color="light" size="small" icon={star} />
                          </IonChip>
                        </IonText>

                        <IonText color="dark" className="TextContent">
                          <h4 className="linethro">485.00</h4>
                          <IonChip className="ChipDesign">33% OFF</IonChip>
                        </IonText>

                        <IonButton
                          className="AddToCart"
                          size="default"
                          shape="round"
                          fill="outline"
                        >
                          <div className="flex ion-justify-content-between ion-align-items-center w-full">
                            Add
                            <IonIcon
                              slot="end"
                              color="dark"
                              size="small"
                              icon={add}
                            />
                          </div>
                        </IonButton>
                      </IonCardContent>
                    </IonCol>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="flex ion-justify-content-center ion-padding">
              <IonButton fill="outline">View More</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>


        <IonHeader>
          <div className="flex ion-justify-content-between TitleBar ion-padding ion-align-items-center">
            <IonTitle size="large" className="ion-no-padding">
              See What’s Trending
            </IonTitle>

            <IonIcon color="dark" size="large" icon={chevronForwardCircleSharp} />
          </div>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <Swiper slidesPerView={2} className={styles.swipertab}>
              {products.map((category, index) => {
                return (
                  <SwiperSlide key={index}>
                    <IonCol size="12">
                      <IonCard
                        routerLink={`/category/${category.slug}`}
                        className={styles.categoryCard}
                      >
                        <div className="SmartKitchen">
                          <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />

                          <img src="/assets/img/veg-icon.svg" alt="Images" className="icon-img" />
                        </div>

                        <img
                          src={category.cover}
                          alt="category cover"
                          className="MainImg"
                        />
                        <div className="BookMark">
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={bookmarkOutline}
                          />
                        </div>
                      </IonCard>

                      <IonCardContent className="BoxContent">
                        <IonCardSubtitle>{category.name}</IonCardSubtitle>
                        <IonText color="dark" className="TextContent">
                          <h3 className="ProPrice">352.00</h3>
                          <IonChip className="RateDesign">
                            3 <IonIcon color="light" size="small" icon={star} />
                          </IonChip>
                        </IonText>

                        <IonText color="dark" className="TextContent">
                          <h4 className="linethro">485.00</h4>
                          <IonChip className="ChipDesign">33% OFF</IonChip>
                        </IonText>

                        <IonButton
                          className="AddToCart"
                          size="default"
                          shape="round"
                          fill="outline"
                        >
                          <div className="flex ion-justify-content-between ion-align-items-center w-full">
                            Add
                            <IonIcon
                              slot="end"
                              color="dark"
                              size="small"
                              icon={add}
                            />
                          </div>
                        </IonButton>
                      </IonCardContent>
                    </IonCol>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="flex ion-justify-content-center ion-padding">
              <IonButton fill="outline">View More</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
