import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonText,
    IonTitle,
    IonToolbar,
    useIonToast,
  } from "@ionic/react";
  import { closeCircleOutline } from "ionicons/icons";

function AddProductPopup(props) {
    const { isOpen, setIsOpen, responcedata } = props;

    return (
        <IonModal isOpen={isOpen} className="myModel">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Product Submission Response</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => setIsOpen(false)}>
                            <IonIcon color="dark" size="large" icon={closeCircleOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <div className="modal-content">
                {/* Display the response data */}
                {responcedata ? (
                    <div>
                        
                        <p>Message: {responcedata}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </IonModal>
    );
}
export default AddProductPopup