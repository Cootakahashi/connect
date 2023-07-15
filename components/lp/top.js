import Image from "next/legacy/image";
import heroImage from "../../public/wide/4.png"; // あなたのヒーローイメージへのパスを適切に置き換えてください。

export default function Top() {
  return (
    <div className="relative h-[500px] sm:h-[600px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]">
      <Image src={heroImage} height={800} wight={500} className="ml-auto" />
      <div className="absolute top-20 w-full left-20  ">
        <p className="font-bold text-[200px] text-orange-400 textfont tracking-wide">
          RESTART
        </p>
        <p className="font- text-xl text-[50px] text-slate-800 textfont -translate-y-20 w-[500px] mt-20">
          AIは24/7学習サポートを提供、個々のレベルや進行に合わせてカスタマイズ可能、瞬時にフィードバックを得ることができます。
        </p>
      </div>
      {/* <div className="absolute top-1/2 w-full text-center">
          <button className="text-sm sm:text-base text-white bg-orange-500 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            参加する
          </button>
        </div> */}
      <div className="absolute top-1/2 left-48 w-full text-center">
        <div className=" relative -left-[200px] top-52">
          <h1 className="text-orange-400 text-5xl textfont ml-[555px] ">
            {" "}
            ABOUT
          </h1>

          <div className="m-auto">
            <Image
              src="/canva/11.png"
              height={450}
              width={450}
              className="absolute z-10 left-40 -top-20"
            />
            <div className="z-20 absolut  p-1 top-20 ml-[500px] mt-10 engfont">
              Let's find out new you together
            </div>
            <div className="z-20 absolute w-[555px] japanfon bg-slate-10 p-1 top-40 left-80 ml-80">
              日本生まれの旅好きプログラマーTokoと元サッカー選手のノルウェー人Jonによる、
              スピーキングと楽しむための英語コミュニティGOGAKUにようこそ喋れるようになる、世界に出て活躍する、日本を世界へをコンセプトに多言語交流。学歴、実力は一切関係ない人生を楽しみたい人のためのコミュニティ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
