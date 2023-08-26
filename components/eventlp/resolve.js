import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export function Resolve() {
  return (
    <>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.3}
          stroke="red"
          className="w-32 h-32 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="mx-2 md:mx-5 py-8 md:px-8 rounded-xl ">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl whitespace-pre-line">
            {`あなたの「なりたい」を実現できる\n`}
            <p className="text-orange-500 mt-5">3つの経験</p>
          </h1>
          <div className="bg-red-500 w-40 h-[2px] rounded mx-auto my-5 mb-10"></div>
        </div>

        <div className="md:flex md:justify-center md:gap-5 md:gap-y-3">
          <div className="items-center md:gap-8 mb-8 md:mb-auto">
            <div className="relative w-[320px] h-[260px] md:h-[210px] md:w-[350px] mx-auto">
              <Image
                className="rounded "
                src="/lpevent/tool/1.jpg"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="text-center text-orange-600 font-bold text-xl mt-5">
              AIを使った学習体験
            </div>
            <div className="text-center p-3">
              今の時代で学習効率の最大化を図ろうとするとAIを使うことは必須です
              どうやって使うかを知り、慣れていくことが出来ます
            </div>
          </div>
          <div className="items-center md:gap-8 mb-8 md:mb-auto">
            <div className="relative w-[320px] h-[260px] md:h-[210px] md:w-[350px] mx-auto">
              <Image
                className="rounded"
                src="/lpevent/tool/2.jpg"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="text-center text-orange-600 font-bold text-xl mt-5">
              事前に会話や質問のを準備できる
            </div>
            <div className="text-center p-3">
              回答を先に用意することで「自分の言いたい文章」で英語を学べます
              日本語ですら聞いたのない興味のない内容で勉強していてはいつまで経っても話せるようにはなりません
              AIで準備をすることで負担なく自分の表現を増やる
              準備こそが英語学習の鍵です
            </div>{" "}
          </div>

          <div className="items-center md:gap-8 mb-8 md:mb-auto">
            <div className="relative w-[320px] h-[260px] md:h-[210px] md:w-[350px] mx-auto">
              <Image
                className="rounded"
                src="/lpevent/tool/3.jpg"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="text-center text-orange-600 font-bold text-xl mt-5">
              仲間を作って一緒に学べる
            </div>
            <div className="text-center p-3">
              仲間作りは語学学習ではとても大切です
              英語学習の一番の難関は継続すること、仲間が出来れば自然と学習を楽しいまま続けていくことが出来ます
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="md:mt-10 md:mt-0 btns grid justify-center md:fle md:gap-">
        <div className="text-center border mx-2  pt-1 border-red-700 rounded">
          簡単30秒!予約まで2STEP!
        </div>
        <ScrollLink
          to="formSection"
          smooth={true}
          duration={500}
          className="relative"
        >
          <button className="shine-button whitespace-nowrap text-2xl md:self-end bg-orange-500 text-white md:font-semibold font-medium py-3 px-8 rounded-lg shadow-md md:hover:bg-orange-700 md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2 md:focus:ring-orange-500 transition duration-500 ease-in-out">
            Restart Onlineに参加する
          </button>
          <div className="absolute -top-1 left-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>

          {/* <div className="absolute -top-1 left-1/2 ">aa</div> */}
        </ScrollLink>
      </div>
    </>
  );
}
