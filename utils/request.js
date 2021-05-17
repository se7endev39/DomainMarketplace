import axios from "axios";
import { getToken, clearUserData } from "./persist";

const axiosInstance = axios.create({
  // baseURL: "https://api.sourcer.cc",
  baseURL: "http://localhost:8080",
});

const parseErrors = (err) => {
  if (err.response) {
    switch (err.response.status) {
      case 401:
        clearUserData();
      default:
        throw err;
    }
  } else if (err.request) {
    console.log(err, "network error");
  } else {
    console.log("something unique happened");
  }
};

const createHeaders = (additionalHeaders = {}) => {
  const headers = {
    "Content-Type": "application/json",
    ...additionalHeaders,
  };

  const token = getToken();
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return headers;
};

export const makeRequest = async (method, url, data = {}, additionalHeaders = {}) => {
  const headers = createHeaders(additionalHeaders);

  try {
    const res = await axiosInstance({
      method,
      url,
      data,
      headers,
    });
    return res.data;
  } catch (err) {
    parseErrors(err);
  }
};

export const fetcher = async (path, method = "get") => {
  try {
    const headers = createHeaders();
    const res = await axiosInstance[method](path, { headers });
    return res.data;
  } catch (err) {
    parseErrors(err);
  }
};

export const postFetcher = async (path, data) => {
  try {
    const headers = createHeaders();
    const res = await axiosInstance.post(path, data, { headers });
    return res.data;
  } catch (err) {
    parseErrors(err);
  }
};

export const putFetcher = async (path, data) => {
  try {
    const headers = createHeaders();
    const res = await axiosInstance.put(path, data, { headers });
    return res.data;
  } catch (err) {
    parseErrors(err);
  }
};