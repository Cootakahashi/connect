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
import Top from "../components/lp/top";

export default function landing() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Anton"
          rel="stylesheet"
        />
      </Head>

      <Top />
      <div className="">
        <Videocomp />
      </div>

      <Forwho />

      <Features />
      <Why />
      <Fixback />
      <Pricing />
      {/* 
      <Testimonials />
      // <Pricing />
      <CTAButton />
      <FAQ />
      <Footer /> */}
    </>
  );
}
