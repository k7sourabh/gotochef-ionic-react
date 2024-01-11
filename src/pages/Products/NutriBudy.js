import { IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow, IonText } from "@ionic/react"
import Header from "../../components/Header"

const NutriBudy = () => {
 return(
   
    <IonPage>
            <Header />
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="NutribuddyText">
                        <IonImg alt="Images" class="mainLogo md" src="http://20.207.207.62/content/images/gtc-logo.png" />
                        <IonText>Coming Soon</IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            </IonPage>
   
 )
}
export default NutriBudy