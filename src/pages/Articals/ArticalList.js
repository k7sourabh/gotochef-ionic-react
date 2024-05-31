import React from "react";
import Header from "../../components/Header";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
} from "@ionic/react";
import { listOutline } from "ionicons/icons";
import { getApiData, postApiData } from '../../utils/Utils';
import { useEffect, useState } from "react";
import { useHistory } from "react-router";


const ArticalList = () => {

  const [ArticalList, setArticalList] = useState([]);
  const [viewState, setViewState] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const history = useHistory();

  const fetchArticals = async (page) => {
    try {
      const responce = await getApiData(`articleListApi/10/${page}`);
      setArticalList(prevList => [...prevList, ...responce.data.articlelist]);
      setViewState(page);
      setTotalPage(responce.data.total_page);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchArticals(viewState);
  }, []);

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + '...';
    }
    return text;
  };

  const handleView = (slug) => {
    history.push(`/localartical-detail/:${slug}`);
  };

  const showAllPage = () => {
  
    if (viewState < totalPage - 1) {
      fetchArticals(viewState + 1);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader className=" bottom-shadow flex ion-justify-content-between ion-align-items-center">
          <div className="TitleHead">
            <IonButton className="backBtn" fill="clear" routerLink="/profile">
              <i className="material-icons dark">west</i>
            </IonButton>
            <IonTitle color="dark">Artical List</IonTitle>
          </div>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {ArticalList?.map?.((item, i) => (
              <IonCol size='6' key={i}>
                <IonCard className="ProductCard">
                  <IonCardHeader className="ProductThumb">
                    <img
                      src={item.desktopImages}
                      alt="category cover"
                      className="MainProductThumb"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/img/img-placeholder.jpg";
                      }}
                    />
                  </IonCardHeader>
                  <IonCardContent className="ProductDetails">
                    <div className="d-flex">
                      <IonText className="ProductTitle">
                        By {item.user_name}
                      </IonText>
                      <IonText className="ProductTitle">
                        {item.articleName}
                      </IonText>
                    </div>
                    <div className="PriceRating">
                      <IonText color="dark">
                        {truncateText(item.longDescription, 30)}
                      </IonText>
                    </div>
                    <IonButton size='default' fill='outline' shape='round' onClick={() => handleView(item.slug)} >
                      Read More
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
          {viewState < totalPage - 1 && (
            <IonRow>
              <IonCol className="flex ion-justify-content-center ion-align-items-center">
                <IonButton fill="outline" size="default" onClick={showAllPage}>View all</IonButton>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ArticalList;
