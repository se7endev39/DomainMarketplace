import { fetcher, postFetcher } from "../utils/request";

export const topicService = {
  likeTopic,
  getFavoriteTopics,
};

function likeTopic(topicId, like) {
  return postFetcher("/v1/topic/like", { topicId, like });
}

function getFavoriteTopics() {
  return fetcher("/v1/topics/likes");
}
