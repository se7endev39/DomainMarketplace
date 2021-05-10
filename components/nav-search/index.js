import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "_actions";
import Router from 'next/router'
import {MDBBtn, MDBIcon} from 'mdbreact'
import styles from './index.module.scss';

const SearchBox = (props) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={`index-search items-center rounded-full flex relative overflow-hidden ${props.inNav ? "nav-search" : ""} ` + styles.search}>
      <MDBIcon icon="search" className={styles.search_icon}/>
      <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        className={"text-black pl-4 pr-4 focus:outline-none " + styles.search_input} name="" placeholder="Search Domains" />
    </div>
  );
}

export default SearchBox;