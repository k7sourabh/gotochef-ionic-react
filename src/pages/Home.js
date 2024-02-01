import React, { useEffect, useState } from 'react'
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
  useIonLoading
} from "@ionic/react";
import styles from "./Home.module.css";
import "./Home.css";
import { star, add, bookmarkOutline, chevronForwardCircleSharp, heartCircleOutline, heartCircle, heart, heartOutline } from "ionicons/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '@ionic/react/css/ionic-swiper.css';
import Header from "../components/Header";
import { getApiData } from '../utils/Utils';
import { useLogo } from '../contexts/ApiProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import VariantModal from './VariantModal';


const Home = () => {
  const [exclusiveProductData, setExclusiveProduct] = useState([]);
  const [trendingProductsData, setTrendingProductsData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [present, dismiss] = useIonModal(VariantModal, {
    customProp: selectedProduct,
    onDismiss: (data, role) => dismiss(data, role),
  });
  const [presentLoading] = useIonLoading();
  const { headerImage } = useLogo();
  const history = useHistory();

  function openModal(item) {
    setSelectedProduct(item);
    present({
      customProp: {
        name: 'World',
      },

      cssClass: 'custom-modal-class',
      onWillDismiss: (ev) => {
        if (ev.detail.role === 'confirm') {
          presentLoading({
            message: "Product added to cart successfully!",
            duration: 1500,
            position: "bottom",
          });
        }
      },
    });
  }

  const exclusiveProduct = async ()=> {
    try {
      const response = await getApiData("/getExclusiveProducts")
      setExclusiveProduct(response?.data?.data)
    } catch(err) {
      setExclusiveProduct([])
      console.log(err)
    }
   }

   useEffect(()=>{
    exclusiveProduct();
   },[])

   const trendingProducts = async ()=> {
    try {
    const response = await getApiData("/getTrendingProducts/5/0")
    setTrendingProductsData(response?.data?.data)
    } catch(err) {
      setTrendingProductsData([])
      console.log(err)
    }
   }

   useEffect(()=>{
    trendingProducts();
   },[])

  

  return (
    <IonPage id="home-page" className={styles.homePage}>
      <Header/>

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
          <IonHeader className='TitleHead'>
            <IonTitle>
              Exclusive Product Stores
            </IonTitle>
            <IonButton fill="clear" className='IconBtn' size='small' routerLink="/exclusive-products">
              <IonIcon color="dark" size="large" icon={chevronForwardCircleSharp} />
            </IonButton>
          </IonHeader>
          <Swiper slidesPerView={2}>
            { exclusiveProductData?.map((category, index) => {
              return (
                <SwiperSlide key={index}>
                  <IonCard className="ProductCard">
                    <IonCardHeader className="ProductThumb" >
                      <div className="SmartKitchen">
                        <div className="counter">
                          <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
                          <span>{category?.imk_num}</span>
                        </div>
                        {category?.foodtype === 'vegetarian' ? <img src="/assets/img/veg-icon.svg" alt="Images" className="icon-img" /> : <img src="/assets/img/non-veg-icon.svg" alt="Images" className="icon-img" />}
                        
                      </div>

                      <img
                        src={!category?.images ? "/assets/img/img-placeholder.jpg" : category?.images}
                        alt=""
                        onClick={()=>history.push(`/product-details/${category?.product_id}`)}
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
                      <IonText onClick={()=>history.push(`/product-details/${category?.product_id}`)} className="ProductTitle">{category?.productName}</IonText>
                      <IonText className="ProductBrandname">{category?.brand_name}</IonText>
                      <div className="PriceRating">
                        <div className='PriceText'>
                        <IonText color="dark" className="CurrentPrice">₹ {category?.product_variant[0]?.offer_price}</IonText>
                        <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">{category?.product_variant[0]?.main_price}</IonText>
                        
                        <IonChip className="offerBedge">{((category?.product_variant[0]?.main_price-category?.product_variant[0]?.offer_price)/category?.product_variant[0]?.main_price * 100).toFixed(0)}% OFF</IonChip>
                      </div>

                        </div>
                       
                        <IonChip className="RateDesign">
                          <span>{category?.star_rating}</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                     
                      <IonButton onClick={() => openModal(category)} className="AddToCartBtn" size="default" shape="round" fill="outline">
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

          <IonRow className="ion-padding">
            <IonCol size="12" className="flex ion-justify-content-center">
              <IonButton size="default" fill="outline" routerLink="/exclusive-products">View More</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>


        <IonGrid className="ion-no-padding manage-product">
          <IonHeader className='TitleHead'>
            <IonTitle>See What’s Trending</IonTitle>
            <IonButton fill="clear" className='IconBtn' size='small' routerLink="/trending-products">
              <IonIcon color="dark" size="large" icon={chevronForwardCircleSharp} />
            </IonButton>
          </IonHeader>

          <Swiper slidesPerView={2} className={styles.swipertab} >
            {trendingProductsData?.map((category, index) => {
              return (
                <SwiperSlide key={index}>
                  <IonCard className="ProductCard" >
                    <IonCardHeader className="ProductThumb">
                      <div className="SmartKitchen">
                        <div className="counter">
                          <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
                          <span>{category?.imk_num}</span>
                        </div>
                        {category?.foodtype === 'vegetarian' ? <img src="/assets/img/veg-icon.svg" alt="Images" className="icon-img" /> : <img src="/assets/img/non-veg-icon.svg" alt="Images" className="icon-img" />}
                      </div>

                      <img
                        src={!category?.images ? "/assets/img/img-placeholder.jpg" : category?.images}
                        alt={category?.slug}
                        onClick={() => history.push(`/product-details/${category?.product_id}`)}
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
                      <IonText onClick={() => history.push(`/product-details/${category?.product_id}`)} className="ProductTitle">{category?.productName}</IonText>
                      <IonText className="ProductBrandname">{category?.brand_name}</IonText>
                      <div className="PriceRating">
                        <div className='PriceText'>
                        <IonText color="dark" className="CurrentPrice">₹ {category?.product_variant[0].offer_price}</IonText>
                        <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">{category?.product_variant[0]?.main_price}</IonText>
                        <IonChip className="offerBedge">{((category?.product_variant[0]?.main_price-category?.product_variant[0]?.offer_price)/category?.product_variant[0]?.main_price * 100).toFixed(0)}% OFF</IonChip>
                      </div>
                        </div>
                        <IonChip className="RateDesign">
                          <span>{category?.star_rating}</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      

                      <IonButton onClick={() => openModal(category)} className="AddToCartBtn" size="default" shape="round" fill="outline">
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

          <IonRow className="ion-padding">
            <IonCol size="12" className="flex ion-justify-content-center">
              <IonButton size="default" fill="outline" routerLink="/trending-products">View More</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
