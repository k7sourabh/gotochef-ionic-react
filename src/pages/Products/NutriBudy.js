import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonImg, IonItemOption, IonItemOptions, IonItemSliding, IonPage, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle } from "@ionic/react"
import Header from "../../components/Header"
import { useEffect, useState } from "react";
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonInput } from '@ionic/react';
import { IonProgressBar } from '@ionic/react';
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons";

const NutriBudy = () => {
    const [selectedTab, setSelectedTab] = useState("step1");
    const handleTabChange = (event) => {
        setSelectedTab(event.detail.value);
    };
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 0.01);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    if (progress > 1) {
        setTimeout(() => {
            setProgress(0);
        }, 1000);
    }

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
                                                <IonLabel>Advanced Food Setting</IonLabel>
                                            </IonSegmentButton>
                                            <IonSegmentButton value="step4">
                                                <IonLabel>Health</IonLabel>
                                            </IonSegmentButton>
                                            <IonSegmentButton value="step5">
                                                <IonLabel>Activity</IonLabel>
                                            </IonSegmentButton>
                                            <IonSegmentButton value="step6">
                                                <IonLabel>Statements</IonLabel>
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
                                                            <div className="AllergyBox ion-padding-vertical">
                                                                <div className="ImgIcon">
                                                                    <IonButton>
                                                                        <IonIcon color="Light" size="large" fill="clear" icon={sunnyOutline} />
                                                                    </IonButton>
                                                                    <IonTitle className="ion-no-padding">Lactose</IonTitle>
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
                                                    <IonCol>
                                                        <div className="SkipBtn ion-padding-vertical ">
                                                            <IonButton className="Orangebtn" fill="clear">SAVE</IonButton>
                                                            <IonButton>Skip Process</IonButton>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                        )}

                                        {selectedTab === "step3" && (
                                            <IonGrid className="ion-padding-bottom">
                                                <IonRow>
                                                    <IonCol size="12" className="ion-no-padding">
                                                        <h3>Taste Preferences</h3>
                                                        <div className="progressBar">
                                                            <IonLabel>Sweet</IonLabel>
                                                            <IonProgressBar value={progress} color="success"></IonProgressBar>
                                                            <div className=" bottomText flex ion-justify-content-between ion-align-items-center">
                                                                <span>I don't eat sweets</span>
                                                                <span>I love sweets alot</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressBar ion-padding-top">
                                                            <IonLabel>Sour</IonLabel>
                                                            <IonProgressBar value={progress} color="warning"></IonProgressBar>
                                                            <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                                                <span>I don’t like spicy food</span>
                                                                <span>I love spicy food</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressBar ion-padding-top">
                                                            <IonLabel>Bitter</IonLabel>
                                                            <IonProgressBar value={progress} color="primary"></IonProgressBar>
                                                            <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                                                <span>I don't eat sweets</span>
                                                                <span>I love sweets alot</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressBar ion-padding-top">
                                                            <IonLabel>Salty</IonLabel>
                                                            <IonProgressBar value={progress} color="tertiary"></IonProgressBar>
                                                            <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                                                <span>I like my food bland</span>
                                                                <span>I love salty food</span>
                                                            </div>
                                                        </div>
                                                        <div className="progressBar ion-padding-top">
                                                            <IonLabel>Umami/Savoury</IonLabel>
                                                            <IonProgressBar value={progress} color="medium"></IonProgressBar>
                                                            <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                                                <span>I don’t like savoury food</span>
                                                                <span>I love savoury food</span>
                                                            </div>
                                                        </div>
                                                    </IonCol>
                                                    <IonCol size="12" className="ion-padding-top">
                                                        <h3>Diet Preferences (If Any)</h3>
                                                        <div className="flex DietPreFerns">
                                                            <div className="FillCheckBox">
                                                                <img src="./assets/img/imagesketo.png" alt="" className="ProfileImg" />
                                                                <IonText>Keto</IonText>
                                                            </div>
                                                            <div className="FillCheckBox">
                                                                <img src="./assets/img/imagesGluten.jpg" alt="" className="ProfileImg" />
                                                                <IonText>Gluten Free</IonText>
                                                            </div>
                                                        </div>
                                                    </IonCol>
                                                    <IonCol size="12" className="ion-padding-top">
                                                        <h3>Which kind of food products would You like NB to recommend you?</h3>
                                                        <div className="AllergyBox">
                                                            <div className="ImgIcon">
                                                                <IonButton>
                                                                    <IonIcon color="Light" size="large" fill="clear" icon={sunnyOutline} />
                                                                </IonButton>
                                                                <span className="ion-no-padding">Lactose Lorem</span>
                                                            </div>
                                                            <div className="ImgIcon">
                                                                <IonButton>
                                                                    <IonIcon color="Light" size="large" fill="clear" icon={sunnyOutline} />
                                                                </IonButton>
                                                                <span className="ion-no-padding">Lactose</span>
                                                            </div>
                                                            <div className="ImgIcon">
                                                                <IonButton class="Orangebtn" fill="clear">
                                                                    <IonIcon color="Light" size="large" fill="clear" icon={add} />
                                                                </IonButton>
                                                                <span className="ion-no-padding">Garlic</span>
                                                            </div>
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
                                        )}
                                        {selectedTab === "step4" && (
                                            <IonGrid className="ion-padding-bottom">
                                                <IonRow>
                                                    <IonCol>
                                                        <h3>Health</h3>
                                                        <div className="flex DietPreFerns">
                                                            <div className="FillCheckBox">
                                                                <img src="./assets/img/glucose-meter.png" alt="" className="ProfileImg" />
                                                                <IonText>Keto</IonText>
                                                            </div>
                                                            <div className="FillCheckBox">
                                                                <img src="./assets/img/kidney.png" alt="" className="ProfileImg" />
                                                                <IonText>Gluten Free</IonText>
                                                            </div>
                                                            <div className="FillCheckBox">
                                                                <img src="./assets/img/Cholesterol.png" alt="" className="ProfileImg" />
                                                                <IonText>Gluten Free</IonText>
                                                            </div>
                                                            <div className="FillCheckBox">
                                                                <img src="./assets/img/Liver.png" alt="" className="ProfileImg" />
                                                                <IonText>Gluten Free</IonText>
                                                            </div>
                                                            <div className="FillCheckBox">
                                                                <img src="./assets/img/Obese.png" alt="" className="ProfileImg" />
                                                                <IonText>Gluten Free</IonText>
                                                            </div>
                                                            <div className="FillCheckBox">
                                                                <img src="./assets/img/heart.png" alt="" className="ProfileImg" />
                                                                <IonText>Gluten Free</IonText>
                                                            </div>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                        )}
                                        {selectedTab === "step5" && (
                                            <IonGrid className="ion-padding-bottom">
                                            <IonRow>
                                                <IonCol>
                                                    <h3>Activity</h3>
                                                    <div className="flex DietPreFerns">
                                                        <div className="FillCheckBox">
                                                            <img src="./assets/img/strength-icon.webp" alt="" className="ProfileImg" />
                                                            <IonText>Keto</IonText>
                                                        </div>
                                                        <div className="FillCheckBox">
                                                            <img src="./assets/img/runing.png" alt="" className="ProfileImg" />
                                                            <IonText>Gluten Free</IonText>
                                                        </div>
                                                        <div className="FillCheckBox">
                                                            <img src="./assets/img/system.png" alt="" className="ProfileImg" />
                                                            <IonText>Gluten Free</IonText>
                                                        </div>
                                                        <div className="FillCheckBox">
                                                            <img src="./assets/img/shoping.png" alt="" className="ProfileImg" />
                                                            <IonText>Gluten Free</IonText>
                                                        </div>
                                                        <div className="FillCheckBox">
                                                            <img src="./assets/img/profession-working.webp" alt="" className="ProfileImg" />
                                                            <IonText>Gluten Free</IonText>
                                                        </div>
                                                        <div className="FillCheckBox">
                                                            <img src="./assets/img/lawyer.png" alt="" className="ProfileImg" />
                                                            <IonText>Gluten Free</IonText>
                                                        </div>
                                                    </div>
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