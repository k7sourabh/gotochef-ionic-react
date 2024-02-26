import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonCol,
  IonSearchbar,
  IonIcon,
  IonText,
  IonItem,
  IonInput,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import React from "react";
import Header from "../../components/Header";
import Iframe from "react-iframe";
import { briefcase, home, location } from "ionicons/icons";

const AddAddress = () => {
  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent fullscreen>
        <IonHeader className="TitleHead bottom-shadow">
          <IonButton className="backBtn" fill="clear" routerLink="/home">
            <i class="material-icons dark">west</i>
          </IonButton>
          <IonTitle color="dark">Enter Address Details</IonTitle>
        </IonHeader>

        <IonRow className="ion-padding">
          <IonCol size="12">
            <IonSearchbar
              className="AddressSearch"
              placeholder="Search for area, street name.."
            ></IonSearchbar>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.67471091678!2d75.86384989999999!3d22.723972749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1695386924599!5m2!1sen!2sin"
              width="100%"
              height="250px"
              id=""
              frameBorder="none"
              className=""
              display="block"
              position="relative"
              allowFullScreen=""
            />
          </IonCol>
        </IonRow>
        <div className="AddressMainBlock ion-padding">
          <IonRow>
            <IonCol size="12">
              <div className="AddAddress">
                <div className="IconHome">
                  <IonIcon color="primary" size="large" icon={location} />
                </div>
                <div>
                  <div className="Address">
                    <IonTitle color="dark" className="ion-no-padding">
                      East Nehru Nagar
                    </IonTitle>
                    <div className="AddressChangeBtn">
                      <IonButton fill="clear">CHANGE</IonButton>
                    </div>
                  </div>
                  <IonText>
                    East Nehru Nagar, Secundeabad, Telangana 500026, India
                  </IonText>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-vertical">
            <IonCol size="12">
              <IonItem>
                <IonInput
                  label="House / FLAT / BLOCK NO."
                  labelPlacement="floating"
                  placeholder="House / FLAT / BLOCK NO."
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding-vertical">
            <IonCol size="12">
              <IonItem>
                <IonInput
                  label="LANDMARK"
                  labelPlacement="floating"
                  placeholder="LANDMARK"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding-vertical">
            <IonCol size="12">
              <IonSegment value="Home">
                <IonSegmentButton value="Home">
                  <IonLabel className="ion-no-margin"><IonIcon icon={home}></IonIcon> Home</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Work">
                  <IonLabel className="ion-no-margin"><IonIcon icon={briefcase}></IonIcon> Work</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Other">
                  <IonLabel className="ion-no-margin"><IonIcon icon={location}></IonIcon> Other</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-vertical">
            <IonCol size="12">
              <IonItem>
                <IonInput
                  label="ADD LABEL"
                  labelPlacement="floating"
                  placeholder="ADD LABEL"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding-vertical">
            <IonCol size="12">
              <IonButton expand="full">Save & Proceed</IonButton>
          </IonCol>
          </IonRow>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddAddress;
