import axios from 'axios'
import { alertActions } from './alert.actions'

const types = {
  search: "ACTION_SEARCH_GET",
}

const search = (query) => async(dispatch) => {
  const response = await axios.get("/api/search", {params: {query}})
  dispatch( {
    type: types.search,
    payload: response.data
  })
}

export const searchActions = {
  types,
  search,
};