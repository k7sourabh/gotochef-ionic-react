/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonNote,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {searchOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";

// import { CartStore } from "../../data/CartStore";
import { ProductStore } from "../../data/ProductStore";

import styles from "./CategoryProducts.module.css";

const CategoryProducts = () => {
  const params = useParams();
  const cartRef = useRef();
  const products = ProductStore.useState((s) => s.products);
  // const shopCart = CartStore.useState((s) => s.product_ids);
  const [category, setCategory] = useState({});
  const [searchResults, setsearchResults] = useState([]);
  const [amountLoaded, setAmountLoaded] = useState(6);

  useEffect(() => {
    const categorySlug = params.slug;
    const tempCategory = products.filter((p) => p.slug === categorySlug)[0];
    setCategory(tempCategory);
    setsearchResults(tempCategory.products);
  }, [params.slug]);

  const fetchMore = async (e) => {
    //	Increment the amount loaded by 6 for the next iteration
    setAmountLoaded((prevAmount) => prevAmount + 6);
    e.target.complete();
  };

  const search = async (e) => {
    const searchVal = e.target.value;

    if (searchVal !== "") {
      const tempResults = category.products.filter((p) =>
        p.name.toLowerCase().includes(searchVal.toLowerCase())
      );
      setsearchResults(tempResults);
    } else {
      setsearchResults(category.products);
    }
  };

  return (
    <IonPage id="category-page" className={styles.categoryPage}>
      
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
      <IonTitle size="large" className="ion-padding">
      {category && category.name}
            </IonTitle>

        <IonSearchbar
          className={styles.search}
          onKeyUp={search}
          placeholder="Search Products"
          searchIcon={searchOutline}
          animated={true}
        />

        <IonGrid>
          <IonRow className="ion-text-center">
            <IonCol size="12">
              <IonNote>
                {searchResults && searchResults.length}{" "}
                {searchResults.length > 1 || searchResults.length === 0
                  ? " products"
                  : " product"}{" "}
                found
              </IonNote>
            </IonCol>
          </IonRow>

          <IonRow>
            {searchResults &&
              searchResults.map((product, index) => {
                if (index <= amountLoaded && product.image) {
                  return (
                    <ProductCard
                      key={`category_product_${index}`}
                      product={product}
                      index={index}
                      cartRef={cartRef}
                      category={category}
                    />
                  );
                }
              })}
          </IonRow>
        </IonGrid>

        <IonInfiniteScroll threshold="100px" onIonInfinite={fetchMore}>
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Fetching more..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default CategoryProducts;
