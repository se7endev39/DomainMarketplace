import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertActions, searchActions } from "../_actions";
import { fetcher } from "../utils/request.js";
import HomeTopic from "../components/homeTopic.js";
import SearchBox from "../components/nav-search.js";

function HomePage() {
  const [topics, setTopics] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetcher("/v1/topics/home")
      .then((res) => {
        console.log("res:", res);
        setTopics(res.topics);
      })
      .catch((e) => {
        dispatch(alertActions.error("There was an error while loading topics."));
      });
  }, []);



  return (
    <div className="py-12 md:py-40">
      <div className="w-full m-auto">
        <div className="index-title mb-8">Welcome to Sourcer!</div>
        <div className="index-subtitle font-primary m-auto mb-12">
          We are here to help you find, save, and share citations for all kinds of relevant topics. You can search for whatever topic you are interested in. Give it a shot!
          {/* Or check out interesting topics here: */}
        </div>
        <SearchBox />
        <div className="index-topics text-right">
          <div className="index-topics-title font-bold">
            Or check out interesting topics here:
          </div>
          {topics && topics.map((item, key) => <HomeTopic key={key} topic={item} />)}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
