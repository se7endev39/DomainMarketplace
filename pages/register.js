import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from 'next/link';
import { postFetcher } from "../utils/request";
import { userActions, alertActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import { RECAPTCHA_SITEKEY } from "../utils/constants";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const dispatch = useDispatch();

  // To check a password between 8 to 99 characters which contain at least one numeric digit, one uppercase and one lowercase letter.
  const checkPassword = (inputtxt) => {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,99}$/;
    if (inputtxt.match(passw)) {
      return true;
    } else {
      return false;
    }
  };

  const register = (e) => {
    e.preventDefault();
    if (!email || !password || !username) {
      dispatch(alertActions.error("All fields are required!"));
      return;
    }
    if (!captchaPassed) {
      dispatch(alertActions.error("Please confirm you are not robot."));
      return;
    }
    if (password.length < 8) {
      dispatch(alertActions.error("Please use a password at least 8 characters long."));
      return;
    }
    if (password.length > 99) {
      dispatch(alertActions.error("Please use a password at most 99 characters long."));
      return;
    }
    if (!checkPassword(password)) {
      dispatch(
        alertActions.error("Please use a password with at least one lower case letter, upper case letter and digit.")
      );
      return;
    }
    dispatch(userActions.register(email, username, password));
  };

  const onCaptchaChange = (value) => {
    setCaptchaPassed(true);
  };

  return (
    <div className="container flex justify-center m-auto mt-20">
      <form className="w-full max-w-sm" onSubmit={register}>
        <div className="md:flex md:items-center mb-6 relative">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="username"
              type="text"
              value={email}
              placeholder="foo@bar.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="absolute text-xs text-gray-600 register-field-guide">
            This is for making sure that you’re a real person. We’ll only send you important updates.
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 relative">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Display Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="display"
              type="text"
              value={username}
              placeholder="John"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="absolute text-xs text-gray-600 register-field-guide">
            This is the name other users will see when interacting with your submissions. It must be unique.
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 relative">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username">
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="password"
              type="password"
              value={password}
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="absolute text-xs text-gray-600 register-field-guide">
            Password between 8 and 99 characters; must contain at least one lowercase letter, one uppercase letter and
            one numeric digit.
          </div>
        </div>
        <div className="md:flex justify-end mb-6">
          <ReCAPTCHA sitekey={RECAPTCHA_SITEKEY} onChange={onCaptchaChange} />
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
        <div className="md:flex md:items-center mt-10">
          <label className="md:w-2/3 block text-gray-500 font-bold text-right">
            <span className="text-sm">Already have an account?</span>
          </label>
          <div className="md:w-1/3 text-right">
            <button
              className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              <Link href="/login">Login</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
