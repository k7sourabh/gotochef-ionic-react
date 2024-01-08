import React, { useState } from "react";
import Header from "../../components/Header";
import { IonButton, IonChip, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { arrowForward, arrowForwardCircleOutline, arrowForwardOutline, atCircleOutline, bookmarkOutline, fastFood, person, star, timeOutline } from "ionicons/icons";
import { IonAccordion, IonAccordionGroup} from '@ionic/react';





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
                                <IonAccordion value="first">
                                    <IonItem slot="header" lines="none">
                                        <IonLabel>Details</IonLabel>
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
                                <IonAccordion value="second">
                                    <IonItem slot="header"  lines="none">
                                        <IonLabel>Ingredients</IonLabel>
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
                                <IonAccordion value="third">
                                    <IonItem slot="header"  lines="none">
                                        <IonLabel>Method</IonLabel>
                                    </IonItem>
                                    <div className="ion-padding recipe-acc-content" slot="content">
                                       <IonTitle>
                                        <IonLabel >Level:</IonLabel>
                                        <IonText className="ion-padding-start">Easy</IonText>
                                       </IonTitle>
                                    </div>
                                </IonAccordion>
                            </IonAccordionGroup>

                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default RecipePage