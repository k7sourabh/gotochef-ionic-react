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

import { getApiData, postApiData } from '../../utils/Utils';

import "swiper/swiper-bundle.css";
import "@ionic/react/css/ionic-swiper.css";
import { useParams } from "react-router";


const ArticalDetail = () => {
  const [ArticalDetaildata,setArticalDetaildata]=useState({});
  const [similerarticle,setSimilerarticle]=useState({});
  const {slug} = useParams();
  console.log('slug',slug)
  const fetchArticalsData=async ()=>{
    try{
      const responce= await getApiData('articledetails_json/coconut-oil-it-s-more-beneficial-than-you-think');
     
      setArticalDetaildata(responce?.data?.artciledetails?.artcile_details)
      setSimilerarticle(responce?.data?.artciledetails?.similer_article)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchArticalsData();
  },[])

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
        return text.substr(0, maxLength) + '...';
    }
    return text;
};


  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/profile">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Artical Details</IonTitle>
        </IonHeader>
       
        <IonGrid className="ion-padding-horizontal ion-padding-vertical">
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <img
                alt=""
                className="RecipeImage"
                // src = "/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                src={ArticalDetaildata.desktopImages}
              />
              <div className="RecipeProName">
                <h1 className="ion-padding-top">{ArticalDetaildata.slug}</h1>
                <div className="RecipeProfile">
                    <div className="ReciRow">
                   {ArticalDetaildata.f_name}
                    </div>
                    <div className="ReciRow">
                   {ArticalDetaildata.articleDate}
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
                  {ArticalDetaildata.shortDescription}
                </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonCol>
            {truncateText(ArticalDetaildata.longDescription, 100)}
               
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-padding-horizontal">
          <IonRow>
           <h3>Similar Articles</h3>
          </IonRow>
          <IonRow>
               {
                similerarticle?.map?.((item,i)=>(
                  <IonCol size='6' key={i}>
                  <IonCard className="ProductCard">
                    <IonCardHeader className="ProductThumb">
                      <img
                        // src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                        src={item.desktopImages}
                        alt="category cover"
                        className="MainProductThumb"
                       
                      />
                    </IonCardHeader>
                    <IonCardContent className="ProductDetails">
                     <div className="d-flex">
                     <IonText className="ProductTitle">
                      {item.f_name}
                      </IonText>
                     <IonText className="ProductTitle">
                    {item.articleName}
                      </IonText>
                     </div>
                      <div className="PriceRating">
                        <IonText color="dark">
                       {truncateText(item.shortDescription,30)}
                        </IonText>
                        
                      </div>
                      <IonButton size='default' fill='outline' shape='round' routerLink="/artical-detail">
                          Read More
                      </IonButton>
                     
                    </IonCardContent>
                  </IonCard>
                  </IonCol>
                ))
               }
              
                  
               
           </IonRow>

           <IonRow>
           <IonCol className="flex ion-justify-content-center  ion-align-items-center">
            <IonButton fill="outline" size="default" routerLink="/artical-list">View all</IonButton>
           </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};
export default ArticalDetail;