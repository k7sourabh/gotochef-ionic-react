import {
  IonButton,
  IonCard,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
} from "@ionic/react";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import {
  arrowForwardCircle,
  atCircleOutline,
  bookmarkOutline,
  bookmarkSharp,
  flameOutline,
  person,
  pint,
  search,
  star,
  timeOutline,
} from "ionicons/icons";
import { useState } from "react";
import { getApiData } from "../../utils/Utils";

const HomeRecipe = () => {
  const [selectedTab, setSelectedTab] = useState("Vegan");
  const [popularData, setPopularData] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [allRecentData, setAllRecent] = useState(true)
  const handleTabChange = (event) => {
    setSelectedTab(event.detail.value);
  };

  const homeRecipeApi = async () => {
    try {
      const response = await getApiData(`/getAllRecipes`);
      setPopularData(response?.data?.data?.popular);
      setRecentlyAdded(response?.data?.data?.recentlyAdded); 
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    homeRecipeApi();
  }, []);

  const seeAllRecent = () => {
    // setAllRecent(false)
    // if(!allRecentData){
    //   setRecentlyAdded(allRecentData);
    // }else{
    //   setRecentlyAdded(allRecentData.slice(0,2));
    // }
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader className="TitleHead FlexCol">
          <IonLabel>Hi, Deepshree</IonLabel>
          <IonTitle color="dark">What would you cook today?</IonTitle>
        </IonHeader>
        <IonRow className="ion-padding">
          <IonCol size="12">
            <IonSearchbar
              className="AddressSearch"
              placeholder="Search food"
            ></IonSearchbar>
          </IonCol>
        </IonRow>

        <IonRow className="ion-padding-horizontal">
          <IonCol>
            <IonSlides className="SlidesRecipes">
              <IonSlide>
                <img src="/assets/img/beverage.jpg" alt="" />
              </IonSlide>
              <IonSlide>
                <img src="/assets/img/dairy.png" alt="" />
              </IonSlide>
              <IonSlide>
                <img
                  src="/assets/img/frozen_snacks_adn_ready_to_eat.png"
                  alt=""
                />
              </IonSlide>
              <IonSlide>
                <img src="/assets/img/sauces_jams.jpg" alt="" />
              </IonSlide>
            </IonSlides>
          </IonCol>
        </IonRow>

        <IonRow className="ion-padding-top">
          <IonCol>
            <IonTitle color="dark">Popular Today</IonTitle>
          </IonCol>
        </IonRow>

        <IonRow className=" CustomGap">
          {popularData &&
            popularData?.map((data, i) => (
              <IonCol size="6" key={i}>
                <div className="ProductCard">
                  <div className="vegIcon">
                    {data?.foodtype === "vegetarian" ? (
                      <img src="/assets/img/icon-veg.svg" alt="" />
                    ) : (
                      <img src="/assets/img/non-veg-icon.svg" alt="" />
                    )}
                    <IonButton fill="clear" className="saveIcon">
                      <IonIcon
                        size="large"
                        color="danger"
                        icon={bookmarkOutline}
                      />
                    </IonButton>
                  </div>
                  <div className="RecipePro">
                    <img
                      src={data?.images}
                      alt=""
                      // routerLink="/recipe-page"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/img/img-placeholder.jpg";
                      }}
                    />
                    <div className="TimeingBar">
                      <div className="ReciRow">
                        <IonIcon icon={atCircleOutline}></IonIcon>
                        <IonLabel>Medium</IonLabel>
                      </div>
                      <div className="ReciRow">
                        <IonIcon icon={timeOutline}></IonIcon>
                        <IonLabel>
                          {data?.cook_time}
                          {/* {data?.cook_time.split("")[0]}{" "}
                          {data?.cook_time.split(" ")[1] === "minutes" || data?.cook_time.split("")[1] === "minutes"
                            ? "min"
                            : data?.cook_time.split(" ")[1] || data?.cook_time.split("")[1]=== "Hours"
                            ? "hrs"
                            : "sec"} */}
                        </IonLabel>
                      </div>
                    </div>
                  </div>
                  <div className="bottomRecipe">
                    <div className="productRecipe">
                      <span>{data?.recipesName}</span>
                      <div className="productRecipe">
                        <IonIcon
                          size="medium"
                          aria-hidden="true"
                          icon={pint}
                          slot="start"
                        ></IonIcon>
                        <IonLabel>Breakfast</IonLabel>
                      </div>
                    </div>
                    <div className="productRecipe">
                      <div className="ProfileRecipe">
                        <img
                          src={
                            !data?.userDetail?.avatar
                              ? "/assets/img/img-placeholder.jpg"
                              : data?.userDetail?.avatar
                          }
                          alt="Images"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/assets/img/img-placeholder.jpg";
                          }}
                        />
                        <IonLabel>{data?.userDetail?.first_name}</IonLabel>
                      </div>
                      <div className="ProfileRecipe">
                        {/* <IonIcon
                          size="medium"
                          aria-hidden="true"
                          icon={person}
                          slot="start"
                        ></IonIcon>
                        <span>2</span> */}
                        <IonChip className="GreenDesign">
                          <span>0</span>
                          <IonIcon color="light" size="small" icon={star} />
                        </IonChip>
                      </div>
                    </div>
                  </div>
                </div>
              </IonCol>
            ))}
        </IonRow>

        <IonRow className="ion-padding-top ion-padding-horizontal ion-align-items-center">
          <IonCol size="6">
            <IonTitle color="dark" class="ion-no-padding">
              Recent
            </IonTitle>
          </IonCol>
          <IonCol size="6" className="ion-text-right">
            <IonLabel onClick={seeAllRecent}>See All</IonLabel>
          </IonCol>
        </IonRow>

        <IonRow>
          {recentlyAdded &&
            recentlyAdded.slice(0,2).map((data, i) => (
              <IonCol size="6" key={i}>
                <IonCard className="ProductCard">
                  <div className="vegIcon">
                    {data?.foodtype === "vegetarian" ? (
                      <img src="/assets/img/icon-veg.svg" alt="" />
                    ) : (
                      <img src="/assets/img/non-veg-icon.svg" alt="" />
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
                      className="RecentUserImg"
                      src={data?.images}
                      alt=""
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/img/img-placeholder.jpg";
                      }}
                    />
                    <div className="TimeingBar">
                      <div className="ReciRow">
                        <IonIcon icon={atCircleOutline}></IonIcon>
                        <IonLabel>Medium</IonLabel>
                      </div>
                      <div className="ReciRow">
                        <IonIcon icon={timeOutline}></IonIcon>
                        <IonLabel>
                          {data?.cook_time}
                          {/* {data?.cook_time.split("")[0]}{" "}
                          {data?.cook_time.split(" ")[1] === "minutes"
                            ? "min"
                            : data?.cook_time.split(" ")[1] === "Hours"
                            ? "hrs"
                            : "sec"} */}
                        </IonLabel>
                      </div>
                    </div>

                  </div>

                    <div className="bottomRecipe">
                      <div className="productRecipe">
                        <span>{data?.recipesName}</span>
                        <div className="productRecipe">
                          <IonIcon
                            size="medium"
                            aria-hidden="true"
                            icon={pint}
                            slot="start"
                          ></IonIcon>
                          <IonLabel>Breakfast</IonLabel>
                        </div>
                      </div>
                      <div className="productRecipe">
                        <div className="ProfileRecipe">
                          <img
                            src={
                              !data?.userDetail?.avatar
                                ? "/assets/img/img-placeholder.jpg"
                                : data?.userDetail?.avatar
                            }
                            alt="Images"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/assets/img/img-placeholder.jpg";
                            }}
                          />
                          <IonLabel>{data?.userDetail?.first_name}</IonLabel>
                        </div>
                        <div className="ProfileRecipe">
                          {/* <IonIcon
                            size="medium"
                            aria-hidden="true"
                            icon={person}
                            slot="start"
                          ></IonIcon>
                          <span>2</span> */}
                          <IonChip className="GreenDesign">
                            <span>0</span>
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

        <IonRow className="ion-padding-top ion-padding-horizontal ion-align-items-center">
          <IonCol size="6">
            <IonTitle color="dark" class="ion-no-padding">
              My Recipes
            </IonTitle>
          </IonCol>
          <IonCol size="6" className="ion-text-right">
            <IonButton fill="clear" routerLink="/my-recipe" className="text-button">See All</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6">
            <IonCard className="ProductCard">
              <div className="vegIcon">
                <img src="/assets/img/icon-veg.svg" alt="" />
                <IonButton fill="clear" className="saveIcon">
                  <IonIcon size="large" color="danger" icon={bookmarkOutline} />
                </IonButton>
              </div>
              <div className="RecentProducts">
                <div className="RecipePro">
                  <img
                    className="RecentUserImg"
                    src="/assets/img/1525870462-Listing.jpg"
                    alt=""
                  />
                  <div className="TimeingBar">
                    <div className="ReciRow">
                      <IonIcon icon={atCircleOutline}></IonIcon>
                      <IonLabel>Medium</IonLabel>
                    </div>
                    <div className="ReciRow">
                      <IonIcon icon={timeOutline}></IonIcon>
                      <IonLabel>30 min</IonLabel>
                    </div>
                  </div>

                </div>

                <div className="bottomRecipe">
                  <div className="productRecipe">
                    <span>Chicken Caesar Salad</span>
                    <div className="productRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={pint}
                        slot="start"
                      ></IonIcon>
                      <IonLabel>Breakfast</IonLabel>
                    </div>
                  </div>
                  <div className="productRecipe">
                    <div className="ProfileRecipe">
                      <img src="/assets/img/profile.jpg" alt="Images" />
                      <IonLabel>Deepanjali</IonLabel>
                    </div>
                    <div className="ProfileRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={person}
                        slot="start"
                      ></IonIcon>
                      <span>2</span>
                      <IonChip className="GreenDesign">
                        <span>0</span>
                        <IonIcon color="light" size="small" icon={star} />
                      </IonChip>
                    </div>
                  </div>
                </div>
              </div>
            </IonCard>
          </IonCol>
          <IonCol size="6">
            <IonCard className="ProductCard">
              <div className="vegIcon">
                <img src="/assets/img/icon-veg.svg" alt="" />
                <IonButton fill="clear" className="saveIcon">
                  <IonIcon size="large" color="danger" icon={bookmarkOutline} />
                </IonButton>
              </div>
              <div className="RecentProducts">
                <div className="RecipePro">
                  <img
                    className="RecentUserImg"
                    src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                    alt=""
                  />
                  <div className="TimeingBar">
                    <div className="ReciRow">
                      <IonIcon icon={atCircleOutline}></IonIcon>
                      <IonLabel>Medium</IonLabel>
                    </div>
                    <div className="ReciRow">
                      <IonIcon icon={timeOutline}></IonIcon>
                      <IonLabel>30 min</IonLabel>
                    </div>
                  </div>

                </div>

                <div className="bottomRecipe">
                  <div className="productRecipe">
                    <span>Chicken Caesar Salad</span>
                    <div className="productRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={pint}
                        slot="start"
                      ></IonIcon>
                      <IonLabel>Breakfast</IonLabel>
                    </div>
                  </div>
                  <div className="productRecipe">
                    <div className="ProfileRecipe">
                      <img src="/assets/img/profile.jpg" alt="Images" />
                      <IonLabel>Deepanjali</IonLabel>
                    </div>
                    <div className="ProfileRecipe">
                      <IonIcon
                        size="medium"
                        aria-hidden="true"
                        icon={person}
                        slot="start"
                      ></IonIcon>
                      <span>2</span>
                      <IonChip className="GreenDesign">
                        <span>0</span>
                        <IonIcon color="light" size="small" icon={star} />
                      </IonChip>
                    </div>
                  </div>
                </div>
              </div>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-padding-horizontal">
            <IonCol size="12">
              <IonSegment
                value={selectedTab}
                onIonChange={handleTabChange}
                className="personalTab"
              >
                <IonSegmentButton value="Vegan">
                  <IonLabel>Vegan</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="LowCarb">
                  <IonLabel>Low Carb</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Fasting">
                  <IonLabel>Fasting</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Noodle">
                  <IonLabel>Noodle</IonLabel>
                </IonSegmentButton>
              </IonSegment>

              {selectedTab === "Vegan" && (
                <IonGrid className="ion-padding-bottom">
                  <IonRow>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img
                          src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                          alt=""
                        />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img
                          src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                          alt=""
                        />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img
                          src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                          alt=""
                        />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
              {selectedTab === "LowCarb" && (
                <IonGrid className="ion-padding-bottom">
                  <IonRow>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
              {selectedTab === "Fasting" && (
                <IonGrid className="ion-padding-bottom">
                  <IonRow>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img
                          src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                          alt=""
                        />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img
                          src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                          alt=""
                        />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img
                          src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                          alt=""
                        />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
              {selectedTab === "Noodle" && (
                <IonGrid className="ion-padding-bottom">
                  <IonRow>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                    <IonCol size="4" className="CustomGaps">
                      <div className="RecipiPros">
                        <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                        <div className="UserMetas">
                          <IonTitle className="ion-no-padding">
                            Indonesian
                          </IonTitle>
                          <IonLabel>By Adrianna curl</IonLabel>
                        </div>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* <IonRow className="ion-padding-vertical ion-padding-horizontal">
          <IonCol size="12">
            <IonSegment value="Salad" scrollable>
              <IonSegmentButton value="Salad">
                <IonLabel className="ion-no-margin">Salad</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="Appetizer">
                <IonLabel className="ion-no-margin">Appetizer</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="Breckfast">
                <IonLabel className="ion-no-margin">Breckfast</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="Noodle">
                <IonLabel className="ion-no-margin">Noodle</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonCol>
        </IonRow> */}

        {/* <IonGrid className="ion-padding-bottom">
          <IonRow>
            <IonCol size="4" className="CustomGaps">
              <div className="RecipiPros">
                <img
                  src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                  alt=""
                />
                <div className="UserMetas">
                  <IonTitle className="ion-no-padding">Indonesian</IonTitle>
                  <IonLabel>By Adrianna curl</IonLabel>
                </div>
              </div>
            </IonCol>
            <IonCol size="4" className="CustomGaps">
              <div className="RecipiPros">
                <img
                  src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                  alt=""
                />
                <div className="UserMetas">
                  <IonTitle className="ion-no-padding">Indonesian</IonTitle>
                  <IonLabel>By Adrianna curl</IonLabel>
                </div>
              </div>
            </IonCol>
            <IonCol size="4" className="CustomGaps">
              <div className="RecipiPros">
                <img
                  src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg"
                  alt=""
                />
                <div className="UserMetas">
                  <IonTitle className="ion-no-padding">Indonesian</IonTitle>
                  <IonLabel>By Adrianna curl</IonLabel>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};

export default HomeRecipe;
