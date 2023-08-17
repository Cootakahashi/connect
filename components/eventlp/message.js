import Image from "next/image";
export function Message() {
  return (
    <div className="relative border-t mt-20 h-[1080px] md:h-[880px]">
      <div className="text-center text-3xl my-20">
        <h1>Message</h1>
        <h2 className="text-orange-500 my-10">強い志と世界への架け橋に</h2>
      </div>
      <div className="">
        <div className="relative h-[300px]">
          <div className="relative w-[350px] h-[250px] md:w-[610px] md:h-[350px] mx-auto z-20">
            <Image
              fill
              src="/wide/7.png"
              alt="logo"
              priority
              className="hidde"
            />
          </div>
          <div className="absolute top-full md:top-10 md:left-24 grid gap-3 font-semibold text-2xl md:text-3xl w-auto z-30 mx-5">
            <div>
              <span className="px-3 py-1 bg-black text-white w-auto text-xl font-light">
                Jon&Coo Message
              </span>
            </div>
            <div>
              <span className="px-3 py-1 bg-black text-white w-auto">
                実際に世界で通用する英語を
              </span>
            </div>

            <div>
              <span className="px-3 py-1 bg-black text-white w-auto">
                獲得すれば
              </span>
            </div>

            <div>
              <span className="px-3 py-1 bg-black text-white w-auto">
                グローバル人材になれる
              </span>
            </div>
            <div>
              <span className="px-3 py-1 bg-black text-white w-auto text-xl font-light">
                Jon&Coo.Ltd 最高技術責任者
              </span>
            </div>
            <div className="md:-translate-y-3">
              <span className="px-3 py-1 bg-black text-white w-auto text-xl font-light">
                Toko
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-md md:px-40 z-20 relative top-1/4 mx-5">
        <div>
          タイの島国プーケットで出会った私たちはお互いに自分探しをしていた。
          世界のあり方、日本の素晴らしさ、ノルウェーの最先端な価値観と行動にお互い感銘を受けた。
          日本を世界に、世界に日本を。私たちは大きな志と情熱をもってあなたとコミュニケーションをし
          一緒に成長し、世界をより良くしていきます。
        </div>
      </div>
      <div className="text-center text-3xl my-20 h-2/3 -translate-y-60 md:-translate-y-20 w-full z-0 bg-orange-100 opacity-70 absolute top-1/2"></div>
    </div>
  );
}
