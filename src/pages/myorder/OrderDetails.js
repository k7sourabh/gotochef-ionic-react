import { IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle } from "@ionic/react"
import Header from "../../components/Header"

const OrderDetails=()=>{
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
                      <div className="">
                       <IonTitle className="ion-no-padding">Blueberries</IonTitle>
                        <IonText>Rostaa</IonText>
                      </div>
                      <div className="ProductNameDetails ion-padding-top">
                        <IonText className="PriceTextDetails">Price</IonText>
                        <IonText>₹ 100</IonText>
                      </div>
                      <div className="ProductNameDetails ion-padding-top">
                      <IonText className="PriceTextDetails">Total Price</IonText>
                        <IonText>₹ 100</IonText>
                      </div>
                      <div className="ProductNameDetails ion-padding-top">
                      <IonText>Qty:<span>2</span></IonText>
                      <IonText>pending</IonText>
                      </div>
                      <div className="ProductNameDetails ion-padding-top ion-justify-content-center">
                        <IonButton fill="clear">Cancel</IonButton>
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