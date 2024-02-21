// context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import Welcome from "../pages/Welcome/Welcome";
import { set, get } from "../services/Storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});
  const notifyStatus = '1'

  const login = (data) => {
    //localStorage.setItem("userData", JSON.stringify(data));
    set("userData", data);
    setUserData(data);
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };
  useEffect(() => {
    const loadUserData = async () => {
      const isLoggedIn = await get("auth");
      const userData = await get("userData");
      setAuthenticated(!!isLoggedIn);
      setUserData(userData);
      setLoading(false);
    };
    loadUserData();
  }, []);

  useEffect(() => {
    get("auth").then((isLoggedIn) => {
      if(isLoggedIn === "true") {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    })
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ userData, authenticated, login, logout, notifyStatus }}>
      {!loading ? ( // Render the children only when loading is false
        children
      ) : (
        <Welcome />
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
