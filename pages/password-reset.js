import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from 'next/link';
import { makeRequest, fetcher, postFetcher } from "../utils/request.js";
import { alertActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import { NAV_LINK_CLASS } from "../utils/constants";
import queryString from "query-string";
import Router from 'next/router'
import { PRIMARY_BTN_CLASS } from "../utils/constants.js";

const PasswordResetPage = (props) => {
  const [password, setPassword] = useState("");
  const [linkConfirmed, setLinkConfirmed] = useState(false);
  const [passwordRequesting, setPasswordRequesting] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const dispatch = useDispatch();
  let params = {};

  if (process.browser) {
    params = queryString.parse(window.location.search);
  }
  useEffect(() => {
    if (!params.id || !params.userId) {
      Router.push('/login');
      return;
    }
    postFetcher("/v1/auth/forgot-password-confirm", params)
      .then((res) => {
        setLinkConfirmed(true);
      })
      .catch((error) => {
        Router.push('/login');
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("fogot p submit:", password);
    setPasswordRequesting(true);
    postFetcher("/v1/auth/reset-password", { password, ...params })
      .then((res) => {
        setPasswordRequesting(false);
        setPasswordUpdated(true);
      })
      .catch((error) => {
        setPasswordRequesting(false);
        dispatch(alertActions.error(error.response.data.message));
      });
  };

  return (
    <div className="bg-white h-full flex justify-center  ">
      {passwordUpdated ?
        <div className="text-gray-700 mt-8 text-center text-lg">
          Your password was updated successfully. You can <Link href="/login"><a className={NAV_LINK_CLASS + "mr-0"}>Log In</a></Link> with new password.
          </div>
        : linkConfirmed && <form className="login-form input-form text-center" onSubmit={onSubmit}>
          <div className="font-primary text-color-secondary sc-font-lg mb-4">
            Please input your new password.
          </div>
          <div className="md:flex md:items-center mb-6">
            <input
              className="appearance-none w-full px-3 leading-tight font-primary focus:outline-none"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={PRIMARY_BTN_CLASS + "px-4"} type="submit" >
            Reset password
            </button>
        </form>}
    </div>
  );
};

export default PasswordResetPage;
