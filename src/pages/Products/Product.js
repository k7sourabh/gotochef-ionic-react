/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
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
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
} from "@ionic/react";
import {
  closeCircle,
  star,
  thumbsUp,
  arrowUndo,
  bookmarkOutline,
  starOutline,
  alertCircle,
  createOutline,
  heartSharp,
  helpCircle,
  remove,
  add,
} from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
// import { addToCart, CartStore } from "../../data/CartStore";
import { FavouritesStore } from "../../data/FavouritesStore";
import { ProductStore } from "../../data/ProductStore";
import styles from "./Product.module.css";
import Header from "../../components/Header";
// import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@ionic/react/css/ionic-swiper.css";

const Product = () => {
  const params = useParams();
  const history = useHistory();
  const cartRef = useRef();
  const products = ProductStore.useState((s) => s.products);
  const favourites = FavouritesStore.useState((s) => s.product_ids);
  const [, /* isFavourite */ setIsFavourite] = useState(false);
  // const shopCart = CartStore.useState((s) => s.product_ids);
  const [product, setProduct] = useState({});
  const [productsState, setProducts] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    setProducts(products);
  }, [products]);

  const getProductDetail = async () => {
    const tempCategory = productsState.filter((p) => p.slug === params.slug)[0];
    const tempProduct = tempCategory?.products.filter(
      (p) => parseInt(p.id) === parseInt(params.id)
    )[0];

    const tempIsFavourite = favourites.find(
      (f) => f === `${params.slug}/${params.id}`
    );

    setIsFavourite(tempIsFavourite);
    setCategory(tempCategory);
    setProduct(tempProduct);
  };

  useEffect(() => {
    getProductDetail();
  }, [params.slug, params.id, productsState]);

  useEffect(() => {
    const tempIsFavourite = favourites.find(
      (f) => f === `${category.slug}/${product.id}`
    );
    setIsFavourite(tempIsFavourite ? true : false);
  }, [favourites, product]);

  // const addProductToFavourites = (e, categorySlug, productID) => {
  //   e.preventDefault();
  //   addToFavourites(categorySlug, productID);

  //   document.getElementById(
  //     `placeholder_favourite_product_${categorySlug}_${productID}`
  //   ).style.display = "";
  //   document
  //     .getElementById(
  //       `placeholder_favourite_product_${categorySlug}_${productID}`
  //     )
  //     .classList.add("animate__fadeOutTopRight");
  // };

  // Tab

  const [selectedTab, setSelectedTab] = useState("details");
  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  return (
    <IonPage id="productDetails-page">
      <Header />

      <IonContent fullscreen>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton
            className="IconBtn"
            fill="clear"
            onClick={() => history.push(`/category/${params.slug}`)}
          >
            <i class="material-icons dark">west</i>
          </IonButton>

          <IonTitle color="dark">{product?.name}</IonTitle>
        </IonHeader>

        <IonGrid className="ion-no-padding ion-padding-bottom">
          <IonRow>
            <IonCol size="12">
              <IonCard className={styles.ProductCard}>
                <IonCardHeader>
                  <div className={styles.ThumbIconsBlock}>
                    <div className={styles.productCardActions}>
                      <IonButton fill="clear" className="IconBtn">
                        <div className="counter">
                          <img
                            src="/assets/img/Mysmart.png"
                            alt="Images"
                            className="icon-img"
                          />
                          <span>16</span>
                        </div>
                      </IonButton>

                      <IonButton fill="clear" className="IconBtn">
                        <IonIcon
                          size="large"
                          color="danger"
                          icon={closeCircle}
                        />
                      </IonButton>
                    </div>

                    <div className={styles.productCardActions}>
                      <IonButton fill="clear" className="IconBtn">
                        <img
                          src="/assets/img/veg-icon.png"
                          alt="Images"
                          className={styles.chefhat}
                        />
                      </IonButton>

                      <IonButton fill="clear" className="IconBtn">
                        <IonIcon
                          size="large"
                          color="danger"
                          icon={bookmarkOutline}
                        />
                      </IonButton>
                    </div>
                  </div>

                  <Swiper
                    className={styles.ThumbSlide}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                  >
                    <SwiperSlide>
                      <img src={product?.image} alt="product pic" />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={product?.image} alt="product pic" />
                    </SwiperSlide>
                  </Swiper>

                  <IonCardContent className={styles.ProductInfo}>
                    <span className={styles.cateName}>Kissan</span>
                    <div className={styles.pTitle}>
                      <IonText color="dark">{product?.name}</IonText>

                      <IonChip className={styles.RateDesignInner}>
                        4.4
                        <IonIcon color="light" size="small" icon={star} />
                      </IonChip>
                    </div>
                    <span>Glass Bottle of 1 Gram</span>

                    <div className={styles.priceInfo}>
                      <IonText color="dark">352.00</IonText>
                      <div className="addButn">
                        <div className="OfferInfo">
                          <IonText color="dark" className="OldPrice">
                            485.00
                          </IonText>
                          <IonChip className="offerBedge">33% OFF</IonChip>
                        </div>
                        <IonButton
                          className="AddToCart ion-hide"
                          size="default"
                          shape="round"
                          fill="outline"
                          color="warning"
                        >
                          <div className="flex ion-justify-content-between ion-align-items-center w-full">
                            Add
                          </div>
                        </IonButton>

                        {/* After add to card show tihs */}

                        <div className="QtyBlock">
                          <IonButton fill="clear" className="IconBtn">
                            <IonIcon color="dark" size="large" icon={remove} />
                          </IonButton>

                          <IonInput value="1"></IonInput>

                          <IonButton fill="clear" className="IconBtn">
                            <IonIcon color="dark" size="large" icon={add} />
                          </IonButton>
                        </div>
                        {/* End */}
                      </div>
                    </div>
                  </IonCardContent>
                </IonCardHeader>
              </IonCard>

              <div className="btnGroup ion-padding">
                <IonButton
                  size="default"
                  expand="block"
                  fill="outline"
                  className={styles.chefbutton}
                >
                  <img
                    className="mr-05"
                    src="/assets/img/Mysmart.png"
                    alt="Images"
                  />
                  MySmartKitchen
                </IonButton>
                <IonButton
                  size="default"
                  expand="block"
                  fill="outline"
                  className={styles.chefbutton}
                >
                  <IonIcon slot="start" icon={bookmarkOutline} size="small" />
                  Wishlist
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <IonSegment
                value={selectedTab}
                onIonChange={handleTabChange}
                className="FillSegment"
              >
                <IonSegmentButton value="details">
                  <IonLabel>Details</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="nutrition">
                  <IonLabel>Nutrition</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="reviews">
                  <IonLabel>Reviews</IonLabel>
                </IonSegmentButton>
              </IonSegment>

              {selectedTab === "details" && (
                <IonGrid className="ion-no-padding ion-padding-vertical">
                  <IonRow className={styles.TabContentCard}>
                    <IonCol size="12">
                      <IonHeader className="TitleHead">
                        <IonTitle>Ratings</IonTitle>
                      </IonHeader>
                    </IonCol>

                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark" className={styles.ratingTitle}>
                        Overall Rating
                      </IonText>
                      <IonCol className="ratingStar">
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                      </IonCol>
                    </IonCol>

                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark" className={styles.ratingTitle}>
                        Teste & Texture
                      </IonText>
                      <IonCol className="ratingStar">
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={starOutline} />
                      </IonCol>
                    </IonCol>

                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark" className={styles.ratingTitle}>
                        Value for money
                      </IonText>
                      <IonCol className="ratingStar">
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={starOutline} />
                      </IonCol>
                    </IonCol>

                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark" className={styles.ratingTitle}>
                        Packaging
                      </IonText>
                      <IonCol className="ratingStar">
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                        <IonIcon icon={star} color="warning" />
                      </IonCol>
                    </IonCol>
                  </IonRow>

                  <IonRow className={styles.TabContentCard}>
                    <IonCol size="12">
                      <IonHeader className="TitleHead">
                        <IonTitle>More Information</IonTitle>
                      </IonHeader>
                    </IonCol>

                    <IonCol
                      size="12"
                      className="ion-padding-horizontal ion-padding-bottom"
                    >
                      <div className={styles.moreInfo}>
                        <IonText color="dark">Self Life :</IonText>
                        <IonText color="dark">6 months</IonText>
                      </div>
                      <div className={styles.moreInfo}>
                        <IonText color="dark">FSSAI Number :</IonText>
                        <IonText color="dark">10013022001897</IonText>
                      </div>
                    </IonCol>
                  </IonRow>

                  <IonRow className={styles.TabContentCard}>
                    <IonCol size="12" className="ion-padding">
                      <div className={styles.chipBadge}>
                        <IonText>Tomato</IonText>
                        <IonText>Ketchup</IonText>
                        <IonText>Sauce</IonText>
                        <IonText>Tangy</IonText>
                        <IonText>Sweet</IonText>
                        <IonText>Chilli</IonText>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
              {selectedTab === "nutrition" && (
                <IonGrid className="ion-no-padding ion-padding-vertical">
                  <IonRow className={styles.TabContentCard}>
                    <IonCol size="12">
                      <IonHeader className="TitleHead">
                        <IonTitle>List of Ingredients</IonTitle>
                        <IonText>
                          Tap On Ingredients to know more and mark your
                          prefences
                        </IonText>
                      </IonHeader>
                    </IonCol>

                    <IonCol size="12" className={styles.nutritionListBlock}>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Water</IonText>
                        <IonText color="dark">15gm</IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Tomato Paste</IonText>
                        <IonText color="dark">20gm</IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Sugar</IonText>
                        <IonText color="dark">25gm</IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Salt</IonText>
                        <IonText color="dark">30gm</IonText>
                      </div>
                    </IonCol>
                  </IonRow>

                  <IonRow className={styles.TabContentCard}>
                    <IonCol size="12">
                      <IonHeader className="TitleHead">
                        <IonTitle>Nutrition Notes</IonTitle>
                      </IonHeader>
                    </IonCol>

                    <IonCol size="12" className={styles.nutritionListBlock}>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Tomato Paste 28%</IonText>
                      </div>
                    </IonCol>
                  </IonRow>

                  <IonRow className={styles.TabContentCard}>
                    <IonCol size="12">
                      <IonHeader className="TitleHead">
                        <IonTitle>List of Ingredients</IonTitle>
                        <IonText>
                          Tap On Ingredients to know more and mark your
                          prefences
                        </IonText>
                      </IonHeader>
                    </IonCol>

                    <IonCol size="12" className={styles.nutritionListBlock}>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Water</IonText>
                        <IonIcon
                          icon={helpCircle}
                          size="large"
                          color="warning"
                        />
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Tomato Paste</IonText>
                        <IonIcon
                          icon={helpCircle}
                          size="large"
                          color="warning"
                        />
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Sugar</IonText>
                        <IonIcon
                          icon={helpCircle}
                          size="large"
                          color="warning"
                        />
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Salt</IonText>
                        <IonIcon
                          icon={helpCircle}
                          size="large"
                          color="warning"
                        />
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
              {selectedTab === "reviews" && (
                <IonGrid className="ion-padding">
                  <IonRow className="ion-margin-bottom">
                    <IonCol
                      size="12"
                      className="flex ion-justify-content-center ion-align-items-center"
                    >
                      <IonButton color="medium">
                        <IonIcon slot="start" icon={createOutline} />
                        Write a Review
                      </IonButton>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12" className="reviewsCard">
                      <div className="reviewDetails">
                        <div className="reviewThumb">
                          <img
                            src="/assets/img/Screenshot_1.png"
                            alt="Images"
                          />
                        </div>

                        <div className="reviewInfo">
                          <div className="reviewTitle">
                            <div className="reviewName-info">
                              <IonText>Mayur Jha</IonText>
                              <span>May 11 2022</span>
                            </div>

                            <div className="ratingStar">
                              <IonIcon icon={star} color="warning" />
                              <IonIcon icon={star} color="warning" />
                              <IonIcon icon={star} color="warning" />
                              <IonIcon icon={star} color="warning" />
                              <IonIcon icon={starOutline} />
                            </div>
                          </div>

                          <div className="reviewDescription">
                            <IonText>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s
                            </IonText>
                          </div>
                        </div>
                      </div>

                      <div className="reviewFooter">
                        <IonButton
                          fill="clear"
                          className="IconBtn"
                          color="dark"
                        >
                          <IonIcon icon={thumbsUp} size="small" />
                        </IonButton>

                        <IonButton fill="clear" color="dark">
                          <IonIcon slot="start" icon={arrowUndo} size="small" />
                          Reply
                        </IonButton>
                      </div>
                    </IonCol>

                    <IonCol size="12" className="reviewsCard">
                      <div className="reviewDetails">
                        <div className="reviewThumb">
                          <img
                            src="/assets/img/Screenshot_1.png"
                            alt="Images"
                          />
                        </div>

                        <div className="reviewInfo">
                          <div className="reviewTitle">
                            <div className="reviewName-info">
                              <IonText>Mayur Jha</IonText>
                              <span>May 11 2022</span>
                            </div>

                            <div className="ratingStar">
                              <IonIcon icon={star} color="warning" />
                              <IonIcon icon={star} color="warning" />
                              <IonIcon icon={star} color="warning" />
                              <IonIcon icon={star} color="warning" />
                              <IonIcon icon={starOutline} />
                            </div>
                          </div>

                          <div className="reviewDescription">
                            <IonText>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s
                            </IonText>
                          </div>
                        </div>
                      </div>

                      <div className="reviewFooter">
                        <IonButton
                          fill="clear"
                          className="IconBtn"
                          color="dark"
                        >
                          <IonIcon icon={thumbsUp} size="small" />
                        </IonButton>

                        <IonButton fill="clear" color="dark">
                          <IonIcon slot="start" icon={arrowUndo} size="small" />
                          Reply
                        </IonButton>
                      </div>
                    </IonCol>

                    <IonCol size="12" className="ion-padding">
                      <IonButton expand="block" shape="round" fill="outline">
                        View all Review
                      </IonButton>
                    </IonCol>

                    <IonCol size="12" className="flex ion-justify-content-end">
                      <IonButton fill="clear" className={styles.report}>
                        <IonIcon slot="start" icon={alertCircle} size="small" />
                        Report a Issue
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding px-6 ion-padding-bottom">
          <IonHeader className="TitleHead">
            <IonTitle color="dark">User Recipe</IonTitle>
          </IonHeader>

          <IonRow>
            <IonCol size="6">
              <div className="recipeCard">
                <div className="recipeHead">
                  <div className="reviewThumb">
                    <img src="/assets/img/Screenshot_1.png" alt="Images" />
                  </div>

                  <div className="reviewName-info">
                    <IonText>Mansi</IonText>
                    <span>GotoChef</span>
                  </div>
                </div>

                <div className="recipeMainThumb">
                  <img src="/assets/img/sandwich.png" alt="Images" />
                </div>

                <div className="recipeDetails">
                  <IonText color="dark" className="title">
                    Veg Sandwich Recipe
                  </IonText>
                  <IonText color="dark" className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </IonText>

                  <div className="recipeLevelInfo">
                    <IonText color="dark" className="LevelInfo">
                      Level: <span>Moderate</span>
                    </IonText>
                    <div className="lavelRating">
                      <div className="ratingStar">
                        <IonIcon icon={starOutline} />
                        <IonIcon icon={starOutline} />
                        <IonIcon icon={starOutline} />
                        <IonIcon icon={starOutline} />
                        <IonIcon icon={starOutline} />
                      </div>

                      <IonButton fill="clear" className="IconBtn">
                        <IonIcon icon={heartSharp} />
                      </IonButton>
                    </div>
                  </div>
                </div>
              </div>
            </IonCol>

            <IonCol size="6">
              <div className="recipeCard">
                <div className="recipeHead">
                  <div className="reviewThumb">
                    <img src="/assets/img/Screenshot_1.png" alt="Images" />
                  </div>

                  <div className="reviewName-info">
                    <IonText>Simran</IonText>
                    <span>GotoChef</span>
                  </div>
                </div>

                <div className="recipeMainThumb">
                  <img src="/assets/img/sandwich.png" alt="Images" />
                </div>

                <div className="recipeDetails">
                  <IonText color="dark" className="title">
                    Veg Sandwich Recipe
                  </IonText>
                  <IonText color="dark" className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </IonText>

                  <div className="recipeLevelInfo">
                    <IonText color="dark" className="LevelInfo">
                      Level: <span>Moderate</span>
                    </IonText>
                    <div className="lavelRating">
                      <div className="ratingStar">
                        <IonIcon icon={starOutline} />
                        <IonIcon icon={starOutline} />
                        <IonIcon icon={starOutline} />
                        <IonIcon icon={starOutline} />
                        <IonIcon icon={starOutline} />
                      </div>

                      <IonButton fill="clear" className="IconBtn">
                        <IonIcon icon={heartSharp} />
                      </IonButton>
                    </div>
                  </div>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding ion-padding-bottom">
          <IonHeader className="TitleHead">
            <IonTitle color="dark">Similar Product</IonTitle>
          </IonHeader>

          <IonRow>
            {category &&
              category.products &&
              category.products.map((similar, index) => {
                if (similar.id !== product.id && product.image && index < 4) {
                  return (
                    <ProductCard
                      key={`similar_product_${index}`}
                      product={similar}
                      index={index}
                      isFavourite={false}
                      cartRef={cartRef}
                      category={category}
                    />
                  );
                }
              })}
          </IonRow>
        </IonGrid>
        <div className="BootomViewCart ion-padding">
          <div className={styles.priceInfo}>
            <div className="addButn">
              <div className="OfferInfo FlexCols">
                <IonText color="dark">1 Item in cart</IonText>
                <div className="FlexPro">
                  <IonText color="dark">485.00</IonText>
                  <IonChip className="offerBedge">16 Saved</IonChip>
                </div>
              </div>
              <IonButton
                className="AddToCart"
                size="default"
                shape="round"
                fill="solid"
                color="warning"
              >
                <div className="flex ion-justify-content-between ion-align-items-center w-full">
                  View Cart
                </div>
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Product;
