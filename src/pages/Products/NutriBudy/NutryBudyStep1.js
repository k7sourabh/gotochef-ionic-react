import React from "react";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSpinner,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { IonItem, IonLabel, IonInput } from "@ionic/react";
import { getApiDataWithAuth, postApiDataWithAuth } from "../../../utils/Utils";
import { useIonToast } from "@ionic/react";
import { Form, Formik,ErrorMessage } from "formik";
import * as Yup from "yup";
import NutriBudy, {stateList } from "./NutriBudy";

const NutryBudyStep1 = ({setSelectedTab}) => {
  const [stepFirstData, setStepFirstData] = useState({});
  const [present] = useIonToast();
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    lastName:"",
    email: "",
    number: "",
    height: "",
    weight: "",
    password:"",
    confpassword:"",
    dob:"",
    gender:"",
    image:"",
  });


  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email().required("Email is required"),
    number: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "Enter valid contact number"
      )
      .required("Phone number is a required"),
    height: Yup.string().required("Height is required"),
    weight: Yup.string().required("Weight is required"),
    password: Yup.string().required("Password is required"),
    confpassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref("password")],"Password must match"),
    dob: Yup.string().required("DOB is required"),
    gender: Yup.string().required("Gender is required"),
    // image: Yup.string().required("Profile Photo is required"),
  });


  useEffect(() => {
    const response=JSON.parse(localStorage.getItem("nutriresponse"));
    setFormValues({
      name: response?.data?.data?.name || "",
      lastName: response?.data?.data?.last_name || "",
      email: response?.data?.data?.email || "",
      number: response?.data?.data?.mobile || "",
      height:response?.data?.data?.height||"",
      weight:response?.data?.data?.weight||"",
      dob:response?.data?.data?.dob||"",
      gender:response?.data?.data?.gender||"",
      password:"",
      confpassword:"",
               
    }); 
    setImage(response?.data?.data?.image);   
    
  }, []);

  const handleSubmit = async (values)=>{
    setLoader(true);
    try{
      const formdata = new FormData();
      formdata.append("user_id","3996");
      formdata.append("name",values.name);
      formdata.append("last_name",values.lastName);
      formdata.append("mobile",values.number);
      formdata.append("email",values.email);
      formdata.append("password",values.password);
      formdata.append("weight",values.weight);
      formdata.append("height",values.height);
      formdata.append("dob",values.dob);
      formdata.append("gender",values.gender);
      formdata.append("image",values.image);
      console.log("step1",values);

      const response =await postApiDataWithAuth("/postStepFirst",formdata);

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
      <div>
          <Formik
            enableReinitialize={true} 
            initialValues={formValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                handleSubmit(values);
            }}
          >
            {({ isSubmitting, setFieldValue, values}) => (
              <Form>
                <IonRow>
                  <IonCol size="12">
                    <h4>Personal Setting</h4>
                  </IonCol>
                  <IonCol size="12" className="ion-padding-bottom">
                    <div className="N-profileInput">
                      <IonInput
                        className="ion-margin-vertical"
                        name="name"
                        type="text"
                        placeholder="Enter your Name"
                        value={values && values?.name}
                        onIonChange={(e) =>
                          setFieldValue("name", e.detail.value)
                        }
                        
                      ></IonInput>
                      <ErrorMessage
                      color="danger"
                      name="name"
                      component="div"
                      className="error-message error-text"
                      />

                      <IonInput
                        className="ion-margin-vertical"
                        name="lastName"
                        type="text"
                        label="Default input"
                        placeholder="Enter your Last Name"
                        value={values.lastName}
                        onIonChange={(e) =>
                          setFieldValue("lastName", e.detail.value)
                        }
                      ></IonInput>
                      <ErrorMessage
                      color="danger"
                      name="lastName"
                      component="div"
                      className="error-message error-text"
                    />

                      <IonInput
                        className="ion-margin-vertical"
                        name="email"
                        type="email"
                        label="Default input"
                        placeholder="Enter your Email"
                        value={values.email}
                        onIonChange={(e) =>
                          setFieldValue("email", e.detail.value)
                        }
                      ></IonInput>
                       <ErrorMessage
                      color="danger"
                      name="email"
                      component="div"
                      className="error-message error-text"
                    />

                      <IonInput
                        className="ion-margin-vertical"
                        name="number"
                        type="number"
                        label="Default input"
                        placeholder="Enter your Phone Number"
                        value={values.number}
                        onIonChange={(e) =>
                          setFieldValue("number", e.detail.value)
                        }
                      ></IonInput>
                       <ErrorMessage
                      color="danger"
                      name="number"
                      component="div"
                      className="error-message error-text"
                    />
                      <IonInput
                        className="ion-margin-vertical"
                        name="height"
                        type="float"
                        label="Default input"
                        placeholder="Enter your Height"
                        value={values.height}
                        onIonChange={(e) =>
                          setFieldValue("height", e.detail.value)
                        }
                      ></IonInput>
                       <ErrorMessage
                      color="danger"
                      name="height"
                      component="div"
                      className="error-message error-text"
                    />
                      <IonInput
                        className="ion-margin-vertical"
                        name="weight"
                        type="number"
                        label="Default input"
                        placeholder="Enter your Weight"
                        value={values.weight}
                        onIonChange={(e) =>
                          setFieldValue("weight", e.detail.value)
                        }
                      ></IonInput>
                       <ErrorMessage
                      color="danger"
                      name="weight"
                      component="div"
                      className="error-message error-text"
                    />
                      <IonInput
                        className="ion-margin-vertical"
                        name="password"
                        type="password"
                        label="Default input"
                        placeholder="Enter your Password"
                        onIonChange={(e) =>
                          setFieldValue("password", e.detail.value)
                        }
                      ></IonInput>
                       <ErrorMessage
                      color="danger"
                      name="password"
                      component="div"
                      className="error-message error-text"
                    />
                      <IonInput
                        className="ion-margin-vertical"
                        name="confpassword"
                        type="password"
                        label="Default input"
                        placeholder="Enter your Confirm Password"
                        onIonChange={(e) =>
                          setFieldValue("confpassword", e.detail.value)
                        }
                      ></IonInput>
                      <ErrorMessage
                      color="danger"
                      name="confpassword"
                      component="div"
                      className="error-message error-text"
                    />
                      <IonLabel>Enter Your DOB</IonLabel>
                      <IonInput
                        className="ion-margin-vertical"
                        name="dob"
                        type="date"
                        label="DOB"
                        placeholder="Enter your DOB"
                        value={values.dob}
                        onIonChange={(e) =>
                          setFieldValue("dob", e.detail.value)
                        }
                      ></IonInput>
                       <ErrorMessage
                      color="danger"
                      name="dob"
                      component="div"
                      className="error-message error-text"
                    />
                      <div>
                        <IonRadioGroup className="flex ion-justify-content-center ion-align-items-center"
                            name="gender" 
                            value={values.gender}
                            onIonChange={(e) =>
                              setFieldValue("gender", e.detail.value)
                            }
                        >
                          <IonItem lines="none">
                            <IonLabel>Female</IonLabel>
                            <IonRadio slot="start" 
                            value="female"
                            />
                          </IonItem>
                          <IonItem lines="none">
                            <IonLabel>Male</IonLabel>
                            <IonRadio slot="start" 
                            value="male"
                            />
                          </IonItem>
                        </IonRadioGroup>
                        <ErrorMessage
                      color="danger"
                      name="gender"
                      component="div"
                      className="error-message error-text"
                    />
                      </div>
                    </div>
                  </IonCol>
                  <IonCol
                    size="12"
                    className="flex flex-column  ion-align-items-center ion-justify-content-center"
                  >
                    <div className="EditprofileImg N-ProfileEdit">
                      <img
                        src={image?image:"./assets/img/img-person.jpg"}
                        alt=""
                        className="ProfileImg"
                      />
                      <div class="image-upload">
                        <label for="file-input" className="N-EditProfile">
                          <img
                            src="./assets/img/edit.png"
                            alt=""
                          />
                        </label>
                        <input id="file-input" type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            setImage(URL.createObjectURL(file))
                            if (file) {
                              setFieldValue("image", file);
                            }
                          
                          }}
                         />
                      </div>
                    </div>
                    {/* <ErrorMessage
                      color="danger"
                      name="image"
                      component="div"
                      className="error-message error-text"
                    /> */}
                  </IonCol>
                  <IonCol className="ion-justify-content-center flex ion-padding-top">
                  <div className="SkipBtn ion-padding-vertical ">
                    <IonButton fill="clear" class="Orangebtn md button button-clear ion-activatable ion-focusable" 
                     type="submit"
                     value="Submit"
                    >SAVE</IonButton>
                     {loader && (
                    <div className="loader-container">
                      <IonSpinner name="crescent" />
                    </div>
                  )}
                      <IonButton onClick={()=>setSelectedTab("step2")}
                      >Skip Process</IonButton>
                  </div>
                  </IonCol>
                </IonRow>
              </Form>
            )}
          </Formik>
      </div>
    </IonGrid>
  );
};

export default NutryBudyStep1;


