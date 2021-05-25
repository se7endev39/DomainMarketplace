import axios from 'axios'
import { alertActions } from './alert.actions'

const types = {
  signUp: "ACTION_CART_signUp",
  signIn: "ACTION_CART_signIn",
  signOut: "ACTION_AUTH_SIGNOUT",
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
      updateToken( response.data.payload.token )
      break;
    default:
      dispatch(alertActions.error(response.data.message))
  }
}

const signIn = ({email, password}) => async (dispatch) => {
  updateToken()
  const response = await axios.post("/api/auth/signin", {email, password})
  switch(response.data.type){
    case "success":
      dispatch({
        type: types.signIn,
        payload: response.data.payload
      })
      dispatch(alertActions.success("Sign in success"))
      updateToken( response.data.payload.token )
      break;
    default:
      dispatch(alertActions.error(response.data.message))
  }
}

const signOut = () => async (dispatch) => {
  try{
    const response = await axios.post("/api/auth/signout")
  }catch(e){
  }
  dispatch({
    type: types.signOut,
  })
  updateToken()
}

const checkSign = () => async dispatch => {
  let response;
  try{
    response = await axios.post("/api/auth/checksign")
  }catch(e){
    response = e.response
  }
  switch(response.data.type){
    case "success":
      dispatch({
        type: types.signIn,
        payload: response.data.payload
      })
      updateToken( response.data.payload.token )
      break;
    default:
      updateToken()
  }
}

const updateToken = (token) => {
  if(!token) localStorage.removeItem("token")
  else{
    localStorage.setItem("token", token)
  }
}

export const authActions = {
  types,
  signIn,
  signUp,
  signOut,
  checkSign,
  updateToken
};