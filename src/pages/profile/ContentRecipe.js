import React from 'react'
import {
    IonSegment,
    IonSegmentButton,
    IonCol,
    IonGrid,
    IonRow,
    IonText,
    IonLabel,
    IonButton,
    IonTitle,
    IonCard,
    IonCardContent,
    IonIcon,
} from "@ionic/react";
import { useState } from "react";
import { close } from "ionicons/icons";

const ContentRecipe = () => {
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
                                <img
                                    src="/assets/img/1525870462-Listing.jpg"
                                    alt="category cover"
                                    className="MainProductThumb"
                                />
                                <IonCardContent className="ion-no-padding ion-margin-top">
                                    <IonText className="ProductTitle">
                                        Kesar Badam Flavour
                                    </IonText>
                                    <IonButton
                                        className="AddToCartBtn"
                                        size="default"
                                        shape="round"
                                        fill="outline">
                                        <div className="addText">Remove
                                            <IonIcon slot="end" size="small" icon={close} />
                                        </div>
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6">
                            <IonCard className="ProductCard">
                                <img
                                    src="/assets/img/product-img.jpg"
                                    alt="category cover"
                                    className="MainProductThumb"
                                />
                                <IonCardContent className="ion-no-padding ion-margin-top">
                                    <IonText className="ProductTitle">
                                        Kesar Badam Flavour
                                    </IonText>
                                    <IonButton
                                        className="AddToCartBtn"
                                        size="default"
                                        shape="round"
                                        fill="outline">
                                        <div className="addText">Remove
                                            <IonIcon slot="end" size="small" icon={close} />
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
                                <img
                                    src="/assets/img/product-img.jpg"
                                    alt="category cover"
                                    className="MainProductThumb"
                                />
                                <IonCardContent className="ion-no-padding ion-margin-top">
                                    <IonText className="ProductTitle">
                                        Kesar Badam Flavour
                                    </IonText>
                                    <IonButton
                                        className="AddToCartBtn"
                                        size="default"
                                        shape="round"
                                        fill="outline">
                                        <div className="addText">Remove
                                            <IonIcon slot="end" size="small" icon={close} />
                                        </div>
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6">
                            <IonCard className="ProductCard">
                                <img
                                    src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                                    alt="category cover"
                                    className="MainProductThumb"
                                />
                                <IonCardContent className="ion-no-padding ion-margin-top">
                                    <IonText className="ProductTitle">
                                        Kesar Badam Flavour
                                    </IonText>
                                    <IonButton
                                        className="AddToCartBtn"
                                        size="default"
                                        shape="round"
                                        fill="outline">
                                        <div className="addText">Remove
                                            <IonIcon slot="end" size="small" icon={close} />
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
                                <img
                                    src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                                    alt="category cover"
                                    className="MainProductThumb"
                                />
                                <IonCardContent className="ion-no-padding ion-margin-top">
                                    <IonText className="ProductTitle">
                                        Kesar Badam Flavour
                                    </IonText>
                                    <IonButton
                                        className="AddToCartBtn"
                                        size="default"
                                        shape="round"
                                        fill="outline">
                                        <div className="addText">Remove
                                            <IonIcon slot="end" size="small" icon={close} />
                                        </div>
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6">
                            <IonCard className="ProductCard">
                                <img
                                    src="/assets/img/1525870462-Listing.jpg"
                                    alt="category cover"
                                    className="MainProductThumb"
                                />
                                <IonCardContent className="ion-no-padding ion-margin-top">
                                    <IonText className="ProductTitle">
                                        Kesar Badam Flavour
                                    </IonText>
                                    <IonButton
                                        className="AddToCartBtn"
                                        size="default"
                                        shape="round"
                                        fill="outline">
                                        <div className="addText">Remove
                                            <IonIcon slot="end" size="small" icon={close} />
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

export default ContentRecipe