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
  IonRow,
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
        <div className="writeReviewContainer">
          <div className="PopHead">
            <IonText color="dark" className="title">
              Write a review
            </IonText>
          </div>

          <div className="PopBody">
            <Formik
              initialValues={initialValues}
              validationSchema={reviewSchema}
              onSubmit={(values) => {
                submitReview(values);
              }}
            >
              {({ errors, touched, setFieldValue }) => (
                <Form>
                  <IonGrid className="ion-no-padding">
                    <IonRow className="ion-margin-bottom">
                      <IonCol size="12">
                        <div className="InfoBlock">
                          <IonTitle>Ratings</IonTitle>

                          <div className="ratingbox-grid">
                            <div className="ratingBox">
                              <IonText color="dark">Overall Rating</IonText>
                              <Rating
                                name="overallRating"
                                onClick={(rate) => setFieldValue("overallRating", rate)}
                              />
                              {errors.overallRating && touched.overallRating && (
                                <p className="error-message error-text">{errors.overallRating}</p>
                              )}
                            </div>

                            <div className="ratingBox">
                              <IonText color="dark">Value For Money</IonText>
                              <Rating
                                name="valueForMoney"
                                onClick={(rate) => setFieldValue("valueForMoney", rate)}
                              />
                              {errors.valueForMoney && touched.valueForMoney && (
                                <p className="error-message error-text">
                                  {errors.valueForMoney}
                                </p>
                              )}
                            </div>

                            <div className="ratingBox">
                              <IonText color="dark">Taste And Texture</IonText>
                              <Rating
                                name="tasteAndTexture"
                                onClick={(rate) =>
                                  setFieldValue("tasteAndTexture", rate)
                                }
                              />
                              {errors.tasteAndTexture && touched.tasteAndTexture && (
                                <p className="error-message error-text">
                                  {errors.tasteAndTexture}
                                </p>
                              )}
                            </div>

                            <div className="ratingBox">
                              <IonText color="dark">Packaging</IonText>
                              <Rating
                                name="Packaging"
                                onClick={(rate) => setFieldValue("Packaging", rate)}
                              />
                              {errors.Packaging && touched.Packaging && (
                                <p className="error-message error-text">
                                  {errors.Packaging}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-bottom">
                      <IonCol size="12">
                        <div className="InfoBlock">
                          <IonTitle>Review Title</IonTitle>
                          <IonItem className="ion-no-padding">
                            <IonInput
                              name="title"
                              onIonChange={(e) =>
                                setFieldValue("title", e.target.value)
                              }
                              label="Default input"
                              placeholder="Title"></IonInput>
                            {errors.title && touched.title ? (
                              <div className="error-message error-text">
                                {errors.title}
                              </div>
                            ) : null}
                          </IonItem>
                        </div>
                      </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-bottom">
                      <IonCol size="12">
                        <div className="InfoBlock">
                          <IonTitle>Review</IonTitle>
                          <IonItem className="ion-no-padding">
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

                          <IonItem className="ion-no-padding">
                            <IonCheckbox
                              onIonChange={(event) =>
                                setFieldValue("mySmartKitchen", event.detail.checked)
                              }
                            ></IonCheckbox>
                            <IonText className="ml-10">MySmartKitchen</IonText>
                            {errors.mySmartKitchen && touched.mySmartKitchen ? (
                              <div className="error-message error-text">
                                {errors.mySmartKitchen}
                              </div>
                            ) : null}
                          </IonItem>
                        </div>
                      </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-bottom">
                      <IonCol size="12">
                        <div className="InfoBlock">
                          <IonTitle>Do you recommend this product for others to buy:</IonTitle>
                          <IonItem className="ion-no-padding">
                            <IonRadioGroup
                              onIonChange={(e) =>
                                setFieldValue("do_you_recommend", e.detail.value)
                              }
                              className="flex"
                            >
                              <IonItem lines="none">
                                <IonLabel >Yes</IonLabel>
                                <IonRadio className="ml-10" name="do_you_recommend" value="yes" />
                              </IonItem>

                              <IonItem lines="none">
                                <IonLabel >No</IonLabel>
                                <IonRadio className="ml-10" name="do_you_recommend" value="no" />
                              </IonItem>
                            </IonRadioGroup>
                            {errors.do_you_recommend && touched.do_you_recommend ? (
                              <div className="error-message error-text">
                                {errors.do_you_recommend}
                              </div>
                            ) : null}
                          </IonItem>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>

                  <IonItem lines="none" className="ion-no-padding">
                    <IonRadioGroup
                      onIonChange={(e) =>
                        setFieldValue("is_confirm", e.detail.value)
                      }
                    >
                      <IonItem lines="none" className="ion-align-item-start">
                        <div className="ReviewRadio">
                        <IonRadio name="is_confirm" value="yes" className="" />
                        <IonText color="dark" className="ml-10">I certify that this review is based on my own experience and is my genuine opinion of this product, and that I have
                         no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that GoToChef has a zero-tolerance policy on fake reviews.</IonText>
                        </div>
                      </IonItem>
                    </IonRadioGroup>
                    {errors.is_confirm && touched.is_confirm ? (
                      <div className="error-message error-text">
                        {errors.is_confirm}
                      </div>
                    ) : null}
                  </IonItem>






                  {/* <IonItem lines="none" className="ion-no-padding">
                    <IonRadioGroup
                      onIonChange={(e) =>
                        setFieldValue("is_confirm", e.detail.value)
                      }
                    >
                      <IonItem lines="none" className="">
                        <IonRadio name="is_confirm" value="yes" />
                        <IonText color="dark" className="ml-10">I certify that this review is based on my own experience and is my genuine opinion of this product, and that I have
                         no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that GoToChef has a zero-tolerance policy on fake reviews.</IonText>
                      </IonItem>
                    </IonRadioGroup>
                    {errors.is_confirm && touched.is_confirm ? (
                      <div className="error-message error-text">
                        {errors.is_confirm}
                      </div>
                    ) : null}
                  </IonItem> */}

                  <div className="btnGroup flex ion-margin-top ion-justify-content-between">
                    <IonButton type="submit">Submit</IonButton>
                    <IonButton onClick={() => setIsOpen(false)}>
                      Cancel
                    </IonButton>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </IonModal>
    </>
  );
};

export default WriteReview;
