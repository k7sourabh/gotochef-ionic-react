import {
  IonCol,
  IonIcon,
  IonText,
  IonGrid,
  IonPage,
  IonContent,
  IonCard,
  IonRow,
  IonButton,
  IonChip,
  IonCardContent,
  IonCardHeader,
  useIonModal,
  useIonLoading,
} from "@ionic/react";
import { star, add, closeCircle } from "ionicons/icons";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import VariantModal from "./VariantModal";
import { getApiDataWithAuth } from "../utils/Utils";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../context/AuthContext";
import NotifyMePopup from "../modal/NotifyMePopup";
const Bookmart = () => {
  const [bookmarkData, setBookmarkData] = useState([]);
  const { bookMarkPost } = useCart();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isNotifyMe, setIsNotifyMe] = useState(false);
  const [notifyData, setNotifyData] = useState({});
  const { notifyStatus } = useAuth();
  const [present, dismiss] = useIonModal(VariantModal, {
    customProp: selectedProduct,
    onDismiss: (data, role) => dismiss(data, role),
  });
  const [presentLoading] = useIonLoading();
  function openModal(item) {
    setSelectedProduct(item);
    present({
      cssClass: "addCartModal",
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
  const bookmarkProduct = async () => {
    try {
      const response = await getApiDataWithAuth("/get-product-bookmark");
      setBookmarkData(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    bookmarkProduct();
  }, []);

  const removeItem = (data) => {
    bookMarkPost(data);
    setTimeout(() => {
      bookmarkProduct();
    }, 500);
  };

  return (
    <>
      <IonPage>
        {/* <Header /> */}
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1 className="ion-padding-horizontal">BookMark</h1>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid className="ion-padding-bottom">
            <IonRow>
              {bookmarkData && bookmarkData?.length > 0 ? (
                bookmarkData &&
                bookmarkData?.map((data, index) => (
                  <IonCol size="6" key={index}>
                    <IonCard className="ProductCard">
                      <IonCardHeader className="ProductThumb">
                        <div className="SmartKitchen">
                          <div className="counter">
                            <img
                              src="./assets/img/Mysmart.png"
                              alt="Images"
                              className="icon-img"
                            />
                            <span>0</span>
                          </div>
                        </div>
                        <img
                          src={data?.images}
                          alt="category cover"
                          className="MainProductThumb"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/assets/img/img-placeholder.jpg";
                          }}
                        />
                        <div className="BookMark">
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={closeCircle}
                            onClick={() => {
                              removeItem(data);
                            }}
                          />
                        </div>
                      </IonCardHeader>
                      <IonCardContent className="ProductDetails">
                        <IonText className="ProductTitle">
                          {data?.product_name}
                        </IonText>
                        <div className="PriceRating">
                          <IonText color="dark" className="CurrentPrice">
                            {data?.product_variant &&
                              data?.product_variant[0].offer_price}
                          </IonText>
                          <IonChip className="RateDesign">
                            <span>{data?.star_rating}</span>
                            <IonIcon color="light" size="small" icon={star} />
                          </IonChip>
                        </div>

                        <div className="OfferInfo">
                          <IonText color="dark" className="OldPrice">
                            {data?.product_variant &&
                              data?.product_variant[0].main_price}
                          </IonText>
                          <IonChip className="offerBedge">
                            {" "}
                            {(
                              ((data?.product_variant[0]?.main_price -
                                data?.product_variant[0]?.offer_price) /
                                data?.product_variant[0]?.main_price) *
                              100
                            ).toFixed(0)}
                            % OFF
                          </IonChip>
                        </div>
                        {data?.status === notifyStatus ? (
                          <IonButton
                          className="AddToCartBtn"
                          size="default"
                          shape="round"
                          fill="outline"
                          onClick={() => openModal(data)}
                        >
                          <div className="addText">
                            Add
                            <IonIcon slot="end" size="small" icon={add} />
                          </div>
                        </IonButton>
                        ) : (
                          <IonButton
                          onClick={() => {
                            setNotifyData(data);
                            setIsNotifyMe(true);
                          }}
                          className="AddToCartBtn"
                          size="default"
                          shape="round"
                          fill="outline"
                        >
                          <div className="addText">Notify Me</div>
                        </IonButton>
                        )}
                        
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))
              ) : (
                <IonText>No Record Found</IonText>
              )}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
      <NotifyMePopup
        isOpen={isNotifyMe}
        setIsOpen={setIsNotifyMe}
        notifyData={notifyData}
      />
    </>
  );
};
export default Bookmart;
