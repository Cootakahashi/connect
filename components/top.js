import Image from "next/image";
import { useState } from "react";

export function Top() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="block md:hidden">
        {/* Logo and Hamburger Menu */}
        <div className="flex justify-between items-center px-4 py-2 fixed z-10 w-full">
          <div className="text-xl font-bold">
            {" "}
            <Image
              src="/logo/Dapper.png"
              width={100}
              height={100}
              // layout="fill"
              // objectFit="cover"
              alt="background image"
            />
          </div>
          <div></div>
        </div>

        {/* Hero Image */}
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
        <div className="hidden md:block col-span-2 col-start-1 row-start-1 ">
          <Image
            className=""
            src="/wide/1.png"
            width={1920}
            height={1080}
            alt="logo"
            priority
          />
        </div>
        <div className="md:hidden col-span-2 col-start-1 row-start-1 ">
          <Image
            className=""
            src="/responsive/9.png"
            width={1080}
            height={1920}
            alt="logo"
            priority
          />
        </div>
        <div className="col-span-1 col-start-2 row-start-1 text-slate-800 ml-10 pt-20">
          <div className="text-slate-800 flex">
            <span className="whitespace-nowrap flex">
              {" "}
              <p className="bg-red-700 h-6 w-1 mr-2"></p>
              AIと学ぶ
            </span>
          </div>
          <h1 className="text-4xl text-slate-800 font-semibold hidden md:block md:whitespace-normal md:text-slate-800">
            {`新しい学び方`}
          </h1>
          <h1 className="text-4xl md:text-3xl md:hidden leading-9 text-slate-800 whitespace-pre font-serif font-bold mt-20 md:font-semibold md:text-slate-100">
            {`英語で
          人生を変える`}
          </h1>
          <p className="hidden md:block whitespace-pre-line pt-5 ">{`リスニングの練習,英作文、単語の勉強、全てを効率的にこれからもっと必要になる英語を今一緒に！`}</p>
          {/* <p className="md:hidden whitespace-pre-line pt-5 text-slate-100 w-80 bg-black">
          <span className="font-semibold">中国語学習 </span>{" "}
          っててどうやればいい？0からでも大丈夫？{" "}
          <span className="font-semibold">台湾人</span>
          の優しい先生が丁寧に優しく教えてくれる{" "}
          <span className="font-semibold"> 無料イベント</span>
          もあるよ！
        </p> */}

          <div className="mt-40 md:mt-0btns pt-10 grid justify-start md:flex gap-4 bg-whit">
            <button className="whitespace-nowrap md:self-end bg-red-600 text-slate-100 border hover:bg-red-700 hover:border-blue-500 hover:scale-110 transiton-all duration-500 rounded-sm px-12 py-3 mb-3 md:mb-10  font-semibold">
              最新記事
            </button>
            <button className="md:self-end border rounded-sm px-8 py-3 mb-10 whitespace-nowrap font-semibold hover:scale-110 hover:border-blue-500 transiton-all duration-500">
              Online交流会に参加
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
