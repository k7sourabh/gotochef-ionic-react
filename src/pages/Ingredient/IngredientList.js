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
  useIonViewWillLeave,
} from "@ionic/react";
import {
  add,
  filterOutline,
  personOutline,
  sunnyOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { menuController } from "@ionic/core/components";
import IngredientProduct from "./IngredientProduct";
import { getApiData, postApiData } from "../../utils/Utils";

const IngredientList = () => {
  const [ingredientData, setIngredientData] = useState({});
  const [ingredienObject, setIngredienObject] = useState({
    foodType: "",
    category: "",
    cuisines: "",
    most_like_ingredient: "",
    sortBy: "",
    date_time: "",
  });
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function openSecondMenu() {
    await menuController.open("second-menu");
  }

  const getIngredient = async () => {
    try {
      const response = await getApiData("ingredient-get-filter");
      setIngredientData(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getIngredient();
  }, []);

  const searchIngredient = async () => {
    menuController.close("second-menu");
    try {
      const obj = {
        "foodType":ingredienObject.foodType||"",
        "category": ingredienObject.category || "",
        "cuisines": ingredienObject.cuisines || "",
        "sortBy": ingredienObject.sortBy || ""
        };
      setIsLoading(true)
      const response = await postApiData(
        "new-ingredient-post-response",obj
      );
      setIsLoading(false)
      setProductData(response?.data?.data);
    } catch (error) {
      console.error("Error while saving data:", error);
    }
  };
  useIonViewWillLeave(() => {
    setProductData([]);
  });

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
                onIonChange={(e) => {
                  setIngredienObject({
                    ...ingredienObject,
                    foodType: e.target.value,
                  });
                }}
              >
                {ingredientData &&
                  ingredientData?.veg_non &&
                  ingredientData?.veg_non?.map((data, i) => (
                    <IonSelectOption value={data} key={i}>
                      {data}
                    </IonSelectOption>
                  ))}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonSelect
                label="Fixed label"
                labelPlacement="fixed"
                placeholder="By Cuisines"
                onIonChange={(e) =>
                  setIngredienObject({
                    ...ingredienObject,
                    cuisines: e.target.value,
                  })
                }
              >
                {ingredientData &&
                  ingredientData?.cuisines &&
                  ingredientData?.cuisines?.map((data, i) => (
                    <IonSelectOption value={data.id} key={i}>
                      {data.sub_category_name}
                    </IonSelectOption>
                  ))}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonSelect
                label="Fixed label"
                labelPlacement="fixed"
                placeholder="By Category"
                onIonChange={(e) =>
                  setIngredienObject({
                    ...ingredienObject,
                    category: e.target.value,
                  })
                }
              >
                {ingredientData &&
                  ingredientData?.ingredient_category &&
                  ingredientData?.ingredient_category?.map((data, i) => (
                    <IonSelectOption value={data.id} key={i}>
                      {data.sub_category_name}
                    </IonSelectOption>
                  ))}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonSelect
                label="Fixed label"
                labelPlacement="fixed"
                placeholder="Sort by"
                onIonChange={(e) => {
                  if (e.target.value === "A-Z" || e.target.value === "Z-A") {
                    setIngredienObject({
                      ...ingredienObject,
                      sortBy: e.target.value || "",
                      most_like_ingredient: "",
                      date_time: "",
                    });
                  } else if (e.target.value === "latest") {
                    setIngredienObject({
                      ...ingredienObject,
                      date_time: "1",
                      sortBy: "",
                      most_like_ingredient: "",
                    });
                  } else if (e.target.value === "most_like") {
                    setIngredienObject({
                      ...ingredienObject,
                      most_like_ingredient: "1",
                      sortBy: "",
                      date_time: "",
                    });
                  } else {
                    setIngredienObject({
                      ...ingredienObject,
                      sortBy: "",
                      most_like_ingredient: "",
                      date_time: "",
                    });
                  }
                }}
              >
                {ingredientData &&
                  ingredientData?.Sort_by &&
                  ingredientData?.Sort_by?.map((data, i) => (
                    <IonSelectOption value={data} key={i}>
                      {data}
                    </IonSelectOption>
                  ))}
              </IonSelect>
            </IonItem>
            <IonButton onClick={searchIngredient}>Search</IonButton>
          </IonContent>
        </IonMenu>

        <IonGrid>
          <IonRow>
            <IngredientProduct productData={productData} isLoading={isLoading}/>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default IngredientList;
