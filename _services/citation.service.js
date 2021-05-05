import { fetcher, postFetcher } from "../utils/request";

export const citationService = {
  ogData,
  likeCitation,
  getFavoriteCitations,
};

function ogData(url) {
  return postFetcher("/v1/citation/ogdata", { url });
}

function likeCitation(citationId, like) {
  return postFetcher("/v1/citation/like", { citationId, like });
}

function getFavoriteCitations() {
  return fetcher("/v1/citation/likes");
}
