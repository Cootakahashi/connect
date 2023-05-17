import Image from "next/image";
import heroImage from "../public/wide/4.png"; // あなたのヒーローイメージへのパスを適切に置き換えてください。
import Features from "../components/lp/feature";
import Testimonials from "../components/lp/experience";
import Pricing from "../components/lp/plan";
import CTAButton from "@/components/lp/cta";
import FAQ from "@/components/lp/faq";
import Footer from "@/components/lp/footer";
import Videocomp from "../components/lp/videocomp";
import Head from "next/head";
import Forwho from "../components/lp/forwho";
import Fixback from "@/components/lp/fixback";
import Why from "../components/lp/why";
export default function landing() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Anton"
          rel="stylesheet"
        />
      </Head>

      <div className="relative h-[500px] sm:h-[600px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]">
        <Image src={heroImage} height={500} wight={500} className="ml-auto" />
        <div className="absolute top-20 w-full left-20  ">
          <p className="font-bold text-[200px] text-orange-400 textfont tracking-wide">
            GOGAKU
          </p>
          <p className="font-bold text-[50px] text-slate-800 textfont -translate-y-20 underline">
            English comunity
          </p>
        </div>
        {/* <div className="absolute top-1/2 w-full text-center">
          <button className="text-sm sm:text-base text-white bg-orange-500 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            参加する
          </button>
        </div> */}
        <div className="absolute top-1/2 left-48 w-full text-center">
          <Image
            src="/canva/triangle.png"
            height={350}
            width={350}
            className="absolute ml-[400px] "
          />
          <div className=" relative -left-[200px] top-52">
            <h1 className="text-orange-400 text-5xl textfont ml-[555px] ">
              {" "}
              ABOUT
            </h1>

            <div className="m-auto">
              <Image
                src="/canva/11.png"
                height={450}
                width={450}
                className="absolute z-10 left-40 -top-20"
              />
              <div className="z-20 absolut  p-1 top-20 ml-[500px] mt-10 engfont">
                Let's find out new you together
              </div>
              <div className="z-20 absolute w-[555px] japanfont bg-slate-100 p-1 top-40 left-40 ml-80">
                日本生まれの旅好きプログラマーTokoと元サッカー選手のノルウェー人Jonによる、
                スピーキングと楽しむための英語コミュニティGOGAKUにようこそ喋れるようになる、世界に出て活躍する、日本を世界へをコンセプトに多言語交流。学歴、実力は一切関係ない人生を楽しみたい人のためのコミュニティ
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Videocomp />
      </div>

      <Forwho />

      <Features />
      <Why />
      <Fixback />
      {/* 
      <Testimonials />
      <Pricing />
      <CTAButton />
      <FAQ />
      <Footer /> */}
    </>
  );
}
