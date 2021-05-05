import { userConstants } from "../utils/constants";
import { userService } from "../_services";
import { alertActions, citationActions, topicActions } from "./";
import Router from 'next/router'
import _ from "lodash";

export const userActions = {
  // login,
  logout,
  register,
  getAll,
  delete: _delete,
};
/*
function login(email, password) {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.clear());
        dispatch(citationActions.getFavoriteCitations());
        dispatch(topicActions.getFavoriteTopics());
        Router.push("/mysourcer");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}*/

function logout() {
  userService.logout();
  Router.push("/login");
  return { type: userConstants.LOGOUT };
}

function register(email, username, password) {
  return (dispatch) => {
    dispatch(request(email));

    userService.register(email, username, password).then(
      (user) => {
        dispatch(success(user));
        Router.push({ pathname: '/login', query: { from: "register" } });
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(_.get(error, "response.data.message", "")));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    userService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.response.data.message))
    );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    userService.delete(id).then(
      (user) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.response.data.message))
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}
