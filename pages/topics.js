import React, { useState, useMemo, useEffect, useCallback } from "react";
import Topic from "../components/topic.js";
import { makeRequest, fetcher, postFetcher } from "../utils/request.js";
import { useRouter } from 'next/router'
import Head from 'next/head';
import { RightArrowIcon } from "../components/icons.js";

const TopicPage = (props) => {
  const topic = props.data.topic;
  const router = useRouter()

  return (
    <div className="page-container bg-white flex justify-center relative">
      {topic && topic.title && (
        <Head>
          <title>{topic.title}</title>
          <meta property="og:title" content={topic.title} />
        </Head>
      )}
      <div className="text-color-third font-bold sc-font-lg absolute flex items-center topic-back cursor-pointer"
        onClick={() => router.back()}>
        <RightArrowIcon /><span className="ml-2">Back</span>
      </div>
      <div className="search-container">
        <div className="text-color-third font-bold sc-font-30 sc-lineheight-38 mb-5 mt-10 md:mb-10 md:mt-20">
          {topic.title}
        </div>
        <div className="container m-auto mb-10">{topic && <Topic topic={topic} citations={topic.citations} showCitations={true} expandable={false} showDescription={true} />}</div>
      </div>
    </div>
  );
};
TopicPage.getInitialProps = async ({ query }) => {
  const data = await fetcher("/v1/topic/" + query.id);
  return { query, data }
}
export default TopicPage;
