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


import "swiper/swiper-bundle.css";
import "@ionic/react/css/ionic-swiper.css";


const ArticalDetail = () => {

  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/home">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Artical Details</IonTitle>
        </IonHeader>
        <IonGrid className="ion-padding-horizontal ion-padding-top">
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <img
                alt=""
                className="RecipeImage"
                src = "/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
              />
              <div className="RecipeProName">
                <h1 className="ion-padding-top">Mango-Coconut Jelly Recipe</h1>
                <div className="RecipeProfile">
                    <div className="ReciRow">
                    John Explore
                    </div>
                    <div className="ReciRow">
                    Apr 25, 2018
                    </div>
                </div>
              </div>

              <div className="SignupSocials SocialArtical">
              <IonButton fill="clear">
                <img src="/assets/img/facebook-icon.png" alt="Images" />
              </IonButton>
              <IonButton fill="clear">
                <img src="/assets/img/google-icon.png" alt="Images" />
              </IonButton>
              <IonButton fill="clear">
                <img src="/assets/img/apple-icon.png" alt="Images" />
              </IonButton>
              <IonButton fill="clear">
                <img src="/assets/img/twitter.png" alt="Images" />
              </IonButton>
              <IonButton fill="clear">
                <img src="/assets/img/linkedin.png" alt="Images" />
              </IonButton>
            </div>

             
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonCol>
                <IonText>
                Over the years as technology has progressed, scientific findings have given facts, rationales, and names to a lot of age-old habits and ideas. Coconut oil is one such ancient ingredient that has been recently backed by the scientific community across the globe as being healthy for cooking. Made from fully fried copra having the maximum moisture content of 6%, there are various grades of coconut oil available like Virgin, refined etc. Like any other oil, the virgin grade of coconut oil is the most unrefined, nutrient-packed and healthy grade of available form.
                </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonCol>
                <h4>Let’s take a look at what gives coconut oil the healthy status that it has gained over the last decade:</h4>
                <p>Coconut oil has been found to have a high content of saturated fat and there are several studies correlating saturated fat with higher risk of heart diseases. This finding had led a lot of nutritionists shunning the use of coconut oil. However, further detailed tests revealed that a huge portion of saturated fat in coconut oil is in the Lauric acid form, which does not have a negative impact on the health of the heart, instead it has been found to have health benefiting properties. It contains antioxidants, antifungal, antibacterial, antiviral properties that boost the immune system.</p>
                <p>Due to high saturated fat content, coconut oil has the high smoking point and is extremely stable at high temperatures, making it an ideal option for high temperature cooking like deep frying. Oils with low smoking point degenerates at high temperatures producing toxic compounds.</p>
                <p>Another unique property of coconut oil is that most of the fat it contains is in the form of Medium Chain Triglycerides (MCT) which is known to aid weight loss. MCT is metabolised faster than LCT (Long chain triglycerides) since they do not need to be broken in the intestine first. They go straight from the digestive tract to the liver where they are turned into ketone bodies and used as quick sources of energy.</p>
                <p>MCTs are also good at balancing hormones – they regulate the appetite-controlling hormones, thereby increase the feeling of fullness and satisfaction.</p>
                <p>Studies have also shown that Coconut oil improves the lipid profile of the body – it increases the HDL (good cholesterol) and reduces LDL (bad cholesterol) thereby pumping the overall cholesterol profile of the heart.</p>
                <p>Coconut oil has a wonderful unique flavour of its own and several dishes across the cuisines do not attain their best flavours until they are cooked in coconut oil. Countries and regions that use coconut oil extensively have been found to have lower rates of heart diseases. Coconut oil has been an integral part of the Indian culture, tradition, and cooking (especially the southern parts of India) and it is now gaining widespread acceptance because of its scientifically proven health benefits.</p>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-padding-horizontal">
          <IonRow>
           <h3>Similar Articles</h3>
          </IonRow>
          <IonRow>
               
               <IonCol size='6'>
                 <IonCard className="ProductCard">
                   <IonCardHeader className="ProductThumb">
                     <img
                       src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                       alt="category cover"
                       className="MainProductThumb"
                      
                     />
                   </IonCardHeader>
                   <IonCardContent className="ProductDetails">
                    <div className="d-flex">
                    <IonText className="ProductTitle">
                     By john chef
                     </IonText>
                    <IonText className="ProductTitle">
                    Dark Chocolate: What’s the hype about!
                     </IonText>
                    </div>
                     <div className="PriceRating">
                       <IonText color="dark">
                       Over the years as technology has progressed
                       </IonText>
                       
                     </div>
                     <IonButton size='default' fill='outline' shape='round' routerLink="/artical-detail">
                         Read More
                     </IonButton>
                    
                   </IonCardContent>
                 </IonCard>
                 </IonCol>
               <IonCol size='6'>
                 <IonCard className="ProductCard">
                   <IonCardHeader className="ProductThumb">
                     <img
                       src="/assets/img/1525870462-Listing.jpg"
                       alt="category cover"
                       className="MainProductThumb"
                      
                     />
                   </IonCardHeader>
                   <IonCardContent className="ProductDetails">
                    <div className="d-flex">
                    <IonText className="ProductTitle">
                     By john chef
                     </IonText>
                    <IonText className="ProductTitle">
                    Coconut Oil – It's more Beneficial than You Think
                     </IonText>
                    </div>
                     <div className="PriceRating">
                       <IonText color="dark">
                       Edible Refined Vegetable Oil (Sunflower/Soyabean)
                       </IonText>
                       
                     </div>
                     <IonButton size='default' fill='outline' shape='round' routerLink="/artical-detail">
                         Read More
                     </IonButton>
                    
                   </IonCardContent>
                 </IonCard>
                 </IonCol>
               
           </IonRow>

           <IonRow>
           <IonCol className="flex ion-justify-content-center  ion-align-items-center">
            <IonButton fill="outline" size="default">View all</IonButton>
           </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};
export default ArticalDetail;
