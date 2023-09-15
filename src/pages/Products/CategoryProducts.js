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
import { searchOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";

// import { CartStore } from "../../data/CartStore";
import { ProductStore } from "../../data/ProductStore";

import styles from "./CategoryProducts.module.css";
import Header from "../../components/Header";

const CategoryProducts = () => {
  const params = useParams();
  const cartRef = useRef();
  const products = ProductStore.useState((s) => s.products);
  // const shopCart = CartStore.useState((s) => s.product_ids);
  const [category, setCategory] = useState({});
  const [productsState, setProducts] = useState([]);
  const [searchResults, setsearchResults] = useState([]);
  const [amountLoaded, setAmountLoaded] = useState(6);

  const getProducts = async () => {
    const tempCategory = await productsState.filter(
      (p) => p.slug === params.slug
    )[0];
    setCategory(tempCategory);
    setsearchResults(tempCategory?.products);
  };

  useEffect(() => {
    setProducts(products);
  }, [products]);

  useEffect(() => {
    getProducts();
  }, [params.slug, productsState]);

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
      <Header />

      <IonContent fullscreen>
        <IonTitle size="large" className="ion-padding">
          {category && category.name}
        </IonTitle>

        <IonGrid className="ion-padding-horizontal">
          <IonRow className="ion-text-center">
            <IonSearchbar
              className={styles.search}
              onKeyUp={search}
              placeholder="Search Products"
              searchIcon={searchOutline}
              animated={true}
            />
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-padding">
          <IonRow className="ion-text-center">
            <IonCol size="12">
              <IonNote>
                {searchResults && searchResults?.length}
                {searchResults?.length > 1 || searchResults?.length === 0
                  ? " products"
                  : " product"}
                found
              </IonNote>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding">
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
