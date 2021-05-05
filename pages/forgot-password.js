import React, { useState, useMemo, useEffect, useCallback } from "react";
import { makeRequest, fetcher, postFetcher } from "../utils/request.js";
import { alertActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [emailRequesting, setEmailRequesting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setEmailRequesting(true);
    postFetcher("/v1/auth/forgot-password", { email })
      .then((res) => {
        setEmailRequesting(false);
        setEmailSent(true);
      })
      .catch((error) => {
        setEmailRequesting(false);
        dispatch(alertActions.error(error.response.data.message));
      });
  };

  return (
    <div className="container flex justify-center m-auto mt-20">
      {emailSent ? (
        <div className="text-gray-700 mt-8 text-center text-lg">
          We've sent an email to the address provided. Click the link in the email to reset your password.
          <br />
          If you don't see the email, check other places it might be, like your junk, spam, soical, or other folders.
        </div>
      ) : (
          <form className="w-full max-w-sm text-center" onSubmit={onSubmit}>
            <div className="text-gray-700 text-xl font-bold mb-4">Forgot your password?</div>
            <div className="text-gray-700 mb-8">
              Don't worry! Just fill in your email and we'll send you a link to reset your password.
          </div>
            <div className="md:flex md:items-center mb-6">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="username"
                value={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <button
                className={
                  "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded " +
                  (emailRequesting ? "cursor-not-allowed opacity-50" : "")
                }
                type="submit"
              >
                Reset password
            </button>
            </div>
          </form>
        )}
    </div>
  );
};

export default ForgotPasswordPage;
