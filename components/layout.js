import React, { Component, useEffect, useRef } from 'react';
import Header from "blockPages/Common/Header";
import Footer from "blockPages/Common/Footer";
import Alert from "./alert";
import { alertActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import Sidebar from 'blockPages/Common/Sidebar';
import styles from './layout.module.scss'

function Layout(props) {
  const { children } = props
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const sidebar_ref = useRef()
  const onSidebar = (e) => {
    sidebar_ref.current.openSidebar(e)
  }

  const componentName = _.get(children, [1, 'type', 'name'])
  console.log("componentName:", componentName)
  if(alert)
    console.log(alert)
  const shouldHaveSearch = componentName !== "HomePage"
  // dismiss alert on page change


  return (
    <div className={'flex flex-col h-screen ' + styles.layout}>
      <Header noSearch={!shouldHaveSearch} onSidebar={onSidebar}/>
      <Sidebar ref={sidebar_ref}/>
      {alert.message && <Alert alert={alert} />}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
