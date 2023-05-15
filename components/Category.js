import Image from "next/image";
import Link from "next/link";
export function Category({ category }) {
  return (
    <div>
      <div className="md:grid gap-1  px-10 overflow-hidden mt-40">
        <div className="flex">
          <Link
            className="hover:opacity-80 transition duration-500 ease-in-out w-1/2"
            href={`/category/tocfl`}
            passHref
          >
            {" "}
            <div className="text-slate-300 text-3xl z-50 p-1">TOEIC対策</div>
            <Image
              className="w-full"
              src="/wide/2.png"
              height={250}
              width={400}
              priority
              alt="Tocfl"
            />{" "}
          </Link>

          <Link
            className="hover:opacity-80 transition duration-500 ease-in-out w-1/2"
            href={`/category/hsk`}
            passHref
          >
            {" "}
            <div className="text-slate-300 text-3xl z-50 p-1">英検対策</div>
            <Image
              className="w-full"
              src="/wide/3.png"
              height={250}
              width={400}
              alt="hsk"
              priority
            />
          </Link>
        </div>{" "}
        <div className="flex ">
          <Link
            className="hover:opacity-80 transition duration-500 ease-in-out w-1/2"
            href={`/category/ichimon`}
            passHref
          >
            {" "}
            <div className="text-slate-300 text-3xl z-50 p-1 ">More表現</div>
            <Image
              className="w-full h-80"
              src="/wide/7.png"
              height={250}
              width={400}
              alt="ichimon"
              priority
            />{" "}
          </Link>
          <div className="">
            <Link
              className="hover:opacity-80 transition duration-500 ease-in-out"
              href={`/category/category`}
              passHref
            >
              <div className="text-slate-300 text-3xl z-50 p-1 ">英語耳</div>
              <Image
                className="w-full h-80"
                src="/wide/9.png"
                height={250}
                width={400}
                priority
                alt="category"
              />{" "}
            </Link>
          </div>
        </div>
        <div className="flex ">
          <Link
            className="hover:opacity-80 transition duration-500 ease-in-out w-1/2"
            href={`/category/ichimon`}
            passHref
          >
            {" "}
            <div className="text-slate-300 text-3xl z-50 p-1 ">
              最強単語学習 類義語彙法 + Neo復習
            </div>
            <Image
              className="w-full h-80"
              src="/wide/11.png"
              height={250}
              width={400}
              alt="ichimon"
              priority
            />{" "}
          </Link>
          <div className="">
            <Link
              className="hover:opacity-80 transition duration-500 ease-in-out"
              href={`/syunkan`}
              passHref
            >
              <div className="text-slate-300 text-3xl z-50 p-1 ">
                瞬間英作文 with AI
              </div>
              <Image
                className="w-full h-80"
                src="/wide/syunkan.png"
                height={250}
                width={400}
                priority
                alt="category"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};
