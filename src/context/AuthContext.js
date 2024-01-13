// context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import Welcome from "../pages/Welcome/Welcome";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});

  const login = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };
  useEffect(() => {
    const loadUserData = async () => {
      const isLoggedIn = await localStorage.getItem("auth");
      setAuthenticated(!!isLoggedIn);
      setLoading(false);
    };
    loadUserData();
  }, []);

  useEffect(() => {
    //  setUserData(JSON.parse(localStorage.getItem("userData")));
    if (localStorage.getItem("auth") === "true") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ userData, authenticated, login, logout }}>
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
