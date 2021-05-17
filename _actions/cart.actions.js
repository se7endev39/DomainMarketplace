import axios from 'axios'
import { alertActions } from './alert.actions'

const types = {
  get: "ACTION_CART_GET",
  clear: "ACTION_CART_CLEAR",
  checkout: "ACTION_CART_CHECKOUT"
}

const add = (data) => async(dispatch) => {
  const response = await axios.post("/api/cart", data)
  get()(dispatch)
}

const get = () => async (dispatch) => {
  const response = await axios.get("/api/cart")
  dispatch({
    type: types.get,
    payload: response.data
  })
}

const remove = (domain) => async(dispatch) => {
  const response = await axios.delete("/api/cart", {params: {domain}})
  get()(dispatch)
}

const clear = () => async(dispatch) => {
  const response = await axios.post("/api/cart/clear")
  dispatch({
    type: types.clear
  })
}

const checkout = ( callback ) => async (dispatch) => {
  const response = await axios.post("/api/cart/checkout")
  dispatch({
    type: types.checkout
  })
  if(response.data.type == "success"){
    dispatch(alertActions.success("Domains are purchased"))
  }
  get()(dispatch)
  callback()
}

export const cartActions = {
  types,
  get,
  add,
  remove,
  clear,
  checkout
};