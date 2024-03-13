import { IonButton, IonCol, IonGrid, IonInput, IonRow, IonSelect, IonSelectOption, IonText, IonTextarea } from '@ionic/react'
import React from 'react'

const SubmitRecipeStep3 = () => {
    return (
        <>
            <IonGrid>
                <IonRow>
                    <IonCol size='12'>
                        <h4>Notes & Tags</h4>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                        <IonText>Recipe Notes*</IonText>
                        <div className="RecipeTextArea">
                            <IonTextarea></IonTextarea>
                        </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                        <IonText>Allergy Information*</IonText>
                        <div className="RecipeTextArea">
                            <IonTextarea></IonTextarea>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size='12'>
                        <h4>Tags</h4>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                        <IonText>Select Diet*</IonText>
                        <div className="RecipeInput">
                            <IonSelect label="Solid select" labelPlacement="floating" fill="solid" placeholder="Select Diet">
                                <IonSelectOption value="apple">Veg</IonSelectOption>
                                <IonSelectOption value="banana">Non Veg</IonSelectOption>
                            </IonSelect>
                        </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                        <IonText>Select Cuisine*</IonText>
                        <div className="RecipeInput">
                            <IonSelect label="Solid select" labelPlacement="floating" fill="solid" placeholder="Select Cuisine">
                                <IonSelectOption value="apple">Veg</IonSelectOption>
                                <IonSelectOption value="banana">Non Veg</IonSelectOption>
                            </IonSelect>
                        </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                        <IonText>Select Course*</IonText>
                        <div className="RecipeInput">
                            <IonSelect label="Solid select" labelPlacement="floating" fill="solid" placeholder="Select Course">
                                <IonSelectOption value="apple">Veg</IonSelectOption>
                                <IonSelectOption value="banana">Non Veg</IonSelectOption>
                            </IonSelect>
                        </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                        <IonText>Occasion*</IonText>
                        <div className="RecipeInput">
                            <IonSelect label="Solid select" labelPlacement="floating" fill="solid" placeholder="Select Occasion">
                                <IonSelectOption value="apple">Veg</IonSelectOption>
                                <IonSelectOption value="banana">Non Veg</IonSelectOption>
                            </IonSelect>
                        </div>
                    </IonCol>
                    <IonCol size='12' className="SubmitInput ion-padding-top">
                        <IonText>Select Custom Tags*</IonText>
                        <div className="RecipeInput">
                            <IonInput fill="solid" placeholder='#HashTags'></IonInput>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow className='ion-padding-top'>
                    <IonCol className="flex ion-justify-content-between  ion-align-items-center">
                        <IonButton fill='outline'>Previous</IonButton>
                        <IonButton>Continue</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default SubmitRecipeStep3