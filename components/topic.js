import React, { useState, useMemo, useRef, useEffect } from "react";
import { HeartIcon, HeartFilledIcon, ShareIcon, ChevronRightIcon, ChevronDownIcon, EditIcon, MoreIcon } from "./icons.js";
import CitationEditModal from "./CitationEditModal.js";
import TopicEditModal from "./TopicEditModal.js";
import { getUserId } from "../utils/persist";
import { useDispatch, useSelector } from "react-redux";
import { errorAlertConstants } from "../utils/constants";
import { makeRequest, fetcher, postFetcher } from "../utils/request.js";
import { topicActions, alertActions } from "../_actions";
import _ from "lodash";
import Citation from "./citation.js";
import { useRouter } from 'next/router'

function Topic(props) {
  const [topic, setTopic] = useState(props.topic);
  const [citationLoading, setCitationLoading] = useState(false);
  const [expanded, setExpanded] = useState(!!props.showCitations);
  const [showMore, setShowMore] = useState(false);
  const [showCitationModal, setShowCitationModal] = useState(false);
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [citations, setCitations] = useState(props.citations);
  const expandable = props.expandable; // For search page
  const isExample = props.example;
  const dispatch = useDispatch();
  const router = useRouter()
  const favTopics = useSelector((state) => state.topic.favTopics);
  const userId = getUserId();

  useEffect(() => {
    document.addEventListener('mouseup', () => {
      setShowMore(false)
    })
    return () => {
      document.removeEventListener('mouseup', () => { })
    }
  }, [])

  useEffect(() => {
    setTopic(props.topic)
  }, [props.topic])

  useEffect(() => {
    if (expanded) {
      loadCitations();
    }
  }, [expanded])

  const onLoadCitation = () => {
    setExpanded(!expanded);
  }

  const loadCitations = () => {
    setCitationLoading(true);
    fetcher("/v1/topic/" + topic.id)
      .then((res) => {
        setCitationLoading(false);
        setCitations(_.get(res, "topic.citations"));
      })
      .catch((e) => {
        setCitationLoading(false);
        // dispatch(alertActions.error("There was an error while loading page."));
      });
  }

  const onFavorite = () => {
    if (!getUserId()) {
      dispatch(alertActions.error(errorAlertConstants.LIKE_ERROR_ALERT));
      return;
    }
    dispatch(topicActions.like(topic.id, !favTopics.includes(topic.id)));
  };

  const onShare = () => {
    if (process.browser) {
      const baseUrl = `${window.location.protocol}//${window.location.hostname}`;
      const url = `${baseUrl}/topics?id=${topic.id}`;
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      let left = Math.round(window.screen.width / 2 - 640 / 2);
      let top = Math.round(window.screen.height / 2 - 480 / 2);
      const window_config = `width=${640},height=${480},left=${left},top=${top}`;
      window.open(facebookUrl, "Share this topic", `${window_config},toolbar=no,menubar=no,scrollbars=no`);
    }
  };

  const onEdit = () => {
    setShowTopicModal(true)
  }

  const onMore = () => {
    setShowMore(!showMore)
  }

  const onAddCitation = () => {
    setShowCitationModal(true)
  }

  const onTopicEditDone = (topicObj) => {
    setTopic(topicObj)
    onTopicEditModalClose()
  }

  const onCitationEditDone = () => {
    loadCitations();
    onCitationEditModalClose();
  }

  const onTopicEditModalClose = () => {
    setShowTopicModal(false)
  }

  const onCitationEditModalClose = () => {
    setShowCitationModal(false);
  }
  const openTopic = () => {
    if (!isExample && topic.id) router.push(`/topics?id=${topic.id}`)
  }
  const isMyTopic = userId === topic.createdBy;

  return (
    <div className={(isExample ? "pointer-events-none " : "") + "text-color-primary"}>
      {isExample && <div className="sc-font-lg font-bold pb-1">
        Example
      </div>}
      <div className="topic-item relative">
        {showMore && <div className={`flex justify-between items-center absolute w-${!isMyTopic ? "20" : "32"} right-0 float-menu`}>
          <div className="cursor-pointer" onMouseDown={onFavorite}>
            {favTopics && favTopics.includes(topic.id) ? <HeartFilledIcon /> : <HeartIcon />}
          </div>
          <div className="cursor-pointer" onMouseDown={onShare} >
            <ShareIcon />
          </div>
          {isMyTopic && <div className="cursor-pointer" onMouseDown={onEdit} >
            <EditIcon />
          </div>}
        </div>}

        <div className="flex justify-between">
          <div className="flex ">
            <span className="font-bold relative sc-break-words">
              <span className="cursor-pointer" onClick={openTopic}>{topic.title}</span>
              <span className="whitespace-no-wrap font-normal"> - Topic by {isMyTopic || isExample ? "me" : _.get(topic, "topicCreator.username")}</span>
              {isMyTopic && <span className="edit-icon cursor-pointer ml-2 hidden bottom-0 absolute" onClick={onEdit}><EditIcon /></span>}
            </span>
          </div>
          <div className="flex ml-2 items-center h-6">
            <div className={`cursor-pointer ${isExample ? "" : "hidden 2xl:block"}`} onClick={onFavorite}>
              {favTopics && favTopics.includes(topic.id) ? <HeartFilledIcon /> : <HeartIcon />}
            </div>
            <div className={`topic-share-icon cursor-pointer ${isExample ? "" : (!expandable ? "" : "mr-6 ") + "hidden 2xl:block"}`} onClick={onShare} >
              <ShareIcon />
            </div>
            <div className={`mr-6 cursor-pointer ${isExample ? "hidden" : "block 2xl:hidden"}`} onClick={onMore} >
              <MoreIcon />
            </div>
            {!isExample && expandable && <div className="cursor-pointer w-5" onClick={onLoadCitation}>
              {expanded ? <ChevronDownIcon /> : <ChevronRightIcon />}</div>}
          </div>
        </div>

        {(isExample || props.showDescription) && <div className="sc-font-12 sc-lineheight-155 font-primary mt-2 w-3/4 break-words">
          {topic.description}
        </div>}
      </div>


      {expanded && <>
        {
          citationLoading ?
            <div className="text-color-primary">Loading...</div>
            : (citations && citations.map((citation, i) =>
              <Citation key={i} data={citation} topic={topic} />
            ))
        }

        <div className="pl-4 my-5 font-bold inline-block color-primary topic-add-citation cursor-pointer"
          onClick={onAddCitation}
        >
          + Add citation to topic
        </div>
      </>}
      {showCitationModal &&
        <CitationEditModal topic={topic} onEditDone={onCitationEditDone} onClose={onCitationEditModalClose}>
        </CitationEditModal>}
      {showTopicModal &&
        <TopicEditModal editMode={true} topic={topic} onEditDone={onTopicEditDone} onClose={onTopicEditModalClose} ></TopicEditModal>
      }
    </div>
  );
}

export default Topic;
