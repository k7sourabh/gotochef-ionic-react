import React from 'react'
import { IonButton, IonContent, IonPage, IonText } from '@ionic/react'
import Header from '../../components/Header'

const OrderConfirm = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className='OrderConfirm'>
          <img src="/assets/img/confirm-check.png" alt="Images" />
          <IonText className='Title'>Thank You!</IonText>
          <IonText className='subTitle'>Your order is confirmed</IonText>
          <IonText className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</IonText>
          <IonButton size="default" expand="block">Done</IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OrderConfirm
