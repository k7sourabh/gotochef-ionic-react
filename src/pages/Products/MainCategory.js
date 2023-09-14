import React from 'react'
import { IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle } from '@ionic/react';
import Header from '../../components/Header';
import { ProductStore } from '../../data/ProductStore';

const MainCategory = () => {
   const products = ProductStore.useState((s) => s.products);
   return (
      <>
         <IonPage id="home-page">
            <Header />

            <IonContent fullscreen>
               <IonHeader>
                  <div className="flex ion-justify-content-between TitleBar ion-padding ion-align-items-center">
                     <IonTitle size="large" className="ion-no-padding">
                        Explore By Categories
                     </IonTitle>
                  </div>
               </IonHeader>

               <IonGrid className="ion-padding-horizontal">
                  <IonRow>
                     {products.map((category, index) => {
                        return (
                           <IonCol size="6"  key={index}>
                              <IonCard className="CategoryCard" routerLink={`/category/${category.slug}`}>
                                 <div className="CategoryThumb">
                                    <img
                                       src={category.cover}
                                       alt="category cover"
                                    />
                                 </div>
                                 <IonText className="CategoryTitle">{category.name}</IonText>
                              </IonCard>
                           </IonCol>
                        );
                     })}
                  </IonRow>
               </IonGrid>
            </IonContent>
         </IonPage>
      </>
   )
}

export default MainCategory