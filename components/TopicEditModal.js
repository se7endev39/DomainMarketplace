import React, { useState, useMemo, useRef, useEffect } from "react";
import { PRIMARY_BTN_CLASS } from "../utils/constants.js";
import Topic from "./topic.js";
import Citation from "./citation.js";
import Modal from "./Modal.js";
import TopicEditModalContent from "./TopicEditModalContent.js";
import CitationEditModalContent from "./CitationEditModalContent.js";
import { RightArrowIcon } from "./icons.js";
import _ from "lodash";

const TopicEditModal = (props) => {
  const { editMode } = props;
  const [topic, setTopic] = useState(props.topic);
  const [citation, setCitation] = useState();

  const editTopicDone = (createdTopic) => {
    if (editMode) { props.onEditDone(createdTopic) }
    else {
      setTopic(createdTopic);
    }
  }
  const editCitationDone = (createdCitation) => {
    setCitation(createdCitation);
  }
  const backToTopic = () => {
    setTopic();
  }
  return (
    <Modal onClose={props.onClose}>
      {!editMode && topic && !citation && <div className="text-color-third font-bold sc-font-lg absolute flex items-center topic-back cursor-pointer top-0 left-0 mt-3 ml-3"
        onClick={backToTopic}>
        <RightArrowIcon /><span className="ml-2">Back</span>
      </div>}
      {(editMode || !topic) && <TopicEditModalContent editMode={editMode} topic={topic} onEditDone={editTopicDone} onModal={true}></TopicEditModalContent>}
      {!editMode && topic && !citation && <CitationEditModalContent topic={topic} editMode={false} onEditDone={editCitationDone}></CitationEditModalContent>}
      {!editMode && topic && citation && <div className=" w-full">
        <Topic topic={topic} example={true} />
        <div className="mt-4"><Citation data={citation} example={true} inTopicExample={true} /></div>
        <div className="mt-8">
          <button className={PRIMARY_BTN_CLASS + "w-24 mx-2 sc-btn-sm"} onClick={() => props.onEditDone(topic)}>Done</button>
        </div>
      </div>}
    </Modal>
  );
};

export default TopicEditModal;
