import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export function Top({ newestBlog }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="block md:hidden">
        <div className="relative h-[500px] md:h-[700px]">
          <Image
            src="/responsive/9.png"
            layout="fill"
            objectFit="cover"
            alt="background image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center space-y-4 ">
            <div className="-translate-y-24">
              <div className="text-center bg-slate-100 text-red-600 px-1 py-[1px] rounded-l shadow mx-3">
                「このまま終われないと思う」
                <span className="text-slate-800">あなたへ</span>
              </div>
              <div className="text-slate-800 text-xl font-bold text-center translate-y-10">
                もう
                <span className="text-slate-100 text-3xl">英語</span>
                で時間を無駄にしない
              </div>
              <div className="text-center translate-y-16">
                <div
                  className={`transform -skew-x-6 bg-slate-800 inline-block mb-1 `}
                >
                  <p
                    className={`text-white text-2xl px-4 font-semibold font-suns my-1 transform skew-x-6`}
                  >
                    第二言語習得論とAIを使う
                  </p>
                </div>
                <div
                  className={`transform -skew-x-6 bg-slate-800 inline-block`}
                >
                  <p
                    className={`text-white text-2xl px-4 font-semibold font-suns my-1 transform skew-x-6`}
                  >
                    語学コミュニティ
                  </p>
                </div>
              </div>
              {/* <button className="mt-4 px-8 py-2 bg-blue-500 text-white rounded-full shadow-lg">
                Click me
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:grid  grid-cols-2 items-center">
        <div className="hidden md:block relative col-span-2 col-start-1 row-start-1">
          <Image
            className=""
            src="/wide/7.png"
            width={1920}
            height={1080}
            alt="logo"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-30"></div>
        </div>

        <div className="col-span-full col-start-1 row-start-1 text-slate-800 ml-10 mt-20 z-20">
          <h1 className="text-4xl text-slate-100 font-semibold hidden md:block md:text-slate-100 whitespace-pre-line w-3/5 tracking-wide	leading-normal	">
            {`RESTART\n第二言語習得論とAIで \n 喋れる英語を\n 実践、効率的に学べる`}
          </h1>
          <p className="hidden md:block whitespace-pre-line pt-5 text-slate-100 font-semibold text-xl">
            {`喋れない自分とはお別れ、もう時間もお金も無駄にしない。\n 無料英会話EVENTも毎週開催！`}
          </p>

          <div className="mt-10 md:mt-0btns pt- grid justify-start md:flex gap-8 bg-whit">
            <button className="whitespace-nowrap md:self-end bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 ease-in-out">
              無料英会話EVENT
            </button>
            <Link
              href={`/blog/${
                newestBlog.category.name === "Phrasal verb" ? "idioms/" : ""
              } ${newestBlog?.id}`}
            >
              <button className="whitespace-nowrap md:self-end bg-blue-500 text-white font-semibold py-3 px-8 border border-blue-700 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-500 ease-in-out">
                最新記事
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
