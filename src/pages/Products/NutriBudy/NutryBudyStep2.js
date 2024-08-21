import React, { useState,useEffect } from 'react'
import { IonButton, IonCheckbox, IonCol,  IonGrid,  IonIcon,  IonRow,  IonText, IonSpinner } from "@ionic/react"
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { add } from "ionicons/icons";
import { Form, Formik,Field } from "formik";
import { useIonToast } from "@ionic/react";
import { postApiDataWithAuth } from "../../../utils/Utils";


const NutryBudyStep2 = ({setSelectedTab,stateList,nutridata}) => {
    const [present] = useIonToast();
    const [loader, setLoader] = useState(false);
    const [addopen,setAddopen]=useState(false);
    const [step2image,setStep2Image] = useState([]);
    const [iconinput,setIconInput] = useState("")
    const [iconname,setIconname] = useState([]);
    const [formValues, setFormValues] = useState({
        foodType:[],
        ingredienteat:"",
        ingredientlove:"",
        ingredientavoid:"",
        allergy:[],
        iconname:"",
        image:[]
      });

      useEffect(() => {
        setFormValues({
            foodType: nutridata?.data?.data?.food_type || [],
            ingredienteat: nutridata?.data?.data?.ingredient_eat || "",
            ingredientlove: nutridata?.data?.data?.ingredient_love ||"",
            ingredientavoid: nutridata?.data?.data?.avoid_ingredient_1 || "",
            allergy:nutridata?.data?.data?.allergy||[],
          }); 
      }, [nutridata]);

      const handleupload=()=>{
        setIconname((prev)=>[...prev,iconinput]);
        setIconInput("");
        setAddopen(false);
      }

      const handleSubmit=async(values)=>{
     
        setLoader(true)
        try{

            const formdata = new FormData();
            formdata.append("id","115");
            formdata.append("veg_type",values.foodType);
            formdata.append("ingredient_eat",values.ingredienteat);
            formdata.append("ingredient_love",values.ingredientlove);
            formdata.append("avoid_ingredient_1",values.ingredientavoid);
            formdata.append("allergy",values.allergy);
            formdata.append("allergy_icons[]",step2image);
            formdata.append("allergy_icons_name",iconname);
            const response =  await postApiDataWithAuth("/postStepSecond",formdata);

            if (response.status===200){

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
        }
    return (
        <IonGrid>
            <Formik
            enableReinitialize={true} 
            initialValues={formValues}
            onSubmit={handleSubmit}
            >
            {({setFieldValue, values}) => (
                <Form>
                <IonRow>
                
                    <IonCol className="flex flex-column  ion-align-items-center ion-justify-content-center ion-padding-top">
                        <IonItem lines="none" className="N-VegNon">
                            <IonLabel>Veg</IonLabel>
                            <Field
                                type="checkbox"
                                name="foodType"
                                value="vegetarian"
                                
                            />
                        </IonItem>
                        <IonItem lines="none" className="N-VegNon">
                            <IonLabel>Non-Veg</IonLabel>
                            <Field
                                name="foodType"
                                type="checkbox"
                                value="non-vegetarian"
                               
                            />
                        </IonItem>
                        <IonItem lines="none" className="N-VegNon">
                            <IonLabel>Egg</IonLabel>
                            <Field
                                name="foodType"
                                type="checkbox"
                                value="egg"
                               
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
                                    name="ingredienteat"
                                    type="text"
                                    value={values.ingredienteat}
                                    label="Default input"
                                    placeholder="Enter Ingredients you Eat"
                                    onIonChange={(e) =>
                                        setFieldValue("ingredienteat", e.detail.value)
                                      }
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
                                    name="ingredientlove"
                                    type="text"
                                    value={values.ingredientlove}
                                    label="Default input"
                                    placeholder="Enter Ingredients you Love"
                                    onIonChange={(e) =>
                                        setFieldValue("ingredientlove", e.detail.value)
                                      }
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
                                    name="ingredientavoid"
                                    type="text"
                                    value={values.ingredientavoid}
                                    label="Default input"
                                    placeholder="Enter Ingredients you Avoid"
                                    onIonChange={(e) =>
                                        setFieldValue("ingredientavoid", e.detail.value)
                                      }
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
                                    <Field  type="checkbox"  name="allergy" value="All Natural Only" id="myCheck3"              
                            />
                                    <label for="myCheck3">
                                        <img src="./assets/img/Go_VeganWhite_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>All Natural Only</IonText>
                                    </label>
                                </div>
                                <div className="ImgIcon">
                                    <Field  type="checkbox" id="myCheckbox2"  name="allergy" value="Nuts"  
                                   
                                    />
                                    <label for="myCheckbox2">
                                        <img src="./assets/img/Gluten_FreeWhite_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Nuts</IonText>
                                    </label>
                                </div>
                                <div className="ImgIcon">
                                    <Field type="checkbox" id="myCheckbox3"  name="allergy" value="Gluten Intolerant"  />
                                    <label for="myCheckbox3">
                                        <img src="./assets/img/KetoWhite_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Gluten Intolerant</IonText>
                                    </label>
                                </div>
                                <div className="ImgIcon">
                                    <Field type="checkbox" id="myCheckbox4"  name="allergy" value="Garlic"/>
                                    <label for="myCheckbox4">
                                        <img src="./assets/img/Jain FriendlyWhite_Icons.png" alt="" className="ProfileImg" />
                                        <IonText>Garlic</IonText>
                                    </label>
                                </div>
                                <div className="ImgBtn">
                                    <IonButton fill="clear"onClick={()=>setAddopen(true)} >
                                        <IonIcon size="large" icon={add} />
                                    </IonButton>
                                </div>

                            </div>
                        </div>
                    </IonCol>
                  
                    {addopen?
                    <IonCol size="12">
                        <div class="uploadPicture-button">
                            <label for="" class="UploadBtn">Upload Picture</label>
                            <input type="file" id="AllergyPicture" multiple accept="image/*" onChange={(e) => {
                                const file = e.target.files[0];
                                setStep2Image([...step2image,file]);
                                
                            }}/>
                            <IonInput type="text"  
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
                            onClick={()=>setSelectedTab("step3")}
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

export default NutryBudyStep2



