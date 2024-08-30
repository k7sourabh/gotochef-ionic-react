import React from 'react'
import { IonButton, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItemOption, IonItemOptions, IonItemSliding, IonPage, IonRange, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle,IonSpinner } from "@ionic/react"
import { useEffect, useState } from "react";
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { add, flashlight, flashlightOutline, sunnyOutline } from "ionicons/icons";
import {postApiDataWithAuth } from "../../../utils/Utils";
import { Field, Form, Formik} from 'formik';
import { useIonToast } from "@ionic/react";

const NutriBudyStep3 = ({setSelectedTab,stateList,nutridata}) => {
    const [addopen,setAddopen] =useState(false);
    const [present] = useIonToast();
    const [loader, setLoader] = useState(false);
    const [step3image,setStep3Image] = useState([]);
    const [iconinput,setIconInput] = useState("")
    const [iconname,setIconname] = useState([]);
    const [formValues, setFormValues] = useState({
        sweet:"",
        sour:"",
        bitter:"",
        salty:"",
        umami:"",
        dietpreference:"",
        recommended:"",
      });
      useEffect(() => {
        setFormValues({
            sweet: nutridata?.data?.data?.sweet || "",
            sour: nutridata?.data?.data?.sour || "",
            bitter: nutridata?.data?.data?.bitter ||"",
            salty: nutridata?.data?.data?.salty || "",
            umami:nutridata?.data?.data?.umami||"",
            dietpreference:nutridata?.data?.data.diet_pref||"",
            recommended:nutridata?.data?.data?.food_like||"",
          });
      }, [nutridata]);

      const handleupload=()=>{
        setIconname((prev)=>[...prev,iconinput]);
        setIconInput("");
        setAddopen(false);
      }

      const handleSubmit= async (values)=>{

        setLoader(true)
        try{
            const formdata = new FormData();
            formdata.append("id",nutridata?.data?.data?.id);
            formdata.append("sweet",values.sweet);
            formdata.append("sour",values.sour);
            formdata.append("bitter",values.bitter);
            formdata.append("salty",values.salty);
            formdata.append("umami",values.umami);
            formdata.append("diet_pref",values.dietpreference);
            formdata.append("food_like",values.recommended);
            formdata.append("food_icons[]",step3image);
            formdata.append("food_icons_name",iconname);

            const response = await postApiDataWithAuth("/postStepThird",formdata);
            console.log("step3res",response)
            if(response.status===200){
                presentToast("Top", response?.data?.message);
                stateList();
            }
            
        }catch(error){
            console.log("Api Error",error);
            }
        setLoader(false);  
      }

      const presentToast = (position, message) => {
        present({
          message: message,
          duration: 1500,
          position: position,
        });
      };

    return (
        <IonGrid className="ion-padding-bottom">
            <Formik
            enableReinitialize={true}
            initialValues={formValues}
            onSubmit={handleSubmit}
            >
                {({ setFieldValue, values}) => (
                    <Form>
                        <IonRow>
                                <IonCol size="12" className="ion-no-padding">
                                    <h3>Taste Preferences</h3>
                                    <div className="progressBar">
                                        <div className='flex ion-justify-content-between ion-align-items-center'>
                                        <IonLabel>Sweet</IonLabel>
                                        <IonLabel>{values.sweet}%</IonLabel>
                                        </div>
                                        <IonRange min={0} max={100} 
                                            value={values.sweet}
                                            onIonChange={(e)=>{
                                                setFieldValue("sweet",e.target.value)
                                            }}
                                            color="success" className="ion-no-padding range-custom-height" >
                                        </IonRange>
                                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                            <span>I don't eat sweets</span>
                                            <span>I love sweets alot</span>
                                        </div>
                                    </div>
                                    <div className="progressBar ion-padding-top">
                                    <div className='flex ion-justify-content-between ion-align-items-center'>
                                        <IonLabel>Sour</IonLabel>
                                        <IonLabel>{values.sour}%</IonLabel>
                                        </div>
                                        <IonRange min={0} max={100} 
                                            value={values.sour}  
                                            onIonChange={(e)=>{
                                                setFieldValue("sour",e.target.value)
                                            }}
                                            color="warning" className="ion-no-padding range-custom-height" > </IonRange>
                                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                            <span>I don’t like sour food</span>
                                            <span>I love sour food</span>
                                        </div>
                                    </div>
                                    <div className="progressBar ion-padding-top">
                                    <div className='flex ion-justify-content-between ion-align-items-center'>
                                        <IonLabel>Bitter</IonLabel>
                                        <IonLabel>{values.bitter}%</IonLabel>
                                        </div>
                                        <IonRange min={0} max={100} 
                                            value={values.bitter} 
                                            onIonChange={(e)=>{
                                                setFieldValue("bitter",e.target.value)
                                            }}
                                            color="primary" className="ion-no-padding range-custom-height"  > </IonRange>
                                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                            <span>I don't like bitter food</span>
                                            <span>I love bitter food</span>
                                        </div>
                                    </div>
                                    <div className="progressBar ion-padding-top" >
                                    <div className='flex ion-justify-content-between ion-align-items-center'>
                                        <IonLabel>Salty</IonLabel>
                                        <IonLabel>{values.salty}%</IonLabel>
                                        </div>
                                        <IonRange min={0} max={100} 
                                            value={values.salty}
                                            onIonChange={(e)=>{
                                                setFieldValue("salty",e.target.value)
                                            }}
                                            color="primary" className="ion-no-padding range-custom-height" > </IonRange>
                                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                            <span>I like my food bland</span>
                                            <span>I love salty food</span>
                                        </div>
                                    </div>
                                    <div className="progressBar ion-padding-top">
                                        <div className='flex ion-justify-content-between ion-align-items-center'>
                                        <IonLabel>Umami/Savoury</IonLabel>
                                        <IonLabel>{values.umami}%</IonLabel>
                                        </div>
                                        <IonRange min={0} max={100} 
                                            value={values.umami}
                                            onIonChange={(e)=>{
                                                setFieldValue("umami",e.target.value)
                                            }}
                                            color="warning" className="ion-no-padding range-custom-height"></IonRange>
                                        <div className="bottomText flex ion-justify-content-between ion-align-items-center">
                                            <span>I don’t like savoury food</span>
                                            <span>I love savoury food</span>
                                        </div>
                                    </div>
                                </IonCol>
                                <IonCol size="12" className="ion-padding-top">
                                    <h3>Diet Preferences (If Any)</h3>
                                    <div className="flex DietPreFerns">
                                        <div className="FillCheckBox ImgCheck">
                                            <Field type="checkbox" id="myCheckImg51" 
                                                name="dietpreference"
                                                value="Keto"      
                                            />
                                            <label for="myCheckImg51">
                                                <img src="./assets/img/imagesketo.png" alt="" className="ProfileImg" />
                                                <IonText>Keto</IonText>
                                            </label>
                                        </div>
                                        <div className="FillCheckBox ImgCheck">
                                            <Field type="checkbox" id="myCheckImg52"
                                                name="dietpreference"
                                                value="GlutenFree"
                                             />
                                            <label for="myCheckImg52">
                                                <img src="./assets/img/imagesGluten.jpg" alt="" className="ProfileImg" />
                                                <IonText>Gluten Free</IonText>
                                            </label>
                                        </div>
                                        <div className="FillCheckBox ImgCheck">
                                            <Field type="checkbox" id="myCheckImg53"
                                                name="dietpreference"
                                                value="JainFriedndly"
                                             />
                                            <label for="myCheckImg53">
                                                <img src="./assets/img/pngwing.png" alt="" className="ProfileImg" />
                                                <IonText>Jain Friedndly</IonText>
                                            </label>
                                        </div>
                                    </div>
                                </IonCol>
                                <IonCol size="12" className="ion-padding-top">
                                    <h3>Which kind of food products would You like NB to recommend you?</h3>
                                    <div className="AllergyBox">
                                    <div className="ImgIcon">
                                            <Field type="checkbox" id="myCheck2" 
                                                name="recommended"
                                                value="NoPreservative"
                                            />
                                            <label for="myCheck2">
                                            <img src="./assets/img/No PreservativesWhite_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>No Preservative and Chemicals</IonText>
                                            </label>
                                        </div>
                                        <div className="ImgIcon">
                                            <Field type="checkbox" id="myCheck4"
                                                name="recommended"
                                                value="NoSugar"
                                             />
                                            <label for="myCheck4">
                                            <img src="./assets/img/No added sugarWhite_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>No Added Sugar</IonText>
                                            </label>
                                        </div>
                                        <div className="ImgIcon">
                                            <Field type="checkbox" id="myCheck3"
                                                name="recommended"
                                                value="NaturalOnly"
                                             />
                                            <label for="myCheck3">
                                            <img src="./assets/img/All Natural OnlyWhite_Icons.png" alt="" className="ProfileImg" />
                                                <IonText>All Natural Only</IonText>
                                            </label>
                                        </div>
                                        
                                        <div className="ImgBtn">
                                            <IonButton fill="clear"
                                            onClick={()=>setAddopen(true)}
                                            >
                                            <IonIcon size="large" icon={add} />
                                            </IonButton>
                                        </div>
                                    
                                    </div>
                                </IonCol>
                                {addopen?
                                <IonCol size="12"  className='ion-padding-vertical'>
                                    <div class="uploadPicture-button">
                                        <label for="" class="UploadBtn">Upload Picture</label>
                                        <input type="file"  accept="image/*" id="AllergyPicture" onChange={(e)=>{
                                            const file = e.target.files[0];
                                            setStep3Image([...step3image,file]);
                                        }} />
                                        <IonInput type="text"
                                        name="nbiconname"
                                        onIonChange={(e)=>{
                                            setIconInput(e.target.value)
                                        }}
                                        ></IonInput>
                                    </div>
                                    <br></br>
                                    <div>
                                    <IonButton onClick={handleupload}>Upload</IonButton>
                                    </div>
                                </IonCol>
                                :<></>
                                }
                                <IonCol>
                                    <div className="SkipBtn ion-padding-vertical ">
                                        <IonButton className="Orangebtn" fill="clear" type="submit">SAVE</IonButton>
                                        {loader && (
                                            <div className="loader-container">
                                            <IonSpinner name="crescent" />
                                            </div>
                                        )}
                                        <IonButton
                                        onClick={()=>setSelectedTab("step4")}
                                        >Skip Process</IonButton>
                                    </div>
                                </IonCol>
                        </IonRow>
                    </Form>
                )}
            </Formik>
        </IonGrid>
    )
}

export default NutriBudyStep3