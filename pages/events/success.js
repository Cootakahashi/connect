import Head from "next/head";
import { Blogheader } from "../../components/header";
import Link from "next/link";
export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>申込み完了</title>
      </Head>{" "}
      <div className="hidde z-50 mb-20">
        <Blogheader />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">参加申込みが完了しました</h1>
        <p className="mb-6 text-gray-600">
          オンライングループ英会話 Restart
          Onlineで会えるのを楽しみにしております。
        </p>
        <Link
          href="/events/explain"
          className="block w-full text-center py-2 px-4 bg-gray-500 hover:bg-gray-600 rounded text-white transition duration-200"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
