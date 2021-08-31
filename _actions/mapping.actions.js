import axios from 'axios'
import { alertActions } from './alert.actions'

const types = {
  get: "ACTION_MAPPING_GET",
}


const get = () => async (dispatch) => {
  const response = await axios.get("/api/mapping-table")
  if( response.data.type == "success")
    dispatch({
      type: types.get,
      payload: response.data.payload
    })
}


export const mappingActions = {
  types,
  get,
};