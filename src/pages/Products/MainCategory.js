import React from "react";
import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import Header from "../../components/Header";
import { ProductStore } from "../../data/ProductStore";
import { useLocation } from "react-router-dom";

const MainCategory = () => {
  const location = useLocation();
  console.log(location, "location");
  const products = ProductStore.useState((s) => s.products);
  return (
    <>
      <IonPage id="home-page">
        <Header />

        <IonContent fullscreen>
          <IonHeader className='TitleHead'>
            <IonTitle className="ion-no-padding">Explore By Categories</IonTitle>
          </IonHeader>

          <IonGrid className="ion-no-padding ion-padding-horizontal ion-padding-bottom">
            <IonRow>
              {products.map((category, index) => {
                return (
                  <IonCol size="6" key={index}>
                    <IonCard
                      className="CategoryCard"
                      routerLink={`/category/${category.slug}`}
                    >
                      <div className="CategoryThumb">
                        <img src={category.cover} alt="category cover" />
                      </div>
                      <IonText className="CategoryTitle">
                        {category.name}
                      </IonText>
                    </IonCard>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default MainCategory;
