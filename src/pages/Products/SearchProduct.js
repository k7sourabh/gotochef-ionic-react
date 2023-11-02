import React, { useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonGrid, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonPage, IonRow, IonSearchbar, IonText } from '@ionic/react'
import Header from '../../components/Header'
import { postApiData } from '../../utils/Utils';
import { bookmarkOutline, star } from 'ionicons/icons';
import { add } from 'lodash';

const SearchProduct = () => {
  const [query, setQuery] = useState('');
  const [searchData, setSearchProduct] = useState([]);
  console.log(query);

  const handleSubmitForm = async (values) => {
    console.log(values);
    const formdata = new FormData();
    formdata.append("keyword", query);
    formdata.append("limit", "all");
    formdata.append("pageno", 0);
    const response = await postApiData("/product-search-suggestion?keyword=Magic&limit=all&pageno=0", formdata).catch(e => console.log(e));
    console.log(response?.data?.subcatprod);
    setSearchProduct(response?.data?.subcatprod)
  };
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid className="ion-no-padding">
          <IonSearchbar value={query} onIonChange={e => setQuery(e.detail.value)} />
          <IonButton className="IconBtn" onClick={handleSubmitForm}>
            <img
              src="/assets/img/Search.png"
              alt="Images"
              className="TopBarIcons"
            />
          </IonButton>
          <IonGrid className="ion-no-padding">
            <IonRow>
              {searchData?.map((searchProductData, index) => (
                <IonCol size="6" key={index}>
                  <IonCard className="ProductCard" routerLink={`/product-details/${searchProductData?.product_id}`}>
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

                      <img
                        src={searchProductData?.images}
                        alt="category cover"
                        className="MainProductThumb"
                        onError={(e) => {
                          e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                          e.target.src = "/assets/img/img-placeholder.jpg"; // Placeholder image URL
                        }}
                      />
                      <div className="BookMark">
                        <IonIcon
                          color="primary"
                          size="small"
                          icon={bookmarkOutline}
                        />
                      </div>
                    </IonCardHeader>

                    <IonCardContent className="ProductDetails">
                      <IonText className="ProductTitle">{searchProductData?.productName}</IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                          ₹ {searchProductData &&
                            searchProductData.product_variant_result &&
                            searchProductData.product_variant_result[0] && searchProductData?.product_variant_result[0]?.offer_price}
                        </IonText>
                        <IonChip className="RateDesign">
                          <span>{searchProductData?.star_rating}</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">
                          {searchProductData &&
                            searchProductData.product_variant_result &&
                            searchProductData.product_variant_result[0] && searchProductData?.product_variant_result[0]?.main_price}
                        </IonText>
                        <IonChip className="offerBedge">{searchProductData &&
                          searchProductData.product_variant_result &&
                          searchProductData.product_variant_result[0] && ((searchProductData?.product_variant_result[0]?.main_price - searchProductData?.product_variant_result[0]?.offer_price) / searchProductData?.product_variant_result[0]?.main_price * 100).toFixed(0)}% OFF</IonChip>
                      </div>

                      <IonButton
                        className="AddToCartBtn"
                        size="default"
                        shape="round"
                        fill="outline"
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
  )
}

export default SearchProduct
