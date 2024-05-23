import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { setupIonicReact } from "@ionic/react";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import CategoryProducts from "./pages/Products/CategoryProducts";
import Product from "./pages/Products/Product";
import CartProducts from "./pages/Products/CartProducts";
import Welcome from "./pages/Welcome/Welcome";
import "./theme/global.css";
import { SplashScreen } from "@capacitor/splash-screen";
import AddPayment from "./pages/Payment/AddPayment";
import MainCategory from "./pages/Products/MainCategory";
import HomeRecipe from "./pages/HomeRecipe/HomeRecipe";
import Profile from "./pages/profile/Profile";
import OrderList from "./pages/myorder/OrderList";
import WishList from "./pages/wishList/WishList";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import EditProfile from "./pages/EditProfile/EditProfile";

import { ApiProvider } from "./contexts/ApiProvider";
import ViewExclusiveProduct from "./pages/ViewExclusiveProducts";
import ViewTrendingProduct from "./pages/ViewTrendingProduct";
import ProductCard from "./components/ProductCard";
import SearchProduct from "./pages/Products/SearchProduct";
import Dashboard from "./pages/profile/DashBoard";
import VeganRecipe from "./pages/HomeRecipe/VeganRecipe";
import NutriBudy from "./pages/Products/NutriBudy/NutriBudy";
import MyProfile from "./pages/EditProfile/MyProfile";
import SubmitRecipe from "./pages/HomeRecipe/SubmitRecipe";
import { createStore } from "./services/Storage";
import { useEffect, useState } from "react";
import { CartProvider, useCart } from "./contexts/CartProvider";
import Articals from "./pages/HomeRecipe/Articals";
import OrderDetails from "./pages/myorder/OrderDetails";
import OrderConfirm from "./pages/Products/OrderConfirm";
import PrivateRoute from "./context/PrivateRoute";
import RecipeDetails from "./pages/HomeRecipe/RecipeDetails";
import MyRecipe from "./pages/HomeRecipe/MyRecipe";
import AddIngredient from "./pages/Ingredient/AddIngredient";
import Bookmart from "./pages/Bookmark";
import SubmitArticals from "./pages/Articals/SubmitArticals";
import IngredientList from "./pages/Ingredient/IngredientList";
import IngredientProduct from "./pages/Ingredient/IngredientProduct";
import FoodSetting from "./pages/profile/AddProduct";
import AddProduct from "./pages/profile/AddProduct";
import FoodAdd from "./pages/profile/FoodAdd";
import LifeStyleSetting from "./pages/profile/LifeStyleSetting";
import Header from "./components/Header";
import OrderFail from "./pages/Products/OrderFail";
import { useAuth } from "./context/AuthContext";
import LoginPopup from "./modal/LoginPopup";
import OTPPopup from "./modal/OTPPopup";
import IngredientDetail from "./pages/Ingredient/IngredientDetail";
import SavedContent from "./pages/profile/SavedContent";
import ArticalList from "./pages/HomeRecipe/ArticalList";
import ArticalDetail from "./pages/HomeRecipe/ArticalDetail";

// Hide the splash (you should do this on app launch)
await SplashScreen.hide();

// Show the splash for an indefinite amount of time:
// await SplashScreen.show({
//   autoHide: false,
// });

// Show the splash for two seconds and then automatically hide it:
await SplashScreen.show({
  showDuration: 2000,
  autoHide: true,
});

setupIonicReact({});

