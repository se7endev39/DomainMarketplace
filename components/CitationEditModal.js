import React, { useState, useMemo, useEffect } from "react";
import CitationEditModalContent from "./CitationEditModalContent.js";
import _ from "lodash";
import Modal from "./Modal.js";

const CitationEditModal = (props) => {
  const { editMode, citation, topic } = props;
  const [link, setLink] = useState(editMode ? citation.url : "");
  const [dataPulled, setDataPulled] = useState(editMode);
  const [title, setTitle] = useState(editMode ? citation.title : "");
  const [desc, setDesc] = useState(editMode ? citation.description : "");
  const [imageUrl, setImageUrl] = useState(editMode ? citation.image : "");
  const [dataError, setDataError] = useState(false);
  const [saveError, setSaveError] = useState("");

  return (
    <Modal onClose={props.onClose}>
      <CitationEditModalContent topic={topic} editMode={editMode} citation={citation} onEditDone={props.onEditDone} onModal={true}></CitationEditModalContent>
    </Modal>
  );
};

export default CitationEditModal;
