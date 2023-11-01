import {
    IonCol, IonGrid, IonPage, IonContent, IonRow, IonSelect, IonSelectOption, IonAccordionGroup,
    IonAccordion, IonTextarea, IonText, IonTitle, IonList, IonLabel, IonItem, IonInput, IonButton, IonRadioGroup, IonRadio
} from "@ionic/react";
import Header from "../../components/Header";
const EditProfile = () => {
    return (
        <>
            <IonPage>
                <Header />
                <IonContent >
                    <IonGrid>
                        <IonRow className="ion-padding-top">
                            <div class="profile-upload">
                                <h5>select profile picture</h5>
                                <label for="file-input" className="EditProfile">
                                    <img src="./assets/img/profile-edit.png" alt="" />
                                </label>
                                <input id="file-input" type="file" />
                            </div>
                        </IonRow>
                    </IonGrid>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="ion-padding-horizontal edit-profile-box">
                                <div className="Profile-input">
                                    <IonLabel>First Name <span>*</span></IonLabel>
                                    <IonInput label="Default input" placeholder="Your Name" fill="outline"></IonInput>
                                </div>
                                <div className="Profile-input">
                                    <IonLabel>Last Name <span>*</span></IonLabel>
                                    <IonInput label="Default input" placeholder="Your Last Name" fill="outline"></IonInput>
                                </div>
                                <div className="Profile-input">
                                    <IonLabel>Email Address <span>*</span></IonLabel>
                                    <IonInput label="Default email" type="email" placeholder="Your Last Name" fill="outline"></IonInput>
                                </div>
                                <div className="Profile-input">
                                    <IonLabel>Phone Number<span>*</span></IonLabel>
                                    <IonInput label="Default number" type="number" placeholder="Your Last Name" fill="outline"></IonInput>
                                </div>
                                <div className="Profile-input">
                                    <IonLabel>I am<span>*</span></IonLabel>
                                    <IonSelect label="Please Select" fill="solid" placeholder="Please Select" >
                                        <IonSelectOption value="apple">Female</IonSelectOption>
                                        <IonSelectOption value="banana">Male</IonSelectOption>
                                    </IonSelect>
                                </div>
                                <div className="Profile-input">
                                    <IonLabel>Date of Birth<span>*</span></IonLabel>
                                    <IonInput label="Default number" type="date" placeholder="DOB" fill="outline"></IonInput>
                                </div>
                                <div className="Profile-input">
                                    <IonLabel>City<span>*</span></IonLabel>
                                    <IonSelect label="Please Select" fill="solid" placeholder="Please Select" >
                                        <IonSelectOption value="apple">Indore</IonSelectOption>
                                        <IonSelectOption value="banana">Bhopal</IonSelectOption>
                                    </IonSelect>
                                </div>
                                <IonAccordionGroup className="ion-padding-top Pofile-Accordian">
                                    <IonAccordion value="first">
                                        <IonItem slot="header">
                                            <IonLabel >Add more details</IonLabel>
                                        </IonItem>
                                        <div slot="content">
                                        <div className="ion-padding-bottom Radio-box">
                                            <IonRadioGroup value="strawberries">
                                                <h5>Please select an option suitable to you</h5>
                                                <div className="RadioBtn">
                                                    <div className="RadioField">
                                                        <IonRadio value="Hook"></IonRadio>
                                                        <IonLabel>Hook Cook</IonLabel>
                                                    </div>
                                                    <div className="RadioField">
                                                        <IonRadio value="Aspiring"></IonRadio>
                                                        <IonLabel>Aspiring Chef</IonLabel>
                                                    </div>
                                                    <div className="RadioField">
                                                        <IonRadio value="Health">Health</IonRadio>
                                                        <IonLabel>Health Buff</IonLabel>
                                                    </div>
                                                    <div className="RadioField">
                                                        <IonRadio value="Professional">Professional</IonRadio>
                                                        <IonLabel>Professional Chef</IonLabel>
                                                    </div>
                                                    <div className="RadioField">
                                                        <IonRadio value="Food">Food</IonRadio>
                                                        <IonLabel>Food Enthusiast</IonLabel>
                                                    </div>
                                                </div>
                                            </IonRadioGroup>
                                        </div>
                                        <div className="ion-padding-bottom Radio-box" >
                                            <IonRadioGroup value="strawberries">
                                                <h5>How many times in a week do you cook for yourself?</h5>
                                                <div className="RadioBtn">
                                                    <div className="RadioField">
                                                        <IonRadio value="Times">Times</IonRadio>
                                                        <IonLabel>1-3 Times</IonLabel>
                                                    </div>
                                                    <div className="RadioField">
                                                        <IonRadio value="3-7">3-7</IonRadio>
                                                        <IonLabel>3-7 Times</IonLabel>
                                                    </div>
                                                    <div className="RadioField">
                                                        <IonRadio value="More">More</IonRadio>
                                                        <IonLabel>More than 7 Times</IonLabel>
                                                    </div>
                                                    <div className="RadioField">
                                                        <IonRadio value="NA">NA</IonRadio>
                                                        <IonLabel>NA</IonLabel>
                                                    </div>
                                                </div>
                                            </IonRadioGroup>

                                        </div>
                                        <div className="ion-padding-bottom Radio-box" >
                                            <IonRadioGroup value="strawberries">

                                                <h5>How many times in a month do you go for food and grocery shopping?</h5>
                                                <div className="RadioBtn">
                                                    <div className="RadioField">
                                                        <IonRadio value="Once">Once</IonRadio>
                                                        <IonLabel>Once a Month</IonLabel>
                                                    </div>
                                                    <div className="RadioField">
                                                        <IonRadio value="Month">Month</IonRadio>
                                                        <IonLabel>4 to 5 Times a Month Times</IonLabel>
                                                    </div>
                                                    <div className="RadioField">
                                                        <IonRadio value="than">than</IonRadio>
                                                        <IonLabel> More than 5 times a Month</IonLabel>
                                                    </div>
                                                </div>
                                            </IonRadioGroup>


                                        </div>
                                        <div className="ion-padding-bottom" >
                                            <div className="textAreaField">
                                                <h5>How do you plan to use GoToChef ? How do you think GoTochef will help you in your daily life?</h5>
                                                <IonTextarea
                                                    label="Outline textarea"
                                                    placeholder="I am food of cooking and love cooking so i am think this will help me a lot"
                                                ></IonTextarea>
                                            </div>
                                        </div>
                                        </div>
                                    </IonAccordion>
                                </IonAccordionGroup>















                                <div className="UpdateBtn">
                                    <IonButton>Update</IonButton>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    )
}
export default EditProfile;