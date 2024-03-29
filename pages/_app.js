import React from "react";
import "../styles/globals.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";


const progress = new ProgressBar({
  size: 5,
  color: "#ff385c",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
