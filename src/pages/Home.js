import React from 'react'
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
} from "@ionic/react";

import styles from "./Home.module.css";
import "./Home.css";
import { star, add, bookmarkOutline, chevronForwardCircleSharp } from "ionicons/icons";

import { ProductStore } from "../data/ProductStore";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import Header from "../components/Header";

const Home = () => {
  const products = ProductStore.useState((s) => s.products);

  return (
    <IonPage id="home-page" className={styles.homePage}>
      <Header />

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


        <IonGrid className="ion-no-padding">
          <IonHeader className='TitleHead'>
            <IonTitle>
              Exclusive Product Stores
            </IonTitle>
            <IonButton fill="clear" className='IconBtn'>
              <IonIcon color="dark" size="large" icon={chevronForwardCircleSharp} />
            </IonButton>
          </IonHeader>
          <Swiper slidesPerView={2} >
            {products.map((category, index) => {
              return (
                <SwiperSlide key={index}>
                  <IonCard className="ProductCard" routerLink={`/category/${category.slug}/1`}>
                    <IonCardHeader className="ProductThumb" >
                      <div className="SmartKitchen">
                        <div className="counter">
                          <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
                          <span>16</span>
                        </div>
                        <img src="/assets/img/veg-icon.svg" alt="Images" className="icon-img" />
                      </div>

                      <img
                        src={category.cover}
                        alt="category cover"
                        className="MainProductThumb"
                      />
                      <div className="BookMark">
                        <IonIcon
                          color="primary"
                          size="small"
                          icon={bookmarkOutline}
                        />
                      </div>
                    </IonCardHeader>

                    <IonCardContent className="ProductDetails">
                      <IonText className="ProductTitle">{category.name}</IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">352.00</IonText>
                        <IonChip className="RateDesign">
                          <span>3.2</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">485.00</IonText>
                        <IonChip className="offerBedge">33% OFF</IonChip>
                      </div>

                      <IonButton className="AddToCartBtn" size="default" shape="round" fill="outline">
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

          <IonRow className="ion-padding-bottom ion-padding-horizontal">
            <IonCol size="12" className="flex ion-justify-content-center">
              <IonButton size="default" fill="outline">View More</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>


        <IonGrid className="ion-no-padding">
          <IonHeader className='TitleHead'>
            <IonTitle>See What’s Trending</IonTitle>
            <IonButton fill="clear" className='IconBtn'>
              <IonIcon color="dark" size="large" icon={chevronForwardCircleSharp} />
            </IonButton>
          </IonHeader>

          <Swiper slidesPerView={2} className={styles.swipertab}>
            {products.map((category, index) => {
              return (
                <SwiperSlide key={index}>
                  <IonCard className="ProductCard" routerLink={`/category/${category.slug}`}>
                    <IonCardHeader className="ProductThumb">
                      <div className="SmartKitchen">
                        <div className="counter">
                          <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
                          <span>16</span>
                        </div>
                        <img src="/assets/img/veg-icon.svg" alt="Images" className="icon-img" />
                      </div>

                      <img
                        src={category.cover}
                        alt="category cover"
                        className="MainProductThumb"
                      />
                      <div className="BookMark">
                        <IonIcon
                          color="primary"
                          size="small"
                          icon={bookmarkOutline}
                        />
                      </div>
                    </IonCardHeader>

                    <IonCardContent className="ProductDetails">
                      <IonText className="ProductTitle">{category.name}</IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">352.00</IonText>
                        <IonChip className="RateDesign">
                          <span>3.2</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">485.00</IonText>
                        <IonChip className="offerBedge">33% OFF</IonChip>
                      </div>

                      <IonButton className="AddToCartBtn" size="default" shape="round" fill="outline">
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

          <IonRow className="ion-padding-bottom ion-padding-horizontal">
            <IonCol size="12" className="flex ion-justify-content-center">
              <IonButton size="default" fill="outline">View More</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
