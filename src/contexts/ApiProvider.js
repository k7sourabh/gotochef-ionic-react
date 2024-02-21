import { createContext, useContext, useEffect, useState } from "react";
import { getApiData } from "../utils/Utils";

const LogoContext = createContext();

export function ApiProvider({ children }) {
  const [headerImage, setHeaderImage] = useState({});

  const headerImg = async () => {
    try{
      const response = await getApiData("/header-logo");
      setHeaderImage(response?.data?.data);
    } catch(error){
      console.error(error);
    }
  };
  useEffect(() => {
    headerImg();
  }, []);
  return (
    <LogoContext.Provider value={{ headerImage }}>
      {children}
    </LogoContext.Provider>
  );
}

export function useLogo() {
   const context = useContext(LogoContext);
    return context;
  }
