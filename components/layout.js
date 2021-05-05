import React, { Component, useEffect } from 'react';
import { Nav } from "./nav";
import { BottomNav } from "./bottom-nav";
import { Alert } from "./alert";
import { alertActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

function Layout(props) {
  const { children } = props
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  const componentName = _.get(children, [1, 'type', 'name'])
  console.log("componentName:", componentName)

  const shouldHaveSearch = componentName !== "HomePage"
  // dismiss alert on page change


  return (
    <div className='flex flex-col h-screen'>
      <Nav noSearch={!shouldHaveSearch} />
      <div className="divider"></div>
      {alert.message && <Alert alert={alert} />}
      {children}
      <BottomNav />
    </div>
  );
}

export default Layout;
