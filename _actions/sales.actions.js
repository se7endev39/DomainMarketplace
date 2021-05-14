import axios from 'axios'
import { alertActions } from './alert.actions'

const types = {
  get: "ACTION_SALES_GET",
  clear: "ACTION_SALES_CLEAR",
  checkout: "ACTION_SALES_CHECKOUT"
}
const get = () => async (dispatch) => {
  const response = await axios.get("/api/sales")
  dispatch({
    type: types.get,
    payload: response.data
  })
}

const changePrice = ({domain, price}) => async (dispatch) => {
  const response = await axios.put("/api/sales", {domain, price})
  if(response.data.type == "success"){
    dispatch(alertActions.success(`Price for ${domain} changed`))
  }
  get()(dispatch)
}

const setHold = ({ domain, status}) => async (dispatch) => {
  const response = await axios.put("/api/sales", {domain, status})
  if(response.data.type == "success"){
    dispatch(alertActions.success(`Status for ${domain} changed`))
  }
  get()(dispatch)
}

export const salesActions = {
  types,
  get,
  changePrice,
  setHold,
};