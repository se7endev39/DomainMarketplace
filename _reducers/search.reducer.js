import { searchConstants, apiStatus } from "../utils/constants";

export function search(state = {}, action) {
  console.log("search reduce action:", action);
  const term = action.term;
  switch (action.type) {
    case searchConstants.SEARCH_REQUEST:
      return {
        loading: true,
        term
      };
    case searchConstants.SEARCH_SUCCESS:
      return {
        topics: action.topics,
        loading: false,
        term
      };
    case searchConstants.GETALL_FAILURE:
      return {
        error: action.err,
        loading: false,
        term
      };
    default:
      return state;
  }
}
