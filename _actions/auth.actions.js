import axios from 'axios'
import {alertActions} from './alert.actions'

const types = {
  signUp: "ACTION_CART_signUp",
  signIn: "ACTION_CART_signIn",
  singOut: "ACTION_AUTH_SIGNOUT",
}

const signUp = ({email, password}) => async(dispatch) => {
  const response = await axios.post("/api/auth/signup", {email, password})
  switch(response.data.type){
    case "success":
      dispatch({
        type: types.signUp,
        payload: response.data.payload
      })
      dispatch(alertActions.success("Sign up success"))
      break;
    default:
      dispatch(alertActions.error(response.data.message))
  }
}

const signIn = ({email, password}) => async (dispatch) => {
  const response = await axios.post("/api/auth/signin", {email, password})
  switch(response.data.type){
    case "success":
      dispatch({
        type: types.signIn,
        payload: response.data.payload
      })
      dispatch(alertActions.success("Sign in success"))
      break;
    default:
      dispatch(alertActions.error(response.data.message))
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