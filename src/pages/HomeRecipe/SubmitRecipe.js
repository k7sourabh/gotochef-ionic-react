import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
} from "@ionic/react";
import {
  person,
  timeOutline,
  closeOutline,
  trashOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import SubmitRecipeStep1 from "./SubmitRecipeStep1";
import SubmitRecipeStep2 from "./SubmitRecipeStep2";
import SubmitRecipeStep3 from "./SubmitRecipeStep3";
import SubmitRecipeStep4 from "./SubmitRecipeStep4";
import EditSubmitRecipeStep2 from "./EditSubmitRecipeStep2";
import EditSubmitRecipeStep3 from "./EditSubmitRecipeStep3";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getApiDataWithAuth } from "../../utils/Utils";
import EditSubmitRecipeStep1 from "./EditSubmitRecipeStep1";
import EditSubmitRecipeStep4 from "./EditSubmitRecipeStep4";

const SubmitRecipe = (props) => {
  // const { recipeData } = props;
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState("step1");
  const [allRecipeData, setAllRecipeData] = useState([]);
  const [recipeData, setRecipeData] = useState({});
  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  const MyRecipe = async () => {
    try {
      const response = await getApiDataWithAuth("/myRecipes");
      setAllRecipeData(response.data.data.recipes_draft);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    MyRecipe();
  }, []);

  useEffect(() => {
    const filteredObject = allRecipeData.find((data) => data.id == id);
    setRecipeData(filteredObject);
  }, [allRecipeData, id]);

  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/home">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Submit Your Tasty Recipe</IonTitle>
        </IonHeader>
        <IonGrid className="ion-padding-horizontal ion-padding-top">
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <img
                src="/assets/img/veganrecipe.png"
                alt=""
                className="RecipeImage"
              />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonRow>
          <IonCol>
            <div>
              <div className="ion-padding" slot="content">
                <IonSegment
                  scrollable
                  value={selectedTab}
                  onIonChange={handleTabChange}
                  className="RecipeSubmitTab"
                >
                  <IonSegmentButton value="step1">
                    <IonLabel>Step1</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="step2">
                    <IonLabel>Step2</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="step3">
                    <IonLabel>Step3</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="step4">
                    <IonLabel>Step4</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
                {selectedTab === "step1" &&
                  (recipeData ? (
                    <EditSubmitRecipeStep1
                      setSelectedTab={setSelectedTab}
                      recipeData={recipeData}
                    />
                  ) : (
                    <SubmitRecipeStep1 setSelectedTab={setSelectedTab} />
                  ))}
                {selectedTab === "step2" &&
                  (recipeData ? (
                    <EditSubmitRecipeStep2
                      setSelectedTab={setSelectedTab}
                      recipeData={recipeData}
                    />
                  ) : (
                    <SubmitRecipeStep2 setSelectedTab={setSelectedTab} />
                  ))}

                {selectedTab === "step3" &&
                  (recipeData ? (
                    <EditSubmitRecipeStep3
                      setSelectedTab={setSelectedTab}
                      recipeData={recipeData}
                    />
                  ) : (
                    <SubmitRecipeStep3 setSelectedTab={setSelectedTab} />
                  ))}
                {selectedTab === "step4" &&
                  (recipeData ? (
                    <EditSubmitRecipeStep4
                      setSelectedTab={setSelectedTab}
                      recipeData={recipeData}
                    />
                  ) : (
                    <SubmitRecipeStep4 setSelectedTab={setSelectedTab} />
                  ))}
              </div>
            </div>
          </IonCol>
        </IonRow>

        {/* <IonGrid className="ion-padding-horizontal">
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
            <IonCol className="SubmitInput ion-padding-vertical">
              <IonText>Select Techniques*</IonText>
              <div className="RecipeInput SelectInput">
                <IonSelect label="Solid select" labelPlacement="floating" fill="solid" placeholder="Please Select">
                  <IonSelectOption value="apple">Apple</IonSelectOption>
                  <IonSelectOption value="banana">Banana</IonSelectOption>
                  <IonSelectOption value="orange">Orange</IonSelectOption>
                </IonSelect>
              </div>
            </IonCol>
            <IonCol className="SubmitInput ion-padding-vertical">
              <IonText>Select Products*</IonText>
              <div className="RecipeInput SelectInput">
                <IonSelect label="Solid select" labelPlacement="floating" fill="solid" placeholder="Please Select">
                  <IonSelectOption value="apple">Apple</IonSelectOption>
                  <IonSelectOption value="banana">Banana</IonSelectOption>
                  <IonSelectOption value="orange">Orange</IonSelectOption>
                </IonSelect>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="SubmitInput">
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
        </IonGrid>
        <IonGrid className="ion-padding-horizontal">
          <IonRow>
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
        </IonGrid>
        <IonGrid className="ion-padding-vertical">
          <IonRow>
            <IonCol className="flex ion-justify-content-center ion-align-items-center">
              <IonButton fill="outline" shape="round" size="default">
                Add
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};
export default SubmitRecipe;
