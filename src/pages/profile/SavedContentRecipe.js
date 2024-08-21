import React, { useEffect } from "react";
import {
    IonSegment,
    IonSegmentButton,
    IonCol,
    IonGrid,
    IonRow,
    IonText,
    IonLabel,
    IonButton,
    IonTitle,
    IonCard,
    IonCardContent,
    IonIcon,
    IonContent,
    IonPage,
    IonHeader,
    IonAlert,
} from "@ionic/react";
import { useState } from "react";
import { close } from "ionicons/icons";
import { getApiDataWithAuth, postApiDataWithAuth } from "../../utils/Utils";
import { useIonToast } from "@ionic/react";

const SavedContentRecipe = () => {
    const [savedrecipes, setSavedrecipes] = useState([]);
    const [favouriterecipes, setFavouriterecipes] = useState([]);
    const [cookedrecipes, setCookedrecipes] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [savedtodelete, setSavedtoDelete] = useState(null);
    const [favtodelete, setFavtoDelete] = useState(null);
    const [cookedtodelete, setCookedtoDelete] = useState(null);
    const [selectedTabladder, setSelectedTabladder] = useState("saved");
    const [present] = useIonToast();

    const handleTabChangeladder = (event) => {
        setSelectedTabladder(event.detail.value);
    };

    const Recipelist = async () => {
        console.log("here");
        const response = await getApiDataWithAuth("/saved-recipes");
        console.log("res", response?.data);
        if (response?.status === 200) {
            setSavedrecipes(response?.data?.saved_recipes);
            setFavouriterecipes(response?.data?.fav_recipes);
            setCookedrecipes(response?.data?.cooked_recipes);
        }
    };
    useEffect(() => {
        Recipelist();
    }, []);

    const HandleSaveddelete = async (savedid) => {
        setShowAlert(true);
        setSavedtoDelete(savedid);
    };

    const HandleFavouritedelete = async (favid) => {
        setShowAlert(true);
        setFavtoDelete(favid);
        console.log("fvvv", favtodelete);
    };

    const HandleCookeddelete = async (cookedid) => {
        setShowAlert(true);
        setCookedtoDelete(cookedid);
        console.log("cooked", cookedtodelete);
    };

    const confirmRemove = async () => {
        if (savedtodelete !== null) {
            // try {

            //     const response = await getApiDataWithAuth(`/saved-recipes-delete/${savedtodelete}`);
            //     if(response?.status===200){
            //         presentToast("Top",response?.data?.message_response);
            //         Recipelist();
            //     }
            //     if(response?.status==404){
            //         presentToast("Top",response?.data?.message_response);
            //     }
            //     } catch (err) {
            //         console.log(err);
            //     }
            setShowAlert(false);
            setSavedtoDelete(null);
        }
        if (favtodelete !== null) {
            // try {

            //     const response = await getApiDataWithAuth(`/fav-recipes-delete/${favtodelete}`);
            //     if(response?.status===200){
            //         presentToast("Top",response?.data?.message_response);
            //         Recipelist();
            //     }
            //     if(response?.status==404){
            //         presentToast("Top",response?.data?.message_response);
            //     }
            //     } catch (err) {
            //         console.log(err);
            //     }
            setShowAlert(false);
            setFavtoDelete(null);
            console.log("favid", favtodelete);
        }
        if (cookedtodelete !== null) {
            // try {

            //     const response = await getApiDataWithAuth(`/cooked-recipes-delete/${cookedtodelete}`);
            //     if(response?.status===200){
            //         presentToast("Top",response?.data?.message_response);
            //         Recipelist();
            //     }
            //     if(response?.status==404){
            //         presentToast("Top",response?.data?.message_response);
            //     }
            //     } catch (err) {
            //         console.log(err);
            //     }
            console.log("cookedid", cookedtodelete);
            setShowAlert(false);
            setCookedtoDelete(null);
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
            <IonPage>
                <IonContent>
                    <IonGrid>
                        <IonRow className="ion-padding-vertical">
                            <IonCol size="12">
                                <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
                                    <div className="TitleHead">
                                        <IonButton
                                            className="backBtn"
                                            fill="clear"
                                            routerLink="/profile"
                                        >
                                            <i class="material-icons dark">
                                                west
                                            </i>
                                        </IonButton>
                                        <IonTitle color="dark">
                                            Saved Recipe
                                        </IonTitle>
                                    </div>
                                </IonHeader>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="12">
                                <IonSegment
                                    value={selectedTabladder}
                                    onIonChange={handleTabChangeladder}
                                    className="personalTab"
                                >
                                    <IonSegmentButton value="saved">
                                        <IonLabel>Saved</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="favorite">
                                        <IonLabel>Favorite</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="cooked">
                                        <IonLabel>Cooked</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                                {selectedTabladder === "saved" && (
                                    <IonGrid>
                                        <IonRow>
                                            {savedrecipes?
                                            savedrecipes.map(
                                                (item, index) => {
                                                    return (
                                                        <IonCol
                                                            size="6"
                                                            key={index}
                                                        >
                                                            <IonCard className="ProductCard">
                                                                <img
                                                                    src={
                                                                        item.images
                                                                    }
                                                                    alt="category cover"
                                                                    className="MainProductThumb"
                                                                />
                                                                <IonCardContent className="ion-no-padding ion-margin-top">
                                                                    <IonText className="ProductTitle">
                                                                        {
                                                                            item.recipesName
                                                                        }
                                                                    </IonText>
                                                                    <IonButton
                                                                        className="AddToCartBtn"
                                                                        size="default"
                                                                        shape="round"
                                                                        fill="outline"
                                                                        onClick={() =>
                                                                            HandleSaveddelete(
                                                                                item.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <div className="addText">
                                                                            Remove
                                                                            <IonIcon
                                                                                slot="end"
                                                                                size="small"
                                                                                icon={
                                                                                    close
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </IonButton>
                                                                </IonCardContent>
                                                            </IonCard>
                                                        </IonCol>
                                                    );
                                                }
                                            )
                                        :
                                        <div>No Data Found</div>
                                        }
                                            {/* <IonCol size="6">
                                                <IonCard className="ProductCard">
                                                    <img
                                                        src="/assets/img/sandwich.png"
                                                        alt="category cover"
                                                        className="MainProductThumb"
                                                    />
                                                    <IonCardContent className="ion-no-padding ion-margin-top">
                                                        <IonText className="ProductTitle">
                                                            Kesar Badam Flavour
                                                        </IonText>
                                                        <IonButton
                                                            className="AddToCartBtn"
                                                            size="default"
                                                            shape="round"
                                                            fill="outline"
                                                        >
                                                            <div className="addText">
                                                                Remove
                                                                <IonIcon
                                                                    slot="end"
                                                                    size="small"
                                                                    icon={close}
                                                                />
                                                            </div>
                                                        </IonButton>
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonCard className="ProductCard">
                                                    <img
                                                        src="/assets/img/1525870462-Listing.jpg"
                                                        alt="category cover"
                                                        className="MainProductThumb"
                                                    />
                                                    <IonCardContent className="ion-no-padding ion-margin-top">
                                                        <IonText className="ProductTitle">
                                                            Kesar Badam Flavour
                                                        </IonText>
                                                        <IonButton
                                                            className="AddToCartBtn"
                                                            size="default"
                                                            shape="round"
                                                            fill="outline"
                                                        >
                                                            <div className="addText">
                                                                Remove
                                                                <IonIcon
                                                                    slot="end"
                                                                    size="small"
                                                                    icon={close}
                                                                />
                                                            </div>
                                                        </IonButton>
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonCol> */}
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTabladder === "favorite" && (
                                    <IonGrid>
                                        <IonRow>
                                            {favouriterecipes?.map(
                                                (item, index) => {
                                                    return (
                                                        <IonCol
                                                            size="6"
                                                            key={index}
                                                        >
                                                            <IonCard className="ProductCard">
                                                                <img
                                                                    src={
                                                                        item.images
                                                                    }
                                                                    alt="category cover"
                                                                    className="MainProductThumb"
                                                                />
                                                                <IonCardContent className="ion-no-padding ion-margin-top">
                                                                    <IonText className="ProductTitle">
                                                                        {
                                                                            item.recipesName
                                                                        }
                                                                    </IonText>
                                                                    <IonButton
                                                                        className="AddToCartBtn"
                                                                        size="default"
                                                                        shape="round"
                                                                        fill="outline"
                                                                        onClick={() =>
                                                                            HandleFavouritedelete(
                                                                                item.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <div className="addText">
                                                                            Remove
                                                                            <IonIcon
                                                                                slot="end"
                                                                                size="small"
                                                                                icon={
                                                                                    close
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </IonButton>
                                                                </IonCardContent>
                                                            </IonCard>
                                                        </IonCol>
                                                    );
                                                }
                                            )}
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTabladder === "cooked" && (
                                    <IonGrid>
                                        <IonRow>
                                            {cookedrecipes?.map(
                                                (item, index) => {
                                                    return (
                                                        <IonCol
                                                            size="6"
                                                            key={index}
                                                        >
                                                            <IonCard className="ProductCard">
                                                                <img
                                                                    src={
                                                                        item.images
                                                                    }
                                                                    alt="category cover"
                                                                    className="MainProductThumb"
                                                                />
                                                                <IonCardContent className="ion-no-padding ion-margin-top">
                                                                    <IonText className="ProductTitle">
                                                                        {
                                                                            item.recipesName
                                                                        }
                                                                    </IonText>
                                                                    <IonButton
                                                                        className="AddToCartBtn"
                                                                        size="default"
                                                                        shape="round"
                                                                        fill="outline"
                                                                        onClick={() =>
                                                                            HandleCookeddelete(
                                                                                item.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <div className="addText">
                                                                            Remove
                                                                            <IonIcon
                                                                                slot="end"
                                                                                size="small"
                                                                                icon={
                                                                                    close
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </IonButton>
                                                                </IonCardContent>
                                                            </IonCard>
                                                        </IonCol>
                                                    );
                                                }
                                            )}
                                        </IonRow>
                                    </IonGrid>
                                )}
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={"Confirm Delete"}
                    message={"Are you sure you want to delete this recipe?"}
                    buttons={[
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: () => {
                                setShowAlert(false);
                                if (savedtodelete) {
                                    setSavedtoDelete(null);
                                }
                                if (favtodelete) {
                                    setFavtoDelete(null);
                                }
                                if (cookedtodelete) {
                                    setCookedtoDelete(null);
                                }
                            },
                        },
                        {
                            text: "Delete",
                            handler: () => {
                                confirmRemove();
                            },
                        },
                    ]}
                />
            </IonPage>
        </>
    );
};

export default SavedContentRecipe;
