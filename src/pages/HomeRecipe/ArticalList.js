import React, { } from "react";
import Header from "../../components/Header";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
} from "@ionic/react";
import { listOutline } from "ionicons/icons";

const ArticalList = () => {

  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent fullscreen>
        <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
          <div className="TitleHead">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Artical List</IonTitle>
          </div>
        </IonHeader>
        <IonGrid>
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

        </IonGrid>
       
      </IonContent>
    </IonPage>
  );
};

export default ArticalList;
