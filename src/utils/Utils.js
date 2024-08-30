/* eslint-disable arrow-body-style */
import axios from "axios";
import { clear, get } from "../services/Storage";
import { useEffect } from "react";

// const host = window.location.origin;    
export const GOTO_CHEF_API_URL = "https://www.justgotochef.com/api"
// export const GOTO_CHEF_API_URL = "http://13.251.201.255/api"
const axiosInstance = axios.create({
  baseURL: GOTO_CHEF_API_URL,
});


const axiosInstanceWithAuth = axios.create({
  baseURL: GOTO_CHEF_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstanceWithAuth.interceptors.request.use(
  async (config) => {
    const accessToken = await get('token'); 
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstanceWithAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      await clear();
    }
    return Promise.reject(error);
  }
);

export const getApiData = async (url) => {
  const res = await axiosInstance({
    url,
    method: "GET",
  });
  return res;
};

export const getApiDataWithAuth = async (url) => {
  const res = await axiosInstanceWithAuth({
    url,
    method: "GET",
  });
  return res;
};

export const postApiData = async (url, data) => {
  const res = await axiosInstance({
    url,
    method: "POST",
    data,
  });
  return res;
};

export const postApiDataWithAuth = async (url, data) => {
  const res = await axiosInstanceWithAuth({
    url,
    method: "POST",
    data,
  });
  return res;
};

export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${day}-${months[monthIndex]}-${year}`;
  
  return formattedDate;
}


// export const logo = async ()=>{
//     const res = await getApiData("/header-logo") 
//     return res.data.data
// }

