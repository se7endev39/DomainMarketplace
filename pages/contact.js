import React, { useState, useMemo, useEffect, useCallback } from "react";
import { RECAPTCHA_SITEKEY } from "../utils/constants";
import ReCAPTCHA from "react-google-recaptcha";
import { PRIMARY_BTN_CLASS } from "../utils/constants.js";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formSubmitted = (e) => {
    e.preventDefault();
    setSubmitted(true);
    return;

  }

  const onCaptchaChange = (value) => {
    setCaptchaError(false)
    setCaptchaPassed(true);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const resetErrors = () => {
    setNameError(false)
    setEmailError(false)
    setMsgError(false)
    setCaptchaError(false)
    setSubmitError(false)
  }

  return (
    <div className="page-container flex justify-center items-center bg-white pt-10 pb-24 px-2 sm:px-0">
      {submitted ? <div className="flex justify-center align-items">
        <div className="text-center">
          <div className="color-primary sc-font-50 font-bold">Thanks for your feedback!</div>
          <div className="sc-font-26 sc-lineheight-155 text-color-primary mt-4 mb-12 font-primary">Your message has been sent.<br />We will get back to you as soon as possible.</div>
          <button
            className={PRIMARY_BTN_CLASS + "sc-font-22 search-topic-button"}
            type="submit"
          >
            Search topics
          </button>
        </div>
      </div>
        : <form className="w-full max-w-sm input-form" onSubmit={formSubmitted}>
          <div className="w-full mb-10 relative ">
            {nameError && <div className="absolute right-0 input-error-indicator">Name is required</div>}
            <div className="absolute input-label">Name</div>
            <input
              className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none "}
              type="text"
              name="name"
              placeholder="John"
              value={name}
              onChange={(e) => { setName(e.target.value); resetErrors() }}
            />
          </div>
          <div className="w-full mb-10 relative ">
            {emailError && <div className="absolute right-0 input-error-indicator">E-mail is required</div>}
            <div className="absolute input-label">E-mail</div>
            <input
              className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none "}
              type="text"
              name="email"
              placeholder="John@gmail.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); resetErrors() }}
            />
          </div>
          <div className="w-full mb-10 relative ">
            {msgError && <div className="absolute right-0 input-error-indicator">Message is required</div>}
            <div className="absolute input-label">Message</div>
            <textarea
              className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none "}
              placeholder="Message"
              value={message}
              onChange={(e) => { setMessage(e.target.value); resetErrors() }}
            />
          </div>
          <div className="mb-12 relative">
            {captchaError && <div className="absolute left-0 input-error-indicator">Please verify you are a human.</div>}
            <ReCAPTCHA sitekey={RECAPTCHA_SITEKEY} onChange={onCaptchaChange} />
          </div>
          <div className="w-full flex justify-between items-center relative">
            {submitError && <div className="absolute left-0 input-error-indicator">There was an error.</div>}
            <button
              className={PRIMARY_BTN_CLASS + "register-form-button "}
              type="submit"
            >
              Send
              </button>
          </div>
        </form>
      }
    </div>
  );
};
export default Contact;
