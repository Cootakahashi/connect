import Head from "next/head";
import Image from "next/legacy/image";
import { Top } from "../../components/eventlp/top";
import { NavBar } from "../../components/eventlp/nav";
import Link from "next/link";
import { client } from "../../libs/client";
import { Footer } from "../../components/footer";
import { Event } from "../../components/event";
import { Resolve } from "../../components/eventlp/resolve";
import { Whystop } from "../../components/eventlp/whystop";
import { Feature } from "@/components/eventlp/feature";
import { Message } from "@/components/eventlp/message";
import { Form } from "@/components/eventlp/eventform";
import { useState, useEffect } from "react";
import { throttle } from "lodash";
import { Introduction } from "@/components/eventlp/introduction";
import { Link as ScrollLink } from "react-scroll";
import { Ideal } from "@/components/eventlp/ideal";
import { Step } from "../../components/eventlp/step";
import Layoutwrap from "../../components/Layoutcomp";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "event" });
  return {
    props: {
      event: data.contents[0],
      eventurl: data.contents[0].url,
    },
  };
};

export default function Home({ event, eventurl }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = throttle(() => {
    setScrollPosition(window.scrollY);
  }, 150); // 150ミリ秒ごとにスクロール位置を更新

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBrowser = typeof window !== "undefined";
  const isButtonVisible = isBrowser
    ? scrollPosition > window.innerHeight * 0.5
    : false;

  const buttonClassNames = isButtonVisible
    ? " transition-opacity duration-500 ease-in-out opacity-100"
    : " transition-opacity duration-500 ease-in-out opacity-0";

  return (
    <>
      <Layoutwrap
        metadata={{
          title: "Restart Online",
          description:
            "限定オファー！無料のオンライングループ英会話に今すぐ参加して、英語のコミュニケーション能力を高めましょう。定員には限りがあります。",
          ogTitle: "無料のグループオンライン英会話Restart Online",
          ogDescription:
            "楽しく続けれる、無料のグループオンライン英会話Restart Online参加リンクをGetできます",
          ogImage: "https://beginrestart.com/lpevent/top/1.jpg",
          ogUrl: "https://beginrestart.com/",
          twitterSite: "@Tokoenglish",
          canonicalUrl: "https://beginrestart.com/",
        }}
      >
        {/* <div className="hidde z-50 mb-10 bg-blue-200">
        <NavBar />
      </div> */}
        <div className="hidde">
          <Top />
        </div>
        <Introduction />
        <Step />

        <Form eventurl={eventurl} event={event} />

        <Ideal />
        <Resolve />
        <Whystop />
        <Feature />
        <div className="md:my-80 ">
          {" "}
          <Message />
        </div>
        <div className="my-20" id="formSection">
          <Form eventurl={eventurl} event={event} />
        </div>
        <div className={buttonClassNames}>
          <div className="md:mt-10 md:mt-0 btns grid justify-center md:fle md:gap- fixed bottom-5 left-1/2 right-1/2 z-40">
            <ScrollLink to="formSection" smooth={true} duration={500}>
              <button className="shine-button whitespace-nowrap text-xl md:self-end bg-orange-500 text-white md:font-semibold font-medium py-3 px-8 rounded-full shadow-md md:hover:bg-orange-700 md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2 md:focus:ring-orange-500 transition duration-500 ease-in-out">
                <p className="text-sm">簡単2ステップで!</p>
                Restart Onlineに参加する
              </button>
            </ScrollLink>
          </div>
        </div>
        <Footer />
      </Layoutwrap>
    </>
  );
}
