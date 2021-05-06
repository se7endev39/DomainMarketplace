import React, { Component, useEffect } from 'react';
import 'mdbreact/dist/css/mdb.css'
import '../styles/index.css'
import '../styles/global.css'
import '../assets/fonts/fonts.css'
import { store, wrapper } from "../utils/store";
import Layout from "../components/layout";
import { alertActions, citationActions, topicActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import Head from 'next/head';
// import 'rsuite/lib/styles';
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
// config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const MyApp = (props) => {
  const { Component, pageProps, data } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("MyApp props", props)
    dispatch(alertActions.clear());
    dispatch(citationActions.getFavoriteCitations());
    dispatch(topicActions.getFavoriteTopics());
  }, [])

  return (
    // <Provider store={store}>
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Sourcer lets you Search, Compile and Share all the sources you need to back up a position.  Share the facts and fight misinformation!"
        />

        <meta property="og:title" content="" />
        <meta property="og:url" content="https://dev.sourcer.com" />
        <meta
          property="og:description"
          content="Sourcer lets you Search, Compile and Share all the sources you need to back up a position.  Share the facts and fight misinformation!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://dev.sourcer.cc/images/logo-meta.jpg" />
        <meta property="og:image:secure_url" content="https://dev.sourcer.cc/images/logo-meta.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpg" />
        <title></title>
      </Head>
      <Component {...pageProps} />
    </Layout>
    // </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be accessed by the client
  return { Component, pageProps: pageProps, }
}

//makeStore function that returns a new store for every request
// const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
