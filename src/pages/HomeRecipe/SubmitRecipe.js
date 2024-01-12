import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTextarea, IonTitle } from "@ionic/react"
import { person, timeOutline, close, closeCircle, closeOutline, trashOutline } from "ionicons/icons"
import Header from "../../components/Header"

const SubmitRecipe = () => {
    return (

        <IonPage>
            <Header />
            <IonContent>
                <IonGrid className="ion-padding-horizontal">
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
                <IonGrid className="ion-padding-horizontal">
                    <IonRow>
                        <IonCol className="SubmitInput ion-padding-vertical">
                            <IonText>Recipe Title*</IonText>
                            <div className="RecipeInput">
                                <IonInput fill="solid"></IonInput>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="SubmitInput">
                            <IonText>Description*</IonText>
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
                            <IonText>Food Type*</IonText>
                            <div className="RecipeInput SelectInput">
                                <IonSelect label="Solid select" labelPlacement="floating" fill="solid" placeholder="Please Select">
                                    <IonSelectOption value="apple">Apple</IonSelectOption>
                                    <IonSelectOption value="banana">Banana</IonSelectOption>
                                    <IonSelectOption value="orange">Orange</IonSelectOption>
                                </IonSelect>
                            </div>
                        </IonCol>
                        <IonCol className="SubmitInput ion-padding-vertical">
                            <IonText>Food Type*</IonText>
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
                </IonGrid>
            </IonContent>
        </IonPage>

    )
}
export default SubmitRecipe