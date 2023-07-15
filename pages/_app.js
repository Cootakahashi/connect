import "@/styles/globals.css";
import React from "react";
import { useRouter } from "next/router";
import { GA4React } from "react-ga4";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const ga = new GA4React(process.env.NEXT_PUBLIC_GA_ID);

    ga.initialize()
      .then(() => {
        ga.pageview(router.asPath);

        router.events.on("routeChangeComplete", (url) => ga.pageview(url));
      })
      .catch((err) => console.error(err));
  }, []);

  return <Component {...pageProps} />;
}
