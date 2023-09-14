/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonChip,
  IonCol,
  IonIcon,
  IonText,
} from "@ionic/react";
import {
  add,
  bookmarkOutline,
  star,
} from "ionicons/icons";
import { useRef } from "react";
import { addToCart } from "../data/CartStore";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  const { product, category, index, cartRef } = props;
  // const favourites = FavouritesStore.useState((s) => s.product_ids);

  const productCartRef = useRef();
  // const productFavouriteRef = useRef();
  // const [isFavourite, setIsFavourite] = useState(false);

  // useEffect(() => {
  //   const tempIsFavourite = favourites.find(
  //     (f) => f === `${category.slug}/${product.id}`
  //   );
  //   setIsFavourite(tempIsFavourite ? true : false);
  // }, [props.product, favourites]);

  // const addProductToFavourites = (e, categorySlug, productID) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   addToFavourites(categorySlug, productID);

  //   productFavouriteRef.current.style.display = "";
  //   productFavouriteRef.current.classList.add("animate__fadeOutTopRight");

  //   setTimeout(() => {
  //     if (productCartRef.current) {
  //       productFavouriteRef.current.classList.remove(
  //         "animate__fadeOutTopRight"
  //       );
  //       productFavouriteRef.current.style.display = "none";
  //     }
  //   }, 500);
  // };

  const addProductToCart = (e, categorySlug, productID) => {
    e.preventDefault();
    e.stopPropagation();

    productCartRef.current.style.display = "";
    productCartRef.current.classList.add("animate__fadeOutUp");

    setTimeout(() => {
      cartRef.current.classList.add("animate__tada");
      addToCart(categorySlug, productID);

      setTimeout(() => {
        cartRef.current.classList.remove("animate__tada");
        productCartRef.current.style.display = "none";
      }, 500);
    }, 500);
  };

  return (
    <IonCol size="6" key={`category_product_list_${index}`}>
      <IonCard
        routerLink={`/category/${category.slug}/${product.id}`}
        className={styles.categoryCard}
      >
        {/* <IonCardHeader className={styles.productCardHeader}>
          <div className={styles.productCardActions}>
            <IonIcon
              className={styles.productCardAction}
              color={isFavourite ? "danger" : "medium"}
              icon={isFavourite ? heart : heartOutline}
              onClick={(e) =>
                addProductToFavourites(e, category.slug, product.id)
              }
            />
            <IonIcon
              ref={productFavouriteRef}
              style={{ position: "absolute", display: "none" }}
              className={`${styles.productCardAction} animate__animated`}
              color="danger"
              icon={heart}
            />
            <IonIcon
              className={styles.productCardAction}
              size="medium"
              icon={arrowRedoOutline}
            />
          </div>
          <img src={product.image} alt="product pic" />
        </IonCardHeader> */}

        {/* <IonCardContent className={styles.categoryCardContent}>
          <div className={styles.productPrice}>
            <IonButton style={{ width: "100%" }} color="light">
              {product.price}
            </IonButton>
            <IonButton
              color="dark"
              onClick={(e) => addProductToCart(e, category.slug, product.id)}
            >
              <IonIcon icon={cartOutline} />
            </IonButton>

            <IonIcon
              ref={productCartRef}
              icon={cart}
              color="dark"
              style={{
                position: "absolute",
                display: "none",
                fontSize: "3rem",
              }}
              className="animate__animated"
            />
          </div>
        </IonCardContent> */}

        <div className="SmartKitchen">
          <img src="/assets/img/Mysmart.png" alt="Images" className="icon-img" />

          <img src="/assets/img/veg-icon.svg" alt="Images" className="icon-img" />
        </div>

        <img src={product.image} alt="category cover" className="MainImg" />
        <div className="BookMark">
          <IonIcon color="primary" size="small" icon={bookmarkOutline} />
        </div>
      </IonCard>

      <IonCardContent className="BoxContent">
        <IonCardSubtitle>{product.name}</IonCardSubtitle>
        <IonText color="dark" className="TextContent">
          <h3 className="ProPrice"> {product.price}</h3>
          <IonChip className="RateDesign">
            3 <IonIcon color="light" size="small" icon={star} />
          </IonChip>
        </IonText>

        <IonText color="dark" className="TextContent">
          <h4 className="linethro">485.00</h4>
          <IonChip className="ChipDesign">33% OFF</IonChip>
        </IonText>

        <IonButton
          onClick={(e) => addProductToCart(e, category.slug, product.id)}
          className="AddToCart"
          size="default"
          shape="round"
          fill="outline"
        >
          <div className="flex ion-justify-content-between ion-align-items-center w-full">
            Add
            <IonIcon slot="end" color="dark" size="small" icon={add} />
          </div>
        </IonButton>
      </IonCardContent>
    </IonCol>
  );
};

export default ProductCard;
