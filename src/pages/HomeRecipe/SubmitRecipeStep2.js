import React from 'react'
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonText, IonTextarea, IonTitle } from "@ionic/react"
import { person, timeOutline, closeOutline, trashOutline } from "ionicons/icons"

const SubmitRecipeStep2 = () => {
    return (
        <>
            <IonGrid>
                <IonRow>
                    <IonCol size='12'>
                        <h4>Preparation Procedure</h4>
                    </IonCol>
                    <IonCol size="12">
                        <div className="MainSubmitRow">
                            <div className="IngredientsInfo">
                                <IonText>Ingredients</IonText>
                            </div>

                            <div className="QuantityInfo">
                                <IonText>Quantity</IonText>
                            </div>
                            <div className="ActionInfo">
                                <IonText></IonText>
                            </div>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="12">
                        <div className="MainSubmitRow">
                            <div className="IngredientsInfo">
                                <div className="RecipeInput">
                                    <IonInput fill="solid"></IonInput>
                                </div>
                            </div>

                            <div className="QuantityInfo">
                                <div className="RecipeInput">
                                    <IonInput fill="solid"></IonInput>
                                </div>
                            </div>
                            <div className="ActionInfo">
                                <IonButton fill="clear">
                                    <IonIcon
                                        size="default"
                                        icon={trashOutline}
                                        slot="start"
                                    ></IonIcon>
                                </IonButton>

                            </div>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow className='ion-padding-top'>
                    <IonCol className="flex ion-justify-content-center ion-align-items-center">
                        <IonButton fill="outline" shape="round" size="default">
                            Add
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid>
                <IonRow>
                    <IonCol size="12">
                        <div className="MainSubmitRow">
                            <div className="IngredientsInfo">
                                <IonText>Steps / Method</IonText>
                            </div>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="12">
                        <div className="MainSubmitRow">
                            <div className="IngredientsInfoMethod">
                                <div className="RecipeInput">
                                    <IonInput fill="solid"></IonInput>
                                </div>
                            </div>
                            <div className="ActionInfo">
                                <IonButton fill="clear">
                                    <IonIcon
                                        size="default"
                                        icon={trashOutline}
                                        slot="start"
                                    ></IonIcon>
                                </IonButton>

                            </div>
                        </div>
                    </IonCol>
                </IonRow>
                
                <IonRow className='ion-padding-top'>
                    <IonCol className="flex ion-justify-content-center ion-align-items-center">
                        <IonButton fill="outline" shape="round" size="default">
                            Add
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid>
                <IonRow>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                        <IonText>Blog Link*</IonText>
                        <div className="RecipeInput">
                            <IonInput fill="solid"></IonInput>
                        </div>
                    </IonCol>
                    <IonCol size="12" className="SubmitInput ion-padding-top">
                        <IonText>Youtube Link*</IonText>
                        <div className="RecipeInput">
                            <IonInput fill="solid"></IonInput>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid>
                <IonRow>
                    <IonCol className="flex ion-justify-content-between  ion-align-items-center">
                        <IonButton fill='outline'>Previous</IonButton>
                        <IonButton>Continue</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default SubmitRecipeStep2