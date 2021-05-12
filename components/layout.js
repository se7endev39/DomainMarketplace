import React, { Component, useEffect } from 'react';
import Header from "blockPages/Common/Header";
import Footer from "blockPages/Common/Footer";
import Alert from "./alert";
import { alertActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

function Layout(props) {
  const { children } = props
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  const componentName = _.get(children, [1, 'type', 'name'])
  console.log("componentName:", componentName)
  if(alert)
    console.log(alert)
  const shouldHaveSearch = componentName !== "HomePage"
  // dismiss alert on page change


  return (
    <div className='flex flex-col h-screen'>
      <Header noSearch={!shouldHaveSearch} />
      {alert.message && <Alert alert={alert} />}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
