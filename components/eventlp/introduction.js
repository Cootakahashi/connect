import Image from "next/image";
export function Introduction() {
  return (
    <div className="bg-gray-300">
      <div className="border-b md:mx-20 mx-2">
        <div className="flag  flex justify-center items-center pt-10 md:pt-auto">
          <span className="whitespace-nowrap bg-yellow-500 font-bold px-3 md:py-2 text-xl md:text-3xl text-center text-white h-">
            人生を左右する英語学習
          </span>
          <div className="relative md:h-16 md:w-20 h-12 w-16">
            <Image
              className="rounded "
              src="/lpevent/online.jpg"
              fill
              alt="logo"
              priority
            />
          </div>
        </div>
        <div className="text-center text-3xl md:text-4xl font-extrabold my-8 tracking-wider">
          <div className="md:text-3xl text-2xl">
            そのオンライン英会話に任せて
          </div>{" "}
          <div className="text-5xl md:text-4xl mt-2 text-red-500">大丈夫?</div>
          <div className="bg-red-500 w-40 h-[2px] rounded mx-auto my-5"></div>
        </div>
        <div className="text-center text-2xl font-semibold">
          オンライン英会話を受けた人の
        </div>
        <div className="text-center text-3xl font-bold mb-5">
          よくある失敗談
        </div>
      </div>
      <div className="text-center my-10 mx-2 grid gap-5">
        <div>
          「最初は毎日レッスンを受けるつもりだったが、数週間でモチベーションが下がり、最終的には全くレッスンを受けなくなった。」{" "}
        </div>

        <div>
          「自分の間違いを恐れて発言することを避けてしまい、アクティブに会話に参加できなかった。」
        </div>
        <div>
          「ただ英語を話せるようになりたいと思って始めたが、具体的な目標がなかったため、進捗を感じることができずに挫折した。」{" "}
        </div>
        <div>
          「レッスンのたびに何を話すかを考えていなかったので、沈黙が多くなり、有意義な時間を過ごせなかった。」{" "}
        </div>
        <div className="relative h-[410px] w-[500px] mx-auto my-5 hidden md:block">
          <Image
            className="rounded "
            src="/lpevent/question.png"
            fill
            alt="logo"
            priority
          />
        </div>
        <div className="relative h-[550px] w-[350px] mx-auto mt-5 block md:hidden -translate-y-10 -mb-20">
          <Image
            className="rounded "
            src="/lpevent/question-res.png"
            fill
            alt="logo"
            priority
          />
        </div>
      </div>
      <div
        className="relative h-[1790px] md:h-[1550px] bg-cover bg-center text-white font-bold text-xl bg-custom-image md:bg-custom-image-md"
        // style={{ backgroundImage: "url(/lpevent/backscreen/3.jpg)" }}
      >
        {" "}
        <div className="absolute inset-0 bg-black opacity-50 "></div>{" "}
        {/* Optional: 透明度を加えてテキストを読みやすくする */}
        <div className="flex flex-col gap-3 relative z-10 text-center items-center h-ful pt-20 border-b-2 border-white mx-5 md:mx-20 pb-5">
          <div>継続するなら仲間、自分に合った最適な方法を身につけるならAI</div>
          <div className="text-orange-500 text-4xl">
            Restart Online <span className="text-2xl text-white">なら</span>
          </div>
          <div>両方できる</div>
        </div>{" "}
        <div className="relative z-10 text-center items-center h-ful pt-10 md:mx-20 mx-5 pb-5 grid gap-1">
          <div>完璧な文法は必要ない、会話を通して学んでく</div>
          <div className="mb-3">まずは言いたいことの台本を用意して話す</div>
          <div>単語も必要最低限で十分(ネイティブは1000単語で80%をカバー)</div>
          <div className="mb-3">塊で覚えて言えることをどんどん増やす</div>
          <div className="mb-3 text-red-500">ありがちなのは</div>
          <div className="whitespace-pre-line md:whitespace-normal">
            {`「TOEICで〇〇点とったら」
            「英検〇級合格してから」`}
          </div>
          <div className="my-3 whitespace-pre-line md:whitespace-normal">
            {`「文法を完璧にしてから」
            「単語を完璧にしてから」`}
          </div>{" "}
          <div className="mb-3">そんなこと言ってたら人生が終わります</div>
          <div>
            まずは試す、お金もかからない。文の作り方が分からないならAIを使う
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md md:w-96 my-5 mx-auto">
            <div className="flex items-center mb-3">
              <span className="text-orange-500 text-2xl">✔</span>
              <p className="ml-3 text-slate-900">AIを使った事前準備ができる</p>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-orange-500 text-2xl">✔</span>
              <p className="ml-3 text-slate-900">
                事前に質問の内容を確認できる
              </p>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-orange-500 text-2xl">✔</span>
              <p className="ml-3 text-slate-900">遊び感覚で学べる</p>
            </div>
            <div className="flex items-center">
              <span className="text-orange-500 text-2xl">✔</span>
              <p className="ml-3 text-slate-900">挑戦する仲間に出会える</p>
            </div>
          </div>
          <div>
            <div className="text-orange-500 text-3xl mb-3">
              なぜ無料で開催してるの？
            </div>
            <div>それは私たちにはビジョンがあるから</div>{" "}
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md md:w-96 my-5 mx-auto">
            <div className="flex items-center mb-3">
              <span className="text-orange-500 text-2xl">・</span>
              <p className="ml-3 text-black">謙虚な日本の心を世界に伝える</p>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-orange-500 text-2xl">・</span>
              <p className="ml-3 text-black">最先端の技術で業界に稲妻を</p>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-orange-500 text-2xl">・</span>
              <p className="ml-3 text-black">みんなで学べば楽しい</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>英語が喋れるようになるのは</div>

            <div>決して簡単じゃない</div>
            <div>3ヶ月でペラペラになったりしないし</div>
            <div>会話をしないで喋れるようになったりもしない</div>

            <div>でも「やり直したい。」「変わりたい。」</div>
            <div>もしそう思うなら再出発できる</div>
            <div>今がその時、待ってても絶対変わらない</div>

            <div>
              さあ、一緒に
              <span className="text-orange-500 text-3xl">RESTART</span>しよう
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
