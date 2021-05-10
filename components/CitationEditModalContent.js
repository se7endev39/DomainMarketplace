import React, { useState, useMemo, useEffect } from "react";
import { PRIMARY_BTN_CLASS } from "../utils/constants.js";
import { citationService } from "../_services";
import Citation from "./citation.js";
import { makeRequest, fetcher, postFetcher, putFetcher } from "../utils/request.js";
import _ from "lodash";

const CitationEditModalContent = (props) => {
  const { editMode, citation, onModal } = props;
  const [link, setLink] = useState(editMode ? citation.url : "");
  const [dataPulled, setDataPulled] = useState(editMode);
  const [title, setTitle] = useState(editMode ? citation.title : "");
  const [desc, setDesc] = useState(editMode ? citation.description : "");
  const [imageUrl, setImageUrl] = useState(editMode ? citation.image : "");
  const [dataError, setDataError] = useState(false);
  const [citationExample, setCitationExample] = useState(editMode ? citation : null);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    if (!title && !desc) {
      setCitationExample(null)
    } else {
      setCitationExample({ title, description: desc, image: imageUrl })
    }
  }, [title, desc, imageUrl])

  const pullData = () => {
    resetErrors();
    setDataPulled(false);
    citationService.ogData(link).then((res) => {
      if (res.ogdata.success) {
        const ogTitle = _.get(res, "ogdata.ogTitle", "");
        const ogDescription = _.get(res, "ogdata.ogDescription", "");
        const ogImage = _.get(res, "ogdata.ogImage.url", "");
        setTitle(ogTitle);
        setDesc(ogDescription);
        setImageUrl(ogImage);
        setDataPulled(true);
        setDataError(false);
        if (props.dataPulled) props.dataPulled();
      } else {
        setDataError(true);
      }
    });
  }

  const editDone = () => {
    const bodyData = {
      title,
      url: link,
      description: desc,
      image: imageUrl,
    };
    if (props.editMode) {
      putFetcher("/v1/citation", { ...bodyData, citationId: citation.id })
        .then((res) => {
          console.log("edited citation:", res);
          props.onEditDone(res.citation);
        })
        .catch((error) => {
          if (error) {
            console.log("edit citation error:", error);
            setSaveError(_.get(error, "response.data.message"));
          }
        });
    } else {
      postFetcher("/v1/citation", { ...bodyData, topicId: props.topic.id })
        .then((res) => {
          props.onEditDone(res.citation);
        })
        .catch((error) => {
          if (error) {
            console.log("add citation error:", error);
            setSaveError(_.get(error, "response.data.message"));
          }
        });
    }
  }

  const resetErrors = () => {
    setSaveError("")
  }

  return (
    <div>
      <div className="sc-modal-heading color-primary font-bold sc-font-30 mb-8">
        {props.topic.title}
      </div>
      <div className="sc-modal-title">
        {props.editMode ? "Edit" : "Add" + " citation to topic"}
      </div>
      <div className="relative mt-12 input-form modal-edit-form">
        <button className={PRIMARY_BTN_CLASS + "w-32 ml-5 sc-btn-sm hidden absolute top-0" + (onModal ? " xl:block" : "")}
          onClick={() => pullData()}
          style={{ right: "-150px" }}
        >
          Pull data
          </button>
        <div className="w-full mb-10 relative">
          {dataError && <div className="absolute right-0 input-error-indicator">Data pulling failed</div>}
          <div className="absolute input-label">Link</div>
          <input
            className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none "}
            type="text"
            name="username"
            placeholder="Link"
            value={link}
            onChange={(e) => { setLink(e.target.value); resetErrors() }}
          />
          <button className={PRIMARY_BTN_CLASS + "w-32 mt-6 mb-2 sc-btn-sm " + (onModal ? "xl:hidden" : "")}
            onClick={() => pullData()}
          >
            Pull data
            </button>
        </div>
        {dataPulled && <>
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
          <div className="w-full relative ">
            <div className="absolute input-label">Description</div>
            <textarea
              className={"appearance-none w-full px-3 leading-tight font-primary focus:outline-none "}
              style={{ height: "153px" }}
              placeholder="Description"
              value={desc}
              onChange={(e) => { setDesc(e.target.value); resetErrors() }}
            />
          </div>
          {citationExample && <Citation data={citationExample} example={true} />}
          <div className="mt-6 flex items-center">
            <button className={PRIMARY_BTN_CLASS + "w-24 mx-2 sc-btn-sm"} onClick={() => editDone()}>
              Done</button>
            {saveError && <div className="input-error-indicator">{saveError}</div>}
          </div>
        </>}
      </div>
    </div>
  );
};

export default CitationEditModalContent;
