import React from "react";
import Head from "next/head";
import { Blogheader } from "../components/header";
export default function Prepare() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <Head>
        <title>Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidde z-50 mb-20">
        <Blogheader />
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-6">Coming Soon</h1>
        <p className="text-xl mb-8 text-center">
          最新ページを作成中です。しばらくお待ちください。
        </p>

        <form className="w-64 flex flex-col items-center">
          <input
            className="w-full p-2 mb-2 text-black"
            type="email"
            placeholder="Your email address"
            required
          />
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
