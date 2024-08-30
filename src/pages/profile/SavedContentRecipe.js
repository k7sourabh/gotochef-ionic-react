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
    useIonViewWillEnter
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
    const [url,setUrl] = useState(``);
    const [selectedTabladder, setSelectedTabladder] = useState("saved");
    const [present] = useIonToast();

    const handleTabChangeladder = (event) => {
        setSelectedTabladder(event.detail.value);
    };

    const Recipelist = async () => {
 
        try{
            const response = await getApiDataWithAuth("/saved-recipes");
            if (response?.status === 200) {
                setSavedrecipes(response?.data?.saved_recipes);
                setFavouriterecipes(response?.data?.fav_recipes);
                setCookedrecipes(response?.data?.cooked_recipes);
            }
        }catch(error){
            console.log(error);
        }
     
    };
    useIonViewWillEnter(() => {
        Recipelist();
    }, []);

    const Handledelete = async (deleteurl) => {
        setShowAlert(true);
        setUrl(deleteurl)
    };

    const confirmRemove = async () => {
            try {              
                const response = await getApiDataWithAuth(url);
                if(response?.status===200){
                    presentToast("Top",response?.data?.message_response);
                    Recipelist();
                }
                if(response?.status===404){
                    presentToast("Top",response?.data?.message_response);
                }
                } catch (err) {
                    console.log(err);
                }
            setShowAlert(false);
            setUrl (``);
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
                                        <IonLabel>Favourite</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value="cooked">
                                        <IonLabel>Cooked</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                                {selectedTabladder === "saved" && (
                                    <IonGrid>
                                        <IonRow>
                                            {savedrecipes&&savedrecipes.length>0?
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
                                                                                Handledelete(
                                                                                `/saved-recipes-delete/${item.id}`
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
                                            <h2>No Saved Recipes Found</h2>
                                        }
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTabladder === "favorite" && (
                                    <IonGrid>
                                        <IonRow>
                                            {favouriterecipes&&favouriterecipes.length>0?
                                                favouriterecipes.map(
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
                                                                                Handledelete(
                                                                                    `/fav-recipes-delete/${item.id}`
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
                                                <h2>No Favourite Recipes Found</h2>
                                            }
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTabladder === "cooked" && (
                                    <IonGrid>
                                        <IonRow>
                                            {cookedrecipes&&cookedrecipes.length>0?
                                                cookedrecipes.map(
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
                                                                                Handledelete(
                                                                                    `/cooked-recipes-delete/${item.id}`   
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
                                                <h2>No Cooked Recipes Found</h2>
                                            }
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
                                setUrl(``);
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
