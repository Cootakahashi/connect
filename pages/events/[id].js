import EventCard from "../../components/lp/EventCard"; // EventCardコンポーネントをインポート
import { client } from "../../libs/client";
import Image from "next/image";
import Link from "next/link"; // 追加：Linkが未定義だったため

import Layoutwrap from "../../components/Layoutcomp";
import React, { useState, useEffect } from "react";
import { Footer } from "../../components/footer";
import { Blogheader } from "../../components/header";

export default function Event({
  blog,

  event,
}) {
  console.log(event);
  console.log("HI");
  const pathimage0 = event.image?.url;
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  return (
    <div>
      {" "}
      <>
        <div className="hidde z-50 mb-20">
          <Blogheader />
        </div>
        <Layoutwrap
          metadata={{
            title: blog?.title,
            description: blog?.description,
            ogTitle: blog?.title,
            ogDescription: blog?.description,
            ogImage: pathimage0,
            ogUrl: "https://beginrestart.com/",
            twitterSite: "@Tokoenglish",
            canonicalUrl: "https://beginrestart.com/",
          }}
        >
          <>EVENT</>
          <div className="md:flex mb-80">
            <div className="flex-grow mt-10" style={{ flexBasis: "61.8%" }}>
              {" "}
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 overflow-hidde">
                <Image
                  src={event.image.url}
                  alt={event.title}
                  width={200}
                  height={300}
                  className="md:w-full md:px-10 md:py-3 "
                />
                <div className="p-3 md:p-6">
                  <h2 className="font-bold md:text-2xl mb-2">{event.title}</h2>

                  <p className="text-gray-700 text-sm mt-5">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex-grow"
              style={{ flexBasis: windowWidth <= 768 ? "100%" : "38.2%" }}
            >
              {/* Sidebar goes here */}
              <div className="md:ml-20 text-gray-700 py-4 md:px-6 bg-gray-100 rounded-xl mt-10">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-700 md:text-lg mb-2">{event.date}</p>
                </div>

                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  <p className="text-xs opacity-80">Google Meet</p>
                </div>

                <ul className="space-y-2 font-bold"></ul>
              </div>

              <div className="md:ml-20 text-gray-700 py-4 md:px-6 font-bold mb-4 border-y-2 border-blue-900 pb-3 text-blue-800 mt-2">
                <div className="mb-4 flex">
                  <Image
                    src="/canva/1.png"
                    alt="Profile Image"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />{" "}
                  <h3 className="text-xl font-bold mb-2 text-blue-900 mt-auto">
                    Restart運営
                  </h3>
                </div>
                <div>
                  <p className="mb-4 whitespace-pre-line">
                    {`私の人生はこんな筈じゃない。。\nそんな人が人生を再出発させることが\nできるのが英語！ \n やっぱり英語は喋らないと喋れない \n 英語イベントにポチッとワンクリックで参加してください。`}
                  </p>
                  {/* <p className="mb-8 mt-12">
                    <Link
                      href="/event"
                      className="whitespace-nowrap md:self-end bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 ease-in-out"
                    >
                      {" "}
                      <button>無料英会話EVENT</button>
                    </Link>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </Layoutwrap>
        <div className="w-full shadow-xl sticky bottom-0 z-10 flex bg-gray-100 justify-center md:justify-between py-2 items-center px-20 h-28">
          <div className="hidden md:block">
            <p className="text-gray-700 md:text-lg mb-2">{event.date}</p>

            <div>
              <h2 className="font-bold">{event.title}</h2>
            </div>
          </div>
          <div className="flex justify-end gap-5">
            <p className="font-semibold items-center flex">FREE</p>

            <Link
              href="/event"
              className="whitespace-nowrap text-slate-900 md:self-end text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 ease-in-out"
            >
              <button>Share</button>
            </Link>
            <Link
              href="/event"
              className="whitespace-nowrap md:self-end bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 ease-in-out"
            >
              <button>参加する</button>
            </Link>
          </div>
        </div>

        <Footer />
      </>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "event",
    contentId: id,
  });

  return {
    props: {
      event: data || [],
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "event" });
  const paths = data.contents.map((content) => `/events/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};
