import { IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, IonText, useIonViewWillEnter } from '@ionic/react'
import { add, closeCircle, heartCircleOutline, heartOutline, star } from 'ionicons/icons'
import React from 'react'
import Header from '../../components/Header'
import { useState } from 'react'
import { getApiData, postApiDataWithAuth } from "../../utils/Utils";
import { useEffect } from 'react'
import { useHistory } from 'react-router'


const IngredientProduct = () => {
  const [Ingredientdata, setIngredientData] = useState();
 const history=useHistory();
  console.log('Ingredientdata', Ingredientdata)
  const fatchdata = async () => {
    try {
      const responce = await getApiData("ingredients-list/10/0");
      console.log('responce', responce)
      setIngredientData(responce.data.ingredients)
    } catch (err) {
      console.log(err)
    }
  }
 
  useIonViewWillEnter(() => {
    fatchdata()
 });

  const handleDetails=(slug)=>{
          console.log("slug",slug)
          history.push(`/ingredient-detail/${slug}`)
  }

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div>
      {
        Ingredientdata?.map?.((item, i) => (
          <IonCard className="ProductCard" key={i}>
            <IonCardHeader className="ProductThumb">
              <div className="SmartKitchen">
                <div className="counter">
                  <img
                    src="/assets/img/Mysmart.png"
                    alt="Images"
                    className="icon-img"
                  />
                  <span>{item.imk_count}</span>
                </div>
              </div>
              <img
                src={item.images}
                alt="category cover"
                className="MainProductThumb"

              />
              <div className="BookMark">
                <IonIcon
                  color="primary"
                  size="small"
                  icon={heartOutline}
                />
                {item.is_fav_like}
              </div>
            </IonCardHeader>
            <IonCardContent className="ProductDetails">
              <IonText className="ProductTitle">
                {item.ingredients_name}
              </IonText>
              <div className="PriceRating">
                <IonText color="dark" className="CurrentPrice">
                  {truncateText(item.descriptions,30)}
                </IonText>

              </div>
              <IonButton size='default' fill='outline' shape='round' onClick={()=>handleDetails(item.slug)}>
                Details
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))
      }
    </div>
  )
}

export default IngredientProduct