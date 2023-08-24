import Image from "next/image";
export function Step() {
  return (
    <div className="pt-10 bg-gray-300 h-[1500px] md:h-[650px] text-center">
      <div className="mx-auto mb-20 text-3xl text-orange-500 font-bold">
        Restart Online <span className="text-slate-900">参加手順</span>
        <div className="bg-red-500 w-40 h-[2px] rounded mx-auto my-5"></div>
      </div>
      <div className="md:flex justify-center gap-5 grid">
        <div className="flex flex-col text-center bg-white h-[400px] rounded-xl w-[320px]">
          <h2 className="bg-orange-500 rounded-full py-2 w-2/3 mx-auto text-white -translate-y-5">
            STEP <span className="text-2xl">01</span>
          </h2>
          <div className="relative h-[200px] w-[200px] mx-auto md:mx-auto">
            <Image
              className="rounded "
              src="/lpcommunity/step/1.png"
              fill
              alt="logo"
              priority
            />
          </div>
          <div className="text-orange-500 font-bold text-xl">
            参加フォーム送信
          </div>
          <div className="p-2">
            参加ボタンを押して名前とEmailの簡単記入だけでOK!
          </div>
        </div>
        <div className="flex flex-col text-center bg-white h-[400px] rounded-xl w-[320px]">
          <h2 className="bg-orange-500 rounded-full py-2 w-2/3 mx-auto text-white -translate-y-5">
            STEP <span className="text-2xl">02</span>
          </h2>{" "}
          <div className="relative h-[200px] w-[200px] mx-auto">
            <Image
              className="rounded "
              src="/lpcommunity/step/2.png"
              fill
              alt="logo"
              priority
            />
          </div>
          <div className="text-orange-500 font-bold text-xl">リンク確認</div>
          <div className="p-2">
            受信した参加Linkと詳細をを確認しChatGPTで喋る言葉を準備しましょう
          </div>
        </div>
        <div className="flex flex-col text-center bg-white h-[400px] rounded-xl w-[320px]">
          <h2 className="bg-orange-500 rounded-full py-2 w-2/3 mx-auto text-white -translate-y-5">
            STEP <span className="text-2xl">03</span>
          </h2>{" "}
          <div className="relative h-[200px] w-[200px] mx-auto">
            <Image
              className="rounded "
              src="/lpcommunity/step/online.png"
              fill
              alt="logo"
              priority
            />
          </div>
          <div className="text-orange-500 font-bold text-xl">
            GROUP オンライン英会話
          </div>
          <div className="p-2">
            さあ新しい１日の始まり、実際に用意した英語が通用するか試してみよう！
            次回の参加も無料で楽々予約。
          </div>
        </div>
      </div>
    </div>
  );
}
