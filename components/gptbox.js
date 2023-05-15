import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import { useState, useEffect } from "react";

export function Gptbox() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSub = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const prompt = "愛 心 仲間　を使って文章を作ってください";
    const engine = "text-davinci-003";
    const maxTokens = 55;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    try {
      const { data } = await axios.post(
        "https://api.openai.com/v1/engines/" + engine + "/completions",
        {
          prompt,
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
      console.log(data);
      console.log(data.model);
      console.log(data.choices[0].text);
      console.log(data.choices[1]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <div className="border mx-auto   w-80 rounded-md bg-slate-100">
      <span>単語学習と組み合わせ</span>
      {messages.map((message, index) => (
        <div
          className={`flex ${
            message.sender === "user" ? "justify-end " : " justify-start"
          } p-2 rounded-lg`}
          key={index}
        >
          <div
            className={`${
              message.sender === "user" ? "bg-indig-200" : "bg-gray-200"
            } text-gray-800 text-sm  my-4 px-8 py-3`}
          >
            {message.text}
          </div>
        </div>
      ))}
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-y-scroll">
          <div className="flex flex-col space-y-2 items-start justify-end p-4">
            {/* チャットメッセージ */}
            {/* <div className="p-2 rounded-lg bg-gray-100 max-w-sm">
                <p className="text-gray-800 text-sm">こんにちは！</p>
              </div>
              <div className="p-2 rounded-lg bg-gray-100 max-w-sm">
                <p className="text-gray-800 text-sm">元気ですか？</p>
              </div>
              <div className="p-2 rounded-lg bg-gray-100 max-w-sm">
                <p className="text-gray-800 text-sm">私は元気です。</p>
              </div> */}
            {/* 送信フォーム */}
            <form
              className="flex items-center space-x-2 p-4 focus:outline-none"
              onSubmit={(e) => handleSub(e)}
            >
              <input
                className="flex-1 border rounded-full py-2 px-4 focus:outline-none"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="メッセージを入力してください"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                {isLoading ? "送信中..." : "送信"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
