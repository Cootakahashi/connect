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
    "おすすめテキスト1",
    "おすすめテキスト2",
    "おすすめテキスト3",
    "おすすめテキスト4",
    "おすすめテキスト5",
    "おすすめテキスト6",
    "おすすめテキスト7",
    "おすすめテキスト8",
  ];
  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center my-20">
      {recommendations.map((rec, index) => (
        <RecommendationItem key={index}>{rec}</RecommendationItem>
      ))}
    </div>
  );
}
