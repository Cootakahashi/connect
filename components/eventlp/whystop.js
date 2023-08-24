import Image from "next/image";
import Link from "next/link";
export function Whystop() {
  return (
    <>
      <div className="mt-20  mx-5 py-8 px-8 rounded-t-lg bg-gray-100 text-center">
        <div className="py-3">
          <h1 className="font-bold text-3xl md:text-3xl">
            英語学習に課金して独学しようとしてる
            <span className="text-red-500">約92%</span>は挫折しています
            <p className="text-sm opacity-30 md:text-right mt-2 font-light">
              引用調査機関 スピークバディURL：https://www.speakbuddy.jp/
            </p>
          </h1>
          <div className=" w-20 h-1 rounded mx-auto my-5">なぜか?</div>
        </div>
        <div className="grid md:flex gap-3 md:gap-8 justify-center">
          <div className="flex items-center gap-8 border border-2 md:border-4 rounded-2xl px-10 py-5 border-gray-500">
            <div>モチベが続かない</div>
          </div>
          <div className="flex items-center gap-8 border border-2 md:border-4 rounded-2xl px-10 py-5 border-gray-500">
            <div>成長の実感を感じれない</div>
          </div>

          <div className="flex items-center gap-8 border border-2 md:border-4 rounded-2xl px-10 py-5 border-gray-500">
            <div>何を喋ってるか分からない</div>
          </div>
        </div>
        <div className=" w- h- rounded mx-auto my-5">
          などの理由があります。 でも、Restart
          Onlineなら事前準備ができるし無料で楽しく参加することができます
        </div>
        <div className="font-bold text-3xl md:text-3xl z-50">
          楽しく学べれば
          <span className="underline-effect relative inline-block mb-1 z-30">
            <span className="text-red-500">挫折せず無理なく継続</span>
            していけます
          </span>
        </div>
      </div>
    </>
  );
}
