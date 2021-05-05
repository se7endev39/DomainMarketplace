import { topicConstants, apiStatus } from "../utils/constants";
import _ from "lodash";

export function topic(state = { favTopics: [] }, action) {
  console.log("topic reducer action:", action, state);

  switch (action.type) {
    case topicConstants.LIKE:
      let favTopics = state.favTopics || [];
      if (action.data.like) {
        favTopics = [...favTopics, action.data.topicId];
      } else {
        favTopics = [...favTopics];
        const index = favTopics.indexOf(action.data.topicId);
        if (index > -1) {
          favTopics.splice(index, 1);
        }
      }
      return {
        ...state,
        favTopics,
      };
    case topicConstants.GETLIKES:
      const topicsArr = _.get(action, "res.topics", [])
      const topics = topicsArr.map((c) => c.topicId);
      return {
        ...state,
        favTopics: topics,
      };
    default:
      return state;
  }
}
