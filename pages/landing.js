import Image from "next/image";
import heroImage from "../public/wide/4.png"; // あなたのヒーローイメージへのパスを適切に置き換えてください。
import Features from "../components/lp/feature";
import Testimonials from "../components/lp/experience";
import Pricing from "../components/lp/plan";
import CTAButton from "@/components/lp/cta";
import FAQ from "@/components/lp/faq";
import Footer from "@/components/lp/footer";
export default function landing() {
  return (
    <>
      <div className="relative h-[500px] sm:h-[600px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]">
        <Image src={heroImage} layout="fill" objectFit="cover" />
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg text-white font-bold">
            一緒に英語学習を楽しみましょう！
          </p>
          <button className="text-sm sm:text-base text-white bg-orange-500 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            参加する
          </button>
        </div>
      </div>
      <Features />
      <Testimonials />
      <Pricing />
      <CTAButton />
      <FAQ />
      <Footer />
    </>
  );
}
