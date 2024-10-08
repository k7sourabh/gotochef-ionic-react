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
  IonModal,
  useIonToast,
  IonSpinner,
} from "@ionic/react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getApiDataWithAuth, postApiDataWithAuth } from "../../utils/Utils";
import { ErrorMessage, Form, Formik } from "formik";
import { formatDate } from "../../utils/Utils";
import * as Yup from "yup";

const EditProfile = () => {
  const [userProfileData, setUserProfileData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [cityListData, setCityListData] = useState([]);
  const [stateListtData, setStateListtData] = useState([]);
  const [present] = useIonToast();
  const [loader, setLoader] = useState(false);
  const [formValues, setFormValues] = useState({
    avatar: "",
    name: "",
    lastName: "",
    email: "",
    number: "",
    dob: "",
    city: "",
    stateId: "",
    is_home_cook: "",
    is_your_self: "",
    is_grocery_shopping: "",
    about_us: "",
  });
  // console.log("formValues", formValues)
  const [stateName, setStateName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    avatar: Yup.string().required("Profile picture is required"),
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
      setIsLoading(true)
      const response = await getApiDataWithAuth(`/user-dashboard`);
      setIsLoading(false)
      setUserProfileData(response?.data?.user_dashboard?.user_form_data);
      setFormValues({
        avatar: response?.data?.user_dashboard?.user_form_data?.avatar || "",
        name: response?.data?.user_dashboard?.user_form_data?.first_name || "",
        lastName:
          response?.data?.user_dashboard?.user_form_data?.last_name || "",
        email: response?.data?.user_dashboard?.user_form_data?.email || "",
        number: response?.data?.user_dashboard?.user_form_data?.mobile || "",
        dob: response?.data?.user_dashboard?.user_form_data?.dob || "",
        city: response?.data?.user_dashboard?.user_form_data?.city || "",
        is_home_cook:
          response?.data?.user_dashboard?.user_form_data?.is_home_cook || "",
        is_your_self:
          response?.data?.user_dashboard?.user_form_data?.is_your_self || "",
        is_grocery_shopping:
          response?.data?.user_dashboard?.user_form_data?.is_grocery_shopping ||
          "",
        about_us:
          response?.data?.user_dashboard?.user_form_data?.about_us || "",
        // stateId: response?.data?.user_dashboard?.user_form_data?.state_id || "",
      });
    } catch (e) {
      setIsLoading(false)
      console.error(e);
    }
  };

  useEffect(() => {
    userProfile();
  }, []);

  const handleStateChange = async (e) => {
    const stateId = e.target.value;
    try {
      const response = await postApiDataWithAuth("/post-city-list", {
        state_id: stateId,
      });
      setCityListData(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  const stateList = async () => {
    try {
      const response = await getApiDataWithAuth("/get-state-list");
      setStateListtData(response?.data?.data);
      if (userProfileData.state_id) {
        response?.data?.data.filter((val, i) => {
          if (val.id === userProfileData.state_id) {
            setStateName(val.state_name);
            // setFormValues("stateId", val.state_name);
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    stateList();
  }, [userProfileData]);

  const profileSettingPost = async (values) => {
    // console.log("values", values)
    setLoader(true);
    try {
      const formdata = new FormData();
      formdata.append("firstName", values.name);
      formdata.append("lastName", values.lastName);
      formdata.append("mobile", values.number);
      formdata.append("avatar", values.avatar);
      formdata.append("dob", values.dob);
      formdata.append("city", values.city);
      formdata.append("is_home_cook", values.is_home_cook);
      formdata.append("is_your_self", values.is_your_self);
      formdata.append("is_grocery_shopping", values.is_grocery_shopping);
      formdata.append("about_us", values.about_us);

      const response = await postApiDataWithAuth(
        "/user-update-personal-info",
        formdata
      );
      // console.log("update", response);
      presentToast("Top", response?.data?.message_response);
    } catch (err) {
      console.error(err);
    }
    setLoader(false);
  };
  const presentToast = (position, message) => {
    present({
      message: message,
      duration: 1500,
      position: position,
    });
  };

  return (
    <>
      <IonPage>
        {/* <Header /> */}
        <IonContent>
          <IonHeader className="TitleHead bottom-shadow">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Edit Profile</IonTitle>
          </IonHeader>
          {/* {isLoading && (
            <div className="loader-container">
              <IonSpinner name="crescent" />
            </div>
          ) } */}
          
              <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={(values) => {
                  profileSettingPost(values);
                }}
              >
                {({ isSubmitting, setFieldValue, values }) => (
                  <Form>
                    <IonGrid>
                      <IonRow>
                        <IonCol className="ion-padding-top">
                          <div className="EditprofileImg">
                            <img
                              src={values?.avatar}
                              alt=""
                              className="MainProductThumb"
                              onError={(e) => {
                                e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                                e.target.src = "./assets/img/img-person.jpg"; // Placeholder image URL
                              }}
                            />
                            <ErrorMessage
                              color="danger"
                              name="image"
                              component="div"
                              className="error-message error-text"
                            />
                            <div className="image-upload">
                              <label
                                htmlFor="file-input"
                                className="EditProfile"
                              >
                                <img src="./assets/img/edit.png" alt="" />
                              </label>
                              <input
                                id="file-input"
                                type="file"
                                // accept="image/*"
                                onChange={(e) => {
                                  console.log(e.target.files[0])
                                  const file = e.target.files[0];
                                  if (file) {
                                    setFieldValue("avatar", file);
                                  }
                                }}
                                style={{ display: "none" }}
                              />
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
                              <IonLabel position="floating">
                                Your Number
                              </IonLabel>
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
                                onClick={() => setShowModal(true)}
                              ></IonInput>

                              <ErrorMessage
                                color="danger"
                                name="dob"
                                component="div"
                                className="error-message error-text"
                              />
                            </IonItem>
                            <IonModal
                              isOpen={showModal}
                              onDidDismiss={() => setShowModal(false)}
                            >
                              <IonDatetime
                                displayFormat="MMM DD, YYYY"
                                placeholder="Select Date"
                                onIonChange={(e) => {
                                  setFieldValue(
                                    "dob",
                                    formatDate(e.detail.value)
                                  );
                                  setShowModal(false);
                                }}
                              ></IonDatetime>
                            </IonModal>

                            <IonItem>
                              <IonSelect
                                label="Select Your State"
                                placeholder="Select Your State"
                                name="stateId"
                                onIonChange={(e) => {
                                  handleStateChange(e);
                                  setFieldValue("stateId", e.target.value);
                                }}
                              >
                                <IonSelectOption value={stateName}>
                                  {stateName}
                                </IonSelectOption>
                                {stateListtData &&
                                  stateListtData?.map((stateName1, index) => (
                                    <IonSelectOption
                                      value={stateName1.id}
                                      key={index}
                                    >
                                      {stateName1.state_name}
                                    </IonSelectOption>
                                  ))}
                              </IonSelect>
                              <ErrorMessage
                                color="danger"
                                name="state"
                                component="div"
                                className="error-message error-text"
                              />
                            </IonItem>

                            <IonItem>
                              <IonLabel position="floating">
                                Select Your City
                              </IonLabel>
                              <IonSelect
                                label="Please Select"
                                fill="solid"
                                value={values.city}
                                onIonChange={(e) =>
                                  setFieldValue("city", e.detail.value)
                                }
                              >
                                <IonSelectOption value={values.city}>
                                  {values.city}
                                </IonSelectOption>
                                {cityListData &&
                                  cityListData?.map((cityName, index) => (
                                    <IonSelectOption value={cityName.city_name}>
                                      {cityName.city_name}
                                    </IonSelectOption>
                                  ))}
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
                                  <IonRadioGroup
                                    value={values.is_home_cook}
                                    onIonChange={(e) => {
                                      setFieldValue(
                                        "is_home_cook",
                                        e.detail.value
                                      );
                                    }}
                                  >
                                    <h5>
                                      Please select an option suitable to you
                                    </h5>
                                    <div className="RadioBtn">
                                      <div className="RadioField">
                                        <IonRadio value="HookCook">
                                          Hook Cook
                                        </IonRadio>
                                        <IonLabel>Hook Cook</IonLabel>
                                      </div>
                                      <div className="RadioField">
                                        <IonRadio value="AspiringChef"></IonRadio>
                                        <IonLabel>Aspiring Chef</IonLabel>
                                      </div>
                                      <div className="RadioField">
                                        <IonRadio value="HealthBuff">
                                          Health
                                        </IonRadio>
                                        <IonLabel>Health Buff</IonLabel>
                                      </div>
                                      <div className="RadioField">
                                        <IonRadio value="ProfessionalChef">
                                          Professional Chef
                                        </IonRadio>
                                        <IonLabel>Professional Chef</IonLabel>
                                      </div>
                                      <div className="RadioField">
                                        <IonRadio value="FoodEnthusiast">
                                          Food Enthusiast
                                        </IonRadio>
                                        <IonLabel>Food Enthusiast</IonLabel>
                                      </div>
                                    </div>
                                  </IonRadioGroup>
                                </div>
                                <div className="ion-padding-bottom Radio-box">
                                  <IonRadioGroup
                                    value={values.is_your_self}
                                    onIonChange={(e) => {
                                      setFieldValue(
                                        "is_your_self",
                                        e.detail.value
                                      );
                                    }}
                                  >
                                    <h5>
                                      How many times in a week do you cook for
                                      yourself?
                                    </h5>
                                    <div className="RadioBtn">
                                      <div className="RadioField">
                                        <IonRadio value="1-3Times">
                                          1-3 Times
                                        </IonRadio>
                                        <IonLabel>1-3 Times</IonLabel>
                                      </div>
                                      <div className="RadioField">
                                        <IonRadio value="3-7Times">
                                          3-7 Times
                                        </IonRadio>
                                        <IonLabel>3-7 Times</IonLabel>
                                      </div>
                                      <div className="RadioField">
                                        <IonRadio value="More than 7 Times">
                                          More than 7 Times
                                        </IonRadio>
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
                                  <IonRadioGroup
                                    value={values.is_grocery_shopping}
                                    onIonChange={(e) => {
                                      setFieldValue(
                                        "is_grocery_shopping",
                                        e.target.value
                                      );
                                    }}
                                  >
                                    <h5>
                                      How many times in a month do you go for
                                      food and grocery shopping?
                                    </h5>
                                    <div className="RadioBtn">
                                      <div className="RadioField">
                                        <IonRadio value="Once a Month">
                                          Oncea Month
                                        </IonRadio>
                                        <IonLabel>Once a Month</IonLabel>
                                      </div>
                                      <div className="RadioField">
                                        <IonRadio value="4 to 5 Times a Month Times">
                                          Month
                                        </IonRadio>
                                        <IonLabel>
                                          4 to 5 Times a Month Times
                                        </IonLabel>
                                      </div>
                                      <div className="RadioField">
                                        <IonRadio value="More than 5 times a Month">
                                          {" "}
                                          More than 5 times a Month
                                        </IonRadio>
                                        <IonLabel>
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
                                      value={values.about_us}
                                      onIonChange={(e) =>
                                        setFieldValue(
                                          "about_us",
                                          e.detail.value
                                        )
                                      }
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
                            {loader && (
                              <div className="loader-container">
                                <IonSpinner name="crescent" />
                              </div>
                            )}
                          </div>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </Form>
                )}
              </Formik>
            
         
          {!formValues && <IonText>Something went wrong</IonText>}
        </IonContent>
      </IonPage>
    </>
  );
};
export default EditProfile;
