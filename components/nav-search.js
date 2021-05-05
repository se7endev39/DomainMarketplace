import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../_actions";
import { SearchIcon } from "./icons.js";
import Router from 'next/router'

const SearchBox = (props) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchActions.search(searchTerm));
    Router.push("/search");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={`index-search font-primary rounded-full flex m-auto relative overflow-hidden ${props.inNav ? "nav-search" : ""}`}>
        <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          className="text-black bg-white w-full px-5 pr-12 focus:outline-none" name="" placeholder="What topic do you want to search?" />
        <button type="submit" className="bg-red absolute right-0 top-0 mt-3 mr-4 color-primary"><SearchIcon /></button>
      </div>
    </form>
  );
}

export default SearchBox;