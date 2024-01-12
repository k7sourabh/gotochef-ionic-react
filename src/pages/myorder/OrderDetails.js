import { IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle } from "@ionic/react"
import Header from "../../components/Header"
import { getApiData } from "../../utils/Utils";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const OrderDetails = ()=> {
 const { id } = useParams()

  const orderDetailsApi = async () => {
    try {
      const response = await getApiData(`/order-details/${id}`);
      console.log("pro", response?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    orderDetailsApi();
  }, []);

    return(
        <IonPage>
            <Header/>
            <IonContent>
                <IonGrid>
                    <IonRow>
                       <IonCol size="12">
                       <IonCard  className="ion-padding-horizontal OrderDetailsProduct">
                    <IonCardHeader className="ProductDetailImg">
                      <img
                        src="/assets/img/product-img.png"
                        alt=""
                        className="MainProductThumb"
                      />
                    </IonCardHeader>

                    <IonCardContent className="ion-no-padding">
                      <div className="pro-name">
                       <IonTitle className="ion-no-padding">Blueberries</IonTitle>
                        <IonText>Rostaa</IonText>
                      </div>
                      <div className="ProductNameDetails ">
                        <IonText className="PriceTextDetails">Price</IonText>
                        <IonText>₹ 100</IonText>
                      </div>
                      <div className="ProductNameDetails ">
                      <IonText className="PriceTextDetails">Total Price</IonText>
                        <IonText>₹ 100</IonText>
                      </div>
                      <div className="ProductNameDetails ">
                      <IonText>Qty:</IonText>
                      <IonText>2</IonText>
                      </div>
                      <div className="ProductNameDetails Detailslast-child">
                      <IonText>Status:</IonText>
                      <IonText>pending</IonText>
                      </div>
                      <div className="flex ion-justify-content-center cancelBtn">
                        <IonButton fill="clear" >Cancel</IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                       </IonCol>
                      
                    </IonRow>
                </IonGrid>
            </IonContent>
            </IonPage>
    )
}
export default OrderDetails