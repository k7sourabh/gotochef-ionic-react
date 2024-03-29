import React, { useState } from 'react'
import {
  IonButton,
  IonContent,
  IonTitle,
  IonButtons,
  IonSelect,
  IonSelectOption,
  IonIcon,
} from "@ionic/react";
import { useCart } from './../contexts/CartProvider';
import { add, closeOutline } from 'ionicons/icons';

const VariantModal = ({
  onDismiss,
  customProp
}) => {
  const { addToCart } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const handleAddToCart = () => {
    let obj = {
      product_id: customProp.product_id,
      pro_variant_id: customProp.product_variant[selectedVariantIndex].pro_variant_id,
      variant: customProp.product_variant[selectedVariantIndex].weight + "" + customProp.product_variant[selectedVariantIndex].weight_type,
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
    <IonContent className="ion-padding AddModalMain">
      <div className='addCart-modalContent'>
        <div className="addCart-modalPop">
          <div className='addCart-head'>
            <IonTitle className='ion-no-padding'>Add To Cart</IonTitle>
            <IonButtons slot="start">
              <IonButton color="medium" onClick={() => onDismiss(null, 'cancel')}>
                <IonIcon color="Light" size="large" fill="clear" icon={closeOutline} />
              </IonButton>
            </IonButtons>
          </div>

          <div className="addCart-modalBody">
            <div className='AddVariant'>
              <IonSelect className="qwt-select" onIonChange={(e) => setSelectedVariantIndex(e.detail.value)} value={selectedVariantIndex}>
                {customProp.product_variant && customProp.product_variant.map((item, index) => <IonSelectOption value={index}>{item.weight} {item.weight_type}</IonSelectOption>)}
              </IonSelect>
              <IonButton onClick={handleAddToCart}>
                <IonIcon color="Light" size="large" fill="clear" icon={add} />
              </IonButton>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default VariantModal