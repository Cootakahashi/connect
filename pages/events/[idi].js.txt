import EventCard from "../../components/lp/EventCard"; // EventCardコンポーネントをインポート
import { client } from "../libs/client";
import Image from "next/image";

export default function eventdetail({}) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  return (
    <div>
      <Blogheader className="mb-20" />
      <div className="relative h-screen md:h-[600px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]">
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="absolute inset-0 md:flex items-center md:justify-between z-20 px-4 md:px-8">
          <div className="w-full md:w-1/2 md:pl-8">
            <p className="font-bold text-white text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] tracking-wide">
              Restart
            </p>
            <p className="font-bold text-white text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] underline">
              English Meet UP
            </p>
          </div>
          <div className="w-full md:w-1/2 md:pr-8 mt-20">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-8">
              Upcoming Events
            </h1>
            <div className="flex flex-wrap -m-4">
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "event" });
  return {
    props: {
      events: data.contents,
    },
  };
};
