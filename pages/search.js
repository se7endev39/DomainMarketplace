import React, { useEffect } from "react";
import Topic from "../components/topic.js";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const searchRes = useSelector((state) => state.search);
  return (
    <div className="page-container bg-white flex justify-center">
      <div className="search-container">
        <div className="text-color-primary font-bold sc-font-30 sc-lineheight-38 my-5 md:mb-10 md:mt-20">
          Results for: <span className="text-color-third sc-break-words">{searchRes.term}</span>
        </div>
        <div>
          {searchRes.topics &&
            searchRes.topics.map((item, key) => <Topic key={item.id} topic={item} expandable={false} />)}
        </div>
      </div>
    </div>
  );
}

export default Search;
