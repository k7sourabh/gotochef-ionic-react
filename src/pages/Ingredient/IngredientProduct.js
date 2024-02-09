import { IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, IonText } from '@ionic/react'
import { add, closeCircle, heartCircleOutline, heartOutline, star } from 'ionicons/icons'
import React from 'react'
import Header from '../../components/Header'

const IngredientProduct = () => {
  return (
                    <IonCard className="ProductCard">
                      <IonCardHeader className="ProductThumb">
                        <div className="SmartKitchen">
                          <div className="counter">
                            <img
                              src="/assets/img/Mysmart.png"
                              alt="Images"
                              className="icon-img"
                            />
                            <span>0</span>
                          </div>
                        </div>
                        <img
                          src="/assets/img/product-img.png"
                          alt="category cover"
                          className="MainProductThumb"
                         
                        />
                        <div className="BookMark">
                          <IonIcon
                            color="primary"
                            size="small"
                            icon={heartOutline}
                          />
                        </div>
                      </IonCardHeader>
                      <IonCardContent className="ProductDetails">
                        <IonText className="ProductTitle">
                        Zutano avocados
                        </IonText>
                        <div className="PriceRating">
                          <IonText color="dark" className="CurrentPrice">
                          Zutano avocados have thin, glossy and green-coloured skin. They
                          </IonText>
                          
                        </div>
                        <IonButton size='small' fill='clear' shape='outline'>
                            Details
                        </IonButton>
                      </IonCardContent>
                    </IonCard>
  )
}

export default IngredientProduct