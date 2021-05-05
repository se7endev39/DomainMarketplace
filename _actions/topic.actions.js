import { topicConstants } from "../utils/constants";
import { topicService } from "../_services";
import { alertActions } from ".";

export const topicActions = {
  like,
  getFavoriteTopics,
};

function like(topicId, like) {
  return (dispatch) => {
    topicService.likeTopic(topicId, like).then(
      (res) => {
        dispatch({ type: topicConstants.LIKE, data: { like, topicId } });
      },
      (error) => { }
    );
  };
}

function getFavoriteTopics() {
  return (dispatch) => {
    topicService.getFavoriteTopics().then(
      (res) => {
        dispatch({ type: topicConstants.GETLIKES, res });
      },
      (error) => { }
    );
  };
}
