import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertActions, searchActions } from "../_actions";
import { fetcher } from "../utils/request.js";
import { Route, Redirect } from "react-router-dom";
import {useRouter} from 'next/router'
import HomeTopic from "../components/homeTopic.js";
import SearchBox from "../components/nav-search.js";

function HomePage() {
  const [topics, setTopics] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter()
  useEffect(() => {
    router.push(`/Mobile`)
  }, [])

  return (
    <div></div>
  );
}

export default HomePage;
