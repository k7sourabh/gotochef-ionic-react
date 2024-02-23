import {
  IonCol,
  IonGrid,
  IonPage,
  IonContent,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonAccordionGroup,
  IonDatetime,
  IonAccordion,
  IonTextarea,
  IonText,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonRadioGroup,
  IonRadio,
  IonPopover,
  IonHeader,
  IonTitle,
} from "@ionic/react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getApiDataWithAuth } from "../../utils/Utils";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

const EditProfile = () => {
  const [userProfileData, setUserProfileData] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    dob: "",
    city: "",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    // address2: Yup.string(),
    lastName: Yup.string().required("Last Name is required"),
    // email: Yup.number().required("Email is required"),
    // number: Yup.string()
    //   .matches(
    //     /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    //     "Enter valid contact number"
    //   )
    //   .required("Phone number is a required"),
    dob: Yup.string().required("DOB is required"),
    city: Yup.string().required("City is required"),
  });

  const userProfile = async () => {
    try {
      const response = await getApiDataWithAuth(`/user-dashboard`);
      console.log(response?.data?.user_dashboard?.user_form_data);
      setUserProfileData(response?.data?.user_dashboard?.user_form_data);
      setFormValues({
        name: response?.data?.user_dashboard?.user_form_data?.first_name || "",
        lastName:
          response?.data?.user_dashboard?.user_form_data?.last_name || "",
        email: response?.data?.user_dashboard?.user_form_data?.email || "",
        number: response?.data?.user_dashboard?.user_form_data?.mobile || "",
        dob: response?.data?.user_dashboard?.user_form_data?.dob || "",
        city: response?.data?.user_dashboard?.user_form_data?.city || "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userProfile();
  }, []);

  console.log("formValues", formValues);

  return (
    <>
      <IonPage>
        <Header />
        <IonContent>
          <IonHeader className="TitleHead bottom-shadow">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Edit Profile</IonTitle>
          </IonHeader>
          {formValues && formValues.name && (
            <Formik
              initialValues={formValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                //   handleSubmit(values);
                console.log(values);
              }}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form>
                  <IonGrid>
                    <IonRow>
                      <IonCol className="ion-padding-top">
                        <div className="EditprofileImg">
                          <img
                            src="./assets/img/img-person.jpg"
                            alt=""
                            className="ProfileImg"
                          />

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
                          </IonItem>
                          <IonItem>
                            <IonLabel position="floating">
                              Your Last Name
                            </IonLabel>
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
                          </IonItem>
                          <IonItem>
                            <IonLabel position="floating">
                              Your Email ID
                            </IonLabel>
                            <IonInput
                              className="ion-margin-vertical"
                              name="email"
                              type="email"
                              label="Default input"
                              placeholder="Enter your Email"
                              value={values.email}
                              disabled
                              // onIonChange={(e) =>
                              //   setFieldValue("email", e.detail.value)
                              // }
                            ></IonInput>
                            {/* <ErrorMessage
                              color="danger"
                              name="email"
                              component="div"
                              className="error-message error-text"
                            /> */}
                          </IonItem>
                          <IonItem>
                            <IonLabel position="floating">Your Number</IonLabel>
                            <IonInput
                              className="ion-margin-vertical"
                              name="number"
                              type="number"
                              label="Default input"
                              placeholder="Enter your Phone Number"
                              value={values.number}
                              disabled
                              // onIonChange={(e) =>
                              //   setFieldValue("number", e.detail.value)
                              // }
                            ></IonInput>
                            {/* <ErrorMessage
                              color="danger"
                              name="number"
                              component="div"
                              className="error-message error-text"
                            /> */}
                          </IonItem>
                          <IonItem>
                            <IonLabel position="floating">Your DOB</IonLabel>
                            <IonInput
                              className="ion-margin-vertical"
                              name="dob"
                              type="text"
                              label="Default input"
                              placeholder="Enter your Phone Number"
                              value={values.dob}
                              onIonChange={(e) =>
                                setFieldValue("dob", e.detail.value)
                              }
                            ></IonInput>
                            <IonPopover
                              trigger="click-trigger"
                              triggerAction="click"
                            >
                              <IonDatetime id="datetime"></IonDatetime>
                            </IonPopover>
                            <ErrorMessage
                              color="danger"
                              name="dob"
                              component="div"
                              className="error-message error-text"
                            />
                          </IonItem>
                          {/* <IonItem>
                               <IonSelect label="Please Select" fill="solid" placeholder="Please Select" >
                                        <IonSelectOption value="apple">Female</IonSelectOption>
                                        <IonSelectOption value="banana">Male</IonSelectOption>
                                    </IonSelect>
                               </IonItem> */}
                          <IonItem>
                            <IonLabel position="floating">
                              Select Your City
                            </IonLabel>
                            <IonSelect
                              label="Please Select"
                              fill="solid"
                              value={values.city} // Set the value of the select input to Formik's value
                              onIonChange={(e) =>
                                setFieldValue("city", e.detail.value)
                              }
                            >
                              <IonSelectOption value="Indore">
                                Indore
                              </IonSelectOption>
                              <IonSelectOption value="Bhopal">
                                Bhopal
                              </IonSelectOption>
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
                                  <h5>
                                    Please select an option suitable to you
                                  </h5>
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
                                      <IonRadio value="Professional">
                                        Professional
                                      </IonRadio>
                                      <IonLabel>Professional Chef</IonLabel>
                                    </div>
                                    <div className="RadioField">
                                      <IonRadio value="Food">Food</IonRadio>
                                      <IonLabel>Food Enthusiast</IonLabel>
                                    </div>
                                  </div>
                                </IonRadioGroup>
                              </div>
                              <div className="ion-padding-bottom Radio-box">
                                <IonRadioGroup value="strawberries">
                                  <h5>
                                    How many times in a week do you cook for
                                    yourself?
                                  </h5>
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
                              <div className="ion-padding-bottom Radio-box">
                                <IonRadioGroup value="strawberries">
                                  <h5>
                                    How many times in a month do you go for food
                                    and grocery shopping?
                                  </h5>
                                  <div className="RadioBtn">
                                    <div className="RadioField">
                                      <IonRadio value="Once">Once</IonRadio>
                                      <IonLabel>Once a Month</IonLabel>
                                    </div>
                                    <div className="RadioField">
                                      <IonRadio value="Month">Month</IonRadio>
                                      <IonLabel>
                                        4 to 5 Times a Month Times
                                      </IonLabel>
                                    </div>
                                    <div className="RadioField">
                                      <IonRadio value="than">than</IonRadio>
                                      <IonLabel>
                                        {" "}
                                        More than 5 times a Month
                                      </IonLabel>
                                    </div>
                                  </div>
                                </IonRadioGroup>
                              </div>
                              <div className="ion-padding-bottom">
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
                          <IonButton expand="full" type="submit">
                            Update
                          </IonButton>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </Form>
              )}
            </Formik>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};
export default EditProfile;
