/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
import { ProductStore } from "../../data/ProductStore";
import styles from "./CategoryProducts.module.css";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CategoryProducts = () => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  const cartRef = useRef();
  const products = ProductStore.useState((s) => s.products);
  // const shopCart = CartStore.useState((s) => s.product_ids);
  const [category, setCategory] = useState({});
  const [productsState, setProducts] = useState([]);
  const [searchResults, setsearchResults] = useState([]);
  const [amountLoaded, setAmountLoaded] = useState(6);
  const [selectedTab, setSelectedTab] = useState("tab1");
  // const [activeCategory, setActiveCategory] = useState("");

  const getProducts = async () => {
    const tempCategory = await productsState.filter(
      (p) => p.slug === params.slug
    )[0];
    setCategory(tempCategory);
    setsearchResults(tempCategory?.products);
  };

  useEffect(() => {
    console.log(location, "location");
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
  console.log(category, "category");

  // const search = async (e) => {
  //   const searchVal = e.target.value;

  //   if (searchVal !== "") {
  //     const tempResults = category.products.filter((p) =>
  //       p.name.toLowerCase().includes(searchVal.toLowerCase())
  //     );
  //     setsearchResults(tempResults);
  //   } else {
  //     setsearchResults(category.products);
  //   }
  // };

  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  return (
    <IonPage id="category-page" className={styles.categoryPage}>
      <Header />

      <IonContent fullscreen>
        <IonHeader className='TitleHead bottom-shadow'>
          <IonButton className="IconBtn" fill="clear" onClick={() => history.push(`/main-category`)}>
            <i class="material-icons dark">west</i>
          </IonButton>
          <div className="CategoryInfoTitle">
            <div className="subCate-thumb">
              <img src={category?.cover} alt="category cover" />
            </div>

            <div className="subCate-details">
              <IonTitle>{category?.name}</IonTitle>
              <span>158 items</span>
            </div>
          </div>
          <IonButton className="IconBtn ml-auto" fill="clear">
            <img src="/assets/img/filter.svg" alt="Images" />
          </IonButton>

        </IonHeader>

        <IonSegment
          className="subCateTab"
          value={params.slug}
          onIonChange={handleTabChange}
          scrollable={true}
        >
          {products.map((category, index) => (
            <IonSegmentButton
              value={category.slug}
              key={index}
              onClick={(e) => {
                history.push(`/category/${category.slug}`, { from: `/category/${category.slug}` });
              }}
            >
              <div className="subCategoryCard">
                <div className="subCategoryThumb">
                  <img src={category.cover} alt="category cover" />
                </div>
                <IonText className="subCategoryTitle">{category.name}</IonText>
              </div>
            </IonSegmentButton>
          ))}
        </IonSegment>

        {/* {selectedTab === 'tab1' &&

        } */}

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

          <IonInfiniteScroll threshold="100px" onIonInfinite={fetchMore}>
            <IonInfiniteScrollContent
              loadingSpinner="bubbles"
              loadingText="Fetching more..."
            ></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonGrid>

        {/* <IonGrid className="ion-padding-horizontal">
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
        </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};

export default CategoryProducts;
