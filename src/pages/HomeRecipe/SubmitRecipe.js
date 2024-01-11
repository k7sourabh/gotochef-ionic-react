import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react"
import Header from "../../components/Header"

const SubmitRecipe =()=>{
return(
  
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
                </IonContent>
    </IonPage>
  
)
}
export default SubmitRecipe