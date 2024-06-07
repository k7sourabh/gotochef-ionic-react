import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
} from "@ionic/react";
import {
  closeCircleOutline,
  heart,
  heartOutline,
  removeCircle,
  removeOutline,
  shareSocialOutline,
} from "ionicons/icons";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { getApiData } from "../../utils/Utils";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const IngredientDetail = () => {
  const [selectedTabDetail, setSelectedTabDetail] = useState("TasteProfile");
  const { slug } = useParams();
  const [ingredientData, setIngredientData] = useState({});
  const handleTabChangeDetail = (event) => {
    setSelectedTabDetail(event.detail.value);
  };

  const ingredientsDetails = async () => {
    try {
      const response = await getApiData(`/ingredients_details/${slug}`);
      setIngredientData(response?.data?.ingredient_details);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (slug) {
      ingredientsDetails();
    }
  }, [slug]);

  const renderNutritionalBenefits = (data) => {
    if (!data) {
      return null;
    }
    const listItems = data.split("</li>").map((item, index) => {
      const cleanItem = item.replace("<li>", "").replace("(1)", "").trim();
      return (
        cleanItem && (
          <li
            key={index}
            className="ion-margin-horizontal"
            dangerouslySetInnerHTML={{ __html: cleanItem }}
          />
        )
      );
    });

    return listItems;
  };

  const renderLinks = (links) => {
    if (!links) {
      return null;
    }
    const link = links.split("&nbsp;");
    return (
      <div>
        {link.map((linkPair, index) => (
          <div key={index}>
            <a
              href={linkPair}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#B22222" }}
              dangerouslySetInnerHTML={{ __html: linkPair }}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <IonPage>
      {/* <Header/> */}
      <IonContent>
        <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
          <div className="TitleHead">
            <IonButton className="backBtn" fill="clear" routerLink="/ingredient-list">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Ingredient Details</IonTitle>
          </div>
        </IonHeader>

        <IonGrid class="ion-padding">
          <IonRow>
            <div className="topImage">
              <img
                src={
                  !ingredientData.images
                    ? "/assets/img/img-placeholder.jpg"
                    : ingredientData.images
                }
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/img/img-placeholder.jpg";
                }}
                alt=""
                className="ProfileImg"
              />
              <div className="topIcon">
                <div className="iconTop">
                  <IonIcon size="default" fill="clear" icon={heartOutline} />
                  <span>{ingredientData?.total_fav_num}</span>
                </div>
                <div className="iconTop">
                  <IonIcon
                    size="default"
                    fill="clear"
                    icon={shareSocialOutline}
                  />
                  {/* <span className="ion-no-padding">2</span> */}
                </div>
              </div>
            </div>
          </IonRow>

          <IonRow className="ion-padding-vertical">
            <IonTitle className="ion-no-padding">
              {ingredientData?.ingredients_name}
            </IonTitle>
            <IonText>
              <span>Also Known As :</span>{" "}
              {ingredientData &&
                ingredientData?.common_names_and_forms
                  ?.slice(0, 3)
                  .map((data, i) => (
                    <IonText className="ion-margin-horizontal" key={i}>
                      {data.ingredients_name},
                    </IonText>
                  ))}
            </IonText>
            <IonText>
              <span>Technical Name :</span>
              {ingredientData?.technical_name}
            </IonText>
          </IonRow>

          <IonRow className="ion-padding-vertical d-flex ion-justify-content-center ion-align-items-center ">
            <div className="btnGroup">
              <IonButton
                size="default"
                expand="block"
                fill="outline"
                className="chefbutton"
              >
                <img
                  className="mr-05"
                  src="/assets/img/Mysmart.png"
                  alt="Images"
                />
                MySmartKitchen
                <span>{ingredientData?.is_imk_checked}</span>
              </IonButton>

              <IonButton
                size="default"
                expand="block"
                fill="outline"
                className="chefbutton"
              >
                <IonIcon
                  size="default"
                  fill="clear"
                  icon={closeCircleOutline}
                />
                Avoid
                <span>{ }</span>
              </IonButton>
            </div>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <ion-title
              color="dark"
              class="ion-color ion-color-dark md title-default"
            >
              Vegetarian
            </ion-title>
            <IonCol size="12">
              <IonSegment
                value={selectedTabDetail}
                onIonChange={handleTabChangeDetail}
                className="personalTab"
              >
                <IonSegmentButton value="TasteProfile">
                  <IonLabel>Taste Profile</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="UsageTips">
                  <IonLabel>Usage Tips</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="CommonNames">
                  <IonLabel>Common Names</IonLabel>
                </IonSegmentButton>
              </IonSegment>
              {selectedTabDetail === "TasteProfile" && (
                <IonGrid class="ion-padding-vertical">
                  <IonGrid className="ion-padding-horizontal">
                    <IonRow>
                      <IonCol size="12">
                        <IonTitle className="ion-no-padding ion-margin-bottom    ">
                          Description
                        </IonTitle>
                        <IonText className="ion-margin-vertical">
                          {ingredientData?.descriptions}
                        </IonText>
                      </IonCol>

                      <IonCol size="12">
                        <IonTitle className="ion-no-padding ion-margin-vertical">
                          Health benefits
                        </IonTitle>
                        {/* {ingredientData?.nutritional_benefits} */}
                        <ol className="ion-no-padding">
                          {renderNutritionalBenefits(
                            ingredientData?.nutritional_benefits
                          )}
                        </ol>
                      </IonCol>

                      <IonCol size="12">
                        <IonTitle className="ion-no-padding ion-margin-vertical">
                          Selection Guide
                        </IonTitle>
                        <IonText className="ion-margin-vertical">
                          {ingredientData?.selection_guide}
                        </IonText>
                      </IonCol>
                      <IonCol size="12">
                        <IonTitle className="ion-no-padding ion-margin-vertical">
                          Resource & Links
                        </IonTitle>
                        <IonText className="ion-margin-vertical">
                          <a href={ingredientData?.resource_links}>
                            {renderLinks(ingredientData?.resource_links)}
                          </a>
                        </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>

                  <IonGrid className="ion-padding">
                    <IonRow>
                      <IonCol size="12">
                        <IonTitle className="ion-no-padding">
                          Disclaimer
                        </IonTitle>
                        <IonText>
                          {ingredientData.disclaimer}
                        </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonGrid>
              )}
              {selectedTabDetail === "UsageTips" && (
                <IonGrid class="ion-padding-vertical">
                  <IonRow>
                    <IonCol>
                      <IonTitle>Usage Tips</IonTitle>
                      <IonText>
                        <IonList>
                          <ol className="ion-no-padding">
                            {ingredientData && ingredientData.tips && ingredientData.tips.length > 0 ? (
                              ingredientData.tips.map((tip, i) => (
                                <li className="ion-margin-horizontal" key={i}>
                                  {tip}
                                </li>
                              ))
                            ) : (
                              <li>No data found</li>
                            )}
                          </ol>

                        </IonList>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
              {selectedTabDetail === "CommonNames" && (
                <IonGrid class="ion-padding-vertical">
                  <IonRow>
                    <IonCol>
                      <IonTitle className="ion-no-padding">
                        Common names and forms
                      </IonTitle>
                      <IonText>
                        <IonList>
                          <ol className="ion-no-padding">
                            {ingredientData && ingredientData.common_names_and_forms.length > 0 ? (
                              ingredientData.common_names_and_forms.map((data, i) => (
                                <li className="ion-margin-horizontal" key={i}>
                                  {data.ingredients_name}
                                </li>
                              ))
                            ) : (
                              <li>No data found</li>
                            )}
                          </ol>

                        </IonList>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default IngredientDetail;
