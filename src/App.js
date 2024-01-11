import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, } from "@ionic/react";
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
import FavouriteProducts from "./pages/Products/FavouriteProducts";
import CartProducts from "./pages/Products/CartProducts";
import Welcome from './pages/Welcome/Welcome';
import './theme/global.css'
import { SplashScreen } from '@capacitor/splash-screen';
import AddPayment from "./pages/Payment/AddPayment";
import MainCategory from "./pages/Products/MainCategory";
import AddAddress from "./pages/AddAddress/AddAddress";
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
import RecipePage from "./pages/HomeRecipe/RecipePage";
import VeganRecipe from "./pages/HomeRecipe/VeganRecipe";
import NutriBudy from "./pages/Products/NutriBudy";
import MyProfile from "./pages/EditProfile/MyProfile";
import SubmitRecipe from "./pages/HomeRecipe/SubmitRecipe";


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



  return (
    <ApiProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/welcome" exact>
              <Welcome />
            </Route>
          </IonRouterOutlet>
          {window.location.pathname !== "/welcome" &&

            <IonTabs>
              <IonRouterOutlet>
                <Route path="/" exact={true}>
                  <Redirect to="/home" />
                </Route>
                <Route path="/home" exact={true}>
                  <Home />
                </Route>

                <Route path="/favourites" exact>
                  <FavouriteProducts />
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

                <Route path="/add-payment" exact>
                  <AddPayment />
                </Route>
                <Route path="/add-address" exact>
                  <AddAddress />
                </Route>
                <Route path="/home-recipe" exact>
                  <HomeRecipe />
                </Route>
                <Route path="/recipe-page" exact>
                  <RecipePage />
                </Route>
               <Route path="/vegan-recipe" exact>
                <VeganRecipe />
               </Route>
               <Route path="/submit-recipe" exact>
                <SubmitRecipe />
               </Route>
                <Route path="/profile" exact>
                  <Profile />
                </Route>
                <Route path="/my-profile" exact>
                  <MyProfile />
                </Route>
                <Route path="/dashboard" exact>
                  <Dashboard/>
                </Route>
                <Route path="/order-list" exact>
                  <OrderList />
                </Route>
                <Route path="/wish-list" exact>
                  <WishList />
                </Route>
                <Route path="/change-password" exact>
                  <ChangePassword />
                </Route>
                <Route path="/edit-profile" exact>
                  <EditProfile />
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
                  <img src="/assets/img/Home.png" alt="Images" className="TabIcon" />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="radio" href="/main-category">
                  <img src="/assets/img/Mysmart.png" alt="Images" className="TabIcon" />
                  <IonLabel>Category</IonLabel>
                </IonTabButton>

                <IonTabButton tab="library" href="/nutry-budy">
                  <img src="/assets/img/NutriBuddy.png" alt="Images" className="TabIcon" />
                  <IonLabel>NutriBuddy</IonLabel>
                </IonTabButton>

                <IonTabButton tab="search" href="/cart">
                  <img src="/assets/img/Cart.png" alt="Images" className="TabIcon" />
                  <IonLabel>Cart</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>}

        </IonReactRouter>
      </IonApp >
    </ApiProvider>
  );
};

export default App;
