import {
  IonButton,
  IonButtons,
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
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import styles from "./Home.module.css";
import { arrowForward, star, add, bookmarkOutline } from "ionicons/icons";

import { ProductStore } from "../data/ProductStore";
// import { FavouritesStore } from "../data/FavouritesStore";
// import { CartStore } from "../data/CartStore";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 10,
};
 
const Home = () => {
  const products = ProductStore.useState((s) => s.products);
  // const favourites = FavouritesStore.useState((s) => s.product_ids);
  // const shopCart = CartStore.useState((s) =>  s.product_ids);
  // console.log(products, "products")

  return (
    <IonPage id="home-page" className={styles.homePage}>
      <IonHeader>
        <IonToolbar>
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-justify-content-between ion-padding ion-align-items-center">
              <IonCol size="4">
                <div className="LogoGroup">
                  <img
                    src="/assets/img/MainLogo.png"
                    alt="Images"
                    className="logoSize"
                  />
                  <img
                    src="/assets/img/ScanIcon.png"
                    alt="Images"
                    className="logoSize"
                  />
                </div>
              </IonCol>
              <IonCol size="6" className="ion-justify-content-end">
                <IonButtons className="ion-justify-content-end">
                  <IonButton routerLink="/favourites">
                    <img
                      src="/assets/img/Search.png"
                      alt="Images"
                      className="TopBarIcons"
                    />
                  </IonButton>
                  <IonButton routerLink="/favourites">
                    <img
                      src="/assets/img/edit.png"
                      alt="Images"
                      className="TopBarIcons"
                    />
                  </IonButton>
                  <IonButton routerLink="/favourites">
                    <img
                      src="/assets/img/menu.png"
                      alt="Images"
                      className="TopBarIcons"
                    />
                  </IonButton>
                </IonButtons>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSlides>
          <IonSlide>
            <img
              src="/assets/img/recipe-banner.jpg"
              alt="Images"
              className="Banners"
            />
          </IonSlide>
          <IonSlide>
            <h1>Slide 2</h1>
          </IonSlide>
        </IonSlides>

        <IonHeader>
          <div className="flex ion-justify-content-between TitleBar ion-padding ion-align-items-center">
            <IonTitle size="large" className="ion-no-padding">
              Exclusive Product Stores
            </IonTitle>

            <IonIcon color="dark" icon={arrowForward} />
          </div>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonSlides pager={false} options={slideOpts}>
              {products.map((category, index) => {
                return (
                  <IonSlide key={index}>
                    <IonCol size="12">
                      <IonCard
                        routerLink={`/category/${category.slug}`}
                        className={styles.categoryCard}
                      >
                        <div className="SmartKitchen">
                          <img src="/assets/img/Mysmart.png" alt="Images" />

                          <img src="/assets/img/veg-icon.svg" alt="Images" />
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
                  </IonSlide>
                );
              })}
            </IonSlides>
          </IonRow>
        </IonGrid>

        <IonHeader>
          <div className="flex ion-justify-content-between TitleBar ion-padding ion-align-items-center">
            <IonTitle size="large" className="ion-no-padding">
              See What’s Trending
            </IonTitle>

            <IonIcon color="dark" icon={arrowForward} />
          </div>
        </IonHeader>

        <IonGrid> 
          <IonRow> 
            <IonSlides pager={false} options={slideOpts}>
              {products.map((category, index) => {
                return (
                  <IonSlide key={index}>
                    <IonCol size="12">
                      <IonCard
                        routerLink={`/category/${category.slug}`}
                        className={styles.categoryCard} 
                      >
                        <div className="SmartKitchen">
                          <img src="/assets/img/Mysmart.png" alt="Images" />

                          <img src="/assets/img/veg-icon.svg" alt="Images" />
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
                  </IonSlide>
                );
              })}
            </IonSlides>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
