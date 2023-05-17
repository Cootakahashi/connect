import { ArrowRight } from "@heroicons/react/solid"; // For solid icons in v2
import Image from "next/image";
export default function Why() {
  return (
    <>
      <div className="text-center bg-slate-100 w-[900px] mx-auto -translate-y-20">
        <h1 className="font-bold text-center text-3xl p-20">
          なぜ日本人は英語が喋れないのか？
          第二言語習得論を活用すれば私たちの未来も変わる
        </h1>
        <p className="text-center w-[555px] mx-auto">
          日本語と英語は文法的に大きく異なります。また、日本の学校教育では一般的に読み書きに重点が置かれ、
          会話スキルの訓練が不足しています。さらに、日本社会での英語使用の機会は限られており、実際のコミュニケーションにおいて英語を使う練習が少ないのも一因です。
        </p>
        <button className="my-20 mx-auto flex justify-center items-center bg-gray-500 w-80 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center transition-all duration-200 transform hover:translate-x-1">
          詳しく見る{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-8 mt-2 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center">
        <div className="ml-auto">
          <div className="h-0.5 w-12 bg-black mb-2"></div>
          <h4 className="text-gray-500 mb-2">サブタイトル</h4>
          <h2 className="text-3xl mb-2">タイトル</h2>
          <p className="mb-4">
            これは本文の最初の行です。これは本文の二行目です。
          </p>
          <p className="mb-4">これは本文の三行目です。</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-all duration-200 transform hover:translate-x-1">
            詳しく見る{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-8 mt-2 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <Image
          src="/canva/1.png"
          height={450}
          width={450}
          className="ml-auto"
        />
      </div>
      <div className="flex items-center">
        <Image
          src="/canva/1.png"
          height={450}
          width={450}
          className="mr-auto"
        />
        <div className="mr-auto">
          <div className="h-0.5 w-12 bg-black mb-2"></div>
          <h4 className="text-gray-500 mb-2">サブタイトル</h4>
          <h2 className="text-3xl mb-2">タイトル</h2>
          <p className="mb-4">
            これは本文の最初の行です。これは本文の二行目です。
          </p>
          <p className="mb-4">これは本文の三行目です。</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-all duration-200 transform hover:translate-x-1">
            詳しく見る{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-8 mt-2 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-auto">
          <div className="h-0.5 w-12 bg-black mb-2"></div>
          <h4 className="text-gray-500 mb-2">サブタイトル</h4>
          <h2 className="text-3xl mb-2">タイトル</h2>
          <p className="mb-4">
            これは本文の最初の行です。これは本文の二行目です。
          </p>
          <p className="mb-4">これは本文の三行目です。</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-all duration-200 transform hover:translate-x-1">
            詳しく見る{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-8 mt-2 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <Image
          src="/canva/22.png"
          height={450}
          width={450}
          className="ml-auto"
        />
      </div>
    </>
  );
}
