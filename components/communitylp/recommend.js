import Image from "next/image";
export function Recommend() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="bg-red-600 w-60 h-[1px] rounded mx-auto "></div>

      <div className="bg-red-600 w-20 h-1 rounded mx-auto mb-5"></div>
      <div className="text-2xl md:text-5xl font-bold text-center my-10">
        Restartはこんな人におすすめです
        {/* <div className="bg-red-200 w-[800px] h-[2px] rounded mx-auto mt-8"></div> */}
      </div>
      <div className="grid justify-center mx-3 md:mx-0 md:w-[800px] gap-3 font-light">
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-12 h-12 flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl ">
            英語の勉強を始めたいけど何から始めたらいいか分からない
          </p>
        </div>
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-12 h-12 flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl">
            一人じゃ勉強が続かないので、仲間と一緒に勉強したい
          </p>
        </div>{" "}
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-12 h-12 flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl">
            実際に英語を使える環境にどんどん行ってみたい
          </p>
        </div>{" "}
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-12 h-12 flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl">
            一緒に海外に行けるような仲間が欲しい
          </p>
        </div>{" "}
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-12 h-12 flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl">英語で人生を変えたい</p>
        </div>
        <div className="flex items-center mb-3">
          <span className="text-orange-500 bg-orange-200 text-2xl border w-12 h-12 flex justify-center items-center">
            ✔
          </span>
          <p className="ml-3 text-slate-900 text-xl">
            AIや最新の技術や知見を使った学習方法を試してみたい
          </p>
        </div>
      </div>
    </div>
  );
}
