import Link from "next/link";
import { client } from "../../libs/client";
import Layoutwrap from "../../components/Layoutcomp";
import { Footer } from "../../components/footer";
import { Blogheader } from "../../components/header";

export default function CategoryPage({ categories }) {
  return (
    <div>
      <div className="hidde z-50 mb-20">
        <Blogheader />
      </div>
      <Layoutwrap
        metadata={{
          title: "カテゴリー一覧",
          description: "ブログのカテゴリー一覧ページ",
          ogTitle: "カテゴリー一覧",
          ogDescription: "ブログのカテゴリー一覧ページ",
          ogImage: "https://example.com/og-image.jpg",
          ogUrl: "https://example.com/category",
          twitterSite: "@YourTwitterHandle",
          canonicalUrl: "https://example.com/category",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-40">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <Link href={`/category/${category.id}`}>
                <div className="text-blue-800 hover:text-blue-600 font-semibold">
                  {category.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Layoutwrap>
      <div className="mt-80">
        <Footer />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "categories" });

  return {
    props: {
      categories: data.contents,
    },
  };
};
