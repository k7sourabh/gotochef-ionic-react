import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  useIonLoading,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
import styles from "./CategoryProducts.module.css";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import { getApiData } from "../../utils/Utils";

const CategoryProducts = () => {
  const history = useHistory();
  const {slug} = useParams();
  const cartRef = useRef();
  const [categorydata, setCategorydata] = useState({});
  const [subcategory, setSubcategory] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [selectedSubCat, setSelectedSubCat] = useState('')
  const [present, dismiss] = useIonLoading();

  const getCategoryandSubCatData = async () => {
    try{
      present()
      const response = await getApiData(`/subcategorylist/${slug}`);
      if(response?.data?.data?.sucate_pro.length) {
        setSelectedSubCat(response?.data?.data?.sucate_pro[0].slug)
      }
      setSubcategory(response?.data?.data?.sucate_pro);
      dismiss();
      setCategorydata(response?.data?.data?.categorylist)
    }catch(e){
      console.log(e)
      dismiss();
    }
  };

  useEffect(() => {
    getCategoryandSubCatData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const getProductsForSubCat = async ()=> {
    setAllProduct([])
    try{
      const response = await getApiData(`/getSubcatProduct/${selectedSubCat}`);
      setAllProduct(response?.data?.subcatprod)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if(selectedSubCat!==''){
      getProductsForSubCat();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubCat]);


  return (
    <IonPage id="category-page" className={styles.categoryPage}>
      <Header />

      <IonContent fullscreen>
        <IonHeader className='TitleHead bottom-shadow'>
          <IonButton className="IconBtn" fill="clear" onClick={() => history.push(`/main-category`)}>
            <i class="material-icons dark">west</i>
          </IonButton>
          <div className="CategoryInfoTitle">
            <div className="subCate-thumb">
              <img src={categorydata?.images} alt="category cover" />
            </div>

            <div className="subCate-details">
              <IonTitle>{categorydata?.category_name}</IonTitle>
              <span>{categorydata?.total_category_product} item</span>
            </div>
          </div>
          <IonButton className="IconBtn ml-auto" fill="clear">
            <img src="/assets/img/filter.svg" alt="Images" />
          </IonButton>

        </IonHeader>

        <IonSegment
          className="subCateTab"
          value={slug}
          scrollable={true}
        >
          {subcategory?.map((category, index) => (
            <IonSegmentButton
              className={category.slug === selectedSubCat ? "segment-button-checked" : ''}
              value={category.slug}
              key={index}
              onClick={(e) => {
                setSelectedSubCat(category.slug)
              }}
            >
              <div className="subCategoryCard">
                <div className="subCategoryThumb">
                  <img src={category?.images} alt="category cover" />
                </div>
                <IonText className="subCategoryTitle">{category?.sub_category_name}</IonText>
              </div>
            </IonSegmentButton>
          ))}
        </IonSegment>

        <IonGrid className="ion-no-padding">
          <IonRow>
            {allProduct &&
              allProduct.map((product, index) => {
                  return (
                    <ProductCard
                      key={`category_product_${index}`}
                      product={product}
                      index={index}
                      cartRef={cartRef}
                      category={categorydata}
                    />
                  );
              })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CategoryProducts;
