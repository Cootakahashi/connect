// import { Francois_One } from "@next/font/google";
import { client } from "../../../libs/client";
// import { renderToc } from "../../libs/render-toc"; // 追加
import { TableOfContents } from "../../../components/TableOfContents"; // TableOfContentsをインポートする
import styles from "../../../styles/idioms.module.scss";
import { Sidebar } from "../../../components/sidebar";
import Image from "next/image";
import { IdiomQuestion } from "../../../components/idiomquiz";
import { useState, useEffect } from "react";
import { Gptbox } from "../../../components/gptbox";

export default function BlogId({ blog, ids }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  const pathimage = blog.eyecatch?.url ? blog.eyecatch.url : `/wide/1.png`;
  const [visible, setVisible] = useState(true);
  const question = [blog.quiz1, blog.quiz2, blog.quiz3];
  const pinyin = [blog.pinyin1, blog.pinyin2, blog.pinyin3];
  const connectID = [blog.id, blog.connectID];
  const answers = [
    [blog.answer1, blog.answer2, blog.answer3, blog.answer4],
    [blog.answer5, blog.answer6, blog.answer7, blog.answer8],
    [blog.answer9, blog.answer10, blog.answer11, blog.answer12],
  ];
  const grammarPractice = blog.grammarPractice;
  const correctAnswer = [blog.answer1, blog.answer5, blog.answer9];
  console.log(ids);
  console.log(typeof ids);
  const [scrollPosition, setScrollPosition] = useState(0);

  //   const handleClick = () => {
  //     const newPosition = scrollPosition + scrollAmount;
  //     setScrollPosition(newPosition);
  //     window.scrollTo({
  //       top: newPosition,
  //       behavior: "smooth",
  //     });
  //   };
  const handleClick = () => {
    const scrollAmount = window.innerHeight * 1.0;
    const maxScrollPosition =
      document.documentElement.scrollHeight - window.innerHeight;
    let newPosition = scrollPosition + scrollAmount;

    if (newPosition > maxScrollPosition) {
      newPosition = 0; // 一番上に戻る場合は0にリセット
    }

    setScrollPosition(newPosition);
    window.scrollTo({
      top: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`${styles.main} grid grid-cols-5 grid-row-2 md:grid-rows-1 bg-gradient-to-br from-green-400 via-green-500 to-green-600 h-full`}
      >
        {" "}
        <main className="row-start-1 rounded-xl ml-2 md:col-start-1 text-center col-span-full md:col-span-4 my-10 p-5 bg-slate-100 text-gray-800 w-full">
          <div className="h-screen">
            <div className="bg-gray-100 col-span-4">
              <div className="flex p-8 text-blue-300">
                <p className="ml-auto">{blog.publishedAt}</p>
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
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
            {/* 例文 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.quiz1}` }}
            ></div>
            {/* 例文２ */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.quiz2}` }}
            ></div>
            {/* 違う訳し方を覚えれば直訳脳から脱出できる! */}
            <div className="h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col justify-center items-center">
              <h2 className="text-3xl text-white font-bold mb-8">次は別訳!</h2>
              <p className="text-lg text-white text-center px-4">
                別訳を知ることには多くのメリットがあります。
              </p>
              <ol className="list-disc mt-4 ml-8">
                <li>豊かな表現力</li>
                <li>ニュアンスの理解</li>
                <li>正確な伝達</li>
                <li>語彙の深化</li>
                <li>自信の向上</li>
              </ol>
            </div>
            {/* 答え　英訳 */}

            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
            {/* 別訳1日本 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.answer1}` }}
            ></div>
            {/* 答え　英訳 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
            {/* 別訳2日本 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.answer2}` }}
            ></div>
            {/* 答え　英訳 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
            {/* 別訳3日本 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.answer3}` }}
            ></div>
            {/* 類義語彙でで記憶確立倍増! 語彙が深まればあらゆる場面で使える! */}
            <div className="h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col justify-center items-center">
              <h2 className="text-3xl text-white font-bold mb-8">
                次は類義語Tips
              </h2>
              <p className="text-lg text-white text-center px-4">
                語学学習で類義語を覚えることには多くのメリットがあります。
              </p>
              <ol className="list-disc mt-4 ml-8">
                <li>豊かな表現力</li>
                <li>ニュアンスの理解</li>
                <li>正確な伝達</li>
                <li>語彙の深化</li>
                <li>自信の向上</li>
              </ol>
            </div>
            {/* 似てる英熟語 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.answer4}` }}
            ></div>
            {/* 似てる英熟語2 */}
            <div
              className={`${styles.post} text-5xl h-screen flex items-center justify-center`}
              dangerouslySetInnerHTML={{ __html: `${blog.answer5}` }}
            ></div>
          </div>
        </main>
        <div className="">
          <button
            className="fixed bottom-4 right-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Scroll Down
          </button>
        </div>
      </div>
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

  return {
    props: {
      blog: data,
      ids: grammarPracticeIds,
    },
  };
};
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blog/idioms/${content.id}`);
  return {
    paths,
    // fallbackでpathがなければ404を返す
    fallback: false,
  };
};
