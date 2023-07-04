export default function Forwho() {
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 text-orange-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  // レコメンデーションアイテムのコンポーネント
  const RecommendationItem = ({ children }) => (
    <div className="flex items-start gap-2">
      <CheckIcon />
      <p>{children}</p>
    </div>
  );
  const recommendations = [
    "使える英語を身につけたい",
    "海外旅行に行きたい",
    "外国人の友達がほしい",
    "海外で働いてみたい",
    "字幕なしで映画をみたい",
    "最新の情報にアクセスしたい",
    "旅行者に日本を伝えたい",
    "外国人と遊びたい",
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-4 justify-items-center mb-10 pb-20 text-left text-xl">
        {recommendations.map((rec, index) => (
          <RecommendationItem key={index}>{rec}</RecommendationItem>
        ))}
      </div>
    </>
  );
}
