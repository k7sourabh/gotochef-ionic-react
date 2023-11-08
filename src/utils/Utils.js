/* eslint-disable arrow-body-style */
import axios from "axios";

// const host = window.location.origin;
export const GOTO_CHEF_API_URL = "https://uat.justgotochef.com/api"
const axiosInstance = axios.create({
  baseURL: GOTO_CHEF_API_URL,
});

var token = localStorage.getItem("token");

const axiosInstanceWithAuth = axios.create({
  baseURL: GOTO_CHEF_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
   },
});

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


// export const logo = async ()=>{
//     const res = await getApiData("/header-logo") 
//     return res.data.data
// }

