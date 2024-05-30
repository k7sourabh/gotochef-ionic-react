import {
  IonSegment,
  IonSegmentButton,
  IonCol,
  IonGrid,
  IonPage,
  IonContent,
  IonRow,
  IonText,
  IonLabel,
  IonIcon,
  IonHeader,
  IonButton,
  IonTitle,
} from "@ionic/react";
import Header from "../../components/Header";
import {
  lockClosed,
  refreshCircleOutline,
  refreshOutline,
  thumbsUp,
  thumbsUpOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { getApiData } from "../../utils/Utils";

const Dashboard = () => {
  const [selectedTabladder, setSelectedTabladder] = useState("LadderStatus");
  const [userDashboardData, setUserDashboardData] = useState({});
  const handleTabChangeladder = (event) => {
    setSelectedTabladder(event.detail.value);
  };

  const recipeDetails = async () => {
    try {
      const response = await getApiData(`/user-dashboard`);
      console.log(response?.data);
      setUserDashboardData(response?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    recipeDetails();
  }, []);

  //  console.log(userDashboardData?.user_level_point)

  return (
    <>
      <IonPage>
        {/* <Header /> */}
        <IonContent>
          <IonHeader className="TitleHead bottom-shadow">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i class="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Dashboard</IonTitle>
          </IonHeader>
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-padding-horizontal">
              <IonCol size="12">
                <IonSegment
                  value={selectedTabladder}
                  onIonChange={handleTabChangeladder}
                  className="personalTab"
                >
                  <IonSegmentButton value="LadderStatus">
                    <IonLabel>LadderStatus</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="MyBadges">
                    <IonLabel>My Badges</IonLabel>
                  </IonSegmentButton>
                </IonSegment>

                {selectedTabladder === "LadderStatus" && (
                  <IonGrid class="ion-no-padding">
                    <IonRow className="LadderContent">
                      <IonCol>
                        <div className="passionateText">
                          <img src="/assets/img/dash-img.png" alt="Images" />
                          <IonText>
                            Passionate level(
                            {
                              userDashboardData?.user_dashboard
                                ?.user_level_point
                            }
                            )
                          </IonText>
                        </div>
                        <div className="prohomeText">
                          <div className="profileLock">
                            <img
                              src="/assets/img/img-person.jpg"
                              alt="Images"
                            />
                            <IonIcon
                              color="dark"
                              size="large"
                              icon={lockClosed}
                            />
                          </div>
                          <div className="">
                            <IonText>ProHome</IonText>
                            <h4 className="TextDanger">
                              -{" "}
                              {
                                userDashboardData?.user_dashboard?.level_text
                                  ?.enable_heading_text
                              }
                            </h4>
                            <h4 className="TextGray">
                              -{" "}
                              {
                                userDashboardData?.user_dashboard?.level_text
                                  ?.disable_heading_text
                              }
                            </h4>
                            <ul className="ProHomeList">
                              {userDashboardData?.user_dashboard?.level_text?.disable_text
                                .split("\n")
                                .slice(0, -1)
                                .map((data, i) => (
                                  <li key={i}>{data}</li>
                                ))}
                              {userDashboardData?.user_dashboard?.level_text?.disable_text
                                .split("\n")
                                .slice(-1)
                                .map((data, i) => (
                                  <li key={i} className="TextDanger">
                                    {data}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow className="LadderContent">
                      <IonGrid class="ion-no-padding">
                        <IonRow className="ViewsContent ion-padding-vertical">
                          <IonCol size="4" className="TotalViews">
                            <IonText>Total Views</IonText>
                          </IonCol>
                          <IonCol>
                            <IonText>Last 7 Days</IonText>
                          </IonCol>
                          <IonCol>
                            <IonText>Last 30 Days</IonText>
                          </IonCol>
                          <IonCol>
                            <IonText>Lifetime</IonText>
                          </IonCol>
                        </IonRow>
                        <IonRow className="ion-padding-vertical">
                          <IonCol size="4">
                            <div className="RecipeContent">
                              <img src="/assets/img/review.png" alt="" />
                              <IonText>Reviews</IonText>
                            </div>
                          </IonCol>
                          <IonCol>
                            <IonText className="RecipeRefresh">
                              {
                                userDashboardData?.user_dashboard
                                  ?.sevendaysreview
                              }
                            </IonText>
                          </IonCol>
                          <IonCol>
                            <IonText className="RecipeRefresh">
                              {
                                userDashboardData?.user_dashboard
                                  ?.thirtydaysreview
                              }
                            </IonText>
                          </IonCol>
                          <IonCol>
                            {/* <div className="RecipeRefresh">
                              <IonIcon
                                aria-hidden="true"
                                icon={refreshOutline}
                                slot="start"
                              ></IonIcon>
                            </div> */}
                            <IonText className="RecipeRefresh">
                              {
                                userDashboardData?.user_dashboard
                                  ?.lifetimereview
                              }
                            </IonText>
                          </IonCol>
                        </IonRow>
                        <IonRow className="ion-padding-vertical">
                          <IonCol size="4">
                            <div className="RecipeContent">
                              <img src="/assets/img/Recipes.png" alt="" />
                              <IonText>Recipe</IonText>
                            </div>
                          </IonCol>
                          <IonCol>
                            <IonText className="RecipeRefresh">
                              {
                                userDashboardData?.user_dashboard
                                  ?.sevendaysrecipes
                              }
                            </IonText>
                          </IonCol>
                          <IonCol>
                            <IonText className="RecipeRefresh">
                              {
                                userDashboardData?.user_dashboard
                                  ?.sevendaysrecipes
                              }
                            </IonText>
                          </IonCol>
                          <IonCol>
                            <IonText className="RecipeRefresh">
                              {
                                userDashboardData?.user_dashboard
                                  ?.sevendaysrecipes
                              }
                            </IonText>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonRow>
                    <IonRow className="MorefoodContent">
                      <IonCol
                        size="12"
                        className="flex ion-justify-content-between ion-align-items-center"
                      >
                        <div className="MorefoodBox">
                          <img
                            src="/assets/img/review.png"
                            alt="Images"
                            class="TabIcon"
                          />
                          <IonLabel>Total Reviews</IonLabel>
                        </div>
                        <div className="ReviewCount">
                          <IonText>
                            {userDashboardData?.user_dashboard?.total_review}{" "}
                            Review
                          </IonText>
                        </div>
                      </IonCol>
                      <IonCol
                        size="12"
                        className="flex ion-justify-content-between ion-align-items-center"
                      >
                        <div className="MorefoodBox">
                          <IonIcon
                            aria-hidden="true"
                            icon={thumbsUpOutline}
                            slot="start"
                            size="large"
                            className="LikeIcon"
                          ></IonIcon>
                          <IonLabel>Like</IonLabel>
                        </div>
                        <div className="ReviewCount">
                          <IonText>
                            {userDashboardData?.user_dashboard?.total_like}{" "}
                            Likes
                          </IonText>
                        </div>
                      </IonCol>
                      <IonCol
                        size="12"
                        className="flex ion-justify-content-between ion-align-items-center"
                      >
                        <div className="MorefoodBox">
                          <img
                            src="/assets/img/Recipes.png"
                            alt="Images"
                            class="TabIcon"
                          />
                          <IonLabel>Recipes</IonLabel>
                        </div>
                        <div className="ReviewCount">
                          <IonText>
                            {
                              userDashboardData?.user_dashboard
                                ?.total_recipe_count
                            }{" "}
                            Recipe
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                )}
                {selectedTabladder === "MyBadges" && (
                  <IonGrid className="ion-padding-vertical">
                    <IonRow className="flex ion-align-items-center">
                      <IonCol size="6">
                        <IonText className="verticalLine">
                          Recent Achievement
                        </IonText>
                      </IonCol>
                      <IonCol size="6" className="flex ion-justify-content-end">
                        <IonButton fill="clear" routerLink="/badges">
                          View Collection
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    {userDashboardData?.user_dashboard?.my_badges?.map(
                      (data, i) => (
                        <IonRow
                          className="badgesImg ion-padding-vertical"
                          key={i}
                        >
                          <img
                            src={
                              !data.images
                                ? "/assets/img/img-placeholder.jpg"
                                : data.images
                            }
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/assets/img/img-placeholder.jpg";
                            }}
                            alt={`Recipe ${i}`}
                            class="TabIcon"
                          />

                          <IonText>{data.num_review} Recipe</IonText>
                        </IonRow>
                      )
                    )}

                    <IonRow>
                      <IonCol size="6">
                        <IonText className="RecipeRefresh">Up Next</IonText>
                      </IonCol>
                    </IonRow>
                    {userDashboardData?.user_dashboard?.up_coming_badges?.map(
                      (data, i) => (
                        <IonRow
                          className="badgesImg ion-padding-vertical"
                          key={i}
                        >
                          <img
                            src={
                              !data.images
                                ? "/assets/img/img-placeholder.jpg"
                                : data.images
                            }
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/assets/img/img-placeholder.jpg";
                            }}
                            // src={item.images}
                            alt={`Recipe ${i}`}
                            class="TabIcon"
                          />

                          <IonText>{data.num_review} Like Review</IonText>
                        </IonRow>
                      )
                    )}
                  </IonGrid>
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};
export default Dashboard;
