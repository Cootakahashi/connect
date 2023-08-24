import Image from "next/image";
export function Privilege() {
  return (
    <div
      className="md:h-[600px] h-[600px] pt-10"
      style={{ backgroundImage: "url(/lpcommunity/privilege/2.jpg)" }}
    >
      <div className="bg-white text-orange-500 md:w-[880px] px-5 py-3 text-4xl font-semibold mx-auto text-center">
        RESTARTはこの夏からあなたとまだ見ぬ旅を始めます
      </div>
      <div className="bg-white text-orange-500 md:w-[500px] px-5 py-3 text-2xl font-semibold mx-auto my-10 text-center">
        多くの仲間と出会うために私たちは様々な開発をしていきます
      </div>

      <div className="relative h-[200px] md:w-[600px] md:h-[280px] mx-auto">
        <Image
          className=""
          src="/lpcommunity/privilege/50.jpg"
          fill
          alt="logo"
          priority
        />
      </div>
    </div>
  );
}
