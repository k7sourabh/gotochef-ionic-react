import { IonCheckbox, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton } from '@ionic/react'
import React, { useState } from 'react'
import Header from '../../components/Header'

const FoodAdd = () => {
  const [selectedTab, setSelectedTab] = useState("step1");
    const handleTabChange = (event) => {
        setSelectedTab(event.detail.value);
    };
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size='6'>
              <IonItem lines="none">
                <IonLabel className="StatementInfo" for="veg">NON-VEGETARIAN</IonLabel>
                <IonCheckbox slot='start' id='veg'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='6'>
              <IonItem lines="none">
                <IonLabel className="StatementInfo" for="veg">VEGETARIAN</IonLabel>
                <IonCheckbox slot='start' id='veg'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className='ion-padding-horizontal'>
            <IonRow>
              <IonCol size="12" className="ion-no-padding">
                <h3>Taste Preferences</h3>
                <div className="progressBar">
                  <IonLabel>Sweet</IonLabel>
                  <IonRange min={0} max={100} color="success" className="ion-no-padding range-custom-height" >
                  </IonRange>
                  <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                    <span>I don’t like spicy food</span>
                    <span>I love spicy food</span>
                  </div>
                </div>
                <div className="progressBar ion-padding-top">
                  <IonLabel>Sour</IonLabel>
                  <IonRange min={0} max={100} color="warning" className="ion-no-padding range-custom-height" > </IonRange>
                  <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                    <span>I don’t like spicy food</span>
                    <span>I love spicy food</span>
                  </div>
                </div>
                <div className="progressBar ion-padding-top">
                  <IonLabel>Bitter</IonLabel>
                  <IonRange min={0} max={100} color="primary" className="ion-no-padding range-custom-height"  > </IonRange>
                  <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                    <span>I don't eat sweets</span>
                    <span>I love sweets alot</span>
                  </div>
                </div>
                <div className="progressBar ion-padding-top">
                  <IonLabel>Salty</IonLabel>
                  <IonRange min={0} max={100} color="primary" className="ion-no-padding range-custom-height" > </IonRange>
                  <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                    <span>I like my food bland</span>
                    <span>I love salty food</span>
                  </div>
                </div>
                <div className="progressBar ion-padding-top">
                  <IonLabel>Umami/Savoury</IonLabel>
                  <IonRange min={0} max={100} color="warning" className="ion-no-padding range-custom-height"></IonRange>
                  <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                    <span>I don’t like savoury food</span>
                    <span>I love savoury food</span>
                  </div>
                </div>
              </IonCol>
            </IonRow>
        </IonGrid>
        <IonGrid className='ion-padding-horizontal'>
            <IonRow>
              <IonCol>
                <IonItem lines='none'>
                  <h3>Ingredients</h3>
                  </IonItem>
                  <IonSegment
                              scrollable
                              value={selectedTab}
                              onIonChange={handleTabChange}
                              className="personalTab"
                          >
                              <IonSegmentButton value="step1">
                                  <IonLabel>Favorites List</IonLabel>
                              </IonSegmentButton>
                              <IonSegmentButton value="step2">
                                  <IonLabel>Negative List</IonLabel>
                              </IonSegmentButton>
                             
                          </IonSegment>
                          {selectedTab === "step1" && (
                            <div>Favorite List</div>
                          )}
                          {selectedTab === "step2" && (
                          <div>Negative List</div>
                          )}
              </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default FoodAdd
