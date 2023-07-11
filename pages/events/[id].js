import EventCard from "../../components/lp/EventCard"; // EventCardコンポーネントをインポート
import { client } from "../../libs/client";
import Image from "next/image";
import Link from "next/link"; // 追加：Linkが未定義だったため

export default function Event({ events }) {
  console.log(events);
  console.log("HI");
  return <div> </div>;
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "event",
    queries: { offset: 0, limit: 5 },
  });
  const datas = await client.get({
    endpoint: "event",
    queries: { offset: 0, limit: 5 },
  });

  //get category content
  const categoryData = await client.get({ endpoint: "categories" });
  const recommendBlogs = data.contents.filter(
    (content) => content.recommend === true
  );
  return {
    props: {
      events: data.contents,
      blogs: datas.contents,
      totalCount: datas.totalCount,
      category: categoryData.contents,
      recommend: recommendBlogs,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "event" });
  const paths = data.contents.map((content) => `/events/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};
