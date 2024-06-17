import React, { useEffect } from 'react'
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
    useIonViewWillEnter,
    useIonToast,
    IonSpinner
} from "@ionic/react";
import { useState } from "react";
import { close } from "ionicons/icons";
import { getApiData, postApiData } from "../../utils/Utils";
import { useHistory } from 'react-router';

const SavedContentRecipe = () => {

    const [loader, setLoader] = useState(false);
    const [present] = useIonToast();
    const [RecipeData, setRecipeData] = useState([])
    const [selectedTabladder, setSelectedTabladder] = useState("saved");
    const history = useHistory();
    const handleTabChangeladder = (event) => {
        setSelectedTabladder(event.detail.value);
    };

    const fetchData = async () => {
        setLoader(true);
        try {
            const response = await getApiData("/saved-recipes");
            if (response.data.status === 200) {
                setRecipeData(response.data)
            }
        } catch (err) {
            console.log(err)
        }
        setLoader(false);
    }

    useIonViewWillEnter(() => {
        fetchData();
    });


    const handleSaved = async (id) => {
        setLoader(true);
        try {
            const response = await getApiData(`/saved-recipes-delete/${id}`);
            presentToast("Top", response?.data?.message_response);
            fetchData();
        } catch (err) {
            console.log(err)
        }
        setLoader(false);
    };
    const handlefavorite = async (id) => {
        setLoader(true);
        try {
            const response = await getApiData(`/fav-recipes-delete/${id}`);
            presentToast("Top", response?.data?.message_response);
            fetchData();
        } catch (err) {
            console.log(err)
        }
        setLoader(false)
    };
    const handlecooked = async (id) => {
        setLoader(true);
        try {
            const response = await getApiData(`/cooked-recipes-delete/${id}`);
            presentToast("Top", response?.data?.message_response);
            fetchData();
        } catch (err) {
            console.log(err)
        }
        setLoader(false)
    };
    const presentToast = (position, message) => {
        present({
            message: message,
            duration: 1500,
            position: position,
        });
    };

    const handledetail = (slug) => {
        history.push(`/recipe-details/${slug}`)
    }

    return (
        <>
            <IonPage>
                <IonContent>
                    <IonGrid>
                        <IonRow className='ion-padding-vertical'>
                            <IonCol size='12'>
                                <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
                                    <div className="TitleHead">
                                        <IonButton className="backBtn" fill="clear" routerLink="/profile">
                                            <i class="material-icons dark">west</i>
                                        </IonButton>
                                        <IonTitle color="dark">Saved Recipe</IonTitle>
                                    </div>
                                </IonHeader>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="12">
                                <IonSegment
                                    value={selectedTabladder}
                                    onIonChange={handleTabChangeladder}
                                    className="personalTab">
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
                                        {
                                            RecipeData && RecipeData?.saved_recipes?.length > 0 ? (
                                                <IonRow>
                                                    <IonCol size="12">
                                                        {
                                                            RecipeData &&
                                                            RecipeData.saved_recipes?.map((item) => (
                                                                <IonCard className="ProductCard" key={item.id}>
                                                                    <IonButton fill='clear' className='RecipeProduct'
                                                                        onClick={() => handledetail(item.slug)}
                                                                    >
                                                                        <img
                                                                            src={item.images}
                                                                            alt="category cover"
                                                                            className="MainProductThumb"
                                                                            onError={(e) => {
                                                                                e.target.onerror = null;
                                                                                e.target.src = "/assets/img/img-placeholder.jpg";
                                                                            }}
                                                                        />
                                                                    </IonButton>
                                                                    <IonCardContent className="ion-no-padding ion-margin-top">
                                                                        <IonText className="ProductTitle">
                                                                            {item.recipesName}
                                                                        </IonText>
                                                                        <IonButton
                                                                            className="AddToCartBtn"
                                                                            size="default"
                                                                            shape="round"
                                                                            fill="outline">
                                                                            <div className="addText" onClick={() => handleSaved(item.id)}>Remove
                                                                                <IonIcon slot="end" size="small" icon={close} />
                                                                            </div>
                                                                        </IonButton>
                                                                    </IonCardContent>
                                                                </IonCard>
                                                            ))
                                                        }
                                                    </IonCol>
                                                </IonRow>
                                            ) : (
                                                <IonGrid className="ion-padding-vertical ion-padding-horizontal">
                                                    <IonRow>
                                                        <IonCol>
                                                            <div className="NoSubmitBtn">
                                                                <IonButton fill="clear">
                                                                    No saved Recipes
                                                                </IonButton>
                                                            </div>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonGrid>
                                            )
                                        }
                                    </IonGrid>
                                )}
                                {selectedTabladder === "favorite" && (
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size="12">
                                                {
                                                    RecipeData.fav_recipes?.map((item,i) => (
                                                        <IonCard className="ProductCard" key={i}>
                                                            <IonButton fill='clear' className='RecipeProduct'
                                                                onClick={() => handledetail(item.slug)}
                                                            >
                                                                <img
                                                                    src={item.images}
                                                                    alt="category cover"
                                                                    className="MainProductThumb"
                                                                    onError={(e) => {
                                                                        e.target.onerror = null;
                                                                        e.target.src = "/assets/img/img-placeholder.jpg";
                                                                    }}
                                                                />
                                                            </IonButton>
                                                            <IonCardContent className="ion-no-padding ion-margin-top">
                                                                <IonText className="ProductTitle">
                                                                    {item.recipesName}
                                                                </IonText>
                                                                <IonButton
                                                                    className="AddToCartBtn"
                                                                    size="default"
                                                                    shape="round"
                                                                    fill="outline">
                                                                    <div className="addText" onClick={() => handlefavorite(item.id)}>Remove
                                                                        <IonIcon slot="end" size="small" icon={close} />
                                                                    </div>
                                                                </IonButton>
                                                            </IonCardContent>
                                                        </IonCard>
                                                    ))
                                                }
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                                {selectedTabladder === "cooked" && (
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size="12">
                                                {
                                                    RecipeData.cooked_recipes?.map((item) => (
                                                        <IonCard className="ProductCard" key={item.id}>
                                                            <IonButton fill='clear' className='RecipeProduct'
                                                                onClick={() => handledetail(item.slug)}
                                                            >
                                                                <img
                                                                    src={item.images}
                                                                    alt="category cover"
                                                                    className="MainProductThumb"
                                                                    onError={(e) => {
                                                                        e.target.onerror = null;
                                                                        e.target.src = "/assets/img/img-placeholder.jpg";
                                                                    }}
                                                                />
                                                            </IonButton>
                                                            <IonCardContent className="ion-no-padding ion-margin-top">
                                                                <IonText className="ProductTitle">
                                                                    {item.recipesName}
                                                                </IonText>
                                                                <IonButton
                                                                    className="AddToCartBtn"
                                                                    size="default"
                                                                    shape="round"
                                                                    fill="outline">
                                                                    <div className="addText" onClick={() => handlecooked(item.id)}>Remove
                                                                        <IonIcon slot="end" size="small" icon={close} />
                                                                    </div>
                                                                </IonButton>
                                                                {loader && (
                                                                    <div className="loader-container">
                                                                        <IonSpinner name="crescent" />
                                                                    </div>
                                                                )}
                                                            </IonCardContent>
                                                        </IonCard>
                                                    ))
                                                }
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                )}
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    )
}

export default SavedContentRecipe