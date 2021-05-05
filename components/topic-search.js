import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "./icons.js";

const TopicSearch = (props) => {
  const dispatch = useDispatch();
  const [favSearchTerm, setFavSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(favSearchTerm)
  };
  return (
    <form onSubmit={handleSubmit} className="mt-6 mb-3 topic-search font-primary flex relative overflow-hidden">
      <input type="search" value={favSearchTerm} onChange={(e) => setFavSearchTerm(e.target.value)}
        className="text-black bg-white w-full pl-1 pr-8 focus:outline-none" name="" placeholder={props.placeholder} />
      <button type="submit" className="bg-red absolute right-0 top-0 mr-2 color-primary">
        <SearchIcon />
      </button>
    </form>
  );
}

export default TopicSearch;