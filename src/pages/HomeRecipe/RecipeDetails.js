import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
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
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import {
  heartCircleOutline,
  starOutline,
  createOutline,
  readerOutline,
  arrowForwardOutline,
  atCircleOutline,
  bookmarkOutline,
  fastFood,
  person,
  star,
  timeOutline,
} from "ionicons/icons";
import { IonAccordion, IonAccordionGroup } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "@ionic/react/css/ionic-swiper.css";
import { getApiData } from "../../utils/Utils";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const RecipeDetails = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState({});
  const [similarRecipeData, setSimilarRecipeData] = useState([]);
  const text = () => {
    setIsReadMore(true);
  };
  const recipeDetails = async () => {
    try {
      const response = await getApiData(`/getRecipeDetail/${id}`);
      setRecipeData(response?.data?.data);
      setSimilarRecipeData(response?.data?.similar_recipe)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    recipeDetails();
  }, []);
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/home">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">{recipeData?.recipesName}</IonTitle>
        </IonHeader>
        <IonGrid className="ion-padding-horizontal ion-padding-vertical">
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <img
                src={recipeData?.images}
                alt=""
                className="RecipeImage"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/img/img-placeholder.jpg";
                }}
              />
              {recipeData?.foodtype === "vegetarian" ? (
                <img
                  src="/assets/img/icon-veg.svg"
                  alt=""
                  className="RecipeNonVeg"
                />
              ) : (
                <img
                  src="/assets/img/non-veg-icon.svg"
                  alt=""
                  className="RecipeNonVeg"
                />
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-padding-horizontal">
          <IonRow>
            <IonCol className="profileBox">
              <div className="RecipeProfile">
                <img
                  src={recipeData?.userDetail?.avatar}
                  alt="Images"
                  className="ProfileGirl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/img/img-placeholder.jpg";
                  }}
                />
                <IonLabel>{recipeData?.userDetail?.first_name}</IonLabel>
              </div>
              <div className="RecipeProfile">
                <IonIcon size="large" icon={arrowForwardOutline} />
                <IonIcon size="large" icon={bookmarkOutline} />
                <IonButton size="default" fill="outline">
                  Follow
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="RecipeProName">
              <h1>{recipeData?.recipesName}</h1>
              <div className="RecipeProfile">
                <div className="ReciRow">
                  <IonIcon icon={atCircleOutline}></IonIcon>
                  <IonLabel>Medium</IonLabel>
                </div>
                <div className="ReciRow">
                  <IonIcon icon={timeOutline}></IonIcon>
                  <IonLabel>{recipeData?.cook_time}</IonLabel>
                </div>
                <div className="ReciRow">
                  <IonIcon icon={person}></IonIcon>
                  <IonLabel>Serves</IonLabel>
                </div>
                <span>2</span>
              </div>

              <IonChip className="GreenDesign ion-padding-vertical">
                <span>0</span>
                <IonIcon color="light" size="small" icon={star} />
              </IonChip>
              {recipeData?.longDescription}

              <IonButton className="cookbtn">
                <IonIcon icon={fastFood} className=""></IonIcon>
                <span className="ion-margin-start">Start Cooking Mode</span>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding-vertical">
            <IonCol>
              <IonAccordionGroup className="Recipe-Accordian">
                <IonAccordion value="Details">
                  <IonItem slot="header" lines="none">
                    <IonLabel className="acc-heading">Details</IonLabel>
                  </IonItem>

                  <div slot="content">
                    <div className="recipe-acc-content">
                      <IonTitle>
                        <IonLabel>Level:</IonLabel>
                        <IonText className="ion-padding-start">
                          {recipeData?.prep_level}
                        </IonText>
                      </IonTitle>
                      <IonTitle className="ion-padding-top">
                        <IonLabel>Course:</IonLabel>
                        <IonText className="ion-padding-start">
                          Breakfast
                        </IonText>
                      </IonTitle>
                      <IonTitle className="ion-padding-top">
                        <IonLabel>Diet:</IonLabel>
                        <IonText className="ion-padding-start">Vegan</IonText>
                      </IonTitle>
                      <IonTitle className="ion-padding-top">
                        <IonLabel>Technique:</IonLabel>
                        <IonText className="ion-padding-start">
                          Blending
                        </IonText>
                      </IonTitle>
                      <IonTitle className="ion-padding-top">
                        <IonLabel>Recipe Notes:</IonLabel>
                        <IonText className="ion-padding-start">
                          {recipeData?.recipes_notes}
                        </IonText>
                      </IonTitle>
                    </div>
                    <div className="acc-btn ion-padding-vertical">
                      <IonButton>
                        <span></span>
                        Contest186
                      </IonButton>
                      <IonButton>
                        <span></span>
                        veganrecipe
                      </IonButton>
                    </div>
                  </div>
                </IonAccordion>
                <IonAccordion value="Ingredients">
                  <IonItem slot="header" lines="none">
                    <IonLabel className="acc-heading">Ingredients</IonLabel>
                  </IonItem>
                  <div
                    className="ion-padding recipe-acc-content"
                    slot="content"
                  >
                    <IonTitle>
                      <IonLabel>Level:</IonLabel>
                      <IonText className="ion-padding-start">Easy</IonText>
                    </IonTitle>
                    <IonTitle>
                      <IonLabel>Course:</IonLabel>
                      <IonText className="ion-padding-start">Breakfast</IonText>
                    </IonTitle>
                    <IonTitle>
                      <IonLabel>Diet:</IonLabel>
                      <IonText className="ion-padding-start">Vegan</IonText>
                    </IonTitle>
                    <IonTitle>
                      <IonLabel>Technique:</IonLabel>
                      <IonText className="ion-padding-start">Blending</IonText>
                    </IonTitle>
                    <IonTitle>
                      <IonLabel>Recipe Notes:</IonLabel>
                      <IonText className="ion-padding-start">Easy</IonText>
                    </IonTitle>
                    <IonTitle>
                      <IonLabel>Level:</IonLabel>
                      <IonText className="ion-padding-start">
                        You can use soy milk and coconut milk in this
                        recipe.Also if you are not preparing vegan recipe then
                        you use normal milk and instead of sugar you can use
                        honey. Quality of sugar you can increase or decrease
                        according to your taste.
                      </IonText>
                    </IonTitle>
                  </div>
                </IonAccordion>
                <IonAccordion value="Method">
                  <IonItem slot="header" lines="none">
                    <IonLabel className="acc-heading">Method</IonLabel>
                  </IonItem>
                  <div
                    className="ion-padding recipe-acc-content"
                    slot="content"
                  >
                    <IonTitle>
                      {/* <IonLabel>Level:</IonLabel> */}
                      <IonText className="ion-padding-start">
                        {recipeData &&
                          recipeData?.directions &&
                          recipeData?.directions.map((val, i) => <p>{val}</p>)}
                      </IonText>
                    </IonTitle>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
              <IonButton
                className="AddToCartBtn cookbtn"
                shape="round"
                fill="outline"
                size="large"
              >
                Cooked It
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText className="Recipespan">User Reviews</IonText>
              <div className="review-btn ion-padding-vertical">
                <IonButton fill="clear">
                  <IonIcon icon={createOutline}></IonIcon>
                  <span className="ion-margin-start">Write a comment</span>
                </IonButton>
                <IonIcon icon={readerOutline} className="cookIcon"></IonIcon>
                <span className="Recipespan">Be the first to the review</span>
              </div>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonTitle className="SwiperHead  ion-padding-vertical">
                Products used in Recipe
              </IonTitle>
              <Swiper slidesPerView={1.5}>
                <SwiperSlide>
                  <IonCard>
                    <IonCardHeader className="RecipeProduct">
                      <div className="SmartKitchen">
                        <div className="counter-recipe">
                          <img
                            src="/assets/img/Mysmart.png"
                            alt="Images"
                            className="icon-img"
                          />
                          <span>2</span>
                        </div>
                      </div>

                      <img
                        src="/assets/img/product-img.png"
                        alt="img"
                        className="MainProductThumb"
                      />
                    </IonCardHeader>

                    <IonCardContent className="RecipeProductDetails">
                      <div>
                        <IonText className="ProductTitle">True Element</IonText>
                        <IonText className="ProductBrandname">
                          Rolled oats gluten-free
                        </IonText>
                      </div>
                      <div className="PriceRating">
                        <div className="PriceText">
                          <IonIcon
                            icon={readerOutline}
                            className="cookIcon"
                          ></IonIcon>
                        </div>
                        <div className="RecipePack">
                          <p>pack</p>
                          <p>500 grams</p>
                          <IonChip className="RateDesign">
                                <span>4.5</span>
                                <IonIcon
                                  color="light"
                                  size="small"
                                  icon={star}
                                />
                              </IonChip>
                        </div>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>
                <SwiperSlide>
                  <IonCard>
                    <IonCardHeader className="RecipeProduct">
                      <div className="SmartKitchen">
                        <div className="counter-recipe">
                          <img
                            src="/assets/img/Mysmart.png"
                            alt="Images"
                            className="icon-img"
                          />
                          <span>2</span>
                        </div>
                      </div>

                      <img
                        src="/assets/img/product-img.png"
                        alt="img"
                        className="MainProductThumb"
                      />
                    </IonCardHeader>

                    <IonCardContent className="RecipeProductDetails">
                      <div>
                        <IonText className="ProductTitle">True Element</IonText>
                        <IonText className="ProductBrandname">
                          Rolled oats gluten-free
                        </IonText>
                      </div>
                      <div className="PriceRating">
                        <div className="PriceText">
                          <IonIcon
                            icon={readerOutline}
                            className="cookIcon"
                          ></IonIcon>
                        </div>
                        <div className="RecipePack">
                          <p>pack</p>
                          <p>500 grams</p>
                          <IonChip className="RateDesign">
                                <span>4.5</span>
                                <IonIcon
                                  color="light"
                                  size="small"
                                  icon={star}
                                />
                              </IonChip>
                        </div>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </SwiperSlide>
              </Swiper>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle className="SwiperHead  ion-padding-vertical">
                Similar Recipe
              </IonTitle>
              <Swiper slidesPerView={1.5}>
                {similarRecipeData &&
                  similarRecipeData?.map((data, i) => (
                    <SwiperSlide key={i}>
                      <IonCard>
                        <IonCardHeader className="RecipeProduct">
                          <div className="SmartKitchen">
                            <div className="counter-recipe">
                              <img
                                src="/assets/img/Mysmart.png"
                                alt="Images"
                                className="icon-img"
                              />
                              <span>2</span>
                            </div>
                          </div>
                          <img
                            src={data?.images}
                            alt="img"
                            className="MainProductThumb"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/assets/img/img-placeholder.jpg";
                            }}
                          />
                        </IonCardHeader>
                        <IonCardContent className="RecipeProductDetails">
                          <div>
                            <IonText className="ProductTitle">
                              {data?.recipesName}
                            </IonText>
                            <IonText className="ProductBrandname">
                              {data?.shortDescription}
                            </IonText>
                          </div>
                          <div className="PriceRating">
                            <div className="HeartIcon">
                              <IonIcon
                                icon={heartCircleOutline}
                                className=""
                              ></IonIcon>
                              <span className="ion-padding-right">3</span>
                            </div>
                            <div className="RecipePack">
                              <p>Level {data?.prep_level}</p>
                              <IonChip className="RateDesign">
                                <span>{data?.ratings}</span>
                                <IonIcon
                                  color="light"
                                  size="small"
                                  icon={star}
                                />
                              </IonChip>
                            </div>
                          </div>
                        </IonCardContent>
                      </IonCard>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default RecipeDetails;
