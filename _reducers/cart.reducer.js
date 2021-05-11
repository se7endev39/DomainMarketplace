import { alertConstants, apiStatus } from "../utils/constants";

export function cart(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: apiStatus.SUCCESS,
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        type: apiStatus.FAIL,
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}
