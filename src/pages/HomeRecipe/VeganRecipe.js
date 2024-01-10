import { IonButton, IonCol, IonContent, IonGrid, IonLabel, IonPage, IonProgressBar, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle } from "@ionic/react"
import { useEffect, useState } from "react";
import Header from "../../components/Header"

const VeganRecipe = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 0.01);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    if (progress > 1) {
        setTimeout(() => {
            setProgress(0);
        }, 1000);
    }
    const [selectedTab, setSelectedTab] = useState("GoingContest");
    console.log("selectedTab", selectedTab)
    const handleTabChange = (event) => {
        setSelectedTab(event.detail.value);
    };
    return (

        <IonPage>
            <Header />
            <IonContent>
                <IonGrid className="ion-padding-horizontal">
                    <IonRow className="ion-justify-content-center">
                        <IonCol>
                            <img
                                src="/assets/img/veganrecipe.png"
                                alt=""
                                className="RecipeImage"
                            />

                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid className="ion-no-padding">
                    <IonRow className="ion-padding-horizontal">
                        <IonCol size="12">
                            <IonSegment
                                value={selectedTab}
                                onIonChange={handleTabChange}
                                className="personalTab"
                            >
                                <IonSegmentButton value="GoingContest">
                                    <IonLabel>On Going Contest</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="PreviousContests">
                                    <IonLabel>Previous Contests</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>

                            {selectedTab === "GoingContest" && (
                                <IonGrid className="GoingContest">
                                    <IonRow>
                                        <IonCol>
                                            <IonTitle className="SwiperHead  ion-padding-vertical">Vegan Recipe Contest</IonTitle>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <div className="GoingContestProgress">
                                                <span>27th July</span>
                                                <div className=""><IonProgressBar value={progress}></IonProgressBar>
                                                    <p>3 Days Left</p></div>
                                                <span>30th July</span>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <div className="RecipeSubmit">
                                                <h1>134</h1>
                                                <IonTitle className="">Recipes Submitted</IonTitle>
                                            </div>
                                            <div className="ion-padding-vertical">
                                                <IonTitle className="ion-no-padding">How To Participate:</IonTitle>
                                                <p className="ion-no-padding">Lorem ipsum dolor sit amet, consectetuer adipisc-
                                                    ing elit, sed diam nonummy nibh euismod tincid-
                                                    unt ut laoreet dolore magna aliquam erat volutpat.
                                                    Ut wisi enim ad minim veniam, quis nostrud exerci
                                                    tation ullamcorper suscipit lobortis nisl ut aliquip
                                                    ex ea commodo consequat. Duis autem vel eum
                                                    iriure dolor in hendrerit in</p>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <div className="flex ion-padding-vertical">
                                                <div className="VeganContentImg">
                                                    <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding">
                                                    <IonTitle className="VeganHeadingText">Maximum Entry</IonTitle>
                                                    <IonText>Milton Pro Lunch Tiffin</IonText>
                                                </div>
                                            </div>
                                            <div className="flex ion-padding-vertical">
                                                <div className="VeganContentImg">
                                                    <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding">
                                                    <IonTitle className="VeganHeadingText">1st prize</IonTitle>
                                                    <IonText>Home Puff Japanese Technology Rechargeable Wireless Electric Chopper</IonText>
                                                </div>
                                            </div>
                                            <div className="flex ion-padding-vertical">
                                                <div className="VeganContentImg">
                                                    <img src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding">
                                                    <IonTitle className="VeganHeadingText">2nd prize</IonTitle>
                                                    <IonText>Kitchen Clue Stainless Steel Fridge Containers</IonText>
                                                </div>
                                            </div>
                                            <div className="flex ion-padding-vertical">
                                                <div className="VeganContentImg">
                                                    <img src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding">
                                                    <IonTitle className="VeganHeadingText">3rd prize</IonTitle>
                                                    <IonText>Yera Glass Mug with Handle-250ml</IonText>
                                                </div>
                                            </div>
                                            <div className="flex ion-padding-vertical">
                                                <div className="VeganContentImg">
                                                    <img src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding">
                                                    <IonTitle className="VeganHeadingText">Wild card entry</IonTitle>
                                                    <IonText>Kitchen Clue Stainless Steel Fridge Containers</IonText>
                                                </div>
                                            </div>
                                            <div className="flex ion-justify-content-center ion-align-items-center">
                                                <IonButton className="ParticipateBtn" fill="clear">Participate Now</IonButton>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            )}
                            {selectedTab === "PreviousContests" && (
                                <IonGrid>
                                    <IonRow>
                                        <IonGrid>
                                            <IonRow>
                                                <IonCol>
                                                    <div className="flex ion-padding-vertical ion-align-items-center">
                                                        <div className="PriviousImg">
                                                            <img src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg" alt="" />
                                                        </div>
                                                        <div className="ion-padding-start">
                                                            <IonTitle className="PriviousHead">Vegan Recipe Contest</IonTitle>
                                                            <div className="flex ion-justify-content-between">
                                                                <IonText className="datePrivious">27th July to 24 th Aug</IonText>
                                                                <div className="SubmittedPrivious">
                                                                    <IonText>1134 Submitted</IonText>
                                                                    <IonButton fill="clear">Completed</IonButton>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol>
                                                    <div className="flex ion-padding-vertical">
                                                        <div className="PriviousImg">
                                                            <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                                                        </div>
                                                        <div className="ion-padding-start">
                                                            <IonTitle className="PriviousHead">Vegan Recipe Contest</IonTitle>
                                                            <div className="flex ion-justify-content-between">
                                                                <IonText className="datePrivious">27th July to 24 th Aug</IonText>
                                                                <div className="SubmittedPrivious priviousColorChange">
                                                                    <IonText>1134 Submitted</IonText>
                                                                    <IonButton fill="clear">Completed</IonButton>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol>
                                                    <div className="flex ion-padding-vertical">
                                                        <div className="PriviousImg">
                                                            <img src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg" alt="" />
                                                        </div>
                                                        <div className="ion-padding-start">
                                                            <IonTitle className="PriviousHead">Vegan Recipe Contest</IonTitle>
                                                            <div className="flex ion-justify-content-between">
                                                                <IonText className="datePrivious">27th July to 24 th Aug</IonText>
                                                                <div className="SubmittedPrivious">
                                                                    <IonText>1134 Submitted</IonText>
                                                                    <IonButton fill="clear">Completed</IonButton>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol>
                                                    <div className="flex ion-padding-vertical">
                                                        <div className="PriviousImg">
                                                            <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                                                        </div>
                                                        <div className="ion-padding-start">
                                                            <IonTitle className="PriviousHead">Vegan Recipe Contest</IonTitle>
                                                            <div className="flex ion-justify-content-between">
                                                                <IonText className="datePrivious">27th July to 24 th Aug</IonText>
                                                                <div className="SubmittedPrivious">
                                                                    <IonText>1134 Submitted</IonText>
                                                                    <IonButton fill="clear">Completed</IonButton>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol>
                                                    <div className="flex ion-padding-vertical">
                                                        <div className="PriviousImg">
                                                            <img src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg" alt="" />
                                                        </div>
                                                        <div className="ion-padding-start">
                                                            <IonTitle className="PriviousHead">Vegan Recipe Contest</IonTitle>
                                                            <div className="flex ion-justify-content-between">
                                                                <IonText className="datePrivious">27th July to 24 th Aug</IonText>
                                                                <div className="SubmittedPrivious priviousColorChange">
                                                                    <IonText>1134 Submitted</IonText>
                                                                    <IonButton fill="clear">Completed</IonButton>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonRow>
                                    <IonRow>
                                        <IonRow className="ion-padding-vertical">
                                            <IonCol className="RecipeDate">
                                                <IonTitle className="SwiperHead">Vegan Recipe Contest</IonTitle>
                                                <IonText>27th July to 24 th Aug</IonText>
                                            </IonCol>

                                            <div className="flex ion-justify-content-center ion-align-items-center ion-padding-vertical ">
                                                <div className="PriviousImg">
                                                    <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding-start RecipeDateText ion-padding-vertical">
                                                    <IonTitle className="ion-no-padding RecipeDateprize">1st Prize</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateName">Safiya Khan</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateRecipe">Sohan Halwa</IonTitle>
                                                    <IonText className="datePrivious">Perfect recipe to make momhappy on her special day</IonText>
                                                </div>
                                            </div>
                                            <div className="flex ion-justify-content-center ion-align-items-center ion-padding-vertical ">
                                                <div className="PriviousImg">
                                                    <img src="/assets/img/1525832641-Peanut-Butter-Jelly-French-Toast-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding-start RecipeDateText ion-padding-vertical">
                                                    <IonTitle className="ion-no-padding RecipeDateprize">1st Prize</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateName">Safiya Khan</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateRecipe">Sohan Halwa</IonTitle>
                                                    <IonText className="datePrivious">Perfect recipe to make momhappy on her special day</IonText>
                                                </div>
                                            </div>
                                            <div className="flex ion-justify-content-center ion-align-items-center ion-padding-vertical ">
                                                <div className="PriviousImg">
                                                    <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding-start RecipeDateText ion-padding-vertical">
                                                    <IonTitle className="ion-no-padding RecipeDateprize">1st Prize</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateName">Safiya Khan</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateRecipe">Sohan Halwa</IonTitle>
                                                    <IonText className="datePrivious">Perfect recipe to make momhappy on her special day</IonText>
                                                </div>
                                            </div>
                                            <div className="flex ion-justify-content-center ion-align-items-center ion-padding-vertical ">
                                                <div className="PriviousImg">
                                                    <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding-start RecipeDateText ion-padding-vertical">
                                                    <IonTitle className="ion-no-padding RecipeDateprize">1st Prize</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateName">Safiya Khan</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateRecipe">Sohan Halwa</IonTitle>
                                                    <IonText className="datePrivious">Perfect recipe to make momhappy on her special day</IonText>
                                                </div>
                                            </div>
                                            <div className="flex ion-justify-content-center ion-align-items-center ion-padding-vertical ">
                                                <div className="PriviousImg">
                                                    <img src="/assets/img/1525870462-Listing.jpg" alt="" />
                                                </div>
                                                <div className="ion-padding-start RecipeDateText ion-padding-vertical">
                                                    <IonTitle className="ion-no-padding RecipeDateprize">1st Prize</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateName">Safiya Khan</IonTitle>
                                                    <IonTitle className="ion-no-padding RecipeDateRecipe">Sohan Halwa</IonTitle>
                                                    <IonText className="datePrivious">Perfect recipe to make momhappy on her special day</IonText>
                                                </div>
                                            </div>
                                            
                                        </IonRow>
                                    </IonRow>
                                </IonGrid>
                            )}

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>

    )
}
export default VeganRecipe