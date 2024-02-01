import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  useIonLoading,
  useIonModal,
} from "@ionic/react";
import Header from "../../components/Header";
import { postApiData } from "../../utils/Utils";
import { bookmarkOutline, star, searchOutline } from "ionicons/icons";
import { add } from "lodash";
import debounce from "lodash/debounce";
import VariantModal from "../VariantModal";

const SearchProduct = () => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchProduct] = useState([]);
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


  const handleSubmit = async () => {
    if (!query) {
      return;
    }
    const formdata = new FormData();
    formdata.append("keyword", query);
    formdata.append("limit", 50);
    formdata.append("pageno", 0);
    const response = await postApiData(
      "/product-search-suggestion?keyword=Magic&limit=all&pageno=0",
      formdata
    ).catch((e) => console.log(e));
    setSearchProduct(response?.data?.subcatprod);
  };

  const debouncedHandleSubmit = debounce(handleSubmit);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12" className="ion-padding">
              <div className="SerchBox">
                <IonSearchbar
                  className="searchBar"
                  value={query}
                  onIonChange={(e) => setQuery(e.detail.value)}
                />
                <IonButton
                  className="IconBtn SerchBtn"
                  fill="clear"
                  onClick={debouncedHandleSubmit}
                >
                  <IonIcon color="primary" size="small" icon={searchOutline} />
                </IonButton>
              </div>
            </IonCol>
          </IonRow>

          <IonGrid className="ion-no-padding">
            <IonRow>
              {searchData?.map((searchProductData, index) => (
                <IonCol size="6" key={index}>
                  <IonCard
                    className="ProductCard"
                  >
                    <IonCardHeader className="ProductThumb">
                      <div className="SmartKitchen">
                        <div className="counter">
                          <img
                            src="/assets/img/Mysmart.png"
                            alt="Images"
                            className="icon-img"
                          />
                          <span>{searchProductData?.imk_num}</span>
                        </div>
                        {/* <img
                        src="/assets/img/veg-icon.svg"
                        alt="Images"
                        className="icon-img"
                      /> */}
                      </div>

                      <IonButton
                        fill="clear"
                        className="blank-btn"
                        routerLink={`/product-details/${searchProductData?.product_id}`}
                      >
                      <img
                        src={searchProductData?.images}
                        alt="category cover"
                        className="MainProductThumb"
                        onError={(e) => {
                          e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                          e.target.src = "/assets/img/img-placeholder.jpg"; // Placeholder image URL
                        }}
                      />
                      </IonButton>
                      <div className="BookMark">
                        <IonIcon
                          color="primary"
                          size="small"
                          icon={bookmarkOutline}
                        />
                      </div>
                    </IonCardHeader>

                    <IonCardContent className="ProductDetails">
                      <IonText className="ProductTitle">
                        {searchProductData?.productName}
                      </IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                          ₹{" "}
                          {searchProductData &&
                            searchProductData.product_variant &&
                            searchProductData.product_variant[0] &&
                            searchProductData?.product_variant[0]
                              ?.offer_price}
                        </IonText>
                        <IonChip className="RateDesign">
                          <span>{searchProductData?.star_rating}</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">
                          {searchProductData &&
                            searchProductData.product_variant &&
                            searchProductData.product_variant[0] &&
                            searchProductData?.product_variant[0]
                              ?.main_price}
                        </IonText>
                        <IonChip className="offerBedge">
                          {searchProductData &&
                            searchProductData.product_variant_result &&
                            searchProductData.product_variant_result[0] &&
                            (
                              ((searchProductData?.product_variant[0]
                                ?.main_price -
                                searchProductData?.product_variant[0]
                                  ?.offer_price) /
                                searchProductData?.product_variant[0]
                                  ?.main_price) *
                              100
                            ).toFixed(0)}
                          % OFF
                        </IonChip>
                      </div>

                      <IonButton
                        className="AddToCartBtn"
                        size="default"
                        shape="round"
                        fill="outline"
                        onClick={() => openModal(searchProductData && searchProductData)}
                      >
                        <div className="addText">
                          Add
                          <IonIcon slot="end" size="small" icon={add} />
                        </div>
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SearchProduct;
