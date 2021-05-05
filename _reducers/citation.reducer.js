import { citationConstants, apiStatus } from "../utils/constants";
import _ from "lodash";

export function citation(state = { favCitations: [] }, action) {
  console.log("citation reducer action:", action, state);

  switch (action.type) {
    case citationConstants.LIKE:
      let favCitations = state.favCitations || [];
      if (action.data.like) {
        favCitations = [...favCitations, action.data.citationId];
      } else {
        favCitations = [...favCitations];
        const index = favCitations.indexOf(action.data.citationId);
        if (index > -1) {
          favCitations.splice(index, 1);
        }
      }
      return {
        ...state,
        favCitations,
      };
    case citationConstants.GETLIKES:
      const citationsArr = _.get(action, "res.citations", [])
      const citations = citationsArr.map((c) => c.citationId);
      return {
        ...state,
        favCitations: citations,
      };
    default:
      return state;
  }
}
