import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserData, getUserId } from "../utils/persist";
import { citationService } from "../_services";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if Private page is authorized.
  citationService.ogData("");
  return (
    <Route
      {...rest}
      render={(props) =>
        getUserData() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
};
