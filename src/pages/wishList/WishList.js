import { IonCol, IonGrid, IonPage, IonContent, IonRow, IonButton,IonHeader,IonTitle,IonSubtitle, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import Header from "../../components/Header";
const WishList = () => {
    const WishListArray = [1,2,3]
    return (
        <>
            <IonPage>
                <Header />
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <h1 className="ion-padding-horizontal">Wishlist</h1>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    {WishListArray.map((val)=>(
                    <IonGrid key={val} className="ion-padding-top">
                       
                        <IonRow>
                            <IonCol>
                            <h4 className="ion-text-center">Grocery & Staples</h4>
                                <div className="wish-list">
                                    <img src="./assets/img/product-img.jpg"  className="ion-float-center"/>
                                    <h5 className="ion-text-center">Rostaa</h5>
                                    <h6 className="ion-text-center">Blueberries Value </h6>
                                    <p className="ion-text-center"> Pack  1 kilogram </p>
                                    <IonButton  size="default"  shape="round"  className="ion-margin-horizontal">Remove</IonButton>
                                </div>
                            </IonCol>
                            <IonCol>
                            <h4 className="ion-text-center">Grocery & Staples</h4>
                                <div className="wish-list">
                                    <img src="./assets/img/product-img.jpg"  className="ion-float-center"/>
                                    <h5 className="ion-text-center">Rostaa</h5>
                                    <h6 className="ion-text-center">Blueberries Value </h6>
                                    <p className="ion-text-center"> Pack  1 kilogram </p>
                                    <IonButton  size="default" shape="round" className="ion-margin-horizontal">Remove</IonButton>
                                </div>
                            </IonCol>

                        </IonRow>
                    </IonGrid>
                    ))}
                </IonContent>
            </IonPage>
        </>
    )
}
export default WishList;