import { searchConstants } from "../utils/constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { makeRequest, fetcher, postFetcher } from "../utils/request.js";

export const searchActions = {
  search,
};

function search(term) {
  return (dispatch) => {
    dispatch({ type: searchConstants.SEARCH_REQUEST, term });
    fetcher("/v1/topic?term=" + encodeURI(term))
      .then((res) => {
        dispatch({ type: searchConstants.SEARCH_SUCCESS, topics: res.topics, term });
      })
      .catch((err) => {
        dispatch({ type: searchConstants.SEARCH_FAILURE, err, term });
      });
  };
}
