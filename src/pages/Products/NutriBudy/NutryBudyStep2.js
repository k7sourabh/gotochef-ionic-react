import React from 'react'
import { IonButton, IonCheckbox, IonCol,  IonGrid,  IonIcon,  IonRow,  IonText,  } from "@ionic/react"
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { add } from "ionicons/icons";

const NutryBudyStep2 = () => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol className="flex flex-column  ion-align-items-center ion-justify-content-center ion-padding-top">
                    <IonItem lines="none" className="N-VegNon">
                        <IonLabel>Veg</IonLabel>
                        <IonCheckbox
                            name="foodType"
                            value="Veg"
                            checked="veg"
                        // onIonChange={(e) => {
                        //   if (e.detail.checked) {
                        //     setFieldValue("foodType", "veg");
                        //   } else {
                        //     setFieldValue("foodType", "");
                        //   }
                        // }}
                        />
                    </IonItem>
                    <IonItem lines="none" className="N-VegNon">
                        <IonLabel>Non-Veg</IonLabel>
                        <IonCheckbox
                            name="foodType"
                            value="non-veg"
                            checked="non-veg"
                        // onIonChange={(e) => {
                        //   if (e.detail.checked) {
                        //     setFieldValue("foodType", "non-veg");
                        //   } else {
                        //     setFieldValue("foodType", "");
                        //   }
                        // }}
                        />
                    </IonItem>
                    <IonItem lines="none" className="N-VegNon">
                        <IonLabel>Egg</IonLabel>
                        <IonCheckbox
                            name="foodType"
                            value="egg"
                            checked="egg"
                        // onIonChange={(e) => {
                        //   if (e.detail.checked) {
                        //     setFieldValue("foodType", "egg");
                        //   } else {
                        //     setFieldValue("foodType", "");
                        //   }
                        // }}
                        />
                    </IonItem>
                </IonCol>
                <IonCol size="12">
                    <div>
                        <h4>
                            Tell us 3 Ingredients you eat
                        </h4>
                        <div className="N-profileInput" >
                            <IonInput
                                type="text"
                                label="Default input"
                                placeholder="Enter your Name"
                            ></IonInput>
                        </div>
                    </div>
                </IonCol>
                <IonCol size="12">
                    <div className="">
                        <h4>
                            Tell us 3 Ingredients you love
                        </h4>
                        <div className="N-profileInput" >
                            <IonInput
                                type="text"
                                label="Default input"
                                placeholder="Enter your Name"
                            ></IonInput>
                        </div>
                    </div>
                </IonCol>
                <IonCol size="12">
                    <div className="">
                        <h4>
                            Tell us 2 ingredients you wish to avoid
                        </h4>
                        <div className="N-profileInput" >
                            <IonInput
                                type="text"
                                label="Default input"
                                placeholder="Enter your Name"
                            ></IonInput>
                        </div>
                    </div>
                </IonCol>
                <IonCol size="12">
                    <div className="">
                        <h3>
                            Allergy Setup
                        </h3>
                        <div className="AllergyBox ion-padding-vertical">
                            <div className="ImgIcon">
                                <input type="checkbox" id="myCheck3" />
                                <label for="myCheck3">
                                    <img src="./assets/img/Go_VeganWhite_Icons.png" alt="" className="ProfileImg" />
                                    <IonText>All Natural Only</IonText>
                                </label>
                            </div>
                            <div className="ImgIcon">
                                <input type="checkbox" id="myCheckbox2" />
                                <label for="myCheckbox2">
                                    <img src="./assets/img/Gluten_FreeWhite_Icons.png" alt="" className="ProfileImg" />
                                    <IonText>Nuts</IonText>
                                </label>
                            </div>
                            <div className="ImgIcon">
                                <input type="checkbox" id="myCheckbox3" />
                                <label for="myCheckbox3">
                                    <img src="./assets/img/KetoWhite_Icons.png" alt="" className="ProfileImg" />
                                    <IonText>lulten Intollerant</IonText>
                                </label>
                            </div>
                            <div className="ImgIcon">
                                <input type="checkbox" id="myCheckbox4" />
                                <label for="myCheckbox4">
                                    <img src="./assets/img/Jain FriendlyWhite_Icons.png" alt="" className="ProfileImg" />
                                    <IonText>Garlic</IonText>
                                </label>
                            </div>

                            <div className="ImgBtn">
                                <IonButton fill="clear">
                                    <IonIcon size="large" icon={add} />
                                </IonButton>
                            </div>

                        </div>
                    </div>
                </IonCol>
                <IonCol size="12">
                    <div class="uploadPicture-button">
                        <label for="" class="UploadBtn">Upload Picture</label>
                        <input type="file" id="AllergyPicture" accept="image/*" />
                        <IonInput type="text"></IonInput>
                    </div>
                </IonCol>
                <IonCol>
                    <div className="SkipBtn ion-padding-vertical ">
                        <IonButton className="Orangebtn" fill="clear">SAVE</IonButton>
                        <IonButton>Skip Process</IonButton>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default NutryBudyStep2