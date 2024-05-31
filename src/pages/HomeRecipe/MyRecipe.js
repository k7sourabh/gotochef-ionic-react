import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  IonButton,
  IonCard,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import {
  atCircleOutline,
  bookmarkOutline,
  menuOutline,
  person,
  pint,
  star,
  timeOutline,
} from "ionicons/icons";
import SubmitArticals from "../Articals/SubmitArticals";
import { getApiDataWithAuth } from "../../utils/Utils";
import SubmitRecipe from "./SubmitRecipe";
import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const MyRecipeComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [recipeData, setRecipeData] = useState({});
  const [editRecipe, showEditRecipe] = useState(false);
  const [recipeObj, setRecipeObj] = useState({});
  const param = useParams();
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    fetchRecipeData();
  }, [location]);

  const fetchRecipeData = async () => {
    try {
      const response = await getApiDataWithAuth("/myRecipes");
      setRecipeData(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const showPreprationTime = (data) => {
    if (data) {
      let arr = data.split("-");
      return `${arr[0] ? arr[0] : "0"} : ${arr[1] ? arr[1] : "0"}`;
    }
  };

  return (
    <IonPage>
      {/* <Header /> */}
      <IonContent fullscreen>
        <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
          <div className="TitleHead">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">My Recipe</IonTitle>
          </div>
          <div className="flex ion-justify-content-end ion-align-items-end">
            <IonButton
              className="ion-padding-horizontal"
              fill="outline"
              size="small"
              shape="round"
              routerLink={`/submit-recipe`}
            >
              <i class="material-icons dark">add</i>
            </IonButton>
          </div>
        </IonHeader>

        {/* <IonGrid>
          <SubmitArticals show={showMenu} />
        </IonGrid> */}

        <IonGrid>
          <IonRow className="ion-padding-top">
            <IonTitle color="dark">Recipes Draft</IonTitle>
          </IonRow>
          <IonRow className="ion-padding-vertical">
            {recipeData &&
            recipeData?.recipes_draft &&
            recipeData?.recipes_draft.length > 0 ? (
              recipeData?.recipes_draft?.map((data, index) => (
                <IonCol size="6" key={index}>
                  <IonCard className="ProductCard MyRecipeCard">
                    <div className="vegIcon">
                      <div className="flex ion-align-items-center">
                        {data?.foodtype === "vegetarian" ? (
                          <img
                            src="/assets/img/veg-icon.svg"
                            alt="Images"
                            className="icon-img"
                          />
                        ) : data?.foodtype === "non-vegetarian" ? (
                          <img
                            src="/assets/img/non-veg-icon.svg"
                            alt="Images"
                            className="icon-img"
                          />
                        ) : (
                          <></>
                        )}
                      </div>

                      <div className="Draft-Edit">
                        <IonButton fill="clear" className="save-btn">
                          <IonIcon
                            size="large"
                            color="danger"
                            icon={bookmarkOutline}
                          />
                        </IonButton>

                        <IonButton
                          className="edit-btn"
                          size="small"
                          fill="clear"
                          routerLink={`/submit-recipe/${data.id}`}
                          onClick={() => {
                            showEditRecipe(true);
                            setRecipeObj(data);
                          }}
                        >
                          <i class="material-icons">edit</i>
                        </IonButton>
                      </div>
                    </div>
                    <div className="RecentProducts">
                      <div className="RecipePro">
                        <img
                          src={data?.images}
                          alt=""
                          onError={(e) => {
                            e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                            e.target.src = "/assets/img/camera-placeholder.png"; // Placeholder image URL
                          }}
                        />
                        {/* <img
          className="RecentUserImg"
          src="/assets/img/1525870462-Listing.jpg"
          alt=""
        /> */}
                        <div className="TimeingBar">
                          <div className="ReciRow">
                            <IonIcon icon={atCircleOutline}></IonIcon>
                            <IonLabel>{data.prep_level}</IonLabel>
                          </div>
                          <div className="ReciRow">
                            <IonIcon icon={timeOutline}></IonIcon>
                            <IonLabel>
                              {showPreprationTime(data?.prep_time)}
                            </IonLabel>
                          </div>
                        </div>
                      </div>

                      <div className="bottomRecipe">
                        <div className="productRecipe">
                          <span>{data?.recipesName}</span>
                          {/* <div className="productRecipe">
              <IonIcon
                size="medium"
                aria-hidden="true"
                icon={pint}
                slot="start"
              ></IonIcon>
              <IonLabel>Breakfast</IonLabel>
            </div> */}
                        </div>
                        <div className="productRecipe">
                          <div className="ProfileRecipe">
                            <img
                              src={data?.userDetail?.image}
                              alt=""
                              className="MainProductThumb"
                              onError={(e) => {
                                e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                                e.target.src = "./assets/img/img-person.jpg"; // Placeholder image URL
                              }}
                            />

                            <IonLabel>{data?.userDetail?.first_name}</IonLabel>
                          </div>
                          <div className="ProfileRecipe">
                            <IonIcon
                              size="medium"
                              aria-hidden="true"
                              icon={person}
                              slot="start"
                            ></IonIcon>
                            <span>{data?.serving}</span>
                            <IonChip className="GreenDesign">
                              <span>{data.ratings}</span>
                              <IonIcon color="light" size="small" icon={star} />
                            </IonChip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </IonCard>
                </IonCol>
              ))
            ) : (
              <IonCol size="12" className="ion-padding-horizontal">
                <IonText>No draft recipe found</IonText>
              </IonCol>
            )}
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonTitle color="dark">Recipes</IonTitle>
          <IonRow className="ion-padding-vertical">
            {recipeData &&
              recipeData?.recipes?.map((data, index) => (
                <IonCol size="6" key={index}>
                  <IonCard className="ProductCard">
                    <div className="vegIcon">
                      {data?.foodtype === "vegetarian" ? (
                        <img
                          src="/assets/img/veg-icon.svg"
                          alt="Images"
                          className="icon-img"
                        />
                      ) : data?.foodtype === "non-vegetarian" ? (
                        <img
                          src="/assets/img/non-veg-icon.svg"
                          alt="Images"
                          className="icon-img"
                        />
                      ) : (
                        <></>
                      )}

                      <IonButton fill="clear" className="saveIcon">
                        <IonIcon
                          size="large"
                          color="danger"
                          icon={bookmarkOutline}
                        />
                      </IonButton>
                    </div>
                    <div className="RecentProducts">
                      <div className="RecipePro">
                        <img
                          src={data?.images}
                          alt=""
                          onError={(e) => {
                            e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                            e.target.src = "/assets/img/camera-placeholder.png"; // Placeholder image URL
                          }}
                        />
                        {/* <img
                        className="RecentUserImg"
                        src="/assets/img/1525870462-Listing.jpg"
                        alt=""
                      /> */}
                        <div className="TimeingBar">
                          <div className="ReciRow">
                            <IonIcon icon={atCircleOutline}></IonIcon>
                            <IonLabel>{data.prep_level}</IonLabel>
                          </div>
                          <div className="ReciRow">
                            <IonIcon icon={timeOutline}></IonIcon>
                            <IonLabel>
                              {showPreprationTime(data?.prep_time)}
                            </IonLabel>
                          </div>
                        </div>
                      </div>

                      <div className="bottomRecipe">
                        <div className="productRecipe">
                          <span>{data?.recipesName}</span>
                          {/* <div className="productRecipe">
                            <IonIcon
                              size="medium"
                              aria-hidden="true"
                              icon={pint}
                              slot="start"
                            ></IonIcon>
                            <IonLabel>Breakfast</IonLabel>
                          </div> */}
                        </div>
                        <div className="productRecipe">
                          <div className="ProfileRecipe">
                            <img
                              src={data?.userDetail?.image}
                              alt=""
                              className="MainProductThumb"
                              onError={(e) => {
                                e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                                e.target.src = "./assets/img/img-person.jpg"; // Placeholder image URL
                              }}
                            />

                            <IonLabel>{data?.userDetail?.first_name}</IonLabel>
                          </div>
                          <div className="ProfileRecipe">
                            <IonIcon
                              size="medium"
                              aria-hidden="true"
                              icon={person}
                              slot="start"
                            ></IonIcon>
                            <span>{data?.serving}</span>
                            <IonChip className="GreenDesign">
                              <span>{data.ratings}</span>
                              <IonIcon color="light" size="small" icon={star} />
                            </IonChip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </IonCard>
                </IonCol>
              ))}
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonTitle color="dark">Approved Recipes</IonTitle>
          <IonRow className="ion-padding-vertical">
            {recipeData &&
              recipeData?.approved_recipes?.map((data, index) => (
                <IonCol size="6" key={index}>
                  <IonCard className="ProductCard">
                    <div className="vegIcon">
                      {data?.foodtype === "vegetarian" ? (
                        <img
                          src="/assets/img/veg-icon.svg"
                          alt="Images"
                          className="icon-img"
                        />
                      ) : data?.foodtype === "non-vegetarian" ? (
                        <img
                          src="/assets/img/non-veg-icon.svg"
                          alt="Images"
                          className="icon-img"
                        />
                      ) : (
                        <></>
                      )}

                      <IonButton fill="clear" className="saveIcon">
                        <IonIcon
                          size="large"
                          color="danger"
                          icon={bookmarkOutline}
                        />
                      </IonButton>
                    </div>
                    <div className="RecentProducts">
                      <div className="RecipePro">
                        <img
                          src={data?.images}
                          alt=""
                          onError={(e) => {
                            e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                            e.target.src = "/assets/img/camera-placeholder.png"; // Placeholder image URL
                          }}
                        />
                        {/* <img
                        className="RecentUserImg"
                        src="/assets/img/1525870462-Listing.jpg"
                        alt=""
                      /> */}
                        <div className="TimeingBar">
                          <div className="ReciRow">
                            <IonIcon icon={atCircleOutline}></IonIcon>
                            <IonLabel>{data.prep_level}</IonLabel>
                          </div>
                          <div className="ReciRow">
                            <IonIcon icon={timeOutline}></IonIcon>
                            <IonLabel>
                              {showPreprationTime(data?.prep_time)}
                            </IonLabel>
                          </div>
                        </div>
                      </div>

                      <div className="bottomRecipe">
                        <div className="productRecipe">
                          <span>{data?.recipesName}</span>
                          {/* <div className="productRecipe">
                            <IonIcon
                              size="medium"
                              aria-hidden="true"
                              icon={pint}
                              slot="start"
                            ></IonIcon>
                            <IonLabel>Breakfast</IonLabel>
                          </div> */}
                        </div>
                        <div className="productRecipe">
                          <div className="ProfileRecipe">
                            <img
                              src={data?.userDetail?.image}
                              alt=""
                              className="MainProductThumb"
                              onError={(e) => {
                                e.target.onerror = null; // Remove the event handler to prevent an infinite loop
                                e.target.src = "./assets/img/img-person.jpg"; // Placeholder image URL
                              }}
                            />

                            <IonLabel>{data?.userDetail?.first_name}</IonLabel>
                          </div>
                          <div className="ProfileRecipe">
                            <IonIcon
                              size="medium"
                              aria-hidden="true"
                              icon={person}
                              slot="start"
                            ></IonIcon>
                            <span>{data?.serving}</span>
                            <IonChip className="GreenDesign">
                              <span>{data.ratings}</span>
                              <IonIcon color="light" size="small" icon={star} />
                            </IonChip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </IonCard>
                </IonCol>
              ))}
          </IonRow>
        </IonGrid>
      </IonContent>
      {/* {editRecipe && <SubmitRecipe recipeData={recipeObj} />} */}
    </IonPage>
  );
};

export default MyRecipeComponent;
