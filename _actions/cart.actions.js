export const certActions = {
  add,
  remove,
  clear,
  checkout,
};

function add(domain) {
  
}

function remove(domain){

}

function clear(){

}

function checkout(){

}

function like(topicId, like) {
  return (dispatch) => {
    topicService.likeTopic(topicId, like).then(
      (res) => {
        dispatch({ type: topicConstants.LIKE, data: { like, topicId } });
      },
      (error) => { }
    );
  };
}

function getFavoriteTopics() {
  return (dispatch) => {
    topicService.getFavoriteTopics().then(
      (res) => {
        dispatch({ type: topicConstants.GETLIKES, res });
      },
      (error) => { }
    );
  };
}
