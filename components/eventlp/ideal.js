import Image from "next/image";
export function Ideal() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-2xl md:text-4xl font-bold text-center my-10">
        こんな人に <span className="text-orange-500">おすすめ</span>
      </div>
      <div className="bg-red-500 w-40 h-[2px] rounded mx-auto my-5"></div>

      <div className="grid justify-center  md:mx-0 md:w-full gap-3 font-light mt-10">
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-[40px] h-[40px] flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl w-full">
            楽しく英語学習の成長を実感したい
          </p>
        </div>
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-[40px] h-[40px] flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl w-full">
            自信を持って人と会話できるようになりたい
          </p>
        </div>{" "}
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-[40px] h-[40px] flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl w-full">
            仕事もプライベートも充実させたい
          </p>
        </div>{" "}
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-[40px] h-[40px] flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl w-full">
            挑戦する仲間と高めあいたい
          </p>
        </div>
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-[40px] h-[40px] flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl w-full">
            海外を自由に行き来するグローバル人材になりたい
          </p>
        </div>
      </div>
    </div>
  );
}
