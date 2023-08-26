import { client } from "../../../libs/client";
// import { TableOfContents } from "../../components/TableOfContents"; // TableOfContentsをインポートする
import styles from "../../../styles/id.module.scss";
import Image from "next/image";
import Layoutwrap from "../../../components/Layoutcomp";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Footer } from "../../../components/footer";
import { Blogheader } from "../../../components/header";
import { Toc } from "../../../components/toc";
export default function BlogId({ blog, category, recommend }) {
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
  useEffect(() => {
    const smoothScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", smoothScroll);

    return () => {
      document.removeEventListener("click", smoothScroll);
    };
  }, []);
  const microCMSLoader = ({ src, width, quality, hello }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  // const pathimage = blog?.eyecatch?.url ? blog?.eyecatch?.url : `/wide/1.png`;
  const pathimage = blog?.eyecatch?.url ?? `/wide/top.jpg`;

  const schemaNames = ["head", "content", "images"];
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="hidde z-50 mb-20">
        <Blogheader />
      </div>
      <Layoutwrap
        isMargin={true}
        metadata={{
          title: blog?.title,
          description: blog?.description,
          ogTitle: blog?.title,
          ogDescription: blog?.description,
          ogImage: pathimage,
          ogUrl: "https://beginrestart.com/",
          twitterSite: "@Tokoenglish",
          canonicalUrl: "https://beginrestart.com/",
        }}
      >
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
                  <h1 className=" text-2xl pb-8  text-blue-800 text-left font-san font-bold	whitespace-pre-line">
                    {blog?.title}

                    {blog?.title2}
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="w-full"
                    loader={microCMSLoader}
                    src={pathimage}
                    height={550}
                    width={1000}
                    alt="thumbnail"
                    priority
                  />
                </div>
                <div className="mt-20">
                  {blog?.toc_visible && <Toc blog={blog} />}
                </div>
                <div
                  className={`${styles.post} `}
                  dangerouslySetInnerHTML={{ __html: `${blog?.content}` }}
                ></div>
              </main>
            </div>
            <div className="">
              {Array.from({ length: 4 }, (_, index) => (
                <section className="mb-8" key={index} id={`head${index + 1}`}>
                  <h1 className="text-xl font-bold bg-gray-100 py-4 pl-4 border-l-4 border-blue-400 mt-10 mb-6">
                    {blog?.[schemaNames[0] + (index + 1)]}
                  </h1>
                  <Image
                    src={blog?.[schemaNames[2]]?.[index]?.url}
                    className="w-full"
                    height={550}
                    width={1000}
                    alt="head image"
                    priority
                    loader={microCMSLoader}
                  />
                  <div
                    className={`${styles.content} my-20 leading-8 text-md whitespace-pre-line`}
                    dangerouslySetInnerHTML={{
                      __html: blog?.[schemaNames[1] + (index + 1)],
                    }}
                  />
                  {((index === 0 && blog?.linktitle) ||
                    (index === 3 && blog?.linktitle2)) && (
                    <Link
                      className=""
                      href={index === 0 ? blog?.link : blog?.link2}
                      passHref
                    >
                      <div className="mt-4 p-4 border-2 border-gray-200 rounded-md flex justify-between items-center bg-blue-50">
                        <div className="text-blue-800 flex items-center">
                          <div className="relative h-[80px] w-[220px] md:h-[200px] md:w-[300px]">
                            <Image
                              src={
                                index === 0
                                  ? blog?.linkimage?.url
                                  : blog?.linkimage2?.url
                              }
                              className="w-full"
                              layout="fill"
                              alt="head image"
                              priority
                              loader={microCMSLoader}
                            />
                          </div>
                          <div className="p-5">
                            <div className="font-semibold text-sm">
                              {index === 0 ? blog?.linktitle : blog?.linktitle2}
                            </div>
                            <div className="text-xs mt-2">
                              {" "}
                              {index === 0 ? blog?.linkmain : blog?.linkmain2}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </section>
              ))}
              <div className="bg-red-200 p-1">この記事がおすすめです</div>
              {blog && blog?.link && (
                <Link className="" href={blog?.link} passHref>
                  <div className="mt-4 p-4 border-2 border-gray-200 rounded-md flex justify-between items-center bg-blue-50">
                    <div className="text-blue-800 flex items-center">
                      <div className="relative h-[80px] w-[200px] md:h-[200px] md:w-[300px]">
                        {" "}
                        <Image
                          src={blog?.linkimage?.url}
                          className="w-full"
                          fill
                          alt="head image"
                          priority
                          loader={microCMSLoader}
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-sm">
                          {blog?.linktitle}
                        </h3>
                        <div className="text-xs mt-2"> {blog?.linktitle}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
              <div className="bg-blue-200 p-1 mt-5">
                ネイティブがよく使う単語2つの組み合わせ(句動詞)の使い方をマスターしよう
              </div>
              {blog && blog?.link && (
                <Link className="" href={blog?.link} passHref>
                  <div className="mt-4 p-4 border-2 border-gray-200 rounded-md flex justify-between items-center bg-blue-50">
                    <div className="text-blue-800 flex">
                      <div>
                        {/* <Image
                          src={blog?.linkimage?.url}
                          className="w-full"
                          height={150}
                          width={200}
                          alt="head image"
                          priority
                          loader={microCMSLoader}
                        /> */}
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-sm">
                          {blog?.linktitle}
                        </h3>
                        <div className="text-xs mt-2"> {blog?.linktitle}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div
            className="flex-grow"
            style={{ flexBasis: windowWidth <= 768 ? "100%" : "38.2%" }}
          >
            {/* Sidebar goes here */}
            <div className="md:ml-20 text-gray-700 py-4 md:px-6">
              <div className="text-xl font-bold mb-4 border-b-2 border-blue-900 pb-3 text-blue-800 ">
                カテゴリー
              </div>
              <ul className="space-y-2 font-bold">
                <Link href={`/category/${category?.id}`}>
                  ブログトップページ
                </Link>
                {category?.map((category) => (
                  <Link href={`/category/${category.id}`} key={category.id}>
                    <li className="border-b rounded-md transition-colors duration-300 md:hover:bg-gray-800 hover:text-blue-500 md:px-3 py-2">
                      {category.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="md:ml-20 text-gray-700 py-4 md:px-6">
              <div className="mt-10 text-xl font-bold mb-4 border-b-2 border-blue-900 pb-3 text-blue-800 ">
                おすすめ記事
              </div>
              <ul className="space-y-2 font-bold">
                {recommend?.map((blog) => (
                  <li
                    key={blog?.id}
                    className="flex items-center border-b rounded-md transition-colors duration-300 md:hover:bg-gray-800 md:hover:text-blue-500 px-3 py-2"
                  >
                    {" "}
                    <div className="bg-black w-[95px] h-[65px] md:w-[75px] md:h-[65px] lg:w-[100px] lg:h-[90px] relative">
                      <Image
                        src={blog?.eyecatch?.url ?? "/canva/1.png"}
                        alt="Profile Image"
                        layout="fill"
                        objectFit="cover"
                        className=""
                      />
                    </div>
                    <Link
                      href={`/english/${blog?.category?.id}/${blog?.id}`}
                      className="mx-5 text-sm h-[105px] w-[190px]  md:w-[105px] lg:w-[190px] flex items-center"
                    >
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:ml-20 text-gray-700 py-4 md:px-6 font-bold mb-4 border-y-2 border-blue-900 pb-3 text-blue-800 mt-20">
              <div className="mb-4 flex">
                <Image
                  src="/logo/Restart.png"
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
                <div className="mb-4 whitespace-pre-line">
                  {`私の人生はこんな筈じゃない。。\nそんな人が人生を再出発させることが\nできるのが英語！ \n やっぱり英語は喋らないと喋れない \n 英語イベントにポチッとワンクリックで参加してください。`}
                </div>
                <div className="mb-8 mt-12">
                  <Link
                    href="/events/explain"
                    className="text-white  bg-orange-500 px-8 py-4 border-2 border-red-400 rounded-md transition-colors duration-300 md:hover:bg-orange-800 md:hover:text-blue-500"
                  >
                    無料英会話イベント
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layoutwrap>
      <Footer />
    </>
  );
}

export const getStaticProps = async (context) => {
  const categoryId = context.params.categoryId;
  const id = context.params.id;
  const datas = await client.get({ endpoint: "blogs" });
  const data = await client.get({ endpoint: "blogs", contentId: id });
  const categoryData = await client.get({ endpoint: "categories" });
  const recommendBlogs = datas.contents.filter(
    (content) => content.recommend === true
  );
  return {
    props: {
      blog: data,
      category: categoryData.contents,
      recommend: recommendBlogs,
    },
  };
};
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => ({
    params: {
      categoryId: content.category.id.toString(),
      id: content.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
};
