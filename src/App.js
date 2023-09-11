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
import { useEffect } from "react";
import { fetchData } from "./data/fetcher";
import CategoryProducts from "./pages/Products/CategoryProducts";
import Product from "./pages/Products/Product";
import FavouriteProducts from "./pages/Products/FavouriteProducts";
import CartProducts from "./pages/Products/CartProducts";
import Welcome from './pages/Welcome/Welcome';
import './theme/global.css'
import { SplashScreen } from '@capacitor/splash-screen';


// Hide the splash (you should do this on app launch)
await SplashScreen.hide();

// Show the splash for an indefinite amount of time:
await SplashScreen.show({
  autoHide: false,
});

// Show the splash for two seconds and then automatically hide it:
await SplashScreen.show({
  showDuration: 2000,
  autoHide: true,
});

setupIonicReact({});

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
        </IonRouterOutlet>
        {window.location.pathname !== "/welcome" && <IonTabs>
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

            <Route path="/category/:slug/:id" exact>
              <Product />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <img src="/assets/img/Home.png" alt="Images" className="TabIcon" />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="radio" href="/radio">
              <img src="/assets/img/Mysmart.png" alt="Images" className="TabIcon" />
              <IonLabel>MySmartKitchen</IonLabel>
            </IonTabButton>

            <IonTabButton tab="library" href="/library">
              <img src="/assets/img/NutriBuddy.png" alt="Images" className="TabIcon" />
              <IonLabel>NutriBuddy</IonLabel>
            </IonTabButton>

            <IonTabButton tab="search" href="/search">
              <img src="/assets/img/Cart.png" alt="Images" className="TabIcon" />
              <IonLabel>Cart</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>}
      </IonReactRouter>
    </IonApp >
  );
};

export default App;
