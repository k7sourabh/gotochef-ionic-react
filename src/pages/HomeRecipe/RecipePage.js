import React, { useState } from "react";
import Header from "../../components/Header";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { arrowForward,heartCircleOutline,starOutline, createOutline, readerOutline, arrowForwardOutline, atCircleOutline, bookmarkOutline, fastFood, person, star, timeOutline } from "ionicons/icons";
import { IonAccordion, IonAccordionGroup } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '@ionic/react/css/ionic-swiper.css';





const RecipePage = () => {
    const [isReadMore, setIsReadMore] = useState(false);
    console.log("isReadMore", isReadMore);
    const text = () => {
        setIsReadMore(true)

    }
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid className="ion-padding-horizontal">
                    <IonRow className="ion-justify-content-center">
                        <IonCol>
                            <img
                                src="/assets/img/sandwich.png"
                                alt=""
                                className="RecipeImage"
                            />
                            <img
                                src="/assets/img/non-veg.jpg"
                                alt=""
                                className="RecipeNonVeg"
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid className="ion-padding-horizontal">
                    <IonRow>
                        <IonCol className="profileBox">
                            <div className="RecipeProfile">
                                <img src="/assets/img/profile.jpg" alt="Images" className="ProfileGirl" />
                                <IonLabel>Deepanjale</IonLabel>
                            </div>
                            <div className="RecipeProfile">
                                <IonIcon
                                    size="large"
                                    icon={arrowForwardOutline}
                                />
                                <IonIcon
                                    size="large"
                                    icon={bookmarkOutline}
                                />
                                <IonButton size="default" fill="outline">Follow</IonButton>

                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="RecipeProName">
                            <h1>Chicken Caesar Salad</h1>
                            <div className="RecipeProfile">
                                <div className="ReciRow">
                                    <IonIcon icon={atCircleOutline}></IonIcon>
                                    <IonLabel>Medium</IonLabel>
                                </div>
                                <div className="ReciRow">
                                    <IonIcon icon={timeOutline}></IonIcon>
                                    <IonLabel>30 min</IonLabel>
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
                            {/* {isReadMore ? (
                             <p>Lorem ipsum dolor sit amet, consectetuer adipisc-
                             ing elit, sed diam nonummy nibh euismod tincid-
                             unt ut laoreet dolore magna aliquam erat volutpat.
                             Ut wisi enim ad minim veniam, quis nostrud exerci
                             tation ullamcorper suscipit lobortis nisl ut aliquip
                             ex ea commodo consequat. Duis autem vel eum
                             iriure dolor in hendrerit in</p>
                        ) : ''}
                           <a href="#" onClick={text}>Read More</a> */}


                            <p className="ion-no-margin ion-margin-top">Lorem ipsum dolor sit amet, consectetuer adipisc-
                                ing elit, sed diam nonummy nibh euismod tincid-
                                unt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci
                                tation ullamcorper suscipit lobortis nisl ut aliquip
                                ex ea commodo consequat. Duis autem vel eum
                                iriure dolor in hendrerit in</p>
                            <IonButton className="cookbtn">
                                <IonIcon icon={fastFood} className=""></IonIcon>
                                <span className="ion-margin-start">
                                    Start Cooking Mode
                                </span>
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
                                            <IonTitle >
                                                <IonLabel >Level:</IonLabel>
                                                <IonText className="ion-padding-start">Easy</IonText>
                                            </IonTitle>
                                            <IonTitle className="ion-padding-top">
                                                <IonLabel >Course:</IonLabel>
                                                <IonText className="ion-padding-start">Breakfast</IonText>
                                            </IonTitle>
                                            <IonTitle className="ion-padding-top">
                                                <IonLabel >Diet:</IonLabel>
                                                <IonText className="ion-padding-start">Vegan</IonText>
                                            </IonTitle>
                                            <IonTitle className="ion-padding-top">
                                                <IonLabel >Technique:</IonLabel>
                                                <IonText className="ion-padding-start">Blending</IonText>
                                            </IonTitle>
                                            <IonTitle className="ion-padding-top">
                                                <IonLabel >Recipe Notes:</IonLabel>
                                                <IonText className="ion-padding-start">Easy</IonText>
                                            </IonTitle>
                                            <IonTitle className="ion-padding-top">
                                                <IonLabel >Level:</IonLabel>
                                                <IonText className="ion-padding-start">You can use soy milk and coconut milk in this recipe.Also if you are not preparing vegan recipe then you use normal milk and instead of sugar you can use honey. Quality of sugar you can increase or decrease according to your taste.
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
                                    <div className="ion-padding recipe-acc-content" slot="content">
                                        <IonTitle>
                                            <IonLabel >Level:</IonLabel>
                                            <IonText className="ion-padding-start">Easy</IonText>
                                        </IonTitle>
                                        <IonTitle>
                                            <IonLabel >Course:</IonLabel>
                                            <IonText className="ion-padding-start">Breakfast</IonText>
                                        </IonTitle>
                                        <IonTitle>
                                            <IonLabel >Diet:</IonLabel>
                                            <IonText className="ion-padding-start">Vegan</IonText>
                                        </IonTitle>
                                        <IonTitle>
                                            <IonLabel >Technique:</IonLabel>
                                            <IonText className="ion-padding-start">Blending</IonText>
                                        </IonTitle>
                                        <IonTitle>
                                            <IonLabel >Recipe Notes:</IonLabel>
                                            <IonText className="ion-padding-start">Easy</IonText>
                                        </IonTitle>
                                        <IonTitle>
                                            <IonLabel >Level:</IonLabel>
                                            <IonText className="ion-padding-start">You can use soy milk and coconut milk in this recipe.Also if you are not preparing vegan recipe then you use normal milk and instead of sugar you can use honey. Quality of sugar you can increase or decrease according to your taste.
                                            </IonText>
                                        </IonTitle>
                                    </div>
                                </IonAccordion>
                                <IonAccordion value="Method">
                                    <IonItem slot="header" lines="none">
                                        <IonLabel className="acc-heading">Method</IonLabel>
                                    </IonItem>
                                    <div className="ion-padding recipe-acc-content" slot="content">
                                        <IonTitle>
                                            <IonLabel >Level:</IonLabel>
                                            <IonText className="ion-padding-start">Easy</IonText>
                                        </IonTitle>
                                    </div>
                                </IonAccordion>
                            </IonAccordionGroup>
                            <IonButton className="AddToCartBtn cookbtn" shape="round" fill="outline" size="large">
                                Cooked It
                            </IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonText className="Recipespan">User Reviews</IonText>
                            <div className="review-btn ion-padding-vertical">
                                <IonButton fill="clear" >
                                    <IonIcon icon={createOutline} ></IonIcon>
                                    <span className="ion-margin-start">Write a comment</span>
                                </IonButton>
                                <IonIcon icon={readerOutline} className="cookIcon"></IonIcon>
                                <span className="Recipespan">Be the first to the review</span>
                            </div>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonTitle className="SwiperHead  ion-padding-vertical">Products used in Recipe</IonTitle>
                            <Swiper slidesPerView={1.5}>
                                <SwiperSlide>
                                    <IonCard>
                                        <IonCardHeader className="RecipeProduct">
                                            <div className="SmartKitchen">
                                                <div className="counter-recipe">
                                                    <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
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
                                                <IonText className="ProductBrandname">Rolled oats gluten-free</IonText>
                                            </div>
                                            <div className="PriceRating">
                                                <div className='PriceText'>
                                                    <IonIcon icon={readerOutline} className="cookIcon"></IonIcon>
                                                </div>
                                                <div className="RecipePack">
                                                    <p>pack</p>
                                                    <p>500 grams</p>
                                                    <ul className="Recipe-Star">
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <span>(1)</span>
                                                    </ul>
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
                                                    <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
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
                                                <IonText className="ProductBrandname">Rolled oats gluten-free</IonText>
                                            </div>
                                            <div className="PriceRating">
                                                <div className='PriceText'>
                                                    <IonIcon icon={readerOutline} className="cookIcon"></IonIcon>
                                                </div>
                                                <div className="RecipePack">
                                                    <p>pack</p>
                                                    <p>500 grams</p>
                                                    <ul className="Recipe-Star">
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <li><IonIcon icon={star}></IonIcon></li>
                                                        <span>(1)</span>
                                                    </ul>
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
                            <IonTitle className="SwiperHead  ion-padding-vertical">Similar Recipe</IonTitle>
                            <Swiper slidesPerView={1.5}>
                                <SwiperSlide>
                                    <IonCard>
                                        <IonCardHeader className="RecipeProduct">
                                            <div className="SmartKitchen">
                                                <div className="counter-recipe">
                                                    <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
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
                                                <IonText className="ProductBrandname">Rolled oats gluten-free</IonText>
                                            </div>
                                            <div className="PriceRating">
                                            <div className='HeartIcon'>
                                                    <IonIcon icon={heartCircleOutline} className=""></IonIcon>
                                                    <span className="ion-padding-right">3</span>
                                                </div>
                                                <div className="RecipePack">
                                                   
                                                    <p>Level easy</p>
                                                    <ul className="Recipe-Star">
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <span>(1)</span>
                                                    </ul>
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
                                                    <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
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
                                                <IonText className="ProductBrandname">Rolled oats gluten-free</IonText>
                                            </div>
                                            <div className="PriceRating">
                                                <div className='HeartIcon'>
                                                    <IonIcon icon={heartCircleOutline} className=""></IonIcon>
                                                    <span>3</span>
                                                </div>
                                                <div className="RecipePack">
                                                    <p>Level easy</p>
                                                    <ul className="Recipe-Star">
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <li><IonIcon icon={starOutline}></IonIcon></li>
                                                        <span>(1)</span>
                                                    </ul>
                                                </div>
                                            </div>
                                        </IonCardContent>
                                    </IonCard>
                                </SwiperSlide>
                            </Swiper>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default RecipePage