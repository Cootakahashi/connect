import Head from "next/head";
import Image from "next/legacy/image";
import { Top } from "../components/top";
import { NavBar } from "../components/nav";
import Link from "next/link";
import { client } from "../libs/client";
import { Footer } from "../components/footer";
import { Event } from "../components/event";

// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blogs" });
//   return {
//     props: {
//       blog: data.contents,
//       totalCount: data.totalCount,
//     },
//   };
// };

export const getStaticProps = async () => {
  try {
    const data = await client.get({ endpoint: "blogs" });
    return {
      props: {
        blog: data.contents,
        totalCount: data.totalCount,
      },
    };
  } catch (error) {
    console.log("API call error: ", error);
    return {
      props: {
        blog: [],
        totalCount: 0,
      },
    };
  }
};

export default function Home({ blog, totalCount }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  const eventNames = blog.filter((d) => d.category?.name === "event");
  return (
    <>
      <Head>
        <title>英語コミュニティRestart</title>
        <meta
          name="description"
          content="英語学習コミュニティ、世界に羽ばたける！"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="z-50 mb-10 bg-blue-200 mb-20">
        <NavBar />
      </div>

      <div className="">
        {" "}
        <Top newestBlog={blog[0]} />
      </div>
      <div className="mx-3 md:mx-20 ">
        <h2 className="m-5 p-5 text-center font-sans font-thin text-5xl">
          Newest Article
        </h2>

        <div className="md:grid grid-cols-3  gap-8 w-ful">
          {blog.slice(0, 3).map((d) => {
            const pathimage = d.eyecatch?.url;
            console.log("createdAt:", d.createdAt);
            const datetime = new Date(d.createdAt);
            let formattedDate = "Initial Date";
            if (!isNaN(datetime.getTime())) {
              formattedDate = `${datetime.getFullYear()}.${
                datetime.getMonth() + 1
              }.${datetime.getDate()}`;
            }

            return (
              <div
                key={d.id}
                className="mb-20 mb:mb-0 h-full bg-slate-20 rounded-xl md:px- border shadow-xl hover:shadow-2xl hover:scale-105 transition duration-500 ease-in-out"
              >
                <Link
                  key={d.id}
                  href={`/english/${
                    d.category?.name === "Phrasal verb"
                      ? "idioms/"
                      : `${d?.category?.id}/`
                  }${d.id}`}
                >
                  <div className="bg-blue-20 rounded-">
                    <div className="text-left z-20 absolute">
                      <span className="ml-3 text-slate-100 bg-blue-800 text-sm px-3 py-1">
                        {d.category?.name}
                      </span>
                    </div>

                    <Image
                      className="w-full z-1 rounded-t-xl"
                      loader={microCMSLoader}
                      src={pathimage}
                      height={300}
                      width={500}
                      alt="thumbnail"
                      priority
                    />
                  </div>

                  <div className=" mx-3">
                    <h1 className="text-2xl pt-5 pb-8  text-blue-800 text-left font-san font-bold ">
                      {" "}
                      {d.title}
                    </h1>
                    <div className="font-light text-left　flex opacity-70">
                      {d?.description?.substring(0, 88)}...
                      <div className="text-slate-700  opacity-80 mt-2  flex justify-e mb-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 mt-1 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        {/* <div>{formattedDate}</div> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-20">
          {" "}
          <Link
            href="/english/blogs"
            className="whitespace-nowrap md:self-end bg-blue-500 text-white font-semibold py-3 px-8 border border-blue-700 rounded-lg shadow-md md:hover:bg-blue-700 md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2 md:focus:ring-blue-500 md:transition md:duration-500 md:ease-in-out"
          >
            <button>記事一覧を見る</button>
          </Link>
        </div>
        <Event props={eventNames} />
        {/* <Category /> */}
      </div>
      <Footer />
    </>
  );
}
