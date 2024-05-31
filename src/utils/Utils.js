/* eslint-disable arrow-body-style */
import axios from "axios";

// const host = window.location.origin;    
export const GOTO_CHEF_API_URL = "http://20.207.207.62/api"
// export const GOTO_CHEF_API_URL = "http://13.251.201.255/api"
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

