import { client } from "../../libs/client";
// import { renderToc } from "../../libs/render-toc"; // 追加
import { TableOfContents } from "../../components/TableOfContents"; // TableOfContentsをインポートする
import styles from "../../styles/id.module.scss";
import Image from "next/image";
import Layoutwrap from "../../components/Layoutcomp";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function BlogId({ blog, ids, category, recommend }) {
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
  const microCMSLoader = ({ src, width, quality, hello }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  const pathimage = blog?.eyecatch?.url ? blog?.eyecatch?.url : `/wide/1.png`;
  const schemaNames = ["head", "content", "images"];

  // const htmlText = marked(blog.content3);

  const [visible, setVisible] = useState(true);
  console.log(blog?.images?.[3]);
  return (
    <>
      <Layoutwrap>
        <div className="md:flex">
          <div className="flex-grow " style={{ flexBasis: "61.8%" }}>
            {/* Main content goes here */}

            <div className={`${styles.m}`}>
              <main className="">
                <div className="text-slate-800">
                  <div className="mt-8 mb-6">
                    <span className="text-sm">
                      {" "}
                      {new Date(blog?.publishedAt)
                        .toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })
                        .replace(/\//g, ".")}
                    </span>
                    <span className="ml-5 text-slate-100 bg-blue-800 text-sm px-3 py-1">
                      {blog?.category?.name}
                    </span>
                  </div>
                  <h1 className=" text-2xl pb-8  text-blue-800 text-left font-san font-bold	">
                    {blog?.title}
                    <br />
                    {blog?.title2}
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="w-full"
                    loader={microCMSLoader}
                    src={pathimage}
                    height={500}
                    width={500}
                    alt="thumbnail"
                    priority
                  />
                </div>
                <div className="mt-20">
                  {blog?.toc_visible && <TableOfContents toc={toc} />}
                </div>
                <div
                  className={`${styles.post} `}
                  dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
                ></div>
              </main>
            </div>
            <div className="">
              {Array.from({ length: 4 }, (_, index) => (
                <section className="mb-8" key={index}>
                  <h1 className="text-xl font-bold bg-gray-100 py-4 pl-4 border-l-4 border-blue-400 mt-10 mb-6">
                    {blog?.[schemaNames[0] + (index + 1)]}
                  </h1>
                  <Image
                    src={blog?.[schemaNames[2]]?.[index]?.url}
                    className="w-full"
                    height={500}
                    width={500}
                    alt="head image"
                    priority
                    loader={microCMSLoader}
                  />
                  <div
                    className={`${styles.content} my-20 leading-10 whitespace-pre-line`}
                    dangerouslySetInnerHTML={{
                      __html: blog?.[schemaNames[1] + (index + 1)],
                    }}
                  />
                </section>
              ))}
            </div>
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
                    className="text-blue-700  bg-yellow-400 px-8 py-4 border-2 border-yellow-400 rounded-md transition-colors duration-300 hover:bg-yellow-300 hover:text-blue-500"
                  >
                    無料英会話イベント
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layoutwrap>
    </>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const datas = await client.get({ endpoint: "blogs" });
  const grammarPracticeIds = datas.contents
    .filter((content) => content.grammarPractice)
    .map((content) => `${content.id}`);
  const data = await client.get({ endpoint: "blogs", contentId: id });
  const categoryData = await client.get({ endpoint: "categories" });
  const recommendBlogs = datas.contents.filter(
    (content) => content.recommend === true
  );
  return {
    props: {
      blog: data,
      ids: grammarPracticeIds,
      category: categoryData.contents,
      recommend: recommendBlogs,
    },
  };
};
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    // fallbackでpathがなければ404を返す
    fallback: false,
  };
};
