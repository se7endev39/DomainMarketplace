// import config from "config";
// import { authHeader } from "../_helpers";
import { postFetcher } from "../utils/request";
import { persistUser, clearUserData } from "../utils/persist";

export const userService = {
  login,
  logout,
  register,
  contact,
  // getAll,
  // getById,
  // update,
  // delete: _delete,
};

function login(email, password) {
  return postFetcher("/v1/auth/login", { email, password }).then((res) => {
    if (res) {
      persistUser(res);
      return res.user;
    } else {
      throw new Error("Network error.");
    }
  });
}

function logout() {
  // remove user from local storage to log user out
  clearUserData();
}

// function getAll() {
//   const requestOptions = {
//     method: "GET",
//     headers: authHeader(),
//   };

//   return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

// function getById(id) {
//   const requestOptions = {
//     method: "GET",
//     headers: authHeader(),
//   };

//   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

function register(email, username, password) {
  return postFetcher("/v1/auth/register", { email, username, password }).then((res) => {
    if (!res) throw new Error("Network error.");
  });
}

function contact(name, email, message) {
  return postFetcher("/v1/contact", { name, email, message }).then((res) => {
    if (!res) throw new Error("Network error.");
  });
}