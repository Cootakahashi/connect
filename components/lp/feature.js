const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-6 w-6 text-orange-500 inline mr-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const FeatureBox = ({ icon, number, title, description }) => (
  <div className="flex flex-col items-center text-center border-2 border-orange-500 p-5 rounded-md shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
    <div className="bg-orange-500 rounded-full p-5 mb-5 relative w-40 h-40 -translate-y-20">
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
        <p>特徴</p>
        <span className="text-5xl"> {number}</span>
      </span>
      <i className={icon + " text-white text-3xl"}></i>
    </div>
    <h3 className="text-xl font-bold mb-3 flex items-center justify-center">
      {title}
    </h3>
    <p>
      {" "}
      <CheckIcon />
      {description}
    </p>

    <p>
      {" "}
      <CheckIcon />
      {description}
    </p>
    <p>
      {" "}
      <CheckIcon />
      {description}
    </p>
    <button className="ml-auto mt-auto flex text-blue-400">
      詳しく見る　{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  </div>
);
export default function Features() {
  return (
    <div className="bg-blue-100 py-40 px-20 shadow-xl ">
      <h1 className="py-20 text-6xl textfont font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-orange-500 to-red-500">
        GOGAKUの特徴
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <FeatureBox
          icon="fas fa-comments"
          number="01"
          title="リアルタイムチャット"
          description="メンバーとリアルタイムで交流し、英語力を向上させましょう。"
        />
        <FeatureBox
          icon="fas fa-book-open"
          number="02"
          title="豊富な学習資源"
          description="最新の英語学習資源を提供します。"
        />
        <FeatureBox
          icon="fas fa-comments"
          number="03"
          title="リアルタイムチャット"
          description="メンバーとリアルタイムで交流し、英語力を向上させましょう。"
        />
      </div>
    </div>
  );
}
