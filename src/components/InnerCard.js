/* eslint-disable react-hooks/exhaustive-deps */
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonChip,
    IonCol,
    IonGrid,
    IonIcon,
    IonRow,
    IonText,
  } from "@ionic/react";
  import {
    add,
    bookmarkOutline,
    heartSharp,
    star,
    starOutline,
  } from "ionicons/icons";
  import { useRef } from "react";
  import { addToCart } from "../data/CartStore";
  import styles from "./InnerCard.module.css";
  
  const InnerCard = (props) => {
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
          className={styles.innerCard}
        >


        </IonCard>
  
        <IonCardContent className={styles.recipeContent}>
            <div className={styles.recipeBg}>

            <IonGrid>
            <IonRow className={styles.paymentrow}>
                        <IonCol className={styles.paylogo} size="2">
                        <img
                        src="/assets/img/Screenshot_1.png"
                     alt="Images"
                     />
                        </IonCol>

                        <IonCol className={styles.paycontent} size="8">
                           <IonText>Mayur Jain</IonText>
                           <IonText>GotoChef</IonText>
                        </IonCol>
                     </IonRow>
            </IonGrid>

          <IonCardSubtitle>
          <img
            src="/assets/img/sandwich.png"
            alt="Images"
            className={styles.logo}
          />
          </IonCardSubtitle>


          <IonText color="dark" className="TextContent">
            <h3 className={styles.recipehead}>Veg Sandwich Recipe</h3>
          </IonText>

          <IonText color="dark" className={styles.textwrp}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </IonText>
  
          <IonText color="dark" className="TextContent">
            <div>
                <IonIcon icon={starOutline}  /> 
                <IonIcon icon={starOutline}  />
                <IonIcon icon={starOutline}  />
                <IonIcon icon={starOutline}  />
                <IonIcon icon={starOutline}  />
            </div>
            <div>
                <IonIcon icon={heartSharp} />
            </div>
            
          </IonText>
          </div>
          
        </IonCardContent>
      </IonCol>
    );
  };
  
  export default InnerCard;
  