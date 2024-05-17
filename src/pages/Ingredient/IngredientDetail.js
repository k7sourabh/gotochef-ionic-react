import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle } from '@ionic/react';
import { closeCircleOutline, heart, heartOutline, removeCircle, removeOutline, shareSocialOutline } from 'ionicons/icons';
import React from 'react'
import Header from '../../components/Header';
import { useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom';

const IngredientDetail = () => {
    const [selectedTabDetail, setSelectedTabDetail] = useState("DetailStatus");
    const handleTabChangeDetail = (event) => {
        setSelectedTabDetail(event.detail.value);
    };
    return (
        <IonPage>
            {/* <Header/> */}
            <IonContent>
                <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
                    <div className="TitleHead">
                        <IonButton className="backBtn" fill="clear" routerLink="/profile">
                            <i class="material-icons dark">west</i>
                        </IonButton>
                        <IonTitle color="dark">Ingredient Details</IonTitle>
                    </div>
                </IonHeader>

                <IonGrid class='ion-padding'>
                    <IonRow>
                        <div className='topImage'>
                            <img src="./assets/img/Dried Blueberries- landing GTC.png" alt="" className="ProfileImg" />
                            <div className='topIcon'>
                                <div className='iconTop'><IonIcon size="default" fill="clear" icon={heartOutline} /><span>2</span></div>
                                <div className='iconTop'><IonIcon size="default" fill="clear" icon={shareSocialOutline} /><span className='ion-no-padding'>2</span></div>
                            </div>
                        </div>
                    </IonRow>

                    <IonRow className='ion-padding-vertical'>
                        <IonTitle className='ion-no-padding'>Dried Blueberries</IonTitle>
                        <IonText><span>Also Known As :</span> Dehyrated blueberries, Dry blueberries</IonText>
                        <IonText><span>Technical Name :</span>Cyanococcus</IonText>
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
                                />
                                MySmartKitchen
                                <span>(2)</span>
                            </IonButton>

                            <IonButton
                                size="default"
                                expand="block"
                                fill="outline"
                                className="chefbutton"
                            >
                                <IonIcon size="default" fill="clear" icon={closeCircleOutline} />
                                Avoid
                            </IonButton>
                        </div>
                    </IonRow>
                </IonGrid>

                <IonGrid>
                    <IonRow>
                        <ion-title color="dark" class="ion-color ion-color-dark md title-default">Vegetarian</ion-title>
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
                                            <IonText>Dried blueberries are sweet with a slightly tangy taste.</IonText>
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
                                                        <li className='ion-margin-horizontal '>Dried blueberries are added to cakes, muffins, bread, puddings,ice-creams and breakfast cereals like muesli and granola.</li>

                                                        <li className='ion-margin-horizontal ion-padding-top'>They are best stored in a cool, dry place in a tightly sealed container.</li>

                                                        <li className='ion-margin-horizontal ion-padding-top'>In hot and humid weather they are stored best in the refrigerator or freezer.</li>
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
                                                        <li className='ion-margin-horizontal'>Blueberries (American Dried)</li>
                                                        <li className='ion-margin-horizontal ion-padding-top'>Blueberry Dry</li>
                                                        <li className='ion-margin-horizontal ion-padding-top'>Dried Blueberry</li>
                                                        <li className='ion-margin-horizontal ion-padding-top'>Premium Exotic Blueberries Dried</li>
                                                        <li className='ion-margin-horizontal ion-padding-top'>Whole Dried Blueberries</li>
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
                            <IonText className='ion-margin-vertical'>Blueberries are tiny berries that are quite sweet and juicy, with a color ranging from indigo to purple. Their origin lies in North America but now they are consumed almost everywhere around the world. Blueberries are eaten raw but due to its popularity and increased demand all over the world, they are very common now dried and sold. They are either sun-dried or dried in dehydrators. On drying they develop a darker colour, sweeter taste, and a firm texture. Dried blueberries are mostly preferred for baking and in desserts.</IonText>
                        </IonCol>

                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding ion-margin-vertical'>Health benefits</IonTitle>
                            <ol className='ion-no-padding'>
                                <li className='ion-margin-horizontal'>Dried blueberries are a rich source of vitamin K, which plays a very vital role in normal blood clotting. Vitamin k also helps build bones and prevents bone loss as in the case of osteoporosis.(1)</li>
                                <li className='ion-margin-horizontal'>They are low in carbohydrates and glycemic index along with being high in fibre, making them an ideal option for diabetics.(1)</li>
                                <li className='ion-margin-horizontal'>They are a good source of vitamin C that builds collagen in the body which plays an important part in the formation of ligaments, tendons, cartilage, skin and blood vessels in the body. Collagen also limits free radicals and their damage to the DNA that causes heart disease or cancer.(1)</li>
                            </ol>
                        </IonCol>

                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding ion-margin-vertical'>Selection Guide</IonTitle>
                            <IonText className='ion-margin-vertical'>Choose dried blueberries that are well-sealed and are free from moisture and moulds.</IonText>
                        </IonCol>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding ion-margin-vertical'>Resource & Links</IonTitle>
                            <IonText className='ion-margin-vertical'><a href="#">https://www.livestrong.com/article/429510-what-are-the-benefits-of-dried-blueberries/</a></IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>


                <IonGrid className='ion-padding'>
                    <IonRow>
                        <IonCol size='12'>
                            <IonTitle className='ion-no-padding'>Disclaimer</IonTitle>
                            <IonText>
                                "Information here is provided for discussion and educational purposes only. It is not intended as medical advice or product or ingredient review/rating. The information may not apply to you and before you use or take any action, you should contact the manufacturer, seller, medical, dietary, fitness or other professional. If you utilize any information provided here, you do so at your own risk and you waive any right against Culinary Communications Private Limited, its affiliates, officers, directors, employees or representatives.”</IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    )
}
export default IngredientDetail;

