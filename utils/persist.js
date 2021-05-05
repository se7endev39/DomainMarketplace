const storageKey = "sourcer_citer";
import _ from "lodash";

export const persistUser = (data) => {
  localStorage.setItem(storageKey, JSON.stringify(data));
};

export const getUserData = () => {
  const userData = process.browser ? JSON.parse(localStorage.getItem(storageKey)) : undefined;
  return userData;
};

export const getUserId = () => {
  let userId = getUserData()?.user.id;
  return isNaN(userId) ? 0 : parseInt(userId);
};

export const getUserName = () => {
  let userName = _.get(getUserData(), "user.username");
  return userName;
};

export const clearUserData = () => {
  if (process.browser) {
    localStorage.removeItem(storageKey);
  }
};

export const getToken = () => {
  const userData = getUserData();

  if (userData) {
    return userData.token;
  }

  return null;
};

export const hasUserData = () => {
  return !!localStorage.getItem(storageKey);
};

export const isTokenExpired = () => {
  const token = getUserData();
  if (!token || !token.exp_date) {
    return true;
  }

  const now = new Date();
  const tokenExpirationDate = new Date(token.exp_date);

  return now > tokenExpirationDate;
};
