import {
    IonCol, IonGrid, IonPage, IonContent, IonRow, IonSelect, IonSelectOption, IonAccordionGroup, IonDatetime, 
    IonAccordion, IonTextarea, IonText, IonLabel, IonItem, IonInput, IonButton, IonRadioGroup, IonRadio, IonPopover
} from "@ionic/react";
import Header from "../../components/Header";
const EditProfile = () => {
    return (
        <>
            <IonPage>
                <Header />
                <IonContent >
                    <IonGrid>
                        <IonRow>
                            <IonCol >
                                <div className="EditprofileImg">
                                    <img src="./assets/img/img-person.jpg" alt="" className="ProfileImg"/>
                               
                                <div class="image-upload">
                                    <label for="file-input" className="EditProfile">
                                        <img src="./assets/img/edit.png" alt="" />
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
                                </div>
                               
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="ion-padding-horizontal edit-profile-box">
                                <div className="Edit-input">
                                <IonItem>
                                    <IonLabel position="floating">Your Name</IonLabel>
                                    <IonInput type="text"></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Your Last Name</IonLabel>
                                    <IonInput type="text"></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Your Email ID</IonLabel>
                                    <IonInput type="email"></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Your Number</IonLabel>
                                    <IonInput type="number"></IonInput>
                                </IonItem>
                                <IonItem>
                                <IonLabel position="floating">Your DOB</IonLabel>
                                    <IonInput id="click-trigger"></IonInput>
                                    <IonPopover trigger="click-trigger" triggerAction="click">
                                        <IonDatetime id="datetime"></IonDatetime>
                                    </IonPopover>
                                </IonItem>
                                {/* <IonItem>
                               <IonSelect label="Please Select" fill="solid" placeholder="Please Select" >
                                        <IonSelectOption value="apple">Female</IonSelectOption>
                                        <IonSelectOption value="banana">Male</IonSelectOption>
                                    </IonSelect>
                               </IonItem> */}
                                <IonItem>
                                <IonLabel position="floating">Select Your City</IonLabel>
                                    <IonSelect label="Please Select" fill="solid" >
                                        <IonSelectOption value="apple">Indore</IonSelectOption>
                                        <IonSelectOption value="banana">Bhopal</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                                </div>
                                <IonAccordionGroup className="ion-padding-top Pofile-Accordian">
                                    <IonAccordion value="first">
                                        <IonItem slot="header">
                                            <IonText>Add more details</IonText>
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
                                                    <h5>Brief About Myself</h5>
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
                                    <IonButton expand="full">Update</IonButton>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage >
        </>
    )
}
export default EditProfile;