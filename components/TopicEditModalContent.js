import React, { useState, useMemo, useRef, useEffect } from "react";
import { PRIMARY_BTN_CLASS } from "../utils/constants.js";
import Topic from "./topic.js";
import { makeRequest, fetcher, postFetcher, putFetcher } from "../utils/request.js";
import _ from "lodash";

const TopicEditModalContent = (props) => {
  const { editMode, topic } = props;
  const [title, setTitle] = useState(editMode ? topic.title : "");
  const [description, setDescription] = useState(editMode ? topic.description : "");
  const [topicExample, setTopicExample] = useState();
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    if (!title && !description) {
      setTopicExample(null)
    } else {
      setTopicExample({ title, description })
    }
  }, [title, description])

  const editDone = () => {
    if (props.editMode) {
      putFetcher("/v1/topic", { id: topic.id, description, title })
        .then((res) => {
          props.onEditDone(res.topic);
        })
        .catch((error) => {
          console.log("add topic error:", error);
          setSaveError(_.get(error, "response.data.message"));
        });
    } else {
      postFetcher("/v1/topic", { description, title })
        .then((res) => {
          props.onEditDone(res.topic);
        })
        .catch((error) => {
          console.log("add topic error:", error);
          setSaveError(_.get(error, "response.data.message"));
        });
    }
  }

  const resetErrors = () => {
    setSaveError("")
  }

  return (
    <div className="inline-block md:w-auto w-full">
      <div className={"sc-modal-title" + (!props.onModal ? " sc-modal-title-addition" : "")}>
        {props.editMode ? "Edit" : "Add" + " topic"}
      </div>
      <div className="relative mt-12 input-form modal-edit-form">
        <div className="w-full mb-10 relative">
          <div className="absolute input-label">Title</div>
          <input
            className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none "}
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => { setTitle(e.target.value); resetErrors() }}
          />
        </div>
        <div className="w-full relative mb-4">
          <div className="absolute input-label">Description</div>
          <textarea
            className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none "}
            style={{ height: "153px" }}
            placeholder="Description"
            value={description}
            onChange={(e) => { setDescription(e.target.value); resetErrors() }}
          />
        </div>
        {topicExample && <Topic topic={topicExample} example={true} />}
        <div className="mt-6 flex items-center">
          <button className={PRIMARY_BTN_CLASS + "w-24 mx-2 sc-btn-sm"} onClick={() => editDone()}>
            {props.editMode ? "Done" : "Add"}</button>
          {saveError && <div className="input-error-indicator">{saveError}</div>}
        </div>
      </div>
    </div>
  );
};

export default TopicEditModalContent;
