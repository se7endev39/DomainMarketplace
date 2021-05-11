import axios from 'axios'

const types = {
  get: "ACTION_CART_GET",
  clear: "ACTION_CART_CLEAR",

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



export const cartActions = {
  types,
  get,
  add,
  remove,
  clear,
};