import { alertConstants } from "../utils/constants";

export const alertActions = {
  types: {
    success: "ALERT_SUCCESS",
    error: "ALERT_ERROR",
    clear: "ALERT_CLEAR",
  },
  success,
  error,
  clear,
};

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
