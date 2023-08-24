import Image from "next/image";
export function Restart() {
  return (
    <div>
      <div className="text-center font-bold py-20 text-3xl">
        こんな悩みありませんか？
      </div>
      <div className="hidden md:block relative w-full h-[510px] md:w-[840px] mx-auto">
        <Image
          className="rounded "
          src="/lpcommunity/thinking/2.png"
          fill
          alt="logo"
          priority
        />
      </div>
      <div className="relative w-full h-[710px] w-[350px] md:w-[840px] mx-auto -translate-y-20">
        <Image
          className="rounded "
          src="/lpcommunity/thinking/2-res.png"
          fill
          alt="logo"
          priority
        />
      </div>

      <div className="bg-red-300 pt-20 relative z-20">
        <div className="relative bg-gray-100 mx-3 md:mx-20 rounded-xl py-20 z-2">
          <div className="absolute -top-[5px] -right-[5px] w-[40px] h-[40px] bg-blue-500 -z-10 rounded-tr-lg"></div>
          <div className="absolute -top-[5px] -left-[5px] w-[40px] h-[40px] bg-blue-500 -z-10 rounded-tl-lg"></div>
          <div className="absolute -bottom-[5px] -right-[5px] w-[40px] h-[40px] bg-blue-500 -z-10 rounded-br-lg"></div>
          <div className="absolute -bottom-[5px] -left-[5px] w-[40px] h-[40px] bg-blue-500 -z-10 rounded-bl-lg"></div>

          <div className="absolute left-1/4 md:left-1/2 ml-10 -bottom-5 w-32 h-32 bg-gray-100 transform -skew-y-12 -rotate-6  -z-10"></div>

          <h1 className="text-center text-4xl -translate-y-24 text-orange-500">
            RESTARTとは？
          </h1>
          <div className="bg-gray-200 mx-3 md:mx-20 py-5 px-3 my-2 shadow-xl md:flex">
            <div className="relative w-full h-[100px] w-[99px] md:w-[120px] mx-auto">
              <Image
                className="rounded-full"
                src="/lpcommunity/restart/3.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="px-2 my-5 text-xl">
              初心者向けのオンラインイベント初めAIを駆使した自分に合った学習法を編み出し楽しみながら語学学習ができるコミュニティです
            </div>
          </div>
          <div className="bg-gray-200 mx-2 md:mx-20 mt-5  py-5 px-3 shadow-xl md:flex items-center gap-5">
            <div className="relative w-full h-[100px] w-[99px] md:w-[100px] mx-auto">
              <Image
                className="rounded-full "
                src="/lpcommunity/restart/4.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="px-2 my-5 text-xl">
              オフラインイベントでは仲間と励ましあい共に切磋琢磨し成長し合える場所があります。
            </div>
          </div>
        </div>
        <div className="relative w-full h-[330px] md:w-[440px] mx-auto">
          <Image
            className="rounded "
            src="/lpcommunity/restart/2.png"
            fill
            alt="logo"
            priority
          />
        </div>
      </div>
    </div>
  );
}
