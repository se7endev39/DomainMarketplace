import axios from 'axios'
import {alertActions} from './alert.actions'

const types = {

}

const resetPassword = ({newPassword, oldPassword}) => async dispatch => {
  const response = await axios.put("/api/auth/profile", {newPassword, oldPassword})
  switch(response.data.type){
    case "success":
      dispatch(alertActions.success("Password reset success"))
      break;
    default:
      dispatch(alertActions.error("Old password is not correct"))
  }
}

export const profile = {
  types,
  resetPassword
};