import React, { useState, useEffect } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonIcon, IonText } from '@ionic/react';
import { useHistory } from 'react-router';
import { getApiData } from '../../utils/Utils';
import { heartOutline } from 'ionicons/icons';

const IngredientProduct = (props) => {
  const { productData, isLoading } = props;
  const [ingredientData, setIngredientData] = useState([]);
  const history = useHistory();

  const fetchData = async () => {
    try {
      if (productData.length > 0) {
     
        setIngredientData(productData);
      } else {
       
        const response = await getApiData("ingredients-list/10/0");
        setIngredientData(response.data.ingredients);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(); 
  }, [productData]);

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
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/img/img-placeholder.jpg"; 
                  }}
                />
                <span>{item.imk_count}</span>
              </div>
            </div>
            <img
              src={item.images}
              alt="category cover"
              className="MainProductThumb"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/img/img-placeholder.jpg"; 
              }}
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
