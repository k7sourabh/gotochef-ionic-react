import React from 'react'
import {
    IonSegment,
    IonSegmentButton,
    IonCol,
    IonGrid,
    IonPage,
    IonContent,
    IonRow,
    IonText,
    IonLabel,
    IonButton,
    IonHeader,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonIcon,
    IonChip,
  } from "@ionic/react";
  import { useEffect, useState } from "react";
  import { add, closeCircle, remove, removeCircleOutline, star } from "ionicons/icons";


const SavedContent = () => {
    const [selectedTabladder, setSelectedTabladder] = useState("saved");
    const handleTabChangeladder = (event) => {
      setSelectedTabladder(event.detail.value);
    };
  
  return (
    <>
    <IonGrid>
       <IonRow className='ion-padding-vertical'>
        <IonCol size='12'>
            <IonTitle className='ion-no-padding'>
                Recipe
            </IonTitle>
        </IonCol>
       </IonRow>  
      <IonRow>
        <IonCol size="12">
          <IonSegment
            value={selectedTabladder}
            onIonChange={handleTabChangeladder}
            className="personalTab">
            <IonSegmentButton value="saved">
              <IonLabel>Saved</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="favorite">
              <IonLabel>Favorite</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="cooked">
              <IonLabel>Cooked</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {selectedTabladder === "saved" && (
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <IonCard className="ProductCard">
                    <IonCardHeader className="ProductThumb">
                      <div className="SmartKitchen">
                        <div className="counter">
                          <img
                            src="./assets/img/Mysmart.png"
                            alt="Images"
                            className="icon-img"/>
                          <span>0</span>
                        </div>
                      </div>
                      <img
                        src="/assets/img/img-placeholder.jpg"
                        alt="category cover"
                        className="MainProductThumb"
                      />
                      <div className="BookMark">
                        <IonIcon
                          color="primary"
                          size="small"
                          icon={closeCircle}/>
                      </div>
                    </IonCardHeader>
                    <IonCardContent className="ProductDetails">
                      <IonText className="ProductTitle">
                        Kesar Badam Flavour
                      </IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                          100
                        </IonText>
                        <IonChip className="RateDesign">
                          <span>3</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>
                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">200</IonText>
                        <IonChip className="offerBedge">24% OFF</IonChip>
                      </div>
                      <IonButton
                        className="AddToCartBtn"
                        size="default"
                        shape="round"
                        fill="outline">
                        <div className="addText">Remove
                          <IonIcon slot="end" size="small" icon={remove} />
                        </div>
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
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
                        src="/assets/img/img-placeholder.jpg"
                        alt="category cover"
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
                      <IonText className="ProductTitle">
                        Kesar Badam Flavour
                      </IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                          100
                        </IonText>
                        <IonChip className="RateDesign">
                          <span>3</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">200</IonText>
                        <IonChip className="offerBedge">24% OFF</IonChip>
                      </div>

                      <IonButton
                        className="AddToCartBtn"
                        size="default"
                        shape="round"
                        fill="outline"
                      >
                        <div className="addText">
                          Remove
                          <IonIcon slot="end" size="small" icon={remove} />
                        </div>
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          )}
          {selectedTabladder === "favorite" && (
            <IonGrid>
              <IonRow>
                <IonCol size="6">
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
                        src="/assets/img/img-placeholder.jpg"
                        alt="category cover"
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
                      <IonText className="ProductTitle">
                      Ragi Chocolate Truffle Cake Recipe
                      </IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                          100
                        </IonText>
                        <IonChip className="RateDesign">
                          <span>3</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">
                          200
                        </IonText>
                        <IonChip className="offerBedge">
                          24
                          % OFF
                        </IonChip>
                      </div>

                      <IonButton
                        className="AddToCartBtn"
                        size="default"
                        shape="round"
                        fill="outline"
                      >
                        <div className="addText">
                          Remove
                          <IonIcon slot="end" size="small" icon={remove} />
                        </div>
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
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
                        src="/assets/img/img-placeholder.jpg"
                        alt="category cover"
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
                      <IonText className="ProductTitle">
                        Kesar Badam Flavour
                      </IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                          100
                        </IonText>
                        <IonChip className="RateDesign">
                          <span>3</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">
                          200
                        </IonText>
                        <IonChip className="offerBedge">
                          24
                          % OFF
                        </IonChip>
                      </div>

                      <IonButton
                        className="AddToCartBtn"
                        size="default"
                        shape="round"
                        fill="outline"
                      >
                        <div className="addText">
                          Remove
                          <IonIcon slot="end" size="small" icon={remove} />
                        </div>
                      </IonButton>




                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          )}
          {selectedTabladder === "cooked" && (
            <IonGrid>
              <IonRow>
                <IonCol size="6">
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
                        src="/assets/img/img-placeholder.jpg"
                        alt="category cover"
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
                      <IonText className="ProductTitle">
                        Kesar Badam Flavour
                      </IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                          100
                        </IonText>
                        <IonChip className="RateDesign">
                          <span>3</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">
                          200
                        </IonText>
                        <IonChip className="offerBedge">
                          24
                          % OFF
                        </IonChip>
                      </div>

                      <IonButton
                        className="AddToCartBtn"
                        size="default"
                        shape="round"
                        fill="outline"
                      >
                        <div className="addText">
                          Remove
                          <IonIcon slot="end" size="small" icon={remove} />
                        </div>
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
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
                        src="/assets/img/img-placeholder.jpg"
                        alt="category cover"
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
                      <IonText className="ProductTitle">
                        Kesar Badam Flavour
                      </IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                          100
                        </IonText>
                        <IonChip className="RateDesign">
                          <span>3</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>

                      <div className="OfferInfo">
                        <IonText color="dark" className="OldPrice">
                          200
                        </IonText>
                        <IonChip className="offerBedge">
                          24
                          % OFF
                        </IonChip>
                      </div>

                      <IonButton
                        className="AddToCartBtn"
                        size="default"
                        shape="round"
                        fill="outline"
                      >
                        <div className="addText">
                          Remove
                          <IonIcon slot="end" size="small" icon={remove} />
                        </div>
                      </IonButton>




                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          )}
        </IonCol>
      </IonRow>
    </IonGrid>
  </>
  )
}

export default SavedContent