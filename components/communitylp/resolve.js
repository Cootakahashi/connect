import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export function Resolve() {
  return (
    <>
      <div className="mx-2 md:mx-16 py-8 md:px-8 rounded-xl  bg-white -translate-y-">
        <div className="text-center">
          <div className="bg-red-600 w-60 h-[1px] rounded mx-auto "></div>

          <div className="bg-red-600 w-20 h-1 rounded mx-auto mb-5"></div>

          <h1 className="font-bold text-3xl md:text-4xl whitespace-pre-line mb-8">
            {`Restartの3つの強み`}
          </h1>
        </div>

        <div className="md:flex md:justify-center md:gap-5 md:gap-y-3">
          <div className="items-center md:gap-8 mb-8 md:mb-auto">
            <div className="mx-auto w-[250px] h-[250px] bg-orange-200 rounded-full flex items-center justify-center flex-col space-y-3 mt-10 px-2">
              <div className="text-center text-slate-100 font-bold text-5xl">
                01{" "}
              </div>
              <div className="text-center text-red-700 font-bold text-xl mt-5">
                AIと第二言語習得論を用いた最新かつ楽しいアクティブラーニング
              </div>
            </div>
          </div>
          <div className="items-center md:gap-8 mb-8 md:mb-auto">
            <div className="mx-auto w-[250px] h-[250px] bg-orange-200 rounded-full relativ flex items-center justify-center flex-col space-y-3 mt-10 px-2">
              <div className="text-center text-slate-100 font-bold text-5xl">
                02{" "}
              </div>
              <div className="text-center text-red-700 font-bold text-xl mt-5">
                運営人の世界中の英語話者との繋がり
              </div>
            </div>
          </div>

          <div className="items-center md:gap-8 mb-8 md:mb-auto">
            <div className="mx-auto w-[250px] h-[250px] bg-orange-200 rounded-full relativ flex items-center justify-center flex-col space-y-3 mt-10 px-2">
              <div className="text-center text-slate-100 font-bold text-5xl">
                03{" "}
              </div>
              <div className="text-center text-red-700 font-bold text-xl mt-5">
                会話ベースのオフラインとオンライン両方でのコミュニティ活動
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-10 md:mt-0 btns grid justify-center md:fle md:gap-">
        <div className="text-center border mx-2  pt-1 border-red-700 rounded">
          簡単30秒!予約まで2STEP!
        </div>
        <ScrollLink to="formSection" smooth={true} duration={500}>
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
