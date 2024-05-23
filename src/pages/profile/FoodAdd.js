import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle } from '@ionic/react'
import { heartOutline } from 'ionicons/icons';
import React, { useState } from 'react'
import Header from '../../components/Header'

const FoodAdd = () => {
  const [selectedTab, setSelectedTab] = useState("step1");
  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };
  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/profile">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Food Setting</IonTitle>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size='6'>
              <IonItem lines="none">
                <IonLabel className="StatementInfo ion-margin-start" for="veg">NON-VEGETARIAN</IonLabel>
                <IonCheckbox slot='start' id='veg' className='ion-no-margin' ></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='6'>
              <IonItem lines="none">
                <IonLabel className="StatementInfo ion-margin-start" for="veg" >VEGETARIAN</IonLabel>
                <IonCheckbox slot='start' id='veg' className='ion-no-margin'></IonCheckbox>
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
              <h3>Ingredients</h3>
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
                <IonGrid>
                  <IonRow>
                    <IonCol size='6'>
                    <IonCard className="ProductCard">
                      <IonCardHeader className="ProductThumb">
                        <img
                          src="/assets/img/product-img.png"
                          alt="category cover"
                          className="MainProductThumb"
                         
                        />
                      </IonCardHeader>
                      <IonCardContent className="ProductDetails">
                        <IonText className="ProductTitle">
                        Chia Seeds
                        </IonText>
                        <div className="PriceRating">
                          <IonText color="dark" className="CurrentPrice">
                          Edible Refined Vegetable Oil (Sunflower/Soyabean)
                          </IonText>
                          
                        </div>
                        <IonButton size='default' fill='outline' shape='round'>
                            Read More
                        </IonButton>
                        <IonButton size='default' fill='outline' shape='round'>
                            Delete
                        </IonButton>
                      </IonCardContent>
                    </IonCard>
                    </IonCol>
                    <IonCol size='6'>
                    <IonCard className="ProductCard">
                      <IonCardHeader className="ProductThumb">
                        <img
                          src="/assets/img/1525870462-Listing.jpg"
                          alt="category cover"
                          className="MainProductThumb"
                         
                        />
                      </IonCardHeader>
                      <IonCardContent className="ProductDetails">
                        <IonText className="ProductTitle">
                        Chia Seeds
                        </IonText>
                        <div className="PriceRating">
                          <IonText color="dark" className="CurrentPrice">
                          Edible Refined Vegetable Oil (Sunflower/Soyabean)
                          </IonText>
                          
                        </div>
                        <IonButton size='default' fill='outline' shape='round'>
                            Read More
                        </IonButton>
                        <IonButton size='default' fill='outline' shape='round'>
                            Delete
                        </IonButton>
                      </IonCardContent>
                    </IonCard>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                

              )}
              {selectedTab === "step2" && (
                <IonGrid>
                <IonRow>
                <IonCol size='6'>
                  <IonCard className="ProductCard">
                    <IonCardHeader className="ProductThumb">
                      <img
                        src="/assets/img/1525870462-Listing.jpg"
                        alt="category cover"
                        className="MainProductThumb"
                       
                      />
                    </IonCardHeader>
                    <IonCardContent className="ProductDetails">
                      <IonText className="ProductTitle">
                      Chia Seeds
                      </IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                        Edible Refined Vegetable Oil (Sunflower/Soyabean)
                        </IonText>
                        
                      </div>
                      <IonButton size='default' fill='outline' shape='round'>
                          Read More
                      </IonButton>
                      <IonButton size='default' fill='outline' shape='round'>
                          Delete
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                  </IonCol>
                  <IonCol size='6'>
                  <IonCard className="ProductCard">
                    <IonCardHeader className="ProductThumb">
                      <img
                        src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                        alt="category cover"
                        className="MainProductThumb"
                       
                      />
                    </IonCardHeader>
                    <IonCardContent className="ProductDetails">
                      <IonText className="ProductTitle">
                      Chia Seeds
                      </IonText>
                      <div className="PriceRating">
                        <IonText color="dark" className="CurrentPrice">
                        Edible Refined Vegetable Oil (Sunflower/Soyabean)
                        </IonText>
                        
                      </div>
                      <IonButton size='default' fill='outline' shape='round'>
                          Read More
                      </IonButton>
                      <IonButton size='default' fill='outline' shape='round'>
                          Delete
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
        <IonGrid className='ion-padding-horizontal'>
          <h3>Cuisines</h3>
          <IonRow className='d-flex ion-justify-content-center'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>African</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>French</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Mughlai</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Chinese</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Italian</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Madhya Pradesh</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Italian</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Madhya Pradesh</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className='ion-padding-horizontal'>
          <h3>Cooking Techniques</h3>
          <IonRow className='d-flex ion-justify-content-center'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Baking</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Deep Frying</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Grill/BBQ</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Roasting</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Boiling</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Microwave</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='d-flex ion-justify-content-center ion-padding-top'>
            <IonCol size='5'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Slow Cooking</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
            <IonCol size='5' className='ion-margin-start'>
              <IonItem lines='none' className='box-shadow'>
                <IonLabel>Steaming</IonLabel>
                <IonCheckbox className='ion-margin-start'></IonCheckbox>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className='ion-padding-horizontal ion-padding-vertical'>
          <IonRow>
            <IonCol>
              <IonButton>SAVE</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default FoodAdd
