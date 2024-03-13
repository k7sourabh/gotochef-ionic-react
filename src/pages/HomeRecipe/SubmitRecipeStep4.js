import React from 'react'
import { IonButton, IonCol, IonGrid, IonInput, IonRow, IonSelect, IonSelectOption, IonText, IonTextarea } from '@ionic/react'

const SubmitRecipeStep4 = () => {
    return (
        <>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <label for="Cover-Profile" class="cover-img-upload">
                            <IonText>Select Cover Image</IonText>
                            <img src="/assets/img/camera-placeholder.png" alt="" />
                        </label>
                        <input id="Cover-Profile" type="file" />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <div className='RecipeSelectImage'>
                       <div>
                       <label for="Cover-Profile" class="cover-img-upload">
                            <IonText>Select Image</IonText>
                            <img src="/assets/img/camera-placeholder.png" alt="" />
                        </label>
                        <input id="Cover-Profile" type="file" />
                       </div>
                        <div>
                        <label for="Cover-Profile" class="cover-img-upload">
                        <IonText>Select Image</IonText>
                            <img src="/assets/img/camera-placeholder.png" alt="" />
                        </label>
                        <input id="Cover-Profile" type="file" />
                        </div>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow className='ion-padding-top'>
                    <IonCol className="flex ion-justify-content-between  ion-align-items-center">
                        <IonButton fill='outline'>Previous</IonButton>
                        <IonButton>Submit</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default SubmitRecipeStep4