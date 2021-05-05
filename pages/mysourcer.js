import React, { useState, useMemo, useEffect, useCallback } from "react";
import Topic from "../components/topic.js";
import TopicEditModal from "../components/TopicEditModal.js";
import TopicSearch from "../components/topic-search.js";
import { makeRequest, fetcher, postFetcher } from "../utils/request.js";
import { citationService } from "../_services";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router'
import Citations from "../components/citations.js";
import { alertActions, citationActions, topicActions } from "../_actions";
import _ from "lodash";

const MySourcerPage = ({ match }) => {
  const [favSearchTerm, setFavSearchTerm] = useState("");
  const [argSearchTerm, setArgSearchTerm] = useState("");
  const [createdTopics, setCreatedTopics] = useState([]);
  const [filteredCreatedTopics, setFilteredCreatedTopics] = useState([]);
  const [favoriteTopics, setFavoriteTopics] = useState([]);
  const [filteredFavTopics, setFilteredFavTopics] = useState([]);
  const [createdCitations, setCreatedCitations] = useState([]);
  const [favoriteCitations, setFavoriteCitations] = useState([]);
  const [showTopicModal, setShowTopicModal] = useState(false);
  const dispatch = useDispatch();
  const favTopics = useSelector((state) => state.topic.favTopics);

  useEffect(() => {
    loadMySourcer();
    dispatch(citationActions.getFavoriteCitations());
    dispatch(topicActions.getFavoriteTopics());
  }, []);

  // Reload on likes change
  useEffect(() => {
    loadMySourcer()
  }, [favTopics]);

  useEffect(() => {
    setFilteredFavTopics(favoriteTopics.filter(t => t.title.includes(favSearchTerm)))
  }, [favSearchTerm, favoriteTopics]);

  useEffect(() => {
    setFilteredCreatedTopics(createdTopics.filter(t => t.title.includes(argSearchTerm)))
  }, [argSearchTerm, createdTopics]);

  const loadMySourcer = () => {
    fetcher("/v1/topics/mysourcer")
      .then((res) => {
        setCreatedTopics(res.createdTopics);
        setCreatedCitations(res.createdCitations);

        const favCitationTopics = res.favoriteCitations.map(c => c.topic)
        let allFavTopics = [...res.favoriteTopics, ...favCitationTopics];
        allFavTopics = _.uniqBy(allFavTopics, 'id');
        setFavoriteTopics(allFavTopics);
        setFavoriteCitations(res.favoriteCitations);
      })
      .catch((e) => {
        const status = _.get(e, "response.status")
        if (status === 401) {
          Router.push('/login');
        } else {
          dispatch(alertActions.error("There was an error while loading page."));
        }
      });
  }

  const onFavoriteSearch = (keyword) => {
    setFavSearchTerm(keyword)
  }

  const onMyTopicSearch = (keyword) => {
    setArgSearchTerm(keyword)
  }

  const onAddTopic = () => {
    setShowTopicModal(true)
  }

  const onTopicAddDone = () => {
    loadMySourcer();
    onTopicEditModalClose()
  }

  const onTopicEditModalClose = () => {
    setShowTopicModal(false)
  }

  return (
    <div className="page-container mys-container bg-white flex flex-col 2xl:flex-row justify-center">
      <div className="mys-section mx-auto 2xl:mr-10">
        <div className="color-primary mys-section-header">
          My Favorites
        </div>
        <TopicSearch onSearch={onFavoriteSearch} placeholder={"Search favorites"} />

        {filteredFavTopics &&
          filteredFavTopics.map((item, key) => <Topic key={key} topic={item} expandable={true} />)
        }
      </div>
      <div className="mys-section mx-auto">
        <div className="color-primary mys-section-header">
          My Topics
        </div>
        <div className="color-primary mys-section-header flex justify-between items-baseline">
          <TopicSearch onSearch={onMyTopicSearch} placeholder={"Search arguments"} />
          <button className="color-primary font-bold ml-2 whitespace-no-wrap mys-section-add-topic"
            onClick={onAddTopic}
          >
            + Add Topic</button>
        </div>
        {filteredCreatedTopics &&
          filteredCreatedTopics.map((item, key) => <Topic key={item.id} topic={item} expandable={true} />)
        }
      </div>
      {showTopicModal &&
        <TopicEditModal onEditDone={onTopicAddDone} onClose={onTopicEditModalClose} ></TopicEditModal>
      }
    </div>
  );
};

export default MySourcerPage;
