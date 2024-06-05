import React, { useState, useEffect } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonIcon, IonText, useIonViewWillEnter } from '@ionic/react';
import { useHistory } from 'react-router';
import { getApiData } from '../../utils/Utils';
import { heartOutline } from 'ionicons/icons';

const IngredientProduct = (props) => {
  const { productData, isLoading } = props;
  const [ingredientData, setIngredientData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchData(); 
  }, [productData]);

  const fetchData = async () => {
    try {
      if (productData.length > 0) {
        // If productData is available, use it directly
        setIngredientData(productData);
      } else {
        // Otherwise, fetch data from the API
        const response = await getApiData("ingredients-list/10/0");
        console.log("response", response);
        setIngredientData(response.data.ingredients);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleDetails = (slug) => {
    history.push(`/ingredient-detail/${slug}`);
  };

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div>
      {ingredientData.map((item, i) => (
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
                {truncateText(item.descriptions, 30)}
              </IonText>
            </div>
            <IonButton size='default' fill='outline' shape='round' onClick={() => handleDetails(item.slug)}>
              Details
            </IonButton>
          </IonCardContent>
        </IonCard>
      ))}
    </div>
  );
};

export default IngredientProduct;
