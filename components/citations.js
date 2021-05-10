import React from "react";
import Citation from "./citation.js";

function Citations(props) {
  let items = [];
  items = props.citations.map((value, index) => {
    return <Citation key={index} data={value} />;
  });

  return <div className="text-base w-2/3 text-blue-500 pl-4">{items}</div>;
}

export default Citations;
