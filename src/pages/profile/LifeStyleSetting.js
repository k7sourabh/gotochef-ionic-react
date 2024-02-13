import { IonCol, IonContent, IonGrid, IonLabel, IonList, IonPage, IonRow } from '@ionic/react'
import React from 'react'
import Header from '../../components/Header'

const LifeStyleSetting = () => {
  return (
    <IonPage>
    <Header />
    <IonContent>
        <IonGrid>
            <IonRow>
                <IonCol>
                <IonList lines='none' className='Check'>
                    <input type="checkbox"  id='check' />
                    <IonLabel>
                    <img src="./assets/img/imagesketo.png" alt="" className="ProfileImg" />
                    <IonText>Lactose Lorem</IonText>
                    </IonLabel>
                </IonList>
                </IonCol>
            </IonRow>
        </IonGrid>
        </IonContent>
        </IonPage>
  )
}

export default LifeStyleSetting