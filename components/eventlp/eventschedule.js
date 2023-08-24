import Image from "next/image";
import Link from "next/link";
export function EventSchedule({ event }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  console.log(event);
  return (
    <div>
      <div>
        <div className="flex-grow w-full md:mx-2">
          {/* Sidebar goes here */}
          <div className=" text-gray-700 py-4 md:px-6 bg-orange-100 rounded-xl mt-10 md:mx-20 md:flex ">
            <div className="relative w-[340px] h-[260px] md:h-[210px] md:w-[350px] mx-auto ">
              <Image
                className="rounded "
                src={event.image.url}
                fill
                alt="logo"
                priority
              />
            </div>
            <div className="mx-auto ">
              <div className="text-center md:text-2xl font-semibold my-5 mx-2 md:mx-0 text-xl">
                次回オンライングループ英会話日程
              </div>
              <div className="gap-y-1 grid ml-10">
                <div>
                  <span className="font-semibold">定員:</span> {event.membernum}
                  名
                </div>
                {/* <div>開催: Restart</div> */}

                <div>
                  <span className="font-semibold">内容:</span> {event.title}
                </div>
                <div className="flex gap-1">
                  {" "}
                  <span className="font-semibold">質問:</span>
                  <div className="">
                    <p>
                      <span>1.</span> {event.question1}
                    </p>
                    <p>
                      {" "}
                      <span>2.</span>
                      {event.question2}
                    </p>
                    <p>
                      {" "}
                      <span>3.</span>
                      {event.question3}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">備考:</span>
                  <div className="md:w-80">{event.addinginfo}</div>
                </div>
              </div>
              <div className="grid md:flex bg-blac mt-10">
                <div className="ml-10 md:ml-0">
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mt-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {/* <p className="text-gray-700 md:text-lg mb-2">{event.date}</p> */}
                    <p className="text-gray-700 md:text-lg mb-2">
                      {event.date}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    <p className="text-xs opacity-80">Google Meet</p>
                  </div>

                  <ul className="md:space-y-2 font-bold"></ul>
                </div>
                <div className="btns grid justify-center md:ml-20 mt-10 md:mt-0">
                  <div className="text-center border mx-2  pt-1 border-red-700 rounded">
                    簡単30秒!参加リンク獲得まで2STEP!
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
