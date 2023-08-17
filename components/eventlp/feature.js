import Link from "next/link";
import Image from "next/image";
export function Feature() {
  return (
    <div>
      <div className="mx-2 md:mx-5 py-8 md:px-8 rounded-xl ">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl whitespace-pre-line">
            {`Restartでできる\n
            人気な3つの経験`}
          </h1>
          <div className="bg-red-700 w-20 h-1 rounded mx-auto my-5"></div>
        </div>

        <div className="grid gap-y-10">
          <div className="md:flex justify-center gap-5 mx-3">
            <div className="relative w-full h-[200px] md:w-[300px]">
              <Image
                className="rounded "
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="md:w-[500px] w-full">
              <div className="text-red-700 font-bold text-xl mt-5">
                コミュニティに加入しなくても無料で参加できるオンラインイベント
              </div>
              <div className="font-bold">だから安心して気軽に英語を試せる</div>
              <div className="relative h-12">
                <div className="absolute top-0 bg-red-100 w-full h-[3px] rounded my-5"></div>
                <div className="absolute top-0 bg-red-500 w-40 h-[3px] rounded my-5"></div>
              </div>

              <div>
                {" "}
                コミュニティに加入しなくても無料で参加できるオンラインイベント
                コミュニティに加入しなくても無料で参加できるオンラインイベント
                コミュニティに加入しなくても無料で参加できるオンラインイベント
                コミュニティに加入しなくても無料で参加できるオンラインイベント
              </div>
            </div>
          </div>

          <div className="md:flex justify-center gap-5">
            <div className="relative w-full h-[200px] md:w-[300px]">
              <Image
                className="rounded "
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="md:w-[500px] w-[300px]">
              <div className="text-red-700 font-bold text-xl mt-5">
                コミュニティに加入しなくても無料で参加できるオンラインイベント
              </div>
              <div className="font-bold">だから安心して気軽に英語を試せる</div>
              <div className="relative h-12">
                <div className="absolute top-0 bg-red-100 w-full h-[3px] rounded my-5"></div>
                <div className="absolute top-0 bg-red-500 w-40 h-[3px] rounded my-5"></div>
              </div>

              <div>
                {" "}
                コミュニティに加入しなくても無料で参加できるオンラインイベント
                コミュニティに加入しなくても無料で参加できるオンラインイベント
                コミュニティに加入しなくても無料で参加できるオンラインイベント
                コミュニティに加入しなくても無料で参加できるオンラインイベント
              </div>
            </div>
          </div>

          <div className="md:flex justify-center gap-5">
            <div className="relative w-full h-[200px] md:w-[300px]">
              <Image
                className="rounded "
                src="/wide/7.png"
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="md:w-[500px] w-full">
              <div className="text-red-700 font-bold text-xl mt-5">
                コミュニティに加入しなくても無料で参加できるオンラインイベント
              </div>
              <div className="font-bold">だから安心して気軽に英語を試せる</div>
              <div className="relative h-12">
                <div className="absolute top-0 bg-red-100 w-full h-[3px] rounded my-5"></div>
                <div className="absolute top-0 bg-red-500 w-40 h-[3px] rounded my-5"></div>
              </div>

              <div>
                {" "}
                コミュニティに加入しなくても無料で参加できるオンラインイベント
                コミュニティに加入しなくても無料で参加できるオンラインイベント
                コミュニティに加入しなくても無料で参加できるオンラインイベント
                コミュニティに加入しなくても無料で参加できるオンラインイベント
              </div>
            </div>
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
    </div>
  );
}
