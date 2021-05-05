import React, { useState, useMemo, useEffect, useCallback } from "react";
import _ from "lodash";
import Topic from "../components/topic.js";
import Citation from "../components/citation.js";
import TopicEditModalContent from "../components/TopicEditModalContent.js";
import CitationEditModalContent from "../components/CitationEditModalContent.js";
import { RightArrowIcon } from "../components/icons.js";
import { PRIMARY_BTN_CLASS, SECONDARY_BTN_CLASS, CANCEL_BTN_CLASS, PRIMARY_INPUT_CLASS } from "../utils/constants.js";
import { checkIfAuthorized } from "../utils/helper"

const Contribute = () => {
  const [topic, setTopic] = useState();
  const [citation, setCitation] = useState();
  const [citations, setCitations] = useState([]);
  const [metaPulled, setMetaPulled] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topicExample, setTopicExample] = useState({});

  useEffect(() => {
    if (!title && !description) {
      setTopicExample({})
    } else {
      setTopicExample({ title, description })
    }
  }, [title, description])

  useEffect(() => {
    checkIfAuthorized()
  }, [])

  const editTopicDone = (createdTopic) => {
    setTopic(createdTopic);
  }
  const editCitationDone = (createdCitation) => {
    setMetaPulled(false);
    setCitation(createdCitation);
    setCitations([...citations, createdCitation]);
  }
  const citationDataPulled = () => {
    setMetaPulled(true);
  }

  const onDone = () => {
    setTopic();
    setCitation();
    setCitations([]);
  }
  const onAddMore = () => {
    setCitation();
  }

  return (
    <div className="page-container mys-container bg-white block 2xl:flex relative">
      {topic && <div className="text-color-third font-bold sc-font-lg absolute flex items-center topic-back cursor-pointer"
        onClick={onDone}>
        <RightArrowIcon /><span className="ml-2">Back</span>
      </div>}
      <div className="pt-16 px-4 md:px-20 2xl:p-0 2xl:w-2/3 flex-shrink-0 flex justify-center" >
        {!topic && <TopicEditModalContent editMode={false} onEditDone={editTopicDone}></TopicEditModalContent>}
        {topic && !citation && <CitationEditModalContent topic={topic} editMode={false} onEditDone={editCitationDone} dataPulled={citationDataPulled}></CitationEditModalContent>}
        {topic && citation && citations.length && <div className="md:w-2/3 w-full">
          <Topic topic={topic} example={true} />
          {citations.map((c, i) => <div key={i} className="mt-4"><Citation data={c} example={true} inTopicExample={true} /></div>)}
          <div className="mt-8">
            <button className={PRIMARY_BTN_CLASS + "w-24 mx-2 sc-btn-sm"} onClick={() => onDone()}>Done</button>
            <button className={SECONDARY_BTN_CLASS + "w-36 mx-2 sc-btn-sm"} onClick={() => onAddMore()}>Add more</button>
          </div>
        </div>}

      </div>
      <div className="color-primary font-bold sc-font-50 sc-lineheight-129 pt-16 md:pt-24 contribute-guide px-6 md:px-20 2xl:px-0 text-center 2xl:text-left">
        {!topic && <span>Contribute to Sourcer by adding your topics</span>}
        {topic && metaPulled && <span>Edit your citations to have a description of your choice</span>}
        {topic && !metaPulled && !citation && <span>Add citations to your topic</span>}
        {(topic && citation) && <span>Add multiple citations to one topic</span>}
      </div>
    </div>
  );
};

export default Contribute;
