import React, { useEffect } from "react";
import { alertActions } from "_actions";
import { useDispatch, useSelector } from "react-redux";
import { alertConstants, apiStatus } from "utils/constants";
import Link from 'next/link';
import { errorAlertConstants } from "utils/constants";
import classnames from 'classnames'
import styles from './index.module.scss'

const Alert = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(alertActions.clear());
    }, 1500)
  }, [])

  const msg = props.alert.message;
  let messageElements = [];

  if (msg === errorAlertConstants.LIKE_ERROR_ALERT) {
    messageElements.push(
      <span key={messageElements.length}>
        <Link href="/login">
          <a className="underline">
            Sign in
          </a>
        </Link>{" "}
        or{" "}
        <Link href="/register">
          <a className="underline">
            register
          </a>
        </Link>{" "}
        to keep a list of your favorite topics and citations! It’s free and easy!
      </span>
    );
  } else if (msg.includes("$Registration")) {
    const segs = msg.split("$Registration");
    messageElements.push(<span>{segs[0]}</span>);
    messageElements.push(
      <Link href="/register">
        <a className="underline">
          Registration
        </a>
      </Link>
    );
    messageElements.push(<span>{segs[1]}</span>);
  } else {
    messageElements = msg;
  }

  let classes = "border-green-400 text-green-700";
  if (props.alert.type === apiStatus.FAIL) {
    classes = "text-red-700";
  }

  return (
    <div className={classnames(classes, "px-4 py-3 rounded relative text-center", styles.Alert)} role="alert">
      <span className="block sm:inline">{messageElements}</span>
    </div>
  );
};

export default Alert