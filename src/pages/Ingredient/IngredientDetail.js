import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle } from '@ionic/react';
import { closeCircleOutline, heart, heartOutline, removeCircle, removeOutline, shareSocialOutline } from 'ionicons/icons';
import React, { useEffect } from 'react'
import Header from '../../components/Header';
import { useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { getApiData, postApiDataWithAuth } from "../../utils/Utils";
import { useParams } from 'react-router';


const IngredientDetail = () => {
    const [ingredientData, setingredientData] = useState({})
    console.log('ingredientData11', ingredientData)
    const { slug } = useParams();
    const [selectedTabDetail, setSelectedTabDetail] = useState("DetailStatus");
    const handleTabChangeDetail = (event) => {
        setSelectedTabDetail(event.detail.value);
    };
    console.log('slug', slug)

    const fetchApidata = async () => {
        try {
            const responce = await getApiData(`ingredients_details/${slug}`);
            console.log('responce', responce);
            setingredientData(responce?.data?.ingredient_details)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchApidata();
    }, [slug])
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

                <IonGrid class='ion-padding'>
                    <IonRow>
                        <div className='topImage'>
                            <img src={ingredientData.images} alt="" className="ProfileImg"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/assets/img/img-placeholder.jpg";
                                }} />
                            <div className='topIcon'>
                                <div className='iconTop'><IonIcon size="default" fill="clear" icon={heartOutline} />
                                    <span>{ingredientData.total_fav_num}</span></div>
                                <div className='iconTop'><IonIcon size="default" fill="clear" icon={shareSocialOutline} />
                                    <span className='ion-no-padding'>{ingredientData.imk_count}</span></div>
                            </div>
                        </div>
                    </IonRow>

                    <IonRow className='ion-padding-vertical'>
                        <IonTitle className='ion-no-padding'>{ingredientData.ingredients_name}</IonTitle>
                        <IonText><span>Also Known As :</span>{ingredientData.known_as}</IonText>
                        <IonText><span>Technical Name :</span>{ingredientData.technical_name}</IonText>
                    </IonRow>


                    <IonRow className='ion-padding-vertical d-flex ion-justify-content-center ion-align-items-center '>
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
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/assets/img/img-placeholder.jpg";
                                    }}
                                />
                                MySmartKitchen
                                <span>({ingredientData.imk_count})</span>
                            </IonButton>

                            <IonButton
                                size="default"
                                expand="block"
                                fill="outline"
                                className="chefbutton"
                            >
                                <IonIcon size="default" fill="clear" icon={closeCircleOutline} />
                                Avoid({ingredientData.is_negative})
                            </IonButton>
                        </div>
                    </IonRow>
                </IonGrid>

                <IonGrid>
                    <IonRow>
                        <ion-title color="dark" class="ion-color ion-color-dark md title-default">{ingredientData.food_type}</ion-title>
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
                                <IonGrid class='ion-padding-vertical'>
                                    <IonRow>
                                        <IonCol>
                                            <IonText>{ingredientData.taste_profile}</IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            )}
                            {selectedTabDetail === "UsageTips" && (
                                <IonGrid class='ion-padding-vertical'>
                                    <IonRow>
                                        <IonCol>
                                            <IonTitle>Usage Tips</IonTitle>
                                            <IonText>
                                                <IonList>
                                                    <ol className='ion-no-padding'>
                                                        <li className='ion-margin-horizontal '>{ingredientData.tips[0]}</li>

                                                        <li className='ion-margin-horizontal ion-padding-top'>{ingredientData.tips[1]}</li>

                                                        <li className='ion-margin-horizontal ion-padding-top'>{ingredientData.tips[2]}</li>
                                                    </ol>
                                                </IonList>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            )}
                            {selectedTabDetail === "CommonNames" && (
                                <IonGrid class='ion-padding-vertical'>
                                    <IonRow>
                                        <IonCol>
                                            <IonTitle className='ion-no-padding'>Common names and forms</IonTitle>
                                            <IonText>
                                                <IonList>
                                                    <ol className='ion-no-padding'>
                                                        <li className='ion-margin-horizontal'>{ingredientData.common_names_and_forms[0]}</li>
                                                        <li className='ion-margin-horizontal ion-padding-top'>{ingredientData.common_names_and_forms[1]}</li>
                                                        <li className='ion-margin-horizontal ion-padding-top'>{ingredientData.common_names_and_forms[2]}</li>
                                                        <li className='ion-margin-horizontal ion-padding-top'>{ingredientData.common_names_and_forms[3]}</li>
                                                        <li className='ion-margin-horizontal ion-padding-top'>{ingredientData.common_names_and_forms[4]}</li>
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

                <IonGrid className='ion-padding-horizontal'>
                    <IonRow>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding ion-margin-bottom    '>Description</IonTitle>
                            <IonText className='ion-margin-vertical'>{ingredientData.descriptions}</IonText>
                        </IonCol>

                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding ion-margin-vertical'>Health benefits</IonTitle>
                            <ol className='ion-no-padding'>
                                <li className='ion-margin-horizontal'>{ingredientData.nutritional_benefits}</li>

                            </ol>
                        </IonCol>

                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding ion-margin-vertical'>Selection Guide</IonTitle>
                            <IonText className='ion-margin-vertical'>{ingredientData.selection_guide}</IonText>
                        </IonCol>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding ion-margin-vertical'>Resource & Links</IonTitle>
                            <IonText className='ion-margin-vertical'><a href="#">{ingredientData.resource_links}</a></IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid className='ion-padding'>
                    <IonRow>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding'>Disclaimer</IonTitle>
                            <IonText>
                                {ingredientData.disclaimer}
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    )
}
export default IngredientDetail;

