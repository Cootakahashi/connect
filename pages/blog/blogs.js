import { client } from "../../libs/client";
import Link from "next/link";
import Image from "next/legacy/image";
import Layoutwrap from "../../components/Layoutcomp";
import React, { useState, useEffect } from "react";
import { Pagination } from "../../components/Pagination";
import { Footer } from "../../components/footer";
import { Blogheader } from "../../components/header";

export default function allblog({ blog, category, recommend, totalCount }) {
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
  const pathimage0 = blog.eyecatch?.url;

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
              <div className=" mt-10">
                {blog.map((blog) => {
                  const datetime = new Date(blog.createdAt);
                  const pathimage = blog.eyecatch?.url;

                  return (
                    <div
                      key={blog.id}
                      className="mb-20 mb:mb-0 h-full bg-slate-20 rounded-xl md:px-5 border shadow-xl hover:shadow-2xl transition duration-500 ease-in-out"
                    >
                      <div className="text-slate-700  opacity-80 pt-6  flex justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 mt-1 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <p>{datetime.getFullYear()}.</p>
                        <p>{datetime.getMonth() + 1}.</p>
                        <p>{datetime.getDate()}</p>
                      </div>
                      <h1 className="text-2xl pt-3 pb-5  text-blue-800 text-center font-san font-bold ">
                        {" "}
                        {blog.title}
                      </h1>
                      <div className="text-center mb-5">
                        <span className="ml-3 text-slate-100 bg-blue-800 text-sm px-3 py-1">
                          {blog.category?.name}
                        </span>
                      </div>
                      <Link
                        key={blog.id}
                        href={`/blog/${
                          blog.category?.name === "Phrasal verb"
                            ? "idioms/"
                            : ""
                        }${blog.id}`}
                      >
                        <div className="bg-blue-20 rounded-x">
                          <Image
                            className="w-full z-1"
                            loader={microCMSLoader}
                            src={pathimage}
                            height={500}
                            width={500}
                            alt="thumbnail"
                            priority
                          />
                        </div>

                        <div className=" mx-3">
                          <h2 className="font-light text-center　flex opacity-70 px-5 pt-7 pb-5">
                            {blog?.description?.substring(0, 111)}...
                          </h2>
                        </div>
                        <button
                          href="/event"
                          className="mx-auto mb-10 flex justify-center text-blue-700  bg-gray-00 px-12 py-4 border-2   transition-colors duration-300 hover:bg-yellow-300 hover:text-blue-500"
                        >
                          Read More
                        </button>
                      </Link>
                    </div>
                  );
                })}
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
    endpoint: "blogs",
    queries: { offset: 0, limit: 5 },
  });
  const datas = await client.get({
    endpoint: "blogs",
    queries: { offset: 0, limit: 5 },
  });

  //get category content
  const categoryData = await client.get({ endpoint: "categories" });
  const recommendBlogs = data.contents.filter(
    (content) => content.recommend === true
  );
  return {
    props: {
      blog: data.contents,
      blogs: datas.contents,
      totalCount: datas.totalCount,
      category: categoryData.contents,
      recommend: recommendBlogs,
    },
  };
};
