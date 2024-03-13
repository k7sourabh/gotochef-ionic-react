import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonText, IonTextarea, IonTitle } from "@ionic/react"
import { person, timeOutline, closeOutline, trashOutline } from "ionicons/icons"
import React from 'react'

const SubmitRecipeStep1 = () => {
  return (
    <>
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol className="SubmitInput ion-padding-top">
              <IonText>Recipe Title*</IonText>
              <div className="RecipeInput">
                <IonInput fill="solid"></IonInput>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="SubmitInput ion-padding-top">
              <IonText>Select Level*</IonText>
              <div className="RecipeInput">
              <IonSelect label="Solid select" labelPlacement="floating" fill="solid" placeholder="Please Select">
                  <IonSelectOption value="apple">Easy</IonSelectOption>
                  <IonSelectOption value="banana">Moderate</IonSelectOption>
                  <IonSelectOption value="orange">Difficult</IonSelectOption>
                </IonSelect>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="SubmitInput ion-padding-top">
              <IonText>Select Food Type*</IonText>
              <div className="RecipeInput">
              <IonSelect label="Solid select" labelPlacement="floating" fill="solid" placeholder="Select Food Type">
                  <IonSelectOption value="apple">Veg</IonSelectOption>
                  <IonSelectOption value="banana">Non Veg</IonSelectOption>
                </IonSelect>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="SubmitInput ion-padding-top">
              <IonText>Recipe Description*</IonText>
              <div className="RecipeTextArea">
                <IonTextarea placeholder="Please add description here and method in the section below"></IonTextarea>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6" className="SubmitInput ion-padding-vertical">
              <div className="OuantityContent">
                <IonText>Prep Time*</IonText>
                <div className="OuantityBox">
                  <div className="ReciRow ion-padding-vertical">
                    <IonIcon icon={timeOutline}></IonIcon>
                    <IonLabel>30 min</IonLabel>
                  </div>
                  <div className="ountityBtn">
                    <IonButton fill="clear">-</IonButton>
                    <span>2</span>
                    <IonButton fill="clear">+</IonButton>
                  </div>
                </div>
              </div>
            </IonCol>
            <IonCol size="6" className="SubmitInput ion-padding-vertical">
              <div className="OuantityContent">
                <IonText>Prep Time*</IonText>
                <div className="OuantityBox">
                  <div className="ReciRow ion-padding-vertical">
                    <IonIcon icon={person}></IonIcon>
                    <IonLabel>Serves</IonLabel>
                  </div>
                  <div className="ountityBtn">
                    <IonButton fill="clear">-</IonButton>
                    <span>2</span>
                    <IonButton fill="clear">+</IonButton>
                  </div>
                </div>
              </div>
            </IonCol>

          </IonRow>
          <IonRow>
          <IonCol size="12" className="SubmitInput ion-padding-top">
              <IonText>Serve*</IonText>
              <div className="RecipeInput SelectInput">
              <div className="RecipeInput">
                <IonInput fill="solid" placeholder="Serve"></IonInput>
              </div>
              </div>
            </IonCol>
            <IonCol size="12" className="SubmitInput ion-padding-top">
              <IonText>Select Techniques*</IonText>
              <div className="RecipeInput SelectInput">
              <div className="RecipeInput">
                <IonInput fill="solid" placeholder="Techniques"></IonInput>
              </div>
              </div>
            </IonCol>
            <IonCol size="12" className="SubmitInput ion-padding-top">
              <IonText>Select Products*</IonText>
              <div className="RecipeInput SelectInput">
              <div className="RecipeInput">
                <IonInput fill="solid" placeholder="Products"></IonInput>
              </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="SubmitInput ion-padding-top">
              <IonText>Techniques*</IonText>
              <div className="RecipeTextArea Recipebox">
                <div className="ProBtn">
                  <IonIcon
                    size="medium"
                    aria-hidden="true"
                    icon={closeOutline}
                    slot="start"
                  ></IonIcon>
                  <IonText>Soft Soya Milk</IonText>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol className="SubmitInput ion-padding-vertical">
              <IonText>Products used in the Recipe</IonText>
              <div className="RecipeTextArea Recipebox">
                <div className="ProBtn">
                  <IonIcon
                    size="medium"
                    aria-hidden="true"
                    icon={closeOutline}
                    slot="start"
                  ></IonIcon>
                  <IonText>Soft Soya Milk</IonText>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="flex ion-justify-content-end  ion-align-items-center">
                <IonButton>Continue</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        
    </>
  )
}

export default SubmitRecipeStep1