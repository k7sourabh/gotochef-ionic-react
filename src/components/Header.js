import React, { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import LoginPopup from "../modal/LoginPopup";
import OTPPopup from "../modal/OTPPopup";
import {
  basketOutline,
  bookmarkOutline,
  fastFoodOutline,
  gridOutline,
  heartOutline,
  logInOutline,
  logOutOutline,
  personOutline,
} from "ionicons/icons";
import { useLogo } from "../contexts/ApiProvider";
import { useAuth } from "../context/AuthContext";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { set } from "../services/Storage";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

const Header = () => {
  const { headerImage } = useLogo();
  const [isOpenOtp, setIsOpenOtp] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const { authenticated, logout } = useAuth();
  const history = useHistory();
  const { id } = useParams;



  const startScan = async () => {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission();

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    const resultJSON = JSON.stringify(result);
    alert(resultJSON);

    // if the result has content
    if (result.hasContent) {
      const content = JSON.stringify(result.hasContent);
      alert(content); // log the raw scanned content
    }
  };

  const handleLogout = () => {
    logout();
    set("auth", "false");
    history.push("/").catch((err) => console.error(err));
  };

  return (
    <>
      <IonHeader id="main-content">
        <IonToolbar>
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-justify-content-between ion-padding ion-align-items-center">
              <IonCol size="auto">
                <IonButton
                  fill="clear"
                  routerLink="/home"
                  className="text-button"
                >
                  <div className="LogoGroup">
                    <IonImg
                      src={headerImage?.header_logo}
                      alt="Images"
                      className="mainLogo"
                    />
                  </div>
                  <div className="LogoGroup">
                    <img
                      src="/assets/img/ScanIcon.png"
                      alt="Images"
                      className="logoTag"
                      routerLink="/home"
                      onClick={startScan}
                    />
                  </div>
                </IonButton>
              </IonCol>

              <IonCol size="auto" className="ion-justify-content-end">
                <IonButtons className="ion-justify-content-end">
                  <IonButton className="IconBtn" routerLink="/search-product">
                    <img
                      src="/assets/img/Search.png"
                      alt="Images"
                      className="TopBarIcons"
                    />
                  </IonButton>
                  {authenticated && (
                    <IonButton
                      className="IconBtn"
                      routerLink={`/submit-recipe/${id ? id : ""}`}
                    // routerLink="/submit-recipe"
                    >
                      <img
                        src="/assets/img/edit.png"
                        alt="Images"
                        className="TopBarIcons"
                      />
                    </IonButton>
                  )}

                  <IonMenuButton>
                    <img
                      src="/assets/img/menu.png"
                      alt="Images"
                      className="TopBarIcons"
                    />
                  </IonMenuButton>
                </IonButtons>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonMenu side="end" contentId="main-content">
        <IonHeader className="MenuHead">
          <IonToolbar className="ion-padding">
            <IonTitle className="ion-no-padding">
              <img
                src="/assets/img/MainLogo.png"
                alt="Images"
                className="MenuMainLogo"
              />
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonList>
            {authenticated ? (
              <>
                <IonItem lines="none" routerLink="/profile">
                  <IonIcon
                    aria-hidden="true"
                    icon={personOutline}
                    slot="start"
                  ></IonIcon>
                  <IonLabel>Profile</IonLabel>
                </IonItem>

                <IonItem lines="none" routerLink="/home-recipe">
                  <IonIcon
                    aria-hidden="true"
                    icon={fastFoodOutline}
                    slot="start"
                  ></IonIcon>
                  <IonLabel>Recipe</IonLabel>
                </IonItem>

                <IonItem lines="none" routerLink="/main-category">
                  <IonIcon
                    aria-hidden="true"
                    icon={gridOutline}
                    slot="start"
                  ></IonIcon>
                  <IonLabel>Category</IonLabel>
                </IonItem>

                <IonItem lines="none" routerLink="/order-list">
                  <IonIcon
                    aria-hidden="true"
                    icon={basketOutline}
                    slot="start"
                    color="danger"
                  ></IonIcon>
                  <IonLabel>My orders</IonLabel>
                </IonItem>

                <IonItem lines="none" routerLink="/wish-list">
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    icon={heartOutline}
                  />
                  <IonLabel>WishList</IonLabel>
                </IonItem>

                <IonItem lines="none" routerLink="/bookmark">
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    icon={bookmarkOutline}
                  />
                  <IonLabel>BookMark</IonLabel>
                </IonItem>

                <IonItem lines="none" onClick={handleLogout}>
                  <IonIcon
                    aria-hidden="true"
                    icon={logOutOutline}
                    slot="start"
                  ></IonIcon>
                  <IonLabel>Sign out</IonLabel>
                </IonItem>
              </>
            ) : (
              <>
                <IonItem lines="none" routerLink="/home-recipe">
                  <IonIcon
                    aria-hidden="true"
                    icon={fastFoodOutline}
                    slot="start"
                  ></IonIcon>
                  <IonLabel>Recipe</IonLabel>
                </IonItem>
                <IonItem lines="none" routerLink="/main-category">
                  <IonIcon
                    aria-hidden="true"
                    icon={gridOutline}
                    slot="start"
                  ></IonIcon>
                  <IonLabel>Category</IonLabel>
                </IonItem>
                <IonItem lines="none" routerLink="/articles">
                  <IonIcon
                    aria-hidden="true"
                    icon={gridOutline}
                    slot="start"
                  ></IonIcon>
                  <IonLabel>Articles</IonLabel>
                </IonItem>
                <IonMenuToggle>
                  <IonItem lines="none" onClick={() => setIsOpenLogin(true)}>
                    <IonIcon
                      aria-hidden="true"
                      icon={logInOutline}
                      slot="start"
                    ></IonIcon>
                    <IonLabel>Login</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              </>
            )}
          </IonList>
        </IonContent>
      </IonMenu>

      <LoginPopup
        isOpen={isOpenLogin}
        setIsOpen={setIsOpenLogin}
        isOtpOpen={isOpenOtp}
        setIsOtpOpen={setIsOpenOtp}
      />
      <OTPPopup isOpen={isOpenOtp} setIsOpen={setIsOpenOtp} />
    </>
  );
};

export default Header;
