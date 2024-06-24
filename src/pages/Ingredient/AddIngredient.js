import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
  IonSpinner,
} from "@ionic/react";
import { listOutline } from "ionicons/icons";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { getApiData, postApiDataWithAuth } from "../../utils/Utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddingredientPopup from "../../modal/AddingredientPopup";

const AddIngredient = () => {
  const initialValues = {
    image: "",
    ingredientTitle: "",
    category: "",
    description: "",
  };

  const [categoryIngredientData, setCategoryIngredientData] = useState([]);
  const [image, setImage] = useState(null);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [responcedata, setResponceData] = useState("");
  const [loader, setLoader] = useState(false);
 

  const CategoryIngredientlist = async () => {
    try {
      const response = await getApiData("/category-ingredient");
      setCategoryIngredientData(response?.data?.ingredient_category);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    CategoryIngredientlist();
  }, []);

  const validationSchema = Yup.object().shape({
    image: Yup.string().required("Ingredient image is required"),
    ingredientTitle: Yup.string().required("Ingredient title is required"),
    category: Yup.string().required("Category is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    try {
      const formdata = new FormData();
      formdata.append("ingredient_name", values.ingredientTitle);
      formdata.append("ingredient_category", values.category);
      formdata.append("short_description", values.description);
      formdata.append("images", values.image);

      const response = await postApiDataWithAuth("/ingredient-add", formdata);

      if (response.data.status === 200) {
       
        setResponceData(response?.data?.message_response);
        setIsOpen(true);
        setCategoryIngredientData([]);
        setImage(null);
        resetForm();
        history.push("/profile");
      }
    } catch (err) {
      console.error(err);
    }
    setLoader(false);
  };

 

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className="bottom-shadow flex ion-justify-content-between ion-align-items-center">
          <div className="TitleHead">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i className="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Add Ingredient</IonTitle>
          </div>
          <div className="flex ion-justify-content-end ion-align-items-end">
            <IonButton
              className="ion-padding-horizontal"
              fill="outline"
              size="small"
              shape="round"
              routerLink="/ingredient-list"
            >
              <IonIcon size="default" fill="clear" icon={listOutline} />
            </IonButton>
          </div>
        </IonHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values, { resetForm });
          }}
        >
          {({  setFieldValue, values, resetForm }) => (
            <Form>
              <IonRow className="ion-padding">
                <IonCol size="12" className="FormGroup">
                  <div className="EditprofileImg">
                    <img
                      src={
                        image ? image : "/assets/img/camera-placeholder.png"
                      }
                      alt=""
                      className="ProfileImg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/img/camera-placeholder.png";
                      }}
                    />
                    <div className="image-upload">
                      <label htmlFor="file-input" className="EditProfile">
                        <img src="./assets/img/edit.png" alt="" />
                      </label>
                      <input
                        name="image"
                        id="file-input"
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setImage(URL.createObjectURL(file));
                          if (file) {
                            setFieldValue("image", file);
                          }
                        }}
                      />
                    </div>
                    <ErrorMessage
                      color="danger"
                      name="image"
                      component="div"
                      className="error-message error-text"
                    />
                  </div>
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Ingredient Title*</IonText>
                  <IonInput
                    className="fillInput"
                    placeholder="Please enter title"
                    name="ingredientTitle"
                    type="text"
                    value={values.ingredientTitle}
                    onIonChange={(e) =>
                      setFieldValue("ingredientTitle", e.detail.value)
                    }
                  ></IonInput>
                  <span className="extraInfo">
                    Example: Red Chilli, Black Pepper
                  </span>
                  <ErrorMessage
                    color="danger"
                    name="ingredientTitle"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Category</IonText>
                  <IonSelect
                    className="fillInput"
                    label="Solid select"
                    placeholder="Please Select"
                    name="category"
                    labelPlacement="floating"
                    fill="solid"
                    onIonChange={(e) =>
                      setFieldValue("category", e.target.value)
                    }
                  >
                    {categoryIngredientData &&
                      categoryIngredientData?.map((data) => (
                        <IonSelectOption value={data.id} key={data.id}>
                          {data.category_name}
                        </IonSelectOption>
                      ))}
                  </IonSelect>
                  <ErrorMessage
                    color="danger"
                    name="category"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>

                <IonCol size="12" className="FormGroup">
                  <IonText>Short Description</IonText>
                  <IonTextarea
                    className="fillInput fillTextarea"
                    placeholder="Please add description here..."
                    name="description"
                    value={values.description}
                    onIonChange={(e) =>
                      setFieldValue("description", e.target.value)
                    }
                    autoGrow={true}
                  ></IonTextarea>
                  <span className="extraInfo">Max. 250 characters</span>
                  <ErrorMessage
                    color="danger"
                    name="description"
                    component="div"
                    className="error-message error-text"
                  />
                </IonCol>

                <IonCol size="12" className="BtnGroup">
                  <IonButton
                    onClick={() => {
                      history.push("/profile");
                      setCategoryIngredientData([]);
                      setImage(null);
                      resetForm();
                    }}
                  >
                    Cancel
                  </IonButton>

                  <IonButton type="submit" value="Submit">
                    Save
                  </IonButton>
                  {loader && (
                    <div className="loader-container">
                      <IonSpinner name="crescent" />
                    </div>
                  )}
                </IonCol>
              </IonRow>
            </Form>
          )}
        </Formik>

      </IonContent>
      <AddingredientPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        responcedata={responcedata}
      />
    </IonPage>
  );
};

export default AddIngredient;
