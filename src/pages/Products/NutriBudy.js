import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonImg, IonItemOption, IonItemOptions, IonItemSliding, IonPage, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react"
import Header from "../../components/Header"
import { useState } from "react";
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonInput } from '@ionic/react';
import { IonProgressBar } from '@ionic/react';
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons";

const NutriBudy = () => {
    const [selectedTab, setSelectedTab] = useState("step1");
    const handleTabChange = (event) => {
        setSelectedTab(event.detail.value);
    };


    return (

        <IonPage>
            <Header />
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonAccordionGroup expand="inset">
                               <IonAccordion value="first">
                                <IonItem slot="header" color="light">
                                    <IonLabel>Nutribuddy Profile</IonLabel>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                <IonSegment
                                    scrollable
                                    value={selectedTab}
                                    onIonChange={handleTabChange}
                                    className="personalTab"
                                >
                                    <IonSegmentButton value="step1">
                                        <IonLabel>Personal Setting</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="step2">
                                        <IonLabel>Food Setting</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="step3">
                                        <IonLabel>Allergy Informtaion</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="step4">
                                        <IonLabel>Taste Preferences</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="step5">
                                        <IonLabel>Diet Preferences</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="step6">
                                        <IonLabel>food products</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="step7">
                                        <IonLabel>Health</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="step8">
                                        <IonLabel>Activity</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="step9">
                                        <IonLabel>statements</IonLabel>
                                    </IonSegmentButton>

                                </IonSegment>
                                {selectedTab === "step1" && (
                                    <IonGrid className="ion-padding-bottom">
                                        <IonRow>
                                            <IonCol size="12">
                                                <h4>Personal Setting</h4>
                                            </IonCol>
                                            <IonCol size="12" className="ion-padding-vertical">
                                                <div className="ProgressBar">
                                                    <IonProgressBar type="indeterminate"></IonProgressBar>
                                                    <IonLabel slot="right">100% Complete</IonLabel>
                                                </div>
                                                <div className="N-profileInput">
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="text"
                                                        type="text"
                                                        label="Default input"
                                                        placeholder="Enter your Name"
                                                    ></IonInput>
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="text"
                                                        type="text"
                                                        label="Default input"
                                                        placeholder="Enter your Last Name"
                                                    ></IonInput>
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="email"
                                                        type="email"
                                                        label="Default input"
                                                        placeholder="Enter your Email"
                                                    ></IonInput>
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="number"
                                                        type="number"
                                                        label="Default input"
                                                        placeholder="Enter your Phone Number"
                                                    ></IonInput>
                                                    <IonButton fill="clear" shape="round">Send OTP</IonButton>
                                                </div>
                                            </IonCol>
                                            <IonCol size="12" >
                                                <div className="OTPverify">
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="text"
                                                        type="text"
                                                        label="Default input"
                                                        placeholder=""
                                                    ></IonInput>
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="text"
                                                        type="text"
                                                        label="Default input"
                                                        placeholder=""
                                                    ></IonInput>
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="text"
                                                        type="text"
                                                        label="Default input"
                                                        placeholder=""
                                                    ></IonInput>
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="text"
                                                        type="text"
                                                        label="Default input"
                                                        placeholder=""
                                                    ></IonInput>
                                                    <IonButton>Verify</IonButton>
                                                </div>
                                                <div className="N-profileInput">
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="text"
                                                        type="text"
                                                        label="Default input"
                                                        placeholder="Enter your Height"
                                                    ></IonInput>
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="text"
                                                        type="text"
                                                        label="Default input"
                                                        placeholder="Enter your Weight"
                                                    ></IonInput>
                                                    <IonSelect aria-label="Favorite Fruit" placeholder="Select Your Gender">
                                                        <IonSelectOption value="apple">Male</IonSelectOption>
                                                        <IonSelectOption value="banana">Female</IonSelectOption>
                                                        <IonSelectOption value="orange">Other</IonSelectOption>
                                                    </IonSelect>
                                                    <IonInput
                                                        className="ion-margin-vertical"
                                                        name="text"
                                                        type="date"
                                                        label="DOB"
                                                        placeholder="Enter your DOB"
                                                    ></IonInput>
                                                </div>
                                            </IonCol>
                                            <IonCol size="12" className="flex flex-column  ion-align-items-center ion-justify-content-center">

                                                <div className="EditprofileImg N-ProfileEdit">
                                                    <img src="./assets/img/img-person.jpg" alt="" className="ProfileImg" />

                                                    <div class="image-upload">
                                                        <label for="file-input" className="N-EditProfile">
                                                            <img src="./assets/img/edit.png" alt="" />
                                                        </label>
                                                        <input id="file-input" type="file" />
                                                    </div>
                                                </div>
                                            </IonCol>
                                            <IonCol className="flex flex-column  ion-align-items-center ion-justify-content-center ion-padding-top">

                                                <IonItem lines="none" className="N-VegNon">
                                                    <IonLabel>Veg</IonLabel>
                                                    <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
                                                </IonItem>
                                                <IonItem lines="none" className="N-VegNon">
                                                    <IonLabel>Non-Veg</IonLabel>
                                                    <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
                                                </IonItem>
                                                <IonItem lines="none" className="N-VegNon">
                                                    <IonLabel >Egg</IonLabel>
                                                    <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
                                                </IonItem>


                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTab === "step2" && (
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size="12">
                                                <div>
                                                    <h3>
                                                        Tell us 3 Ingredients you eat or love
                                                    </h3>
                                                    <div className="N-profileInput" >
                                                        <IonLabel>Ingredient 1</IonLabel>
                                                        <IonInput
                                                            type="text"
                                                            label="Default input"
                                                            placeholder="Enter your Name"
                                                        ></IonInput>
                                                    </div>
                                                    <div className="N-profileInput" >
                                                        <IonLabel >Ingredient 1</IonLabel>
                                                        <IonInput
                                                            type="text"
                                                            label="Default input"
                                                            placeholder="Enter your Name"
                                                        ></IonInput>
                                                    </div>
                                                    <IonButton className="AddToFoodSetting ion-margin-vertical flex" size="default" shape="default" fill="outline">
                                                        <IonIcon slot="end" size="small" icon={add} />
                                                    </IonButton>
                                                </div>
                                            </IonCol>
                                            <IonCol size="12">
                                                <div className="">
                                                    <h3>
                                                        Tell us 2 ingredients you wish to avoid
                                                    </h3>
                                                    <div className="N-profileInput" >
                                                        <IonLabel>Ingredient 1</IonLabel>
                                                        <IonInput
                                                            type="text"
                                                            label="Default input"
                                                            placeholder="Enter your Name"
                                                        ></IonInput>
                                                    </div>
                                                    <div className="N-profileInput" >
                                                        <IonLabel >Ingredient 1</IonLabel>
                                                        <IonInput
                                                            type="text"
                                                            label="Default input"
                                                            placeholder="Enter your Name"
                                                        ></IonInput>
                                                    </div>
                                                    <IonButton className="AddToFoodSetting ion-margin-vertical flex" size="default" shape="default" fill="outline">
                                                        <IonIcon slot="end" size="small" icon={add} />
                                                    </IonButton>
                                                </div>
                                            </IonCol>
                                            <IonCol size="12">
                                                <div className="">
                                                    <h3>
                                                        Allergy Setup
                                                    </h3>
                                                    <div className="AllergyBox">
                                                       <div className="ImgIcon">
                                                       <IonButton>
                                                          <IonIcon color="Light" size="large" fill="clear" icon={sunnyOutline} />
                                                        </IonButton>
                                                        <IonTitle className="ion-no-padding">Lactose Intollerant</IonTitle>
                                                       </div>
                                                       <div className="ImgIcon">
                                                       <IonButton>
                                                          <IonIcon color="Light" size="large" fill="clear" icon={sunnyOutline} />
                                                        </IonButton>
                                                        <IonTitle className="ion-no-padding">Nuts</IonTitle>
                                                       </div>
                                                       <div className="ImgIcon">
                                                       <IonButton>
                                                          <IonIcon color="Light" size="large" fill="clear" icon={sunnyOutline} />
                                                        </IonButton>
                                                        <IonTitle className="ion-no-padding">Garlic</IonTitle>
                                                       </div>
                                                       <div className="ImgIcon">
                                                       <IonButton class="Orangebtn" fill="clear">
                                                          <IonIcon color="Light" size="large" fill="clear" icon={add} />
                                                        </IonButton>
                                                        <IonTitle className="ion-no-padding">Garlic</IonTitle>
                                                       </div>
                                                      
                                                    </div>

                                                </div>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}

                                {selectedTab === "step3" && (
                                    <IonGrid className="ion-padding-bottom">
                                        <IonRow>
                                            <IonCol size="4" className="CustomGaps">
                                                rrrr
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTab === "step4" && (
                                    <IonGrid className="ion-padding-bottom">
                                        <IonRow>
                                            <IonCol size="4" className="CustomGaps">
                                                rrrr
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTab === "step5" && (
                                    <IonGrid className="ion-padding-bottom">
                                        <IonRow>
                                            <IonCol size="4" className="CustomGaps">
                                                rrrr
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTab === "step6" && (
                                    <IonGrid className="ion-padding-bottom">
                                        <IonRow>
                                            <IonCol size="4" className="CustomGaps">
                                                rrrr
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTab === "step7" && (
                                    <IonGrid className="ion-padding-bottom">
                                        <IonRow>
                                            <IonCol size="4" className="CustomGaps">
                                                rrrr
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTab === "step8" && (
                                    <IonGrid className="ion-padding-bottom">
                                        <IonRow>
                                            <IonCol size="4" className="CustomGaps">
                                                rrrr
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTab === "step9" && (
                                    <IonGrid className="ion-padding-bottom">
                                        <IonRow>
                                            <IonCol size="4" className="CustomGaps">
                                                rrrr
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                                    </div>
                                </IonAccordion>
                                <IonAccordion value="second">
                                    <IonItem slot="header" color="light">
                                        <IonLabel>Personal</IonLabel>
                                    </IonItem>
                                    <div className="ion-padding" slot="content">
                                        Second Content
                                    </div>
                                </IonAccordion>
                                <IonAccordion value="third">
                                    <IonItem slot="header" color="light">
                                        <IonLabel>Saved Content</IonLabel>
                                    </IonItem>
                                    <div className="ion-padding" slot="content">
                                        Third Content
                                    </div>
                                </IonAccordion>
                                <IonAccordion value="Four">
                                    <IonItem slot="header" color="light">
                                        <IonLabel>Your Leaderboard</IonLabel>
                                    </IonItem>
                                    <div className="ion-padding" slot="content">
                                        Third Content
                                    </div>
                                </IonAccordion>
                            </IonAccordionGroup>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>

    )
}
export default NutriBudy