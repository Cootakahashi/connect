import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import { useState, useEffect } from "react";

import { SNSshare } from "../components/SNSshare";
export default function makeExpression() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chineseAdd, setChineseAdd] = useState(false);

  // useEffect(() => {
  //   if (chineseAdd) {
  //     const addComment =
  //       "を中国語に翻訳してください。\nを使い、行を変えて拼音も出力してください。　同じ意味だけど違う表現をあと二つ同じ形で出力してください。 必ず中国語と拼音の両方を出力してください。  中国語と拼音を出力したら最後にそれぞれの表現の違いを日本語で説明してください。(例:中国語：我想吃饭。拼音：wǒ xiǎng chī fàn. \n 中国語：我要吃饭。拼音：wǒ yào chī fàn. \n 中国語：我要开饭。拼音：wǒ yào kāi fàn. \n\n 「我想吃饭.」「我要吃饭.」「我要开饭.」の各表現の違いは、「想」は「考える」という意味で「思い」を表し、「要」は「必要」という意味で、「必要とする」という意味であるが、「开饭」は「夕食などを提供する」という意味なので、吃飯を受け取るという意味ではないので、「食べたい」という意味合いとは異なる。)";
  //   } else {
  //     const addComment = "に似た中国語の表現を3つ以上教えてください";
  //   }
  // }, [chineseAdd]);
  const handleSub = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const addComment =
      "を英語に翻訳してください。\nを使い、行を変えて拼音も出力してください。 同じ意味だけど違う表現をあと二つ同じ形で出力してください。 必ず英語と発音記号の両方を出力してください。  英語と発音記号を出力したら最後にそれぞれの表現の違いを日本語で説明してください。(例:英語：I'm going to eat that。発音記号：aɪm ˈɡoʊɪŋ tə it ðæt aɪm ˈɡoʊɪŋ tə it ðæt \n 日本語訳：私はあのご飯をこれから食べます。";
    const prompt = "愛 心 仲間　を使って文章を作ってください";
    const engine = "text-davinci-003";
    const maxTokens = 555;
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    try {
      const { data } = await axios.post(
        "https://api.openai.com/v1/engines/" + engine + "/completions",
        {
          prompt: message + addComment,
          max_tokens: maxTokens,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiKey,
          },
        }
      );
      setResponse(data.choices[0].text);
    } catch (error) {}
    setIsLoading(false);
  };

  const onClickHandler = () => {
    // setChineseAdd(true);
    chineseAdd ? setChineseAdd(false) : setChineseAdd(true);
  };

  return (
    <div
      className={`bg-gradient-to-b from-red-600 via-red-500 to-red-400 h-screen w-full mb-40 ${
        chineseAdd
          ? "back-expression2 transition-all"
          : "back-expression transition-all"
      }`}
    >
      <h1 className="text-2xl mb-4 text-3xl bg-gradient-to-b from-red-600 via-red-500 to-red-400  items-center justify-center pb-2 text-gray-200 text-center pt-3 w-full  b-20">
        {" "}
        豊富表現
      </h1>
      {chineseAdd ? (
        <h2 className="text-center font-serif font-bold text-xl">
          中国語 ⇨ 中国語++
        </h2>
      ) : (
        <h2 className="text-center font-serif font-bold text-xl">
          日本語 ⇨ 中国語
        </h2>
      )}
      <button className="border px-5 py-2 rounded-xl" onClick={onClickHandler}>
        変化
      </button>

      {chineseAdd ? (
        <>
          {" "}
          <div className="bg-slate-200 h-80 w-3/5  mx-auto rounded-md mb-20 mt-20 p-8 font-serif text-lg">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {response}
          </div>
          <div className="flex justify-end mr-40 pb-10">
            {" "}
            <SNSshare />
          </div>
          <div className="bg-blue-200 rounded-lg overflow-hidden w-4/5 mx-auto h-20 input-box">
            <form
              className="flex items-center space-x-2 justify-center pt-2 focus:outline-none"
              onSubmit={(e) => handleSub(e)}
            >
              <input
                type="text"
                placeholder="豊富な表現にする文章を入力してください"
                className="block w-4/5 px-4 py-2 text-gray-700 focus:outline-none focus:bg-gray- h-16 space-x-2 p-4 focus:outline-none mr-10"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-20"
              >
                {isLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 animate-spin h-5 w-5 mr-3"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                ) : (
                  "送信"
                )}
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="bg-slate-200 h-80 w-3/5  mx-auto rounded-md mb-20 mt-20 p-8 font-serif text-lg">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {response}
          </div>
          <div className="flex justify-end mr-40 pb-10">
            {" "}
            <SNSshare />
          </div>
          <div className="bg-blue-200 rounded-lg overflow-hidden w-4/5 mx-auto h-20 input-box">
            <form
              className="flex items-center space-x-2 justify-center pt-2 focus:outline-none"
              onSubmit={(e) => handleSub(e)}
            >
              <input
                type="text"
                placeholder="豊富な表現にする文章を入力してください"
                className="block w-4/5 px-4 py-2 text-gray-700 focus:outline-none focus:bg-gray- h-16 space-x-2 p-4 focus:outline-none mr-10"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-20"
              >
                {isLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 animate-spin h-5 w-5 mr-3"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                ) : (
                  "送信"
                )}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
