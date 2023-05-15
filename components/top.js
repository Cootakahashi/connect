import Image from "next/image";
export function Top() {
  return (
    <div className="grid grid-cols-2 items-center">
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
            Chat GPTと学ぶ
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
  );
}
