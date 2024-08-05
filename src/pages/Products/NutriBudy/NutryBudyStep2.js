import React, { useState,useEffect } from 'react'
import { IonButton, IonCheckbox, IonCol,  IonGrid,  IonIcon,  IonRow,  IonText, IonSpinner } from "@ionic/react"
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { add } from "ionicons/icons";
import { Form, Formik,ErrorMessage, Field } from "formik";
import { useIonToast } from "@ionic/react";
import { getApiDataWithAuth, postApiDataWithAuth } from "../../../utils/Utils";
import * as Yup from "yup"

const NutryBudyStep2 = () => {
    const [present] = useIonToast();
    const [loader, setLoader] = useState(false);
    const [addopen,setAddopen]=useState(false);
    const [image,setImage] = useState([]);
    const [formValues, setFormValues] = useState({
        foodType:[],
        ingredienteat:"",
        ingredientlove:"",
        ingredientavoid:"",
        allergy:[],
        iconname:"",
        image:[]
      });
      const validationSchema = Yup.object().shape({
        foodType:Yup.array().required("Select a FoodType"),
        ingredienteat:Yup.string().required("Mention the ingredients you eat"),
        ingredientlove:Yup.string().required("Mention the ingredients you love"),
        ingredientavoid:Yup.string().required("Mention the ingredients you avoid"),
        allergy: Yup.array().required("Select an option")
      })

      const stateList = async () => {
        try {
          const response = await getApiDataWithAuth("/getNutribuddy");
          if (response?.status === 200) {
            console.log("NUTRI",response.data.data);
            setFormValues({
              foodType: response?.data?.data?.food_type || "",
              ingredienteat: response?.data?.data?.ingredient_eat || "",
              ingredientlove: response?.data?.data?.ingredient_love ||"",
              ingredientavoid: response?.data?.data?.avoid_ingredient_1 || "",
              allergy:response?.data?.data?.allergy||"",
            });      }
        } catch (err) {
          console.error(err);
        }
      };
      useEffect(() => {
        stateList();
      }, []);

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
            formdata.append("allergy_icons[]",values.image);
            formdata.append("allergy_icons_name",values.iconname);
            const response =  await postApiDataWithAuth("/postStepSecond",formdata);
            if (response.status===200){
                presentToast("Top", response?.data?.message);
                stateList();
            }
            console.log("step2",response);
            console.log("valuse",values);
            console.log("allergy",JSON.stringify(values.allergy));
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
            validationSchema={validationSchema}
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
                    <ErrorMessage
                        color="danger"
                        name="foodType"
                        component="div"
                        className="error-message error-text"
                    />
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
                            <ErrorMessage
                                color="danger"
                                name="ingredienteat"
                                component="div"
                                className="error-message error-text"
                            />
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
                            <ErrorMessage
                                color="danger"
                                name="ingredientlove"
                                component="div"
                                className="error-message error-text"
                            />
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
                            <ErrorMessage
                                color="danger"
                                name="ingredientavoid"
                                component="div"
                                className="error-message error-text"
                            />
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
                                <ErrorMessage
                                    color="danger"
                                    name="allergy"
                                    component="div"
                                    className="error-message error-text"
                                />
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
                                setFieldValue("image",file);
                            }}/>
                            <IonInput type="text"
                            onIonChange={(e)=>{
                                setFieldValue("iconname",e.target.value)
                            }}
                            ></IonInput>   
                        </div>
                        <br></br>
                        <div>
                        <IonButton onClick={()=>setAddopen(false)}>-</IonButton>
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
                            <IonButton>Skip Process</IonButton>
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