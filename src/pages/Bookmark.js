import { IonCol,IonIcon,IonText, IonGrid, IonPage, IonContent,IonCard, IonRow, IonButton,IonChip, IonCardContent, IonCardHeader, useIonModal, useIonLoading } from "@ionic/react";
import { star, add, closeCircle } from "ionicons/icons";
import { useState } from "react";
import Header from "../components/Header";
import VariantModal from "./VariantModal";
const Bookmart = () => {
    const WishListArray = [1,2,3]
    const [selectedProduct, setSelectedProduct] = useState({});
    const [present, dismiss] = useIonModal(VariantModal, {
      customProp: selectedProduct,
      onDismiss: (data, role) => dismiss(data, role),
    });
    const [presentLoading] = useIonLoading();
    function openModal(item) {
      console.log(item)
      setSelectedProduct(item);
      present({
        onWillDismiss: (ev) => {
          if (ev.detail.role === "confirm") {
            presentLoading({
              message: "Product added to cart successfully!",
              duration: 1500,
              position: "bottom",
            });
          }
        },
      });
    }
    return (
        <>
            <IonPage>
                <Header />
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <h1 className="ion-padding-horizontal">BookMark</h1>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    {WishListArray.map((val)=>(
                    <IonGrid key={val} className="ion-padding-bottom">
                        <IonRow>
                            <IonCol>
                          
                             <IonCard className="ProductCard">
                             <IonCardHeader className="ProductThumb">
                      <div className="SmartKitchen">
                        <div className="counter">
                        <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />
                        <span>0</span>
                        </div>
                      </div>
                      <img
                        src="/assets/img/kissan-sauce.png"
                        className="MainProductThumb"
                      />
                      <div className="BookMark">
                        <IonIcon
                          color="primary"
                          size="small"
                          icon={closeCircle}
                        />
                      </div>
                    </IonCardHeader>
                    <IonCardContent className="ProductDetails">
                      <IonText className="ProductTitle">khimaa</IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">₹300</IonText>
                        <IonChip className="RateDesign">
                          <span>0</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">2000</IonText>
                        <IonChip className="offerBedge">75% OFF</IonChip>
                      </div>

                      <IonButton className="AddToCartBtn" size="default" shape="round" fill="outline">
                        <div className="addText">
                        add
                          <IonIcon slot="end" size="small" icon={add} />
                        </div>
                      </IonButton>
                      
                    </IonCardContent>

                             </IonCard>
                            </IonCol>
                            <IonCol>
                          
                             <IonCard className="ProductCard">
                             <IonCardHeader className="ProductThumb">
                      <div className="SmartKitchen">
                        <div className="counter">
                        <img src="./assets/img/Mysmart.png" alt="Images" className="icon-img" />
                        <span>0</span>
                        </div>
                      </div>
                      <img
                        src="/assets/img/kissan-sauce.png"
                        className="MainProductThumb"
                      />
                      <div className="BookMark">
                        <IonIcon
                          color="primary"
                          size="small"
                          icon={closeCircle}
                        />
                      </div>
                    </IonCardHeader>
                    <IonCardContent className="ProductDetails">
                      <IonText className="ProductTitle">khimaa</IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">₹300</IonText>
                        <IonChip className="RateDesign">
                          <span>0</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">2000</IonText>
                        <IonChip className="offerBedge">75% OFF</IonChip>
                      </div>

                      <IonButton className="AddToCartBtn" size="default" shape="round" fill="outline">
                        <div className="addText">
                         Remove
                          <IonIcon slot="end" size="small" icon={add} />
                        </div>
                      </IonButton>
                    </IonCardContent>
                             </IonCard>
                            </IonCol>

                        </IonRow>
                    </IonGrid>
                    ))}
                </IonContent>
            </IonPage>
        </>
    )
}
export default Bookmart;