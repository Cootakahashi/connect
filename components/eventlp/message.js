import Image from "next/image";
import Head from "next/head";
export function Message() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative border-t mt-20 h-[1280px] md:h-[880px]">
        <div className="text-center text-3xl my-20 font-seri	">
          <h1 className="text-5xl">Message</h1>
          <h2 className="text-orange-500 my-5">日本と世界の架け橋に</h2>
        </div>
        <div className="">
          <div className="relative h-[300px]">
            <div className="relative w-[350px] h-[250px] md:w-[610px] md:h-[350px] mx-auto z-20">
              <Image
                fill
                src="/member/5.jpg"
                alt="logo"
                priority
                className="hidde"
              />
            </div>
            <div className="absolute top-full md:top-10 md:left-12 grid gap-3 font-semibold text-2xl md:text-3xl w-auto z-30 mx-5">
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
                  Jon&Coo.Ltd 最高経営責任者
                </span>
              </div>
              <div className="md:-translate-y-3">
                <span className="px-3 py-1 bg-black text-white w-auto text-xl font-light">
                  こと
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-md md:px-40 z-20 relative top-1/4 md:top-20 mx-5">
          <div className="hidden md:block relative w-[790px] h-[480px] mx-auto">
            <Image src={"/lpevent/letter/4.jpg"} fill priority alt="letter" />
          </div>
          <div className=" md:hidden relative w-[350px] h-[580px] mx-auto -translate-y-20">
            <Image src={"/lpevent/letter/3.jpg"} fill priority alt="letter" />
          </div>
        </div>
        <div className="text-center text-3xl my-20 h-4/5 -translate-y-80 md:-translate-y-20 w-full z-0 bg-orange-100 opacity-70 absolute top-1/2"></div>
      </div>
    </>
  );
}
