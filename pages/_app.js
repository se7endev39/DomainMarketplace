import React, { Component, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'

// import '../styles/index.css'
// import '../styles/global.css'
import 'scss/colors.scss'
import 'scss/_global.scss'
import { store, wrapper } from "../utils/store";
import Layout from "../components/layout";
import { authActions, alertActions, citationActions, topicActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import Head from 'next/head';
import axios from 'axios'
import { useRouter } from 'next/router';

axios.interceptors.request.use( request => {
  const token = localStorage.getItem("token")
  console.log("axios interceptor!")
  if( token ){
    request.headers.authorization = token
  }
  return request
} )

axios.interceptors.response.use( response => {
  if(response.status == 401){
    authActions.updateToken()
  }
  return response
})

const sign_pages = [
  "profile",
  "sales",  
]

const MyApp = (props) => {
  const { Component, pageProps, data } = props;
  const dispatch = useDispatch();
  const router = useRouter()
  const signed = useSelector(state => state.auth.signed)

  useEffect(() => {
    console.log("MyApp props", props)

    // Check Signed In
    dispatch( authActions.checkSign() )

    dispatch( alertActions.clear() );
    // dispatch(citationActions.getFavoriteCitations());
    // dispatch(topicActions.getFavoriteTopics());
  }, [])

  useEffect(() => {
    const pageName = router.pathname.split("/").pop()
    if(sign_pages.includes(pageName) && !signed)
      router.push("/auth/signin")
  }, [router.pathname, signed])

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
