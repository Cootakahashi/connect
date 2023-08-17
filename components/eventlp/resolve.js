import Image from "next/image";
import Link from "next/link";
export function Resolve() {
  return (
    <>
      <div className=" mx-5 py-8 px-8 rounded-xl bg-gray-200 text-center">
        <div className="py-3">
          <h1 className="font-bold text-3xl md:text-4xl">
            こんなこと思ったことはありませんか？
          </h1>
          <div className="bg-red-700 w-20 h-1 rounded mx-auto my-5"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-y-3 md:gap-y-3 ">
          <div className="flex items-center gap-8">
            <div className="relative h-16 w-16 md:h-24 md:w-24">
              <Image
                className="rounded"
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div>超初心者でも安心</div>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative h-16 w-16 md:h-24 md:w-24">
              <Image
                className="rounded"
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div>超初心者でも安心</div>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative h-16 w-16 md:h-24 md:w-24">
              <Image
                className="rounded"
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div>超初心者でも安心</div>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative h-16 w-16 md:h-24 md:w-24">
              <Image
                className="rounded"
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div>超初心者でも安心</div>
          </div>
        </div>
      </div>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.3}
          stroke="red"
          className="w-32 h-32 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="mx-2 md:mx-5 py-8 md:px-8 rounded-xl ">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl whitespace-pre-line">
            {`あなたの「なりたい」を実現できる\n 人気な3つの手段`}
          </h1>
          <div className="bg-red-700 w-20 h-1 rounded mx-auto my-5"></div>
        </div>

        <div className="md:flex md:justify-center md:gap-20 md:gap-y-3">
          <div className="items-center md:gap-8 mb-8 md:mb-auto">
            <div className="relative w-[340px] h-[260px] md:h-40 md:w-60 mx-auto">
              <Image
                className="rounded "
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="text-center text-red-700 font-bold text-xl mt-5">
              超初心者でも安心
            </div>
            <div className="text-center font-bold">超初心者でも安心</div>
          </div>
          <div className="items-center md:gap-8 mb-8 md:mb-auto">
            <div className="relative w-[340px] h-[260px] md:h-40 md:w-60 mx-auto">
              <Image
                className="rounded"
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="text-center text-red-700 font-bold text-xl mt-5">
              超初心者でも安心
            </div>
            <div className="text-center font-bold">超初心者でも安心</div>{" "}
          </div>

          <div className="items-center md:gap-8 mb-8 md:mb-auto">
            <div className="relative w-[340px] h-[260px] md:h-40 md:w-60 mx-auto">
              <Image
                className="rounded"
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="text-center text-red-700 font-bold text-xl mt-5">
              超初心者でも安心
            </div>
            <div className="text-center font-bold">超初心者でも安心</div>{" "}
          </div>
        </div>
      </div>
      <div className="md:mt-10 md:mt-0 btns grid justify-center md:fle md:gap-">
        <div className="text-center border mx-2  pt-1 border-red-700 rounded">
          簡単30秒!予約まで2STEP!
        </div>
        <Link href="/events" className="relative ">
          <button className="shine-button whitespace-nowrap text-2xl md:self-end bg-orange-500 text-white md:font-semibold font-medium py-3 px-8 rounded-lg shadow-md md:hover:bg-orange-700 md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2 md:focus:ring-orange-500 transition duration-500 ease-in-out">
            Restart Onlineに参加する
          </button>
          <div className="absolute -top-1 left-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>

          {/* <div className="absolute -top-1 left-1/2 ">aa</div> */}
        </Link>
      </div>
    </>
  );
}
