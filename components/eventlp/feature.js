import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export function Feature() {
  return (
    <div>
      <div className="mx-2 md:mx-5 py-8 md:px-8 rounded-xl ">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl whitespace-pre-line">
            {`Restart Onlineに参加すると得られる\n `}
            <p className="text-orange-500 mt-5">3つのメリット</p>
          </h1>
          <div className="bg-red-500 w-40 h-[2px] rounded mx-auto my-5"></div>
        </div>

        <div className="grid gap-y-10 mt-10">
          <div className="md:flex justify-center gap-5 mx-3">
            <div className="relative w-full h-[200px] md:w-[300px]">
              <Image
                className="rounded "
                src="/lpevent/feature/4.jpg"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="md:w-[500px] w-full">
              <div className="text-orange-600 font-bold text-xl mt-5">
                無料で英語を試せる
              </div>
              <div className="font-bold">ビジョン主体のイベントモデル</div>
              <div className="relative h-12">
                <div className="absolute top-0 bg-red-100 w-full h-[3px] rounded my-5"></div>
                <div className="absolute top-0 bg-red-500 w-40 h-[3px] rounded my-5"></div>
              </div>

              <div>
                私たちのビジョンは日本人と効率的な英語学習をし、世界に羽ばたき
                日本の心を世界に伝えることです。だからこそ入り口を広め多くの人と出会い、楽しみながら学びます。
                Restart Onlineはコミュニティ主体のオンライングループ英会話です。
                海外では有名な第二言語習得論や最新のAIの使い方を共有していきます。
              </div>
            </div>
          </div>

          <div className="md:flex justify-center gap-5 mx-3">
            <div className="relative w-full h-[200px] md:w-[300px]">
              <Image
                className="rounded "
                src="/lpevent/feature/5.jpg"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="md:w-[500px] w-[300px]">
              <div className="text-orange-600 font-bold text-xl mt-5">
                英語学習初心者や中級者の仲間ができる
              </div>
              <div className="font-bold">だから安心して気軽に英語を試せる</div>
              <div className="relative h-12">
                <div className="absolute top-0 bg-red-100 w-full h-[3px] rounded my-5"></div>
                <div className="absolute top-0 bg-red-500 w-40 h-[3px] rounded my-5"></div>
              </div>

              <div>
                日本語ですら聞いたことも見たこともない、シチュエーションを想定して興味のない内容で勉強していてはいつまで経っても話せるようにはなりません。
                何を質問されるのか、なんて答えたいのか。それらをAIを使って準備をすることでより負担なく自分の表現を増やしていけるのです。準備こそが英語学習の鍵です。
              </div>
            </div>
          </div>

          <div className="md:flex justify-center gap-5 mx-3">
            <div className="relative w-full h-[200px] md:w-[300px]">
              <Image
                className="rounded "
                src="/lpevent/feature/6.jpg"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="md:w-[500px] w-full">
              <div className="text-orange-600 font-bold text-xl mt-5">
                RestartOnlineに参加した方はコミュニティにも参加できる
              </div>
              <div className="font-bold">
                具体的な計画を一緒にたて世界に進出しましょう
              </div>
              <div className="relative h-12">
                <div className="absolute top-0 bg-red-100 w-full h-[3px] rounded my-5"></div>
                <div className="absolute top-0 bg-red-500 w-40 h-[3px] rounded my-5"></div>
              </div>

              <div>
                Restartは英語学習をメインとしたコミュニティです。Restartの海外拠点に遊びに行ったり、オフラインイベントにも参加することができます。世界にいき多くの文化や価値観に触れると日本の素晴らしさにも気づくことができます。
              </div>
            </div>
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
        </ScrollLink>
      </div>
    </div>
  );
}
