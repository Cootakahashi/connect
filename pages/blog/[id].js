import { Francois_One } from "@next/font/google";
import { client } from "../../libs/client";
// import { renderToc } from "../../libs/render-toc"; // 追加
import { TableOfContents } from "../../components/TableOfContents"; // TableOfContentsをインポートする
import styles from "../../styles/id.module.scss";
import { Sidebar } from "../../components/sidebar";
import Image from "next/image";
import { QuizQuestion } from "../../components/quiz";
import { useState, useEffect } from "react";
import { Gptbox } from "../../components/gptbox";

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
  return (
    <>
      {grammarPractice ? (
        <div className="col-span-full -mt-5 bg-gradient-to-br from-green-400 via-green-500 to-green-600 h-screen">
          <QuizQuestion
            answers={answers}
            question={question}
            visible={visible}
            pinyin={pinyin}
            setVisible={setVisible}
            connectID={connectID}
            ids={ids}
            correctAnswer={correctAnswer}
          />
        </div>
      ) : (
        <div
          className={`${styles.main} grid grid-cols-5 grid-row-2 md:grid-rows-1 bg-gradient-to-br from-green-400 via-green-500 to-green-600 h-screen`}
        >
          <main className="row-start-1 md:col-start-1 text-center col-span-full md:col-span-4 my-10 p-5 bg-slate-100 text-gray-800 w- md:w-full">
            <div className="bg-gray-100 col-span-4">
              <div className="flex p-8 text-blue-300">
                <p className="ml-auto">{blog.publishedAt}</p>
              </div>
              <h1 className=" text-5xl pb-8 md:ml-10 text-gray-900 text-left font-sans font-light">
                {blog.title}
              </h1>
            </div>
            <div className="my-10">
              <Image
                className="h-80"
                loader={microCMSLoader}
                src={pathimage}
                height={500}
                width={500}
                alt="thumbnail"
                priority
              />
            </div>
            <div className="mt-20">
              {blog.toc_visible && <TableOfContents toc={toc} />}
            </div>
            <div
              className={`${styles.post}`}
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            ></div>
          </main>
        </div>
      )}
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
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    // fallbackでpathがなければ404を返す
    fallback: false,
  };
};