const App = () => {
  const { cartItems } = useCart();
  const [CartNum, setCartNum] = useState(0);
  const { authenticated } = useAuth();
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenOtp, setIsOpenOtp] = useState(false);

  useEffect(() => {
    setCartNum(cartItems.length);
  }, [cartItems]);

  useEffect(() => {
    const setupStore = async () => {
      await createStore("go-to-chef-storage");
    };
    setupStore();
  }, []);

  return (
    // <CartProvider>
    <ApiProvider>
      <IonApp>
        <Header />
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/welcome" exact>
              <Welcome />
            </Route>
          </IonRouterOutlet>
          {window.location.pathname !== "/welcome" && (
            <IonTabs>
              <IonRouterOutlet>
                <PrivateRoute path="/add-payment" component={AddPayment} />
                <PrivateRoute path="/vegan-recipe" component={VeganRecipe} />
                <PrivateRoute
                  path="/submit-recipe/:id?"
                  component={SubmitRecipe}
                />
                <PrivateRoute
                  path="/order-details/:id"
                  component={OrderDetails}
                />
                <PrivateRoute path="/articles" component={Articals} />
                <PrivateRoute path="/submit-articals" component={SubmitArticals} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/my-profile" component={MyProfile} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/order-list" component={OrderList} />
                <PrivateRoute path="/wish-list" component={WishList} />
                <PrivateRoute path="/bookmark" component={Bookmart} />
                <PrivateRoute path="/change-password" component={ChangePassword} />
                <PrivateRoute path="/add-product" component={AddProduct} />
                <PrivateRoute path="/lifestyle-setting" component={LifeStyleSetting} />
                <PrivateRoute path="/edit-profile" component={EditProfile} />
                <PrivateRoute path="/food-add" component={FoodAdd} />
                <PrivateRoute path="/order-confirm" component={OrderConfirm} />
                <PrivateRoute path="/order-fail" component={OrderFail} />
                <PrivateRoute path="/add-ingredient" component={AddIngredient} />
                <PrivateRoute path="/ingredient-detail" component={IngredientDetail} />
                <PrivateRoute path="/artical-list" component={ArticalList} />
                <PrivateRoute path="/artical-detail" component={ArticalDetail} />
                
               
                <PrivateRoute
                  path="/ingredient-list"
                  component={IngredientList}
                />

                <PrivateRoute path="/my-recipe" component={MyRecipe} />

                <Route path="/" exact={true}>
                  <Redirect to="/home" />
                </Route>

                <Route path="/home" exact={true}>
                  <Home />
                </Route>

                <Route path="/cart" exact>
                  <CartProducts />
                </Route>

                <Route path="/category/:slug" exact>
                  <CategoryProducts />
                </Route>

                <Route path="/product-details/:id" exact>
                  <Product />
                </Route>

                <Route path="/main-category" exact>
                  <MainCategory />
                </Route>

                <Route path="/nutry-budy" exact>
                  <NutriBudy />
                </Route>
                <Route path="/home-recipe" exact>
                  <HomeRecipe />
                </Route>

                <Route path="/recipe-details/:id" exact>
                  <RecipeDetails />
                </Route>

                <Route path="/exclusive-products" exact>
                  <ViewExclusiveProduct />
                </Route>

                <Route path="/trending-products" exact>
                  <ViewTrendingProduct />
                </Route>

                <Route path="/category-detail/:slug/:name" exact>
                  <ProductCard />
                </Route>

                <Route path="/search-product" exact>
                  <SearchProduct />
                </Route>
              </IonRouterOutlet>

              <IonTabBar slot="bottom" className="FooterTab">
                <IonTabButton tab="home" href="/home">
                  <img
                    src="/assets/img/Home.png"
                    alt="Images"
                    className="TabIcon"
                  />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="radio" href="/main-category">
                  <img
                    src="/assets/img/Mysmart.png"
                    alt="Images"
                    className="TabIcon"
                  />
                  <IonLabel>Category</IonLabel>
                </IonTabButton>

                <IonTabButton tab="library"
                  href={authenticated ? "/nutry-budy" : "#"} onClick={() => !authenticated && setIsOpenLogin(true)}
                >
                  <img
                    src="/assets/img/NutriBuddy.png"
                    alt="Images"
                    className="TabIcon"
                  />
                  <IonLabel>NutriBuddy</IonLabel>
                </IonTabButton>

                <IonTabButton tab="search" href="/cart">
                  <div className="numCounter">
                    <span>{CartNum}</span>
                    <img
                      src="/assets/img/Cart.png"
                      alt="Images"
                      className="TabIcon"
                    />
                  </div>
                  <IonLabel>Cart</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          )}
        </IonReactRouter>
      </IonApp>
      <LoginPopup
        isOpen={isOpenLogin}
        setIsOpen={setIsOpenLogin}
        isOtpOpen={isOpenOtp}
        setIsOtpOpen={setIsOpenOtp}
      />
      <OTPPopup isOpen={isOpenOtp} setIsOpen={setIsOpenOtp} />
    </ApiProvider>
    // </CartProvider>
  );
};

export default App;
