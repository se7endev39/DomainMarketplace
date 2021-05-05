import React, { useState, useMemo, useEffect, useCallback } from "react";
import { userActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  return <div className="container flex justify-center m-auto mt-20"></div>;
};
export default Logout;
