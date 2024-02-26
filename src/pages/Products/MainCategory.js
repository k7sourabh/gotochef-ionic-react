import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  useIonLoading,
} from "@ionic/react";
// import Header from "../../components/Header";
import { getApiData } from "../../utils/Utils";
import Header from "../../components/Header";

const MainCategory = () => {
  const [productData, setProductData] = useState([]);
  const [present, dismiss] = useIonLoading();


  const categoryList = async () => {
    try{
      present();
      const response = await getApiData("/category-list");
      setProductData(response?.data?.data);
      dismiss();
    } catch(err) {
      setProductData([])
      console.log(err)
      dismiss();
    }
  };

  useEffect(() => {
    categoryList();
  }, []);

  return (
    <>
      <IonPage id="home-page">
        {/* <Header /> */}

        <IonContent fullscreen>
          <IonHeader className="TitleHead">
            <IonTitle className="ion-no-padding">
              Explore By Categories
            </IonTitle>
          </IonHeader>

          <IonGrid className="ion-no-padding ion-padding-horizontal ion-padding-bottom">
            <IonRow>
              {productData?.map((category, index) => (
                <IonCol size="6" key={index}>
                  <IonCard
                    className="CategoryCard"
                    routerLink={`/category/${category.slug}`}
                  >
                    <div className="CategoryThumb">
                      <img src={category?.images} alt="category cover" />
                    </div>
                    <IonText className="CategoryTitle">{category.category_name}</IonText>
                  </IonCard>
                </IonCol>
                
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default MainCategory;
