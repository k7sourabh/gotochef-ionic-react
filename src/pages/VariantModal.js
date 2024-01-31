import React, { useState } from 'react'
import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonButtons,
    IonSelect,
    IonSelectOption,
    IonToolbar,
  } from "@ionic/react";
import {useCart} from './../contexts/CartProvider';
const VariantModal = ({
    onDismiss,
    customProp
  }) => {
    const {addToCart} = useCart();
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  
    const handleAddToCart = () => {
      let obj = {
        product_id: customProp.product_id,
        pro_variant_id: customProp.product_variant[selectedVariantIndex].pro_variant_id,
        variant: customProp.product_variant[selectedVariantIndex].weight+""+customProp.product_variant[selectedVariantIndex].weight_type,
        quantity: 1,
        prod_details: {
          name: customProp.slug,
          image: customProp.images,
          brand_name: customProp.brand_name,
          main_price: customProp.product_variant[selectedVariantIndex].main_price,
          offer_price: customProp.product_variant[selectedVariantIndex].offer_price
        }
      }
      addToCart(obj);
      onDismiss(customProp, 'confirm')
    }

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton color="medium" onClick={() => onDismiss(null, 'cancel')}>
                Cancel
              </IonButton>
            </IonButtons>
            <IonTitle>Add To Cart</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonSelect className="qwt-select" onIonChange={(e) => setSelectedVariantIndex(e.detail.value)} value={selectedVariantIndex}>
          {customProp.product_variant && customProp.product_variant.map((item, index)=><IonSelectOption value={index}>{item.weight} {item.weight_type}</IonSelectOption>)}
        </IonSelect>
        <IonButton onClick={handleAddToCart}>Add</IonButton>
        </IonContent>
      </IonPage>
    );
  };

export default VariantModal