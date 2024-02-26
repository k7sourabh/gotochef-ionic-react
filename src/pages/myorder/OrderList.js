import {
  IonCol,
  IonGrid,
  IonPage,
  IonContent,
  IonRow,
  IonLabel,
  IonButton,
} from "@ionic/react";
import Header from "../../components/Header";
import { getApiData } from "../../utils/Utils";
import { useEffect, useState } from "react";
const OrderList = () => {
  const [orderListData, setOrderListData] = useState([]);

  const orderList = async () => {
    try {
      const response = await getApiData(`/order-list`);
      setOrderListData(response?.data?.order_list);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    orderList();
  }, []);

  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent className="ion-padding-horizontal">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h3>Order List</h3>
            </IonCol>
          </IonRow>
        </IonGrid>
        {orderListData &&
          orderListData?.map((data, i) => (
            <IonGrid className="order-list ion-margin-vertical" key={i}>
              <IonRow className="ion-padding-horizontal ion-padding-vertical">
                <IonCol>
                  <IonLabel>
                    <h5>
                      {data?.firstname} {data?.lastname}
                    </h5>
                  </IonLabel>
                </IonCol>
                <IonCol className="ion-text-right">
                  <IonLabel>
                    <h5>{data && data?.created_at?.split(" ")[0]}</h5>
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-horizontal ion-padding-bottom">
                <IonCol>
                  <IonLabel>
                    <h5>{data?.email}</h5>
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-horizontal">
                <IonCol>
                  <IonLabel className="ion-padding-right">
                    <h5 className="order-address">{data?.address}</h5>
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-horizontal ion-padding-vertical">
                <div className="order-btn">
                  <IonButton expand="full" shape="round">
                    {data?.payment_type}
                  </IonButton>
                  <IonButton expand="full" shape="round">
                    {data?.order_status === 1
                      ? "Deliver"
                      : data?.order_status === 2
                      ? "Ready to Move"
                      : "Pending"}
                  </IonButton>
                  <IonButton
                    expand="full"
                    shape="round"
                    routerLink={`/order-details/${data?.id}`}
                  >
                    View
                  </IonButton>
                </div>
              </IonRow>
            </IonGrid>
          ))}
      </IonContent>
    </IonPage>
  );
};

export default OrderList;
