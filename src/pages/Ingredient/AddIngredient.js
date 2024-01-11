import React, { } from "react";
import Header from "../../components/Header";
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
} from "@ionic/react";

const AddIngredient = () => {

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/home">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Add Ingredient</IonTitle>
        </IonHeader>

        <IonRow className="ion-padding">
          <IonCol size="12" className="FormGroup">
            <div className="EditprofileImg">
              <img src="./assets/img/camera-placeholder.png" alt="" className="ProfileImg" />

              <div class="image-upload">
                <label for="file-input" className="EditProfile">
                  <img src="./assets/img/edit.png" alt="" />
                </label>
                <input id="file-input" type="file" />
              </div>
            </div>
          </IonCol>

          <IonCol size="12" className="FormGroup">
            <IonText>Recipe Title*</IonText>
            <IonInput className="fillInput" placeholder="Please enter title"></IonInput>
            <span className="extraInfo">Example: Red Chilli, Black Pepper</span>
          </IonCol>

          <IonCol size="12" className="FormGroup">
            <IonText>Category</IonText>
            <IonSelect label="Solid select" fill="solid" placeholder="Please Select" className="fillInput">
              <IonSelectOption value="1">Option 1</IonSelectOption>
              <IonSelectOption value="2">Option 2</IonSelectOption>
              <IonSelectOption value="3">Option 3</IonSelectOption>
            </IonSelect>
          </IonCol>

          <IonCol size="12" className="FormGroup">
            <IonText>Short Description</IonText>
            <IonTextarea
              className="fillInput fillTextarea"
              placeholder="Please add description here..."
              autoGrow={true}>
            </IonTextarea>
            <span className="extraInfo">Max. 250 characters</span>
          </IonCol>

          <IonCol size="12" className="BtnGroup">
            <IonButton>Cancel</IonButton>
            <IonButton>Save</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default AddIngredient;
