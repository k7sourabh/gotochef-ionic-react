import {
  IonContent,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonMenuToggle,
  IonPage,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonLabel,
  IonMenuButton,
  IonSelect,
  IonSelectOption,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  add,
  filterOutline,
  personOutline,
  sunnyOutline,
} from "ionicons/icons";
import React, { useEffect } from "react";
import { menuController } from "@ionic/core/components";
import IngredientProduct from "./IngredientProduct";

const IngredientList = () => {
  async function openSecondMenu() {
    await menuController.open("second-menu");
  }

  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent>
        <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
          <div className="TitleHead">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Add Ingredient</IonTitle>
          </div>
          <div className="flex ion-justify-content-end ion-align-items-end ion-padding-end">
            <IonButton expand="block" onClick={openSecondMenu}>
              <IonIcon size="default" fill="clear" icon={filterOutline} />
            </IonButton>
          </div>
        </IonHeader>
        <IonMenu menuId="second-menu" contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Filter</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonSelect
                label="Fixed label"
                labelPlacement="fixed"
                placeholder="Veg"
              >
                <IonSelectOption value="apple">All</IonSelectOption>
                <IonSelectOption value="banana">Veg</IonSelectOption>
                <IonSelectOption value="orange">Non-veg</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonSelect
                label="Fixed label"
                labelPlacement="fixed"
                placeholder="By Cuisines"
              >
                <IonSelectOption value="apple">All</IonSelectOption>
                <IonSelectOption value="banana">Veg</IonSelectOption>
                <IonSelectOption value="orange">Non-veg</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonSelect
                label="Fixed label"
                labelPlacement="fixed"
                placeholder="By Category"
              >
                <IonSelectOption value="apple">All</IonSelectOption>
                <IonSelectOption value="banana">Veg</IonSelectOption>
                <IonSelectOption value="orange">Non-veg</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonSelect
                label="Fixed label"
                labelPlacement="fixed"
                placeholder="Sort by"
              >
                <IonSelectOption value="apple">All</IonSelectOption>
                <IonSelectOption value="banana">Veg</IonSelectOption>
                <IonSelectOption value="orange">Non-veg</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonContent>
        </IonMenu>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IngredientProduct />
            </IonCol>
            <IonCol size="6">
              <IngredientProduct />
            </IonCol>
            <IonCol size="6">
              <IngredientProduct />
            </IonCol>
            <IonCol size="6">
              <IngredientProduct />
            </IonCol>
            <IonCol size="6">
              <IngredientProduct />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default IngredientList;
