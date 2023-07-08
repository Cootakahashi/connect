import { client } from "../../../libs/client";
import styles from "../../../styles/idioms.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { onClickmake } from "../../../components/makesentense";
import styled, { keyframes } from "styled-components";
import { SNSshare } from "@/components/SNSshare";
import { Footer } from "../../../components/footer";
import Link from "next/link";
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
  return (
    <>
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
              width={500}
              alt="thumbnail"
              priority
            />
          </div>
          <div className="">
            {/* 答え 英訳 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section1`}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
            {/* <Voice inputText={plainText} /> */}
            {/* <Gptbox inputText={plainText} /> */}

            {/* 例文 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section2`}
              dangerouslySetInnerHTML={{ __html: `${blog.head1}` }}
            ></div>
            {/* 例文２ */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section3`}
              dangerouslySetInnerHTML={{ __html: `${blog.content1}` }}
            ></div>

            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section4`}
              dangerouslySetInnerHTML={{ __html: `${blog.head2}` }}
            ></div>
            {/* 別訳1日本 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section5`}
              dangerouslySetInnerHTML={{ __html: `${blog.content2}` }}
            ></div>
            {/* 答え　英訳 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section6`}
              dangerouslySetInnerHTML={{ __html: `${blog.head3}` }}
            ></div>
            {/* 別訳2日本 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section7`}
              dangerouslySetInnerHTML={{ __html: `${blog.content3}` }}
            ></div>
            {/* 答え　英訳 */}
            <div
              className={`${styles.post} text-3xl md:text-5xl h-screen flex items-center justify-center section8`}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
            {/* 別訳3日本 */}
            <div className="flex flex-col items-center justify-center h-screen section9">
              <h1 className="text-center my-5 mb-20 text-2xl font-semibold">
                記憶するために例文を作ろう！
              </h1>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-64 h-24 p-3 mb-4 text-lg border rounded shadow"
                placeholder="Write something..."
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Submit
              </button>
              <p className="mt-4 text-lg">
                自分が使いたい単語を入れて、{text}の例文をつくろう
              </p>
              <h1 className="text-lg md:text-xl font-bold mb-8 text-center px-8">
                {isLoading ? (
                  "Loading... for make a sentence..."
                ) : str ? (
                  <Text>
                    <div className="whitespace-pre-line">{`${str}`}</div>
                    <div className="flex gap-4">
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
            <div className="md:w-1/2 bg-white p-6">
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
                    <Link href={`/blog/${blog?.id}`} className="ml-4 text-lg">
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Profile */}
            <div className="md:w-1/2 bg-white p-6 mt-6 md:mt-0 md:ml-6">
              <div className="flex items-center mb-8">
                <Image
                  src="/canva/1.png"
                  alt="Profile Image"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <h3 className="ml-4 text-blue-900 text-xl font-bold">
                  Restart運営
                </h3>
              </div>
              <p className="text-gray-700 mb-8 whitespace-pre-line">
                {`私の人生はこんな筈じゃない。。\nそんな人が人生を再出発させることが\nできるのが英語！ \n やっぱり英語は喋らないと喋れない \n 英語イベントにポチッとワンクリックで参加してください。`}
              </p>
              <Link
                href="/event"
                className="inline-block bg-yellow-400 text-blue-700 px-8 py-4 border-2 border-yellow-400 rounded-md transition-colors duration-300 hover:bg-yellow-300 hover:text-blue-500"
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
      <Footer />
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
