import { alertConstants, apiStatus } from "../utils/constants";
import { authActions } from '_actions'

export function alert(state = {}, action) {
  switch (action.type) {
    case authActions.types.signUp_fail:
      return {
        type: apiStatus.FAIL,
        message: action.message,
      }
    case authActions.types.signIn_fail:
      return {
        type: apiStatus.FAIL,
        message: action.message,
      }
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
