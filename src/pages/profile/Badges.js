import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle } from '@ionic/react'
import { lockClosedOutline } from 'ionicons/icons'
import React from 'react'

const Badges = () => {
  return (
  <IonPage>
    <IonContent>
    <IonHeader className="TitleHead bottom-shadow">
        <IonButton className="backBtn" fill="clear" routerLink="/dashboard">
            <i class="material-icons dark">west</i>
        </IonButton>
        <IonTitle color="dark">Badges</IonTitle>
    </IonHeader>
    <IonGrid class="ion-padding-horizontal">
    <IonRow className='ion-padding-vertical'>
        <IonCol>
            <IonTitle className='ion-no-padding'>
                BADGE COLLECTION
            </IonTitle>
        </IonCol>
    </IonRow>
    <IonRow className='ion-padding-vertical'>
        <IonCol size='6'>
            <div className="review-award">
                <img src="./assets/img/reviewRecipe.png" alt="award" />
                <h4 className='ion-no-margin'>1 Review</h4>
                <div className="line"></div>
                <IonText>Review</IonText>
            </div>
        </IonCol>
        <IonCol size='6'>
            <div className="review-award">
                <img src="./assets/img/reviewRecipe.png" alt="award" />
                <h4 className='ion-no-margin'>1 Review</h4>
                <div className="line"></div>
                <IonText>Review</IonText>
            </div>
        </IonCol>
    </IonRow>
    <IonRow className='ion-padding-vertical'>
        <IonCol size='6'>
            <div className="review-award">
                <IonIcon
                    color="primary"
                    size="small"
                    className='review-lock'
                    icon={lockClosedOutline} />
                <img src="./assets/img/helpful_review.png" alt="award" className='review-help' />
                <h4 className='ion-no-margin'>1 Review</h4>
                <div className="line"></div>
                <IonText>Review</IonText>
            </div>
        </IonCol>
        <IonCol size='6'>
            <div className="review-award">
                <IonIcon
                    color="primary"
                    size="small"
                    className='review-lock'
                    icon={lockClosedOutline} />
                <img src="./assets/img/helpful_review.png" alt="award" className='review-help' />
                <h4 className='ion-no-margin'>1 Review</h4>
                <div className="line"></div>
                <IonText>Review</IonText>
            </div>
        </IonCol>
    </IonRow>
    <IonRow className='ion-padding-vertical'>
        <IonCol size='6'>
            <div className="review-award">
                <IonIcon
                    color="primary"
                    size="small"
                    className='review-lock'
                    icon={lockClosedOutline} />
                <img src="./assets/img/helpful_review.png" alt="award" className='review-help' />
                <h4 className='ion-no-margin'>1 Review</h4>
                <div className="line"></div>
                <IonText>Review</IonText>
            </div>
        </IonCol>
        <IonCol size='6'>
            <div className="review-award">
                <IonIcon
                    color="primary"
                    size="small"
                    className='review-lock'
                    icon={lockClosedOutline} />
                <img src="./assets/img/helpful_review.png" alt="award" className='review-help' />
                <h4 className='ion-no-margin'>1 Review</h4>
                <div className="line"></div>
                <IonText>Review</IonText>
            </div>
        </IonCol>
    </IonRow>
    <IonRow className='ion-padding-vertical'>
        <IonCol size='6'>
            <div className="review-award">
                <IonIcon
                    color="primary"
                    size="small"
                    className='review-lock'
                    icon={lockClosedOutline} />
                <img src="./assets/img/helpful_review.png" alt="award" className='review-help' />
                <h4 className='ion-no-margin'>1 Review</h4>
                <div className="line"></div>
                <IonText>Review</IonText>
            </div>
        </IonCol>
        <IonCol size='6'>
            <div className="review-award">
                <IonIcon
                    color="primary"
                    size="small"
                    className='review-lock'
                    icon={lockClosedOutline} />
                <img src="./assets/img/helpful_review.png" alt="award" className='review-help' />
                <h4 className='ion-no-margin'>1 Review</h4>
                <div className="line"></div>
                <IonText>Review</IonText>
            </div>
        </IonCol>
    </IonRow>
    </IonGrid>
    </IonContent>
  </IonPage>
  )
}

export default Badges