/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
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
  cart,
  chevronBackOutline,
  closeCircle,
  add,
  star,
  pencil,
  thumbsUp,
  arrowUndo
} from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
import { addToCart, CartStore } from "../../data/CartStore";
import { addToFavourites, FavouritesStore } from "../../data/FavouritesStore";
import { ProductStore } from "../../data/ProductStore";

import styles from "./Product.module.css";

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

  const addProductToCart = (e, categorySlug, productID) => {
    e.preventDefault();

    document.getElementById(
      `placeholder_cart_${categorySlug}_${productID}`
    ).style.display = "";
    document
      .getElementById(`placeholder_cart_${categorySlug}_${productID}`)
      .classList.add("animate__fadeOutUp");

    setTimeout(() => {
      cartRef.current.classList.add("animate__tada");
      addToCart(categorySlug, productID);

      setTimeout(() => {
        cartRef.current.classList.remove("animate__tada");
      }, 500);
    }, 500);
  };

  return (
    <IonPage id="category-page" className={styles.categoryPage}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              color="dark"
              text={category.name}
              routerLink={`/category/${category.slug}`}
              routerDirection="back"
            >
              <IonIcon color="dark" icon={chevronBackOutline} />
              &nbsp;{category.name}
            </IonButton>
          </IonButtons>

          <IonTitle>View Product</IonTitle>

          <IonButtons slot="end">
            <IonBadge color="dark">{shopCart.length}</IonBadge>
            <IonButton color="dark" routerLink="/cart">
              <IonIcon
                ref={cartRef}
                className="animate__animated"
                icon={cart}
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonGrid>
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
                  <img src={product.image} alt="product pic" />
                  <p className={styles.titleNames} ><span>Kissan</span>
                    <div className={styles.raterp}>{product.name}
                    <IonChip className="RateDesign">
                            3 <IonIcon color="light" size="small" icon={star} />
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
                            <IonChip className="ChipDesign">33% OFF</IonChip>
                          </IonText>
                          <IonButton
                            className="AddToCart"
                            size="default"
                            shape="round"
                            fill="outline"
                          >
                            <div className="flex ion-justify-content-between ion-align-items-center w-full">
                              Add
                              <IonIcon
                                slot="end"
                                color="dark"
                                size="small"
                                icon={add}
                              />
                            </div>
                          </IonButton>
                        </div>
                      </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

         <IonRow className="ion-padding">
            <IonCol size="6">
            <IonButton size="default" expand="block" fill="outline" className={styles.chefbutton}>
                            <div className="flex ion-justify-content-center ion-align-items-center">
                            <IonButton fill="">
                            <img
                              src="/assets/img/Mysmart.png"
                              alt="Images"
                              className={styles.chefhatbtn}
                                  />
                            </IonButton>
                              MySmartKitchen
                            </div>
              </IonButton>
            </IonCol>
            <IonCol size="6">
            <IonButton size="default" expand="block" fill="outline" className={styles.chefbutton}>
                            <div className="flex ion-justify-content-center ion-align-items-center ion-text-center">
                            <IonButton fill="">
                            <img
                              src="/assets/img/Mysmart.png"
                              alt="Images"
                              className={styles.chefhatbtn}
                                  />
                            </IonButton>
                              Wishlist
                            </div>
              </IonButton>
            </IonCol>
         </IonRow>


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
            <IonButton>
              <div className="flex ion-justify-content-between ion-align-items-center">
                <IonIcon icon={pencil} />
              
              Write a Review
              
              </div></IonButton>
          </IonCol>
         </IonRow>

          <IonRow className="ion-padding">
            <IonText className={styles.headingtext}>
              Review
            </IonText>
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
                          <IonIcon icon={star}   />
                          <IonIcon icon={star}   />
                          <IonIcon icon={star}   />
                          <IonIcon icon={star}   />
                          <IonIcon icon={star}   />
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
                      <IonIcon icon={thumbsUp}/>
                  </IonCol>
                  <IonCol size="2">
                      <IonIcon icon={arrowUndo}/>
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
                          <IonIcon icon={star}   />
                          <IonIcon icon={star}   />
                          <IonIcon icon={star}   />
                          <IonIcon icon={star}   />
                          <IonIcon icon={star}   />
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
                      <IonIcon icon={thumbsUp}/>
                  </IonCol>
                  <IonCol size="2">
                      <IonIcon icon={arrowUndo}/>
                      Reply
                  </IonCol>
                </IonRow>
                </div>

                
            </IonCol>
         </IonRow>
          

         <IonRow >
          <IonCol size="12" >
            <IonButton expand="block" shape="round" fill="outline" >

              View all Review
              
          </IonButton>
          </IonCol>
         </IonRow>

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
