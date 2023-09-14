/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  closeCircle,
  star,
  pencil,
  thumbsUp,
  arrowUndo,
  bookmarkOutline,
  starOutline,
  arrowBack,
  alertCircle
} from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
import InnerCard from "../../components/InnerCard";
import { addToCart, CartStore } from "../../data/CartStore";
import { addToFavourites, FavouritesStore } from "../../data/FavouritesStore";
import { ProductStore } from "../../data/ProductStore";


import styles from "./Product.module.css";
import Header from "../../components/Header";

const Product = () => {
  const params = useParams();
  const cartRef = useRef();
  const products = ProductStore.useState((s) => s.products);
  const favourites = FavouritesStore.useState((s) => s.product_ids);
  const [isFavourite, setIsFavourite] = useState(false);
  const shopCart = CartStore.useState((s) => s.product_ids);
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});

  useEffect(() => {
    const categorySlug = params.slug;
    const productID = params.id;
    const tempCategory = products.filter((p) => p.slug === categorySlug)[0];
    const tempProduct = tempCategory.products.filter(
      (p) => parseInt(p.id) === parseInt(productID)
    )[0];

    const tempIsFavourite = favourites.find(
      (f) => f === `${categorySlug}/${productID}`
    );

    setIsFavourite(tempIsFavourite);
    setCategory(tempCategory);
    setProduct(tempProduct);
  }, [params.slug, params.id]);

  useEffect(() => {
    const tempIsFavourite = favourites.find(
      (f) => f === `${category.slug}/${product.id}`
    );
    setIsFavourite(tempIsFavourite ? true : false);
  }, [favourites, product]);

  const addProductToFavourites = (e, categorySlug, productID) => {
    e.preventDefault();
    addToFavourites(categorySlug, productID);

    document.getElementById(
      `placeholder_favourite_product_${categorySlug}_${productID}`
    ).style.display = "";
    document
      .getElementById(
        `placeholder_favourite_product_${categorySlug}_${productID}`
      )
      .classList.add("animate__fadeOutTopRight");
  };



  return (
    <IonPage id="category-page" className={styles.categoryPage}>
      <Header />

      <IonContent fullscreen>
        <IonHeader className={styles.boxshadow}>
          <div className="flex ion-justify-content-between TitleBar ion-padding ion-align-items-center">
            <IonIcon color="dark" icon={arrowBack} />
            <IonTitle size="large" className={styles.mainhead}>
              Kissan Tomato Sauce...
            </IonTitle>
          </div>
        </IonHeader>

        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <IonCard className={styles.categoryCard}>
                <IonCardHeader className={styles.productCardHeader}>
                  <div className={styles.productCardActions}>
                    <IonButton fill="">
                      <img
                        src="/assets/img/Mysmart.png"
                        alt="Images"
                        className={styles.chefhat}
                      />
                    </IonButton>

                    <IonIcon size="large" color="danger" icon={closeCircle} />


                  </div>
                  <div className={styles.productCardActions}>
                    <IonButton fill="">
                      <img src="/assets/img/veg-icon.png" alt="Images" className={styles.chefhat} />
                    </IonButton>

                    <IonIcon size="large" color="danger" icon={bookmarkOutline} />


                  </div>

                  <img src={product.image} alt="product pic" />
                  <p className={styles.titleNames} ><span>Kissan</span>
                    <div className={styles.raterp}>{product.name}
                      <IonChip className={styles.RateDesignInner}>
                        4.4<IonIcon color="light" size="small" icon={star} />
                      </IonChip></div>
                    <span>Glass Bottle of 1 Gram</span></p>
                </IonCardHeader>

                <IonCardContent className={styles.boxcontent}>
                  <IonText color="dark" className="TextContent">
                    <h3 className="ProPrice">352.00</h3>
                  </IonText>

                  <div className={styles.addButn}>
                    <IonText color="dark" className={styles.TextContent}>
                      <h4 className="linethro">485.0</h4>
                      <IonChip className={styles.ChipDesign}>33% OFF</IonChip>
                    </IonText>
                    <IonButton
                      className="AddToCart"
                      size="default"
                      shape="round"
                      fill="outline"
                      color="warning"
                    >
                      <div className="flex ion-justify-content-between ion-align-items-center w-full">
                        Add

                      </div>
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding">
            <IonCol size="12">
              <div className={styles.chefbuttonouter}>
                <IonButton size="default" expand="block" fill="outline" className={styles.chefbutton}>
                  <div className={styles.chefbuttoninner}>
                    <img
                      src="/assets/img/Mysmart.png"
                      alt="Images"
                      className={styles.chefhatbtn}
                    />
                    MySmartKitchen
                  </div>
                </IonButton>
                <IonButton size="default" expand="block" fill="outline" className={styles.chefbutton}>
                  <div className={styles.chefbuttoninner}>
                    <IonIcon icon={bookmarkOutline} size="small" />
                    Wishlist
                  </div>
                </IonButton>

              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding">
          <IonRow className="ion-padding">
            <IonSegment value="buttons">
              <IonSegmentButton value="default">
                <IonLabel>Details</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="segment">
                <IonLabel>Nutrition</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="buttons">
                <IonLabel>Reviews</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonRow>

          <IonRow >
            <IonCol size="12" className="flex ion-justify-content-center ion-align-items-center">
              <IonButton color="medium" >
                <div className="flex ion-justify-content-between ion-align-items-center">
                  <IonIcon icon={pencil} />

                  Write a Review

                </div></IonButton>
            </IonCol>
          </IonRow>

          <IonRow className={styles.reviewcontainer}>
            <IonCol size="12" className={styles.reviews}>
              <div>
                <IonRow className={styles.paymentrow}>
                  <IonCol className={styles.paylogo}>
                    <img
                      src="/assets/img/Amazon-pay.png"
                      alt="Images"
                    />
                  </IonCol>

                  <IonCol className={styles.paycontent}>
                    <IonText>Mayur Jha</IonText>
                    <IonText>May 11 2022</IonText>
                  </IonCol>

                  <IonCol className={styles.rating}>
                    <IonIcon icon={star} color="warning" />
                    <IonIcon icon={star} color="warning" />
                    <IonIcon icon={star} color="warning" />
                    <IonIcon icon={star} color="warning" />
                    <IonIcon icon={starOutline} />
                  </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-end">
                  <IonCol size="10">
                    <IonText>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-padding">
                  <IonCol size="1">
                    <IonIcon icon={thumbsUp} size="small" />
                  </IonCol>
                  <IonCol size="3" className={styles.reply}>
                    <IonIcon icon={arrowUndo} size="small" />
                    Reply
                  </IonCol>
                </IonRow>
              </div>


            </IonCol>
            <IonCol size="12" className={styles.reviews}>
              <div>
                <IonRow className={styles.paymentrow}>
                  <IonCol className={styles.paylogo}>
                    <img
                      src="/assets/img/Amazon-pay.png"
                      alt="Images"
                    />
                  </IonCol>

                  <IonCol className={styles.paycontent}>
                    <IonText>Mayur Jha</IonText>
                    <IonText>May 11 2022</IonText>
                  </IonCol>

                  <IonCol className={styles.rating}>
                    <IonIcon icon={star} color="warning" />
                    <IonIcon icon={star} color="warning" />
                    <IonIcon icon={star} color="warning" />
                    <IonIcon icon={star} color="warning" />
                    <IonIcon icon={starOutline} />
                  </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-end">
                  <IonCol size="10">
                    <IonText>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-padding">
                  <IonCol size="1">
                    <IonIcon icon={thumbsUp} size="small" />
                  </IonCol>
                  <IonCol size="3" className={styles.reply}>
                    <IonIcon icon={arrowUndo} size="small" />
                    Reply
                  </IonCol>
                </IonRow>
              </div>


            </IonCol>


          </IonRow>

          <IonRow className="ion-padding" >
            <IonCol size="12" >
              <IonButton expand="block" shape="round" fill="outline" className={styles.reviewbtn} >

                View all Review

              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-end" >
            <IonCol size="4" className={styles.report} >
              <IonIcon icon={alertCircle} size="small" />
              Report a Issue
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding ion-padding-bottom">
          <IonRow className="ion-text-start ion-padding">
            <IonCol size="12">
              <IonText className={styles.headingtext}>User Recipe</IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            {category &&
              category.products &&
              category.products.map((similar, index) => {
                if (similar.id !== product.id && product.image && index < 4) {
                  return (
                    <InnerCard
                      key={`similar_product_${index}`}
                      product={similar}
                      index={index}
                      isFavourite={false}
                      cartRef={cartRef}
                      category={category}
                    />
                  );
                }
              })}
          </IonRow>

          <IonRow className="ion-text-start ion-padding">
            <IonCol size="12">
              <IonText className={styles.headingtext}>Similar Product</IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            {category &&
              category.products &&
              category.products.map((similar, index) => {
                if (similar.id !== product.id && product.image && index < 4) {
                  return (
                    <ProductCard
                      key={`similar_product_${index}`}
                      product={similar}
                      index={index}
                      isFavourite={false}
                      cartRef={cartRef}
                      category={category}
                    />
                  );
                }
              })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Product;
