import { client } from "../../../libs/client";
import styles from "../../../styles/idioms.module.scss";
import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { onClickmake } from "../../../components/makesentense";
import styled, { keyframes } from "styled-components";
import { SNSshare } from "@/components/SNSshare";
import { Footer } from "../../../components/footer";
import Link from "next/link";
import Voice from "../../../components/aivoice";
import Layoutwrap from "../../../components/Layoutcomp";
import Head from "next/head";

export default function BlogId({ blog, category, recommend }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  const pathimage = blog.eyecatch?.url ? blog.eyecatch.url : `/wide/1.png`;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [makeword, setMakeword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  const [data, setData] = useState(null);
  const str = data?.choices[0].text.replace(/。/g, "");

  const [sectionNumber, setSectionNumber] = useState(0);

  const handleClick = () => {
    let nextSectionNumber = sectionNumber + 1;

    if (nextSectionNumber > 10) {
      nextSectionNumber = 0;
    }

    const sectionElement = document.querySelector(
      `.section${nextSectionNumber}`
    );

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    setSectionNumber(nextSectionNumber);
  };

  const plainText =
    "Come up with something what are you feel? I would like to make something cool";
  const text = blog.content.replace(/<[^>]*>?/gm, "");

  const handleSubmit = async () => {
    const newMakeword = text + "," + input;
    setMakeword(newMakeword);

    setInput("");
    setIsLoading(true);
    await onClickmake(newMakeword, setIsLoading, setData);
    setIsLoading(false);
  };

  // let blogContent = blog.content;
  let blogHead1 = blog.head1;
  let blogHead2 = blog.head2;
  let blogHead3 = blog.head3;
  let textsArray = [];

  const blogContent = blog.content.replace(/<[^>]*>?/gm, "");
  // const blogHead1 = blog.head1.replace(/<[^>]*>?/gm, "");
  // const blogHead2 = blog.head2.replace(/<[^>]*>?/gm, "");
  // const blogHead3 = blog.head3.replace(/<[^>]*>?/gm, "");
  const blogContent1 = blog.content1.replace(/<[^>]*>?/gm, "");
  const blogContent2 = blog.content2.replace(/<[^>]*>?/gm, "");
  const blogContent3 = blog.content3.replace(/<[^>]*>?/gm, "");
  console.log(blogContent1);
  // textsArray.push(removeHTMLTags(blogContent));
  textsArray.push(removeHTMLTags(blogHead1));
  textsArray.push(removeHTMLTags(blogHead2));
  textsArray.push(removeHTMLTags(blogHead3));
  console.log(textsArray);
  return (
    <>
      <Head>
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.description} />

        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.description} />
        <meta property="og:image" content={pathimage} />
        <meta property="og:url" content="https://beginrestart.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Tokoenglish" />
        <meta name="twitter:title" content={blog?.title} />
        <meta name="twitter:description" content={blog?.description} />
        <meta name="twitter:image" content={pathimage} />

        <link rel="canonical" href="https://beginrestart.com/" />
      </Head>

      <div className="grid bg-gradient-to-br from-blue-800 via-blue-500 to-blue-900 h-full ">
        {" "}
        <main className="row-start-1 rounded md:col-start-1 text-center col-span-full md:col-span-4 mx-2 md:mx-20 md:px-20 bg-slate-100 text-gray-800 mt-8">
          <div className="h-screen section0 m-5 text-left">
            <div className="bg-gray-100 ">
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
              <h1 className="text-2xl pb-8  text-blue-800 text-left font-san font-bold">
                {blog.title}
              </h1>
            </div>

            <Image
              className="w-full -translate-y- w-auto h-auto"
              loader={microCMSLoader}
              src={pathimage}
              height={500}
              width={900}
              alt="thumbnail"
              priority
            />
          </div>
          {/* その他のコード */}
          <div className="">
            {/* 答え 英訳 */}
            <div className="h-0 text-3xl translate-y-40 opacity-30">
              意味を想像しながら発音を聞いてみよう!
            </div>
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section1`}
            >
              {blogContent}
            </div>
            <Voice inputText={textsArray[0]} />

            {/* 例文 */}
            <div className="h-0 text-3xl translate-y-40 opacity-30">
              例文で確認しよう!
            </div>
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section2`}
            >
              {blogHead1}
            </div>
            <Voice inputText={textsArray[1]} />

            {/* 例文２ */}
            <div className="h-0 text-3xl translate-y-40 opacity-30">
              意味を確認しよう!
            </div>
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section3`}
            >
              {blogContent1}
            </div>
            <div className="h-0 text-3xl translate-y-40 opacity-30">
              更に理解を深めよう!
            </div>
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section4`}
            >
              {blogHead2}
            </div>
            <Voice inputText={textsArray[2]} />
            <div className="h-0 text-3xl translate-y-40 opacity-30">
              意味を理解しよう!
            </div>
            {/* 別訳1日本 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section5`}
            >
              {blogContent2}
            </div>
            <div className="h-0 text-3xl translate-y-40 opacity-30">
              最後の例文だよ!
            </div>
            {/* 答え　英訳 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section6`}
            >
              {blogHead3}
            </div>
            <Voice inputText={textsArray[3]} />
            <div className="h-0 text-3xl translate-y-40 opacity-30">
              イメージできたかな?
            </div>
            {/* 別訳2日本 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section7`}
            >
              {blogContent3}
            </div>
            <div className="h-0 text-3xl translate-y-40 opacity-30">
              Listen up!
            </div>
            {/* 答え　英訳 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section8`}
            >
              {blogContent}
            </div>
            <Voice inputText={textsArray[0]} />

            {/* 別訳3日本 */}
            <div className="flex flex-col items-center justify-center h-screen section9">
              <h1 className="text-center my-5 mb-20 text-2xl font-semibold text-blue-600">
                好きな単語を使ってAIに例文を作ってもらおう！
              </h1>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-72 h-32 p-3 mb-4 text-lg rounded-lg shadow-lg bg-gray-100 border-2 border-blue-500 focus:border-blue-600 focus:outline-none"
                placeholder="BLACKPINK, Justin Bieber, Yakiniku, Manga など好きな単語をここに入れてね! 複数の単語を入れる場合は,(カンマ)で区切ってね..."
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transform hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>
              <p className="mt-4 text-lg text-gray-600">
                {/* 自分が使いたい単語を入れて、{text}の例文をつくろう */}
              </p>
              <h1 className="text-lg md:text-xl font-bold mb-8 text-center px-8">
                {isLoading ? (
                  "例文をAIが作っています..."
                ) : str ? (
                  <Text>
                    <div className="whitespace-pre-line">{`${str}`}</div>
                    <div className="flex gap-4 mt-5">
                      <div className="translate-y-72">
                        <Voice inputText={data?.choices[0].text} />
                      </div>

                      <SNSshare
                        sentense={data?.choices[0].text}
                        url={`${text}という単語を使って例文を作ってみたよ！！`}
                        title="restart english"
                        result="result"
                      />
                    </div>
                  </Text>
                ) : null}
              </h1>
            </div>
          </div>
          <div className="section10 h-screen md:flex md:items-start md:justify-between md:px-6 border-y-2 border-blue-900 bg-gray-50">
            {/* Recommended Posts */}
            <div className="md:w-1/2 bg-white p-6 ">
              <h3 className="text-blue-800 text-xl font-bold mb-4 border-b-2 border-blue-900 pb-3">
                おすすめ記事
              </h3>
              <ul className="mt-6 text-gray-700">
                {recommend.map((blog) => (
                  <li key={blog?.id} className="flex mb-4 items-center">
                    <Image
                      src={blog?.eyecatch?.url}
                      alt="Profile Image"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <Link
                      href={`/blog/${
                        blog.category?.name === "Phrasal verb" ? "idioms/" : ""
                      }${blog.id}`}
                      className="ml-4 text-lg"
                    >
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Profile */}
            <div className="md:w-1/2 bg-white p-6 mt-6 md:mt-0 md:ml-6 hidden md:block">
              <div className="flex items-center mb-8">
                <Image
                  src="/canva/1.png"
                  alt="Profile Image"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <h3 className="ml-4 text-blue-900 text-xl font-bold ">
                  Restart運営
                </h3>
              </div>
              <p className="text-gray-700 mb-8 whitespace-pre-line text-xs md:text-base">
                {`私の人生はこんな筈じゃない。。\nそんな人が人生を再出発させることが\nできるのが英語！ \n やっぱり英語は喋らないと喋れない \n 英語イベントにポチッとワンクリックで参加してください。`}
              </p>
              <Link
                href="/event"
                className="mb-5 inline-block bg-yellow-400 text-blue-700 px-8 py-4 border-2 border-yellow-400 rounded-md transition-colors duration-300 hover:bg-yellow-300 hover:text-blue-500"
              >
                無料英会話イベント
              </Link>
              {/* Add Line Button (Replace # with your line add URL) */}
              <Link
                href="#"
                className="inline-block ml-4 bg-green-400 text-white px-8 py-4 border-2 border-green-400 rounded-md transition-colors duration-300 hover:bg-green-300 hover:text-black"
              >
                Line追加
              </Link>
            </div>
          </div>
        </main>
        <div className="">
          <button
            className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={handleClick}
          >
            NEXT
          </button>
        </div>
      </div>
      <div className="mt-40">
        {" "}
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const datas = await client.get({ endpoint: "blogs" });
  const idiomDatas = datas.contents.filter((content) => content.idiom);
  const idiomIds = idiomDatas.map((content) => `${content.id}`);

  const data = await client.get({ endpoint: "blogs", contentId: id });
  const categoryData = await client.get({ endpoint: "categories" });
  const recommendBlogs = datas.contents.filter(
    (content) => content.recommend === true
  );
  return {
    props: {
      blog: data,
      ids: idiomIds,
      category: categoryData.contents,
      recommend: recommendBlogs,
    },
  };
};
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const idiomContents = data.contents.filter((content) => content.idiom);
  const paths = idiomContents.map((content) => `/blog/idioms/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

const fadeIn = keyframes`
0% {
  opacity: 0;
}
70%{
  opacity: 1;
}
100% {
  opacity: 1;
}
`;
const Text = styled.span`
  opacity: 0;
  animation: ${fadeIn} 2s ease-in-out;
  animation-fill-mode: forwards;
`;

function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
