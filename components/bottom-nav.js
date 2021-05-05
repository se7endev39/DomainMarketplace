import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { NAV_LINK_CLASS } from "../utils/constants";

export const BottomNav = (props) => {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    var path = window.location.pathname;
    var pn = path.split("/").pop();
    setPageName(pn);
  })

  return (
    <div>
      
    </div>
  );
}