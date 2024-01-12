import { IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle } from "@ionic/react"
import Header from "../../components/Header"
import { getApiData } from "../../utils/Utils";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

const OrderDetails = ()=> {
 const { id } = useParams();
 const [productData, setProductData] = useState([]);

  const orderDetailsApi = async () => {
    try {
      const response = await getApiData(`/order-details/${id}`);
      console.log("orderDetailsApi", response?.data?.product_data);
      setProductData(response?.data?.product_data)
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
                       {productData && productData.map((data, i) => (
                         <IonCard  className="ion-padding-horizontal OrderDetailsProduct" key={i}>
                         <IonCardHeader className="ProductDetailImg">
                           <img
                             src={data?.images}
                             alt=""
                             className="MainProductThumb"
                             onError={(e) => {
                              e.target.onerror = null; 
                              e.target.src = "/assets/img/img-placeholder.jpg";
                            }}
                           />
                         </IonCardHeader>
                         
                            <IonCardContent className="ion-no-padding">
                            <div className="pro-name">
                             <IonTitle className="ion-no-padding">{data?.productName}</IonTitle>
                              <IonText>{data?.brand_name}</IonText>
                            </div>
                            <div className="ProductNameDetails ">
                              <IonText className="PriceTextDetails">Price</IonText>
                              <IonText>₹ {data?.product_mrp}</IonText>
                            </div>
                            <div className="ProductNameDetails ">
                            <IonText className="PriceTextDetails">Total Price</IonText>
                              <IonText>₹ {data?.product_mrp * data?.quantity}</IonText>
                            </div>
                            <div className="ProductNameDetails ">
                            <IonText>Qty:</IonText>
                            <IonText>{data?.quantity}</IonText>
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
                       ))}
                       </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            </IonPage>
    )
}
export default OrderDetails