import React, { useState, useMemo, useEffect } from "react";
import { citationActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../utils/persist";
import { errorAlertConstants } from "../utils/constants";
import { alertActions } from "../_actions";
import { HeartIcon, HeartFilledIcon, ShareIcon, ChevronRightIcon, ChevronDownIcon, EditIcon } from "./icons.js";
import CitationEditModal from "./CitationEditModal.js";
import _ from "lodash";
import { getUserName } from "../utils/persist";

function Citation(props) {
  const [citation, setCitation] = useState(props.data);
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();
  const favCitations = useSelector((state) => state.citation.favCitations);

  useEffect(() => {
    setCitation(props.data)
  }, [props.data])


  const onFavorite = () => {
    if (!getUserId()) {
      dispatch(alertActions.error(errorAlertConstants.LIKE_ERROR_ALERT));
      return;
    }
    dispatch(citationActions.like(citation.id, !favCitations.includes(citation.id)));
  };
  const creator = _.get(citation, "citationCreator.username");
  const onShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(citation.url)}`;
    let left = Math.round(window.screen.width / 2 - 640 / 2);
    let top = Math.round(window.screen.height / 2 - 480 / 2);
    const window_config = `width=${640},height=${480},left=${left},top=${top}`;
    window.open(url, "Share this topic", `${window_config},toolbar=no,menubar=no,scrollbars=no`);
  };

  const onEdit = () => {
    setShowEditModal(true)
  }

  const onEditDone = (citation) => {
    setCitation(citation);
    onEditModalClose();
  }

  const onEditModalClose = () => {
    setShowEditModal(false);
  }

  return (
    <div className={(props.inTopicExample ? "" : "py-4 px-0 md:px-4") + " citation-item overflow-auto text-color-primary " + (props.example ? "pointer-events-none border-none" : "")}>
      {props.example && !props.inTopicExample && <div className="sc-font-lg font-bold border-b border-black pb-2 mb-4">
        Example
      </div>}
      <div className="flex justify-between">
        <div className="mr-4">
          <div className="citation-title font-bold sc-lineheight-155 mt-1 sc-break-words">
            {(props.example || props.inTopicExample) ? citation.title :
              <a href={citation.url} target="_blank">{citation.title}</a>
            }
          </div>
          <div className="citation-desc my-3 sc-lineheight-155 sc-break-words">
            {citation.description}
          </div>
          <div className="flex ">
            <div className="cursor-pointer" onClick={onFavorite}>
              {favCitations && favCitations.includes(citation.id) ? <HeartFilledIcon /> : <HeartIcon />}
            </div>
            <div className="cursor-pointer ml-1" onClick={onShare} >
              <ShareIcon />
            </div>
            {!props.example && creator === getUserName() &&
              <div className="cursor-pointer ml-3 edit-icon block 2xl:hidden" onClick={onEdit} >
                <EditIcon />
              </div>}
          </div>
        </div>
        {citation.image && <div className="flex-shrink-0">
          <img src={citation.image} />
        </div>}
      </div>
      {showEditModal &&
        <CitationEditModal topic={props.topic} editMode={true} citation={citation} onEditDone={onEditDone} onClose={onEditModalClose}>
        </CitationEditModal>}
    </div>
  );
}

export default Citation;
