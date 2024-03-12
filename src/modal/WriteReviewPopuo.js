import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonText,
  IonTextarea,
  IonTitle,
  useIonToast,
} from "@ionic/react";
import React, { useState } from "react";
import { postApiData, postApiDataWithAuth } from "../utils/Utils";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { Rating } from "react-simple-star-rating";

const WriteReview = (props) => {
  const { isOpen, setIsOpen, productData } = props;
  const { userData } = useAuth();
  const [present] = useIonToast();

  const initialValues = {
    overallRating: "",
    valueForMoney: "",
    tasteAndTexture: "",
    Packaging: "",
    title: "",
    review: "",
    mySmartKitchen: "",
    do_you_recommend: "",
    is_confirm: "",
  };

  const reviewSchema = Yup.object().shape({
    overallRating: Yup.number().required("required"),
    valueForMoney: Yup.number().required("required"),
    tasteAndTexture: Yup.number().required("required"),
    Packaging: Yup.number().required("required"),
    title: Yup.string().required("required"),
    review: Yup.string().required("required"),
    mySmartKitchen: Yup.string().required("required"),
    do_you_recommend: Yup.string().required("required"),
    is_confirm: Yup.string().required("required"),
  });

  const submitReview = async (values) => {
    const {
      overallRating,
      valueForMoney,
      tasteAndTexture,
      Packaging,
      title,
      review,
      mySmartKitchen,
      do_you_recommend,
      is_confirm,
    } = values;
    try {
      const obj = {
        product_id: productData.product_id,
        title: title,
        message: review,
        orverall_rating: overallRating,
        packaging_rating: Packaging,
        money_rating: valueForMoney,
        texture_rating: tasteAndTexture,
        do_you_recommend: do_you_recommend,
        is_confirm: is_confirm,
        child_id: 0,
        user_id: "3996",
        is_inmykitchen: mySmartKitchen && 1,
      };
      console.log(obj);
      const response = await postApiDataWithAuth(
        "/post-user-product-review",
        obj
      );
      if (response?.data?.status === 200) {
        console.log(response?.data?.message);
        presentToast("Top", response?.data?.message);
        setIsOpen(false);
      } else {
        presentToast("Top", response?.data?.message);
        setIsOpen(false);
      }
    } catch (e) {
      console.log(e);
      presentToast("Top", e?.data?.message);
      setIsOpen(false);
    }
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
      <IonModal
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
        className="ForgotModal"
      >
        <div className="loginContainer">
          <IonText color="dark" className="title">
            Write a review
          </IonText>

          <Formik
            initialValues={initialValues}
            validationSchema={reviewSchema}
            onSubmit={(values) => {
              submitReview(values);
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <div>
                  <IonGrid className="ion-no-padding ion-padding-vertical">
                    <IonTitle>Ratings</IonTitle>
                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark">Overall Rating</IonText>
                      <Rating
                        name="overallRating"
                        onClick={(rate) => setFieldValue("overallRating", rate)}
                      />
                      {errors.overallRating && touched.overallRating && (
                        <div className="error-message error-text">
                          {errors.overallRating}
                        </div>
                      )}
                    </IonCol>
                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark">Value For Money</IonText>
                      <Rating
                        name="valueForMoney"
                        onClick={(rate) => setFieldValue("valueForMoney", rate)}
                      />
                      {errors.valueForMoney && touched.valueForMoney && (
                        <div className="error-message error-text">
                          {errors.valueForMoney}
                        </div>
                      )}
                    </IonCol>
                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark">Taste And Texture</IonText>
                      <Rating
                        name="tasteAndTexture"
                        onClick={(rate) =>
                          setFieldValue("tasteAndTexture", rate)
                        }
                      />
                      {errors.tasteAndTexture && touched.tasteAndTexture && (
                        <div className="error-message error-text">
                          {errors.tasteAndTexture}
                        </div>
                      )}
                    </IonCol>
                    <IonCol
                      size="6"
                      className="ion-no-padding ion-padding-horizontal ion-padding-bottom"
                    >
                      <IonText color="dark">Packaging</IonText>
                      <Rating
                        name="Packaging"
                        onClick={(rate) => setFieldValue("Packaging", rate)}
                      />
                      {errors.Packaging && touched.Packaging && (
                        <div className="error-message error-text">
                          {errors.Packaging}
                        </div>
                      )}
                    </IonCol>
                  </IonGrid>
                  <IonItem>
                    <IonText color="dark">Review Title</IonText>
                    <IonInput
                      name="title"
                      onIonChange={(e) =>
                        setFieldValue("title", e.target.value)
                      }
                      label="Default input"
                      placeholder="Title"
                      className="ion-margin-top"
                    ></IonInput>
                    {errors.title && touched.title ? (
                      <div className="error-message error-text">
                        {errors.title}
                      </div>
                    ) : null}
                  </IonItem>

                  <IonItem>
                    <IonText color="dark">Review</IonText>
                    <IonTextarea
                      label="Regular textarea"
                      name="review"
                      maxlength={140}
                      onIonInput={(event) =>
                        setFieldValue("review", event.target.value)
                      }
                    ></IonTextarea>
                    {errors.review && touched.review ? (
                      <div className="error-message error-text">
                        {errors.review}
                      </div>
                    ) : null}
                  </IonItem>

                  <IonItem>
                    <IonCheckbox
                      onIonChange={(event) =>
                        setFieldValue("mySmartKitchen", event.detail.checked)
                      }
                    ></IonCheckbox>
                    <IonText>MySmartKitchen</IonText>
                    {errors.mySmartKitchen && touched.mySmartKitchen ? (
                      <div className="error-message error-text">
                        {errors.mySmartKitchen}
                      </div>
                    ) : null}
                  </IonItem>

                  <IonItem>
                    <IonText color="dark">
                      Do you recommend this product for others to buy:{" "}
                    </IonText>
                    <IonRadioGroup
                      onIonChange={(e) =>
                        setFieldValue("do_you_recommend", e.detail.value)
                      }
                    >
                      <IonItem>
                        <IonLabel>Yes</IonLabel>
                        <IonRadio name="do_you_recommend" value="yes" />
                      </IonItem>

                      <IonItem>
                        <IonLabel>No</IonLabel>
                        <IonRadio name="do_you_recommend" value="no" />
                      </IonItem>
                    </IonRadioGroup>
                    {errors.do_you_recommend && touched.do_you_recommend ? (
                      <div className="error-message error-text">
                        {errors.do_you_recommend}
                      </div>
                    ) : null}
                  </IonItem>

                  <IonItem>
                    <IonRadioGroup
                      onIonChange={(e) =>
                        setFieldValue("is_confirm", e.detail.value)
                      }
                    >
                      <IonItem>
                        <IonRadio name="is_confirm" value="yes" />
                      </IonItem>
                      <IonText color="dark"> reviews.</IonText>
                    </IonRadioGroup>
                    {errors.is_confirm && touched.is_confirm ? (
                      <div className="error-message error-text">
                        {errors.is_confirm}
                      </div>
                    ) : null}
                  </IonItem>

                  <div className="btnGroup flex ion-margin-top">
                    <IonButton type="submit">Submit</IonButton>
                    <IonButton onClick={() => setIsOpen(false)}>
                      Cancel
                    </IonButton>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </IonModal>
    </>
  );
};

export default WriteReview;
