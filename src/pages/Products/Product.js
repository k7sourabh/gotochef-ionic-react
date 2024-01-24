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
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  useIonLoading,
} from "@ionic/react";
import {
  closeCircle,
  star,
  bookmarkOutline,
  starOutline,
  heartSharp,
  helpCircle,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
import styles from "./Product.module.css";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@ionic/react/css/ionic-swiper.css";
import { getApiData } from "../../utils/Utils";
import { useCart } from "../../contexts/CartProvider";

const Product = () => {
  const { id } = useParams();
  const history = useHistory();
  const [productData, setProductData] = useState({});
  const [allProductData, setAllProductData] = useState({});
  const [present, dismiss] = useIonLoading();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const {addToCart, cartItems} = useCart();
  const exclusiveProduct = async () => {
    present();
    try {
      const response = await getApiData(`productdetails_json/${id}`);
      dismiss();
      setProductData(response?.data?.data?.product_details);
      setAllProductData(response);
    } catch (e) {
      console.log(e);
      dismiss();
    }
  };

  useEffect(() => {
    exclusiveProduct();
  }, [id]);

  const handleAddToCart = () => {
    let obj = {
      product_id: productData.id,
      pro_variant_id: productData.product_variant_result[selectedVariantIndex].pro_variant_id,
      variant: productData.product_variant_result[selectedVariantIndex].weight+""+productData.product_variant_result[selectedVariantIndex].weight_type,
      quantity: 1,
      prod_details: {
        name: productData.slug,
        image: productData.images,
        brand_name: productData.brand_name,
        main_price: productData.product_variant_result[selectedVariantIndex].main_price,
        offer_price: productData.product_variant_result[selectedVariantIndex].offer_price
      }
    }
    addToCart(obj);
    present({
      message: "Product added to cart successfully!",
      duration: 1500,
      position: "bottom",
    });
  }

  function convertToOnlyDate(dateTimeString) {
    const dateOnly = new Date(dateTimeString).toISOString().split("T")[0];
    return dateOnly;
  }

  const [selectedTab, setSelectedTab] = useState("details");
  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  function renderRatingStars(rating) {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<IonIcon key={i} icon={star} color="warning" />);
    }
    for (let i = rating + 1; i <= 5; i++) {
      stars.push(<IonIcon key={i} icon={starOutline} />);
    }
    return stars;
  }

  const goBack = () => {
    history.goBack();
  };
  return (
    <IonPage id="productDetails-page">
      <Header />

      <IonContent fullscreen>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton
            className="backBtn"
            fill="clear"
            // onClick={() => history.push(`/category/${slug}`)}
            onClick={goBack}
          >
            <i class="material-icons dark">west</i>
          </IonButton>

          <IonTitle color="dark">
            {productData && productData?.productName}
          </IonTitle>
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
                          <span>{productData && productData?.imk_num}</span>
                        </div>
                      </IonButton>

                      {/* <IonButton fill="clear" className="IconBtn">
                        <IonIcon
                          size="large"
                          color="danger"
                          icon={closeCircle}
                        />
                      </IonButton> */}
                    </div>

                    <div className={styles.productCardActions}>
                      <IonButton fill="clear" className="IconBtn">
                        <img
                          src={
                            productData?.foodType === "non-vegetarian"
                              ? "/assets/img/img-placeholder.jpg"
                              : "/assets/img/veg-icon.png"
                          }
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
                      <img
                        src={productData && productData?.images}
                        alt="product pic"
                        onError={(e) => {
                          e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                          e.target.src = "/assets/img/img-placeholder.jpg"; // Placeholder image URL
                        }}
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <img
                        src={productData && productData?.images}
                        alt="product pic"
                        onError={(e) => {
                          e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                          e.target.src = "/assets/img/img-placeholder.jpg"; // Placeholder image URL
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>

                  <IonCardContent className={styles.ProductInfo}>
                    <span className={styles.cateName}>
                      {productData && productData?.brand_name}
                    </span>
                    <div className={styles.pTitle}>
                      <IonText color="dark">
                        {productData && productData?.name}
                      </IonText>

                      <IonChip className={styles.RateDesignInner}>
                        {productData && productData?.total_rating}
                        <IonIcon color="light" size="small" icon={star} />
                      </IonChip>
                    </div>
                    <span className="productName">{productData && productData?.slug}</span>
                    <IonSelect className="qwt-select" onIonChange={(e) => setSelectedVariantIndex(e.detail.value)} value={selectedVariantIndex}>
                      {productData.product_variant_result && productData.product_variant_result.map((item, index)=><IonSelectOption value={index}>{item.weight} {item.weight_type}</IonSelectOption>)}
                    </IonSelect>
                    <div className={styles.priceInfo}>
                      {productData &&
                        productData.product_variant_result &&
                        productData.product_variant_result[selectedVariantIndex] &&
                        productData?.product_variant_result[selectedVariantIndex]?.offer_price}
                      <div className="addButn">
                        <div className="OfferInfo">
                          <IonText color="dark" className="OldPrice">
                            {productData &&
                              productData.product_variant_result &&
                              productData.product_variant_result[selectedVariantIndex] &&
                              productData?.product_variant_result[selectedVariantIndex]
                                ?.main_price}
                          </IonText>
                          <IonChip className="offerBedge">
                            {productData &&
                              productData.product_variant_result &&
                              productData.product_variant_result[selectedVariantIndex] &&
                              (
                                ((productData?.product_variant_result[selectedVariantIndex]
                                  ?.main_price -
                                  productData?.product_variant_result[selectedVariantIndex]
                                    ?.offer_price) /
                                  productData?.product_variant_result[selectedVariantIndex]
                                    ?.main_price) *
                                100
                              ).toFixed(0)}
                            % OFF
                          </IonChip>
                        </div>
                        <IonButton
                          className="AddToCart"
                          size="default"
                          shape="round"
                          fill="outline"
                          color="warning"
                          onClick={() => handleAddToCart()}
                        >
                          <div className="flex ion-justify-content-between ion-align-items-center w-full">
                            Add
                          </div>
                        </IonButton>

                        {/* After add to card show tihs */}

                        {/* <div className="QtyBlock">
                          <IonButton fill="clear" className="IconBtn">
                            <IonIcon color="dark" size="large" icon={remove} />
                          </IonButton>

                          <IonInput value="1"></IonInput>

                          <IonButton fill="clear" className="IconBtn">
                            <IonIcon color="dark" size="large" icon={add} />
                          </IonButton>
                        </div> */}
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
                  <IonLabel>Nutrition & Ingredients</IonLabel>
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
                        Money Rating
                      </IonText>
                      <IonCol className="ratingStar">
                        {renderRatingStars(
                          allProductData?.data?.product_rating?.money_rating
                        )}
                      </IonCol>
                    </IonCol>

                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark" className={styles.ratingTitle}>
                        Overall Rating
                      </IonText>
                      <IonCol className="ratingStar">
                        {renderRatingStars(
                          allProductData?.data?.product_rating?.overall_rating
                        )}
                      </IonCol>
                    </IonCol>

                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark" className={styles.ratingTitle}>
                        Packaging Rating
                      </IonText>
                      <IonCol className="ratingStar">
                        {renderRatingStars(
                          allProductData?.data?.product_rating?.packaging_rating
                        )}
                      </IonCol>
                    </IonCol>

                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark" className={styles.ratingTitle}>
                        Texture Rating
                      </IonText>
                      <IonCol className="ratingStar">
                        {renderRatingStars(
                          allProductData?.data?.product_rating?.texture_rating
                        )}
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
                        <IonText color="dark">Shelf Life :</IonText>
                        <IonText color="dark">
                          {
                            allProductData?.data?.data?.product_details
                              ?.shelf_life
                          }
                        </IonText>
                      </div>
                      <div className={styles.moreInfo}>
                        <IonText color="dark">FSSAI Number :</IonText>
                        <IonText color="dark">
                          {allProductData &&
                            allProductData.data &&
                            allProductData.data.data &&
                            allProductData.data.data.product_details.length &&
                            allProductData?.data?.data?.product_details?.fssai_number}
                        </IonText>
                      </div>
                    </IonCol>
                  </IonRow>

                  <IonRow className={styles.TabContentCard}>
                    <IonCol size="12" className="ion-padding">
                      <div className={styles.chipBadge}>
                        {allProductData &&
                        allProductData.data &&
                        allProductData.data.data &&
                        allProductData.data.data.product_details.tags &&
                        allProductData?.data?.data?.product_details?.tags >
                          0 ? (
                          allProductData?.data?.data?.product_details?.tags
                            .split(",")
                            .map((tag, index) => (
                              <IonText key={index}>{tag.trim()}</IonText>
                            ))
                        ) : (
                          <IonText>No tags found</IonText>
                        )}
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
                        <IonTitle>Nutrition Grid</IonTitle>
                      </IonHeader>
                    </IonCol>

                    <IonCol size="12" className={styles.nutritionListBlock}>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Serving Size</IonText>
                        <IonText color="dark">
                          {productData?.servingSize}
                        </IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Added Sugar</IonText>
                        <IonText color="dark">
                          {productData?.added_sugar}
                        </IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">calcium</IonText>
                        <IonText color="dark">{productData?.calcium}</IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Calories</IonText>
                        <IonText color="dark">{productData?.calories}</IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Carbohydrates</IonText>
                        <IonText color="dark">
                          {productData?.carbohydrates}
                        </IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Iron</IonText>
                        <IonText color="dark">{productData?.iron}</IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Natural Sugar</IonText>
                        <IonText color="dark">
                          {productData?.natural_sugar}
                        </IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Phosphorus</IonText>
                        <IonText color="dark">
                          {productData?.phosphorus}
                        </IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Potassium</IonText>
                        <IonText color="dark">{productData?.potassium}</IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Protein</IonText>
                        <IonText color="dark">{productData?.protein}</IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Sodium</IonText>
                        <IonText color="dark">{productData?.sodium}</IonText>
                      </div>
                      <div className={styles.listIngredients}>
                        <IonText color="dark">Total Fat</IonText>
                        <IonText color="dark">{productData?.total_fat}</IonText>
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
                        <IonText color="dark">{productData?.nutrition}</IonText>
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
                      {productData &&
                        productData?.ingredient_data.map(
                          (ingredients, index) => (
                            <div className={styles.listIngredients} key={index}>
                              <IonText color="dark">
                                {ingredients?.ingredients_name}
                              </IonText>
                              <IonIcon
                                icon={helpCircle}
                                size="large"
                                color="warning"
                              />
                            </div>
                          )
                        )}
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
                      {/* <IonButton color="medium">
                        <IonIcon slot="start" icon={createOutline} />
                        Write a Review
                      </IonButton> */}
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    {allProductData &&
                    allProductData?.data?.user_review &&
                    allProductData?.data?.user_review.length > 0 ? (
                      allProductData?.data?.user_review
                        ?.slice(0, 5)
                        .map((review, index) => (
                          <IonCol size="12" className="reviewsCard" key={index}>
                            <div className="reviewDetails">
                              <div className="reviewThumb">
                                <img
                                  src={review?.avatar}
                                  alt="category cover"
                                  className="MainProductThumb"
                                  onError={(e) => {
                                    e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                                    e.target.src =
                                      "/assets/img/img-placeholder.jpg"; // Placeholder image URL
                                  }}
                                />
                              </div>

                              <div className="reviewInfo">
                                <div className="reviewTitle">
                                  <div className="reviewName-info">
                                    <IonText>{review?.user_name}</IonText>
                                    <span>
                                      {convertToOnlyDate(
                                        review?.created_at?.date
                                      )}
                                    </span>
                                  </div>

                                  <div className="ratingStar">
                                    {renderRatingStars(review?.rating)}
                                  </div>
                                </div>

                                <div className="reviewDescription">
                                  <IonText>{review?.review}</IonText>
                                </div>
                              </div>
                            </div>

                            {/* <div className="reviewFooter">
                              <IonButton
                                fill="clear"
                                className="IconBtn"
                                color="dark"
                              >
                                <IonIcon icon={thumbsUp} size="small" />
                              </IonButton>

                              <IonButton fill="clear" color="dark">
                                <IonIcon
                                  slot="start"
                                  icon={arrowUndo}
                                  size="small"
                                />
                                Reply
                              </IonButton>
                            </div> */}
                          </IonCol>
                        ))
                    ) : (
                      <IonText>No review found</IonText>
                    )}

                    {/* <IonCol size="12" className="ion-padding">
                      <IonButton expand="block" shape="round" fill="outline">
                        View all Review
                      </IonButton>
                    </IonCol> */}

                    {/* <IonCol size="12" className="flex ion-justify-content-end">
                      <IonButton fill="clear" className={styles.report}>
                        <IonIcon slot="start" icon={alertCircle} size="small" />
                        Report a Issue
                      </IonButton>
                    </IonCol>  */}
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
            <IonCol size="12" className="ion-padding">
              {allProductData &&
              allProductData.data &&
              allProductData.data.data &&
              allProductData?.data?.data?.user_recipes.length
                ? allProductData?.data?.data?.user_recipes?.map(
                    (user, index) => (
                      <div className="recipeCard" key={index}>
                        <div className="recipeHead">
                          <div className="reviewThumb">
                            <img src={user?.user_img} alt="Images" />
                          </div>

                          <div className="reviewName-info">
                            <IonText>{user?.user_name}</IonText>

                            <span>GotoChef</span>
                          </div>
                        </div>

                        <div className="recipeMainThumb">
                          <img
                            src={user?.images}
                            alt="category cover"
                            className="MainProductThumb"
                            onError={(e) => {
                              e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                              e.target.src = "/assets/img/img-placeholder.jpg"; // Placeholder image URL
                            }}
                          />
                        </div>

                        <div className="recipeDetails">
                          <IonText color="dark" className="title">
                            {user?.recipesName}
                          </IonText>
                          <IonText color="dark" className="description">
                            {user?.longDescription}
                          </IonText>

                          <div className="recipeLevelInfo">
                            <IonText color="dark" className="LevelInfo">
                              Level: <span>{user?.prep_level}</span>
                            </IonText>
                            <div className="lavelRating">
                              <div className="ratingStar">
                                {renderRatingStars(user?.star_rating)}
                              </div>

                              <IonButton fill="clear" className="IconBtn">
                                <IonIcon icon={heartSharp} />
                              </IonButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )
                : allProductData?.data?.data?.user_recipes.length === 0 && (
                    <IonText>No recipes found</IonText>
                  )}
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding ion-padding-bottom">
          <IonHeader className="TitleHead">
            <IonTitle color="dark">Similar Product</IonTitle>
          </IonHeader>

          <IonRow>
            {allProductData &&
              allProductData?.data &&
              allProductData?.data?.data &&
              allProductData?.data?.data?.likeproduct?.map((product, index) => {
                return (
                  <ProductCard
                    key={`similar_product_${index}`}
                    product={product}
                    index={index}
                    isFavourite={false}
                    // category={category}
                  />
                );
              })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Product;
