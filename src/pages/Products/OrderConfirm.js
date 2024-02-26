import React, { useEffect } from 'react'
import { IonButton, IonContent, IonPage, IonText } from '@ionic/react'
import Header from '../../components/Header'
import { useCart } from '../../contexts/CartProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const OrderConfirm = () => {
  const {clearCart} = useCart();
  const history = useHistory();

  useEffect(() => {
    clearCart();
  },[]);

  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent>
        <div className='OrderConfirm'>
          <img src="/assets/img/confirm-check.png" alt="Images" />
          <IonText className='Title'>Thank You!</IonText>
          <IonText className='subTitle'>Your order is confirmed</IonText>
          <IonText className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</IonText>
          <IonButton onClick={() => history.push('/home')} size="default" expand="block">Done</IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OrderConfirm
