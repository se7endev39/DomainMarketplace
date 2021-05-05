import React, { useState, useMemo, useEffect, useCallback } from "react";
import { postFetcher } from "../utils/request";
import { userService } from "../_services";
import { userActions, alertActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import { RECAPTCHA_SITEKEY } from "../utils/constants";
import _ from "lodash";
import Router from 'next/router'
import ReCAPTCHA from "react-google-recaptcha";
import { PRIMARY_BTN_CLASS } from "../utils/constants.js";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recoverEmail, setRecoverEmail] = useState("");
  const [recoverEmailSent, setRecoverEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [recoverEmailError, setRecoverEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [captchaPassed, setCaptchaPassed] = useState(false);

  const dispatch = useDispatch();
  let hash;
  if (process.browser) {
    hash = window.location.hash.substr(1);
  }
  const [isLogin, setIsLogin] = useState(hash !== 'register'); // Current view is for login?
  const [isForgotPswd, setIsForgotPswd] = useState(false);

  useEffect(() => {
  }, []);

  useEffect(() => {
    console.log("hash changed :", hash)
    setIsLogin(hash !== 'register')
  }, [hash]);

  const onCaptchaChange = (value) => {
    setCaptchaPassed(true);
  };


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
    if (!signUpEmail || !signUpPassword || !signUpUsername) {
      return;
    }
    if (!captchaPassed) {
      return;
    }
    if (signUpPassword.length < 8) {
      return;
    }
    if (signUpPassword.length > 99) {
      return;
    }
    if (!checkPassword(signUpPassword)) {
      return;
    }
    dispatch(userActions.register(signUpEmail, signUpUsername, signUpPassword));
  };


  const onSwitchLogin = () => {
    setIsLogin(!isLogin);
  }

  const onSubmit = (e) => {
    resetErrors()
    e.preventDefault();
    if (email && password) {
      userService.login(email, password).then(
        (user) => {
          Router.push("/mysourcer");
        },
        (error) => {
          const code = _.get(error, "response.data.code")
          console.log("login error:", code, error)
          if (code === 100) {
            setEmailError(true)
          } else if (code === 101) {
            setPasswordError("Incorrect password")
          }
        }
      );
    } else if (!password) {
      setPasswordError("You must enter a password")
    }
  };

  const sendRecoverEmail = (e) => {
    e.preventDefault();
    postFetcher("/v1/auth/forgot-password", { email: recoverEmail })
      .then((res) => {
        if (res) {
          setRecoverEmailSent(true)
        }
        else {
          setRecoverEmailError(true)
        }
      })
      .catch((error) => {
        setRecoverEmailError(true)
        // dispatch(alertActions.error(error.response.data.message));
      });
  }

  const resetErrors = () => {
    setEmailError(false)
    setPasswordError("")
  }

  return (
    <div className="login-container page-container">
      <div className={"xl:w-1/2 login-section pt-6 xl:pb-6 pb-32 flex items-center relative overflow-auto " + (isLogin ? "w-full" : "w-0")}>
        {!isForgotPswd ? <form className={"sm:m-auto auth-transition login-form input-form mx-2 " + (isLogin ? "" : "opacity-0")} onSubmit={onSubmit}>
          <div className="auth-form-title font-bold color-primary mb-12">Log in</div>
          <div className="w-full mb-10 relative">
            {emailError && <div className="absolute right-0 input-error-indicator">E-mail not found</div>}
            <div className="absolute input-label">E-mail</div>
            <input
              className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none " + (emailError ? "input-error" : "")}
              type="text"
              name="username"
              value={email}
              placeholder="foo@bar.com"
              onChange={(e) => { setEmail(e.target.value); resetErrors() }}
            />
          </div>
          <div className="w-full mb-12 relative">
            {passwordError && <div className="absolute right-0 input-error-indicator">{passwordError}</div>}
            <div className="absolute input-label">Password</div>
            <input
              className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none " + (passwordError ? "input-error" : "")}
              name="password"
              type="password"
              value={password}
              placeholder="******************"
              onChange={(e) => { setPassword(e.target.value); resetErrors() }}
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <button
              className={PRIMARY_BTN_CLASS + "login-form-button "}
              type="submit"
            >
              Log in
              </button>
            <div className="login-form-forgot-pswd cursor-pointer color-primary" onClick={() => { setIsForgotPswd(true); resetErrors() }}>
              Forgot your password?
            </div>
          </div>

        </form>
          : !recoverEmailSent ? <form className={"sm:m-auto auth-transition login-form input-form mx-2 " + (isLogin ? "" : "opacity-0")} onSubmit={sendRecoverEmail}>
            <div className="auth-form-subtitle font-bold color-primary mb-4">Forgot your password?</div>
            <div className="font-primary text-color-secondary sc-font-lg auth-form-text mb-16">Enter your email address below and we’ll send you instructions on how to change your password.</div>
            <div className="w-full mb-10 relative">
              {recoverEmailError && <div className="absolute right-0 input-error-indicator">E-mail sending error</div>}
              <div className="absolute input-label">E-mail</div>
              <input
                className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none " + (emailError ? "input-error" : "")}
                type="email"
                name="username"
                value={recoverEmail}
                autocomplete="false"
                placeholder="foo@bar.com"
                onChange={(e) => { setRecoverEmail(e.target.value); resetErrors() }}
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <button
                className={PRIMARY_BTN_CLASS + "login-form-button "}
                type="submit"
              >
                Send
              </button>
              <div className="login-form-forgot-pswd cursor-pointer color-primary" onClick={() => { setIsForgotPswd(false); resetErrors() }}>
                Return to log in
              </div>
            </div>
          </form>
            : <div className="m-auto text-center">
              <div className="auth-form-title font-bold color-primary mb-3">Done!</div>
              <div className="font-primary text-color-secondary sc-font-lg auth-form-text mb-10">Check your e-mail for instructions</div>
              <div className="login-form-forgot-pswd cursor-pointer color-primary" onClick={() => { setIsForgotPswd(false); setRecoverEmailSent(false); }}>
                Return to log in
              </div>
            </div>
        }
        <div className={"w-full h-full top-0 absolute auth-transition login-hover-section hidden xl:flex items-center color-primary cursor-pointer " + (isLogin ? "opacity-0 pointer-events-none" : "")}
          onClick={() => { onSwitchLogin(); }}
        >
          <div className="m-auto text-center login-hover-text">Already have<br />an account?</div>
        </div>
        <div className={"w-full text-center xl:hidden bg-white color-primary fixed auth-footer " + (isLogin ? "" : "hidden")}
          onClick={() => { onSwitchLogin(); }}>
          <div className="w-full h-full login-hover-section flex justify-center items-center">
            Don’t have an account yet?
        </div>
        </div>
      </div>
      <div className={"xl:w-1/2 signup-section pt-6 xl:pb-6 pb-32 flex items-center relative overflow-auto " + (isLogin ? "w-0" : "w-full")}>
        <form className={"sm:m-auto auth-transition login-form input-form mx-2 " + (isLogin ? "opacity-0" : "")} onSubmit={register}>
          <div className="auth-form-title font-bold color-primary mb-12">Register</div>
          <div className="w-full mb-10 relative">
            {emailError && <div className="absolute right-0 input-error-indicator">E-mail not found</div>}
            <div className="absolute input-label">E-mail</div>
            <input
              className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none " + (emailError ? "input-error" : "")}
              type="text"
              name="username"
              value={signUpEmail}
              placeholder="John@gmail.com"
              onChange={(e) => { setSignUpEmail(e.target.value); resetErrors() }}
            />
          </div>
          <div className="w-full mb-12 relative">
            <div className="absolute input-label">Screen name</div>
            <input
              className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none "}
              name="display"
              type="text"
              value={signUpUsername}
              placeholder="Johnnyjunior"
              onChange={(e) => { setSignUpUsername(e.target.value); resetErrors() }}
            />
          </div>
          <div className="w-full mb-6 relative">
            {passwordError && <div className="absolute right-0 input-error-indicator">{passwordError}</div>}
            <div className="absolute input-label">Password</div>
            <input
              className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none " + (passwordError ? "input-error" : "")}
              name="password"
              type="password"
              value={signUpPassword}
              placeholder="******************"
              onChange={(e) => { setSignUpPassword(e.target.value); resetErrors() }}
            />
          </div>
          <div className="mb-12">
            <ReCAPTCHA sitekey={RECAPTCHA_SITEKEY} onChange={onCaptchaChange} />
          </div>
          <div className="w-full flex justify-between items-center">
            <button
              className={PRIMARY_BTN_CLASS + "register-form-button "}
              type="submit"
            >
              Register
              </button>
          </div>
        </form>

        <div className={"w-full h-full top-0 absolute auth-transition login-hover-section hidden xl:flex items-center color-primary cursor-pointer " + (isLogin ? "" : "opacity-0 pointer-events-none")}
          onClick={() => { onSwitchLogin(); }}
        >
          <div className="m-auto text-center login-hover-text">Don’t have an<br />account yet?</div>
        </div>
        <div className={"w-full text-center xl:hidden bg-white color-primary fixed auth-footer " + (isLogin ? "hidden" : "")}
          onClick={() => { onSwitchLogin(); }}>
          <div className="w-full h-full login-hover-section flex justify-center items-center">
            Already have an account?
        </div>
        </div>
      </div>


    </div>
  );
};

Login.getInitialProps = async ({ query }) => {
  return { query }
}
export default Login;