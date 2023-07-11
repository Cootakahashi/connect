import { client } from "../../libs/client";
import Link from "next/link";
import Image from "next/image";
import Layoutwrap from "../../components/Layoutcomp";
import React, { useState, useEffect } from "react";
import { Pagination } from "../../components/Pagination";
import { Footer } from "../../components/footer";
import { Blogheader } from "../../components/header";

export default function allblog({
  blog,
  category,
  recommend,
  totalCount,
  events,
}) {
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
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const pathimage0 = events.image?.url;

  return (
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
        <div className="md:flex">
          <div className="flex-grow " style={{ flexBasis: "61.8%" }}>
            {" "}
            <ul>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 ">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="h-[290px] flex bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 ease-in-out"
                  >
                    <Image
                      src={event.image.url}
                      alt={event.title}
                      width={200}
                      height={300}
                      className="w-1/2 px-10 py-3"
                    />
                    <div className="p-6">
                      <h2 className="font-bold text-2xl mb-2">{event.title}</h2>
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
                        <p className="text-gray-700 text-lg mb-2">
                          {event.date}
                        </p>
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

                      <p className="text-gray-700 text-sm mt-5">
                        {event.description}
                      </p>
                      <a
                        href={event.url}
                        className="mt-8 inline-block w-full text-center whitespace-nowrap self-center bg-orange-500 text-slate-100 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        参加する
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </ul>
            <Pagination totalCount={totalCount} />
          </div>
          <div
            className="flex-grow"
            style={{ flexBasis: windowWidth <= 768 ? "100%" : "38.2%" }}
          >
            {/* Sidebar goes here */}
            <div className="md:ml-20 text-gray-700 py-4 md:px-6">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-900 pb-3 text-blue-800 ">
                カテゴリー
              </h3>
              <ul className="space-y-2 font-bold">
                <Link href={`/category/${category.id}`}>
                  ブログトップページ
                </Link>
                {category.map((category) => (
                  <li
                    key={category.id}
                    className="border-b rounded-md transition-colors duration-300 hover:bg-gray-800 hover:text-blue-500 md:px-3 py-2"
                  >
                    <Link href={`/category/${category.id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:ml-20 text-gray-700 py-4 md:px-6">
              <h3 className="mt-10 text-xl font-bold mb-4 border-b-2 border-blue-900 pb-3 text-blue-800 ">
                おすすめ記事
              </h3>
              <ul className="space-y-2 font-bold">
                {recommend.map((blog) => (
                  <li
                    key={blog?.id}
                    className="flex border-b rounded-md transition-colors duration-300 hover:bg-gray-800 hover:text-blue-500 px-3 py-2"
                  >
                    {" "}
                    <Image
                      src={blog?.eyecatch?.url}
                      alt="Profile Image"
                      width={64}
                      height={64}
                      className="rounded-ful"
                    />
                    <Link href={`/blog/${blog?.id}`} className="mx-5 text-sm">
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:ml-20 text-gray-700 py-4 md:px-6 font-bold mb-4 border-y-2 border-blue-900 pb-3 text-blue-800 mt-20">
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
                <p className="mb-8 mt-12">
                  <Link
                    href="/event"
                    className="whitespace-nowrap md:self-end bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 ease-in-out"
                  >
                    {" "}
                    <button>無料英会話EVENT</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layoutwrap>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "event",
    queries: { offset: 0, limit: 5 },
  });
  const datas = await client.get({
    endpoint: "event",
    queries: { offset: 0, limit: 5 },
  });

  //get category content
  const categoryData = await client.get({ endpoint: "categories" });
  const recommendBlogs = data.contents.filter(
    (content) => content.recommend === true
  );
  return {
    props: {
      events: data.contents,
      blogs: datas.contents,
      totalCount: datas.totalCount,
      category: categoryData.contents,
      recommend: recommendBlogs,
    },
  };
};
