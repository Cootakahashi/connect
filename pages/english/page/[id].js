import Link from "next/link";
import { Pagination } from "../../../components/Pagination";
import { client } from "../../../libs/client";
import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Blogheader from "@/components/header";
const PER_PAGE = 5;

// pages/blog/[id].js
export default function BlogPageId({ blog, totalCount }) {
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
      <div className="hidde z-50 mb-20">
        <Blogheader />
      </div>
      <div className="md:flex">
        <div className="flex-grow " style={{ flexBasis: "61.8%" }}></div>
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
                    href={`/english/${
                      blog.category?.name === "Phrasal verb" ? "idioms/" : ""
                    }${blog.id}`}
                  >
                    <div className="bg-blue-20 rounded-x mx-auto m-full">
                      <Image
                        className="w-full z-1"
                        loader={microCMSLoader}
                        src={pathimage}
                        height={400}
                        width={750}
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
        <div>
          <Pagination totalCount={totalCount} />
        </div>
      </div>
    </div>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blogs" });

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/english/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const data = await client.get({
    endpoint: "blogs",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
