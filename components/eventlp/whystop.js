import Image from "next/image";
import Link from "next/link";
export function Whystop() {
  return (
    <>
      <div className="mt-20  mx-5 py-8 px-8 rounded-t-lg bg-gray-100 text-center">
        <div className="py-3">
          <h1 className="font-bold text-3xl md:text-3xl">
            英語学習と独学しようとしても約90%は挫折します
          </h1>
          <div className=" w-20 h-1 rounded mx-auto my-5">なぜか?</div>
        </div>
        <div className="grid md:flex gap-3 md:gap-8 justify-center">
          <div className="flex items-center gap-8 border border-2 md:border-4 rounded-2xl px-10 py-5 border-gray-500">
            <div>超初心者でも安心</div>
          </div>
          <div className="flex items-center gap-8 border border-2 md:border-4 rounded-2xl px-10 py-5 border-gray-500">
            <div>超初心者でも安心</div>
          </div>

          <div className="flex items-center gap-8 border border-2 md:border-4 rounded-2xl px-10 py-5 border-gray-500">
            <div>超初心者でも安心</div>
          </div>
        </div>
        <div className=" w- h- rounded mx-auto my-5">
          などの理由があります。 でも、Restart
          Onlineなら無料で楽しく参加することができます
        </div>
        <div className="font-bold text-3xl md:text-3xl z-50">
          楽しく学べれば
          <span className="underline-effect relative inline-block mb-1 z-30">
            <span className="text-red-500">無理なく継続</span>
            していけます
          </span>
        </div>
      </div>
    </>
  );
}
