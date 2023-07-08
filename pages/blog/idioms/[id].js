import { client } from "../../../libs/client";
import styles from "../../../styles/idioms.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Gptbox } from "../../../components/gptbox";
import Voicetes from "../../voicetes";
import Voice from "../../Voice";
import { Play } from "next/font/google";
import { onClickmake } from "../../../components/makesentense";
import styled, { keyframes } from "styled-components";

export default function BlogId({ blog, ids }) {
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

    if (nextSectionNumber > 9) {
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
      <div className="grid grid-cols-5 grid-row-2 md:grid-rows-1 bg-gradient-to-br from-green-400 via-green-500 to-green-600 h-full">
        {" "}
        <main className="row-start-1 rounded md:col-start-1 text-center col-span-full md:col-span-4 mx-2 md:mx-8 bg-slate-100 text-gray-800 mt-8">
          <div className="h-screen section0 m-5">
            <div className="bg-gray-100 col-span-4">
              <div className="flex text-blue-300">
                <p className="ml-10">
                  {" "}
                  {new Date(blog?.publishedAt)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })
                    .replace(/\//g, ".")}
                </p>
              </div>
              <h1 className="text-4xl font-bold pb-8 md:ml-10 text-gray-900 text-left font-sans font-ligh md:whitespace-nowrap">
                {blog.title}
              </h1>
            </div>

            <Image
              className="w-full -translate-y-"
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
              className={`${styles.post} text-5xl h-screen flex items-center justify-center section1`}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
            {/* <Voice inputText={plainText} /> */}
            {/* <Gptbox inputText={plainText} /> */}

            {/* 例文 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center section2`}
              dangerouslySetInnerHTML={{ __html: `${blog.head1}` }}
            ></div>
            {/* 例文２ */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center section3`}
              dangerouslySetInnerHTML={{ __html: `${blog.content1}` }}
            ></div>

            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center section4`}
              dangerouslySetInnerHTML={{ __html: `${blog.head2}` }}
            ></div>
            {/* 別訳1日本 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center section5`}
              dangerouslySetInnerHTML={{ __html: `${blog.content2}` }}
            ></div>
            {/* 答え　英訳 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center section6`}
              dangerouslySetInnerHTML={{ __html: `${blog.head3}` }}
            ></div>
            {/* 別訳2日本 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center section7`}
              dangerouslySetInnerHTML={{ __html: `${blog.content3}` }}
            ></div>
            {/* 答え　英訳 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center section8`}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
            {/* 別訳3日本 */}
            <div className="flex flex-col items-center justify-center h-screen section9">
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
              <p className="mt-4 text-lg">{text}</p>
              <h1 className="text-lg md:text-xl font-bold mb-8 text-center px-8">
                {isLoading ? (
                  "Loading... for make a sentence..."
                ) : str ? (
                  <Text>
                    <div className="whitespace-pre-line">{`${str}`}</div>
                  </Text>
                ) : null}
              </h1>
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
    </>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const datas = await client.get({ endpoint: "blogs" });
  const idiomDatas = datas.contents.filter((content) => content.idiom);
  const idiomIds = idiomDatas.map((content) => `${content.id}`);

  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
      ids: idiomIds,
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
