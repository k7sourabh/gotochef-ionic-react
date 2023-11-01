import { IonCol, IonContent, IonGrid, IonPage,IonInput ,IonRow,IonText,IonButton} from "@ionic/react";
import Header from "../../components/Header";
const ChangePassword= () => {
    return (
        <>
        <IonPage>
        <Header />
        <IonContent>
         <IonGrid className="ion-padding-horizontal">
            <IonRow className=" Change-Password">
                <h1 className="ion-padding-bottom">RESET PASSWORD</h1>
            <div className="PswdloginForm">
                  <div className="Chng-input">
                     <IonInput label="Default input" placeholder="E-Mail Address" fill="outline"></IonInput>
                     <IonInput label="Password input" type="password"  fill="outline" placeholder="Password"></IonInput>
                     <IonInput label="Password input" type="password"  fill="outline" placeholder="Confirm Password"></IonInput>
                  <div className="reset-btn">
                     <IonButton size="small">Reset Password</IonButton>
                  </div>
                  </div>
               </div>
            </IonRow>
         </IonGrid>
        </IonContent>
        </IonPage>
     
 
        </>
    )}
    export default ChangePassword;