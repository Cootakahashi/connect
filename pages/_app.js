import "@/styles/globals.css";
import React from "react";
import Router from "next/router";
import ReactGA from "react-ga";
export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);

    Router.events.on("routeChangeComplete", (url) => ReactGA.pageview(url));
  }, []);
  return <Component {...pageProps} />;
}
