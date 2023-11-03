/* eslint-disable arrow-body-style */
import axios from "axios";

// const host = window.location.origin;
export const GOTO_CHEF_API_URL = "https://uat.justgotochef.com/api"
const axiosInstance = axios.create({
  baseURL: GOTO_CHEF_API_URL,
});

const axiosInstanceWithAuth = axios.create({
  baseURL: GOTO_CHEF_API_URL,
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdWF0Lmp1c3Rnb3RvY2hlZi5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2OTY5MTkyMjQsImV4cCI6MTcyODQ1NTIyNCwibmJmIjoxNjk2OTE5MjI0LCJqdGkiOiJ3cU9DZDlpMnBEbEJ4OFptIiwic3ViIjo0Njg1LCJwcnYiOiJkZWM1ZjgxNzNkNTAwNTU0Y2NiOTNlZjgyMWE0NGRiMTdiMzJiYTMwIn0.QkizpkmsNx2txuNbhEAxjyiKGOgb2iCgEO2evd6Ex20`,
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

