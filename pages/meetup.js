import Image from "next/legacy/image";
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
import { Blogheader } from "../components/header";

export default function meetup({ events }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Anton"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Blogheader className="mb-20" />
        <div className="relative h-screen md:h-[600px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]">
          <Image
            src={"/wide/11.png"}
            layout="fill"
            objectFit="cover"
            className="absolute z-0 hidden md:block"
          />
          <Image
            src={"/responsive/8.png"}
            layout="fill"
            objectFit="cover"
            className="absolute z-0 block md:hidden h-screen"
          />
          {/* <div className="absolute inset-0 bg-black opacity-50 z-10" /> */}
          <div className="absolute inset-0 md:flex items-center md:justify-between z-20 px-4 md:px-8">
            <div className="w-full md:w-1/2 md:pl-8">
              <p className="font-bold text-white text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] tracking-wide">
                Restart
              </p>
              <p className="font-bold text-white text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] underline">
                English Meet UP
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <Videocomp />
      <Forwho />

      <Features />
      <Why />
      <Fixback />
      <Pricing /> */}
      {/* 
      <Testimonials />
      // <Pricing />
      <CTAButton />
      <FAQ />
      <Footer /> */}
    </>
  );
}
