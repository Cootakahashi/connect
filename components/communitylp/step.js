import Image from "next/image";
export function Step() {
  return (
    <div className="pt-10 bg-gray-300 h-[2500px] md:h-[1250px]">
      <div className="md:flex justify-center gap-5 grid">
        <div className="flex flex-col text-center bg-white md:h-[400px] rounded-xl">
          <h2 className="bg-orange-500 rounded-full py-2 w-2/3 mx-auto text-white -translate-y-5">
            STEP <span className="text-2xl">01</span>
          </h2>
          <div className="relative h-[200px] w-[200px] mx-auto md:mx-auto">
            <Image
              className="rounded "
              src="/lpcommunity/step/meeting.png"
              fill
              alt="logo"
              priority
            />
          </div>
          <div className="text-orange-500 font-bold text-xl">
            1対1カウンセリング
          </div>
          <div>まずは自分の目標を定めます</div>
        </div>
        <div className="flex flex-col text-center bg-white h-[400px] rounded-xl">
          <h2 className="bg-orange-500 rounded-full py-2 w-2/3 mx-auto text-white -translate-y-5">
            STEP <span className="text-2xl">02</span>
          </h2>{" "}
          <div className="relative h-[200px] w-[200px]">
            <Image
              className="rounded "
              src="/lpcommunity/step/booking.png"
              fill
              alt="logo"
              priority
            />
          </div>
          <div className="text-orange-500 font-bold text-xl">
            Groupオンライン予約
          </div>
          <div>まずは自分の目標を定めます</div>
        </div>
        <div className="flex flex-col text-center bg-white h-[400px] rounded-xl">
          <h2 className="bg-orange-500 rounded-full py-2 w-2/3 mx-auto text-white -translate-y-5">
            STEP <span className="text-2xl">03</span>
          </h2>{" "}
          <div className="relative h-[200px] w-[200px]">
            <Image
              className="rounded "
              src="/lpcommunity/step/online.png"
              fill
              alt="logo"
              priority
            />
          </div>
          <div className="text-orange-500 font-bold text-xl">
            GROUP オンラインレッスン
          </div>
          <div>まずは自分の目標を定めます</div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </div>
      <div className="md:flex">
        <div className="grid bg-white px-5 py-3 md:flex items-cente mb-20 justify-between mx-2 md:h-[300px] md:w-[500px] rounded">
          <div className="text-orange-5 text-cente w-80 mx-aut font-semibold text-xl">
            <div className="text-orange-500 font-bold text-xl text-center">
              オフラインイベント
            </div>{" "}
            <div className="text-center">まずは自分の目標を定めます</div>
            <div className="relative h-[100px] w-[100px]">
              <Image
                className="rounded-full "
                src="/lpcommunity/step/2.jpg"
                fill
                alt="logo"
                priority
              />
              <div className="absolute top-full text-sm">RESTART運営</div>
              <div class="relative mt-8 ml-24  border-orange-500 border bg-orange-100 text-sm font-light p-4 rounded-lg max-w-lg w-[200px]">
                英語を学ぶだけでなくそれを活かして新しい人生を
                <div class="absolute top-1 left-1 transform -translate-x-2/3 translate-y-2/3 w-4 h-4 bg-orange-100 rotate-45"></div>
              </div>
            </div>
          </div>
          <div className="row-start- relative h-[250px] w-[250px]">
            <Image
              className="rounded "
              src="/lpcommunity/step/travel.png"
              fill
              alt="logo"
              priority
            />
          </div>
        </div>

        <div className="grid bg-white px-5 py-3 md:flex items-cente mb-20 justify-between mx-2 md:h-[300px] md:w-[500px] rounded">
          <div className="text-orange-5 text-cente w-80 mx-aut font-semibold text-xl">
            <div className="text-orange-500 font-bold text-xl text-center">
              英語を使った転職、求職サポート{" "}
            </div>{" "}
            にも取り組んでいきます
            <div className="relative h-[100px] w-[100px]">
              <Image
                className="rounded-full "
                src="/lpcommunity/step/2.jpg"
                fill
                alt="logo"
                priority
              />
              <div className="absolute top-full text-sm">RESTART運営</div>
              <div class="relative mt-8 ml-24  border-orange-500 border bg-orange-100 text-sm font-light p-4 rounded-lg max-w-lg w-[200px]">
                英語を学ぶだけでなくそれを活かして
                <div class="absolute top-1 left-1 transform -translate-x-2/3 translate-y-2/3 w-4 h-4 bg-orange-100 rotate-45"></div>
              </div>
            </div>
          </div>
          <div className="row-start-2 relative h-[250px] w-[250px]">
            <Image
              className="rounded "
              src="/lpcommunity/step/newwork.png"
              fill
              alt="logo"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
