import Image from "next/legacy/image";
import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export function Top({ newestBlog }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="block md:hidden">
        <div className="relative h-[500px] md:h-[700px] ">
          <Image
            src="/lpevent/top-res/4.jpg"
            layout="fill"
            objectFit="cover"
            alt="background image"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center space-y-4 ">
            <div className="">
              <div className="mx-auto px-3 text-xl flex justify-center w-60 text-center bg-slate-100 text-orange-600 px-1 py-[1px] rounded-l shadow mx-3 -translate-y-4">
                毎週2回無料で開催！
              </div>
              <div className="text-slate-100 text-2xl font-bold text-center translate-y-10 whitespace-nowrap">
                もう
                <span className="text-orange-500 text-3xl">英語</span>
                で時間を無駄にしない
              </div>
              <div className="text-center translate-y-16">
                <div
                  className={`transform -skew-x-6 bg-slate-800 inline-block mb-1 `}
                >
                  <p
                    className={`text-white text-2xl px-4 font-semibold font-suns my-1 transform skew-x-6`}
                  >
                    超初心者のためのAIを使った
                  </p>
                </div>
                <div
                  className={`transform -skew-x-6 bg-slate-800 inline-block`}
                >
                  <p
                    className={`text-white text-2xl px-4 font-semibold font-suns my-1 transform skew-x-6`}
                  >
                    グループオンライン英会話
                  </p>
                </div>
                <div className="font-light text-base flex justify-center w-ful text-center bg-slate-10 text-slate-900 px- py-[1px] rounded-l shadow mx-3 translate-y-10">
                  ※定員には限りがあります
                </div>
              </div>
            </div>
            <div className="md:mt-10 md:mt-0 btns grid justify-center md:fle md:gap- fixed bottom-5 left-1/2 right-1/2 z-40">
              <ScrollLink to="formSection" smooth={true} duration={500}>
                <button className="shine-button whitespace-nowrap text-xl md:self-end bg-orange-500 text-white md:font-semibold font-medium py-3 px-8 rounded-full shadow-md md:hover:bg-orange-700 md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2 md:focus:ring-orange-500 transition duration-500 ease-in-out">
                  <p className="text-sm">簡単2ステップで!</p>
                  Restart Onlineに参加する
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:grid  grid-cols-2 items-center">
        <div className="hidden md:block relative col-span-2 col-start-1 row-start-1">
          <Image
            className=""
            src="/lpevent/top/1.jpg"
            width={1920}
            height={1080}
            alt="logo"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-30"></div>
        </div>
        <div className="absolute z-50 top-40 ml-10 bg-white text-orange-500 px-5 py-1 font-bold text-2xl">
          週2回無料で開催!
        </div>

        <div className="col-span-full col-start-1 row-start-1 text-slate-800 ml-10 mt-20 z-20">
          <div
            className={`transform -skew-x-6 bg-slate-800 inline-bloc w-[480px] mb-1 py-1 `}
          >
            <p
              className={`text-white whitespace-nowrap text-2xl px-4 font-semibold font-suns my-1 transform skew-x-6 text-4xl`}
            >
              超初心者のためのAIを使った
            </p>
          </div>
          <div className={`transform -skew-x-6 bg-slate-800 inline-block`}>
            <p
              className={`text-white whitespace-nowrap text-2xl px-4 font-semibold font-suns my-2 transform skew-x-6 text-4xl py-1`}
            >
              グループオンライン英会話
            </p>
          </div>

          <h1 className="text-4xl text-slate-100 font-semibold hidden md:block md:text-slate-100 whitespace-pre-line w-3/5 tracking-wide	leading-normal	"></h1>
          <p className="hidden md:block whitespace-pre-line pt-5 text-orange-500 text-white font-semibold text-xl">
            {`継続に不安なあなたも、仲間ができるから挫折しずらい`}
          </p>
          <p className="hidden md:block whitespace-pre-line pt-10 text-white font-light text-base">
            ※定員には限りがあります
          </p>

          <div className="mt-5 md:mt-0btns pt- grid justify-start md:flex gap-8 bg-whit">
            <ScrollLink to="formSection" smooth={true} duration={500}>
              <button className="whitespace-nowrap md:self-end bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md md:hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 ease-in-out">
                Restart Onlineに参加する
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}
