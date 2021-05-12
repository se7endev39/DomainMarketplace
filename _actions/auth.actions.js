import axios from 'axios'

const types = {
  signUp_success: "ACTION_CART_SIGNUP_SUCCESS",
  signUp_fail: "ACTION_CART_SIGNUP_FAIL",
  signIn_success: "ACTION_CART_SIGNIN_SUCCESS",
  signUp_fail: "ACTION_CART_SIGNIN_FAIL",
  singOut: "ACTION_AUTH_SIGNOUT",
}

const signUp = ({email, password}) => async(dispatch) => {
  const response = await axios.post("/api/auth/signUp", {email, password})
  switch(response.data.type){
    case "success":
      dispatch({
        type: types.signUp_success,
        payload: response.data.payload
      })
      break;
    default:
      dispatch({
        type: types.signUp_fail,
        message: response.data.data.message
      })
  }
}

const signIn = ({email, password}) => async (dispatch) => {
  const response = await axios.post("/api/auth/signIn", {email, password})
  switch(response.data.type){
    case "success":
      dispatch({
        type: types.signIn_success,
        payload: response.data.payload
      })
      break;
    default:
      dispatch({
        type: types.signIn_fail,
        message: response.data.data.message
      })
  }
}

const singOut = (n) => async(dispatch) => {
  const response = await axios.post("/api/auth/signOut")
  dispatch({
    type: types.signOut,
  })
}

export const authActions = {
  types,
  signIn,
  signUp,
  singOut,
};