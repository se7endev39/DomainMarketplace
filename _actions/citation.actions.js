import { citationConstants } from "../utils/constants";
import { citationService } from "../_services";
import { alertActions } from "./";

export const citationActions = {
  like,
  getFavoriteCitations,
};

function like(citationId, like) {
  return (dispatch) => {
    citationService.likeCitation(citationId, like).then(
      (res) => {
        dispatch({ type: citationConstants.LIKE, data: { like, citationId } });
      },
      (error) => { }
    );
  };
}

function getFavoriteCitations() {
  return (dispatch) => {
    citationService.getFavoriteCitations().then(
      (res) => {
        dispatch({ type: citationConstants.GETLIKES, res });
      },
      (error) => { }
    );
  };
}
