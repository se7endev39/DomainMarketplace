export const PRIMARY_BTN_CLASS = "rounded-full font-bold text-white bg-primary focus:outline-none hover-shadow sc-btn ";
export const SECONDARY_BTN_CLASS = "rounded-full font-bold text-color-third bg-white focus:outline-none hover-shadow border-3 px-6 sc-btn ";
export const CANCEL_BTN_CLASS =
  "flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded ";
export const PRIMARY_INPUT_CLASS =
  "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 ";
export const NAV_LINK_CLASS = " hover-link-shadow hover:text-gray-200 font-bold nav-link";

export const apiStatus = {
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  LOADING: "LOADING",
};

// For reducers
export const userConstants = {
  REGISTER_REQUEST: "USERS_REGISTER_REQUEST",
  REGISTER_SUCCESS: "USERS_REGISTER_SUCCESS",
  REGISTER_FAILURE: "USERS_REGISTER_FAILURE",

  LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USERS_LOGIN_FAILURE",

  LOGOUT: "USERS_LOGOUT",

  GETALL_REQUEST: "USERS_GETALL_REQUEST",
  GETALL_SUCCESS: "USERS_GETALL_SUCCESS",
  GETALL_FAILURE: "USERS_GETALL_FAILURE",

  DELETE_REQUEST: "USERS_DELETE_REQUEST",
  DELETE_SUCCESS: "USERS_DELETE_SUCCESS",
  DELETE_FAILURE: "USERS_DELETE_FAILURE",
};

export const searchConstants = {
  SEARCH_REQUEST: "SEARCH_REQUEST",
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_FAILURE: "SEARCH_FAILURE",
};

export const alertConstants = {
  SUCCESS: "ALERT_SUCCESS",
  ERROR: "ALERT_ERROR",
  CLEAR: "ALERT_CLEAR",
};

export const topicConstants = {
  LIKE: "TOPIC_LIKE",
  GETLIKES: "TOPIC_GETLIKES",
};

export const citationConstants = {
  LIKE: "CITATION_LIKE",
  GETLIKES: "CITATION_GETLIKES",
};

export const errorAlertConstants = {
  LIKE_ERROR_ALERT: "LIKE_ERROR_ALERT",
};

export const RECAPTCHA_SITEKEY = "6Leit7sZAAAAAIuc-zxs2u8mbD7-S00g49oIxhKh";
