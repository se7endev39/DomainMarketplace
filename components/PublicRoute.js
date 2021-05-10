import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserData } from "../utils/persist";

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (getUserData() && restricted ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};
