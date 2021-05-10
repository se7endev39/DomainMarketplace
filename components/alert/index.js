import React from "react";
import { alertActions } from "_actions";
import { useDispatch, useSelector } from "react-redux";
import { alertConstants, apiStatus } from "utils/constants";
import Link from 'next/link';
import { errorAlertConstants } from "utils/constants";

const Alert = (props) => {
  const dispatch = useDispatch();
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

  let classes = "bg-green-100 border-green-400 text-green-700";
  if (props.alert.type === apiStatus.FAIL) {
    classes = "bg-red-100 border-red-400 text-red-700";
  }

  return (
    <div className={`${classes} border px-4 py-3 rounded relative text-center`} role="alert">
      <span className="block sm:inline">{messageElements}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => {
            dispatch(alertActions.clear());
          }}
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

export default Alert