import React from "react";
import { HeartIcon, HeartFilledIcon, ShareIcon, ChevronRightIcon, ChevronDownIcon, EditIcon, MoreIcon } from "./icons.js";
import { getUserId } from "../utils/persist";
import { useDispatch, useSelector } from "react-redux";
import { errorAlertConstants } from "../utils/constants";
import { topicActions, alertActions } from "../_actions";
import _ from "lodash";

function HomeTopic(props) {
  const dispatch = useDispatch();
  const favTopics = useSelector((state) => state.topic.favTopics);
  const topic = props.topic;

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

  return (
    <div className={"text-color-primary items-center flex flex-row-reverse my-1"}>
      <div className="cursor-pointer" onClick={onShare} >
        <ShareIcon />
      </div>
      <div className="cursor-pointer ml-2 mr-1" onClick={onFavorite}>
        {favTopics && favTopics.includes(topic.id) ? <HeartFilledIcon /> : <HeartIcon />}
      </div>
      {topic.title}
    </div>
  );
}

export default HomeTopic;
