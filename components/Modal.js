import React from "react";
import { CloseIcon } from "./icons.js";
import _ from "lodash";

const Modal = (props) => {
  return (
    <div className="fixed z-50 flex justify-center overflow-auto sc-modal-bg inset-0 px-2 pt-40 pb-4">
      <div className="relative table overflow-auto sc-modal-content citation-modal-content">
        <div className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
          onClick={props.onClose}
        >
          <CloseIcon />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
