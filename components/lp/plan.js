export default function Pricing() {
  const plans = [
    {
      name: "基本プラン",
      price: "¥1,000/月",
      features: ["特徴1", "特徴2", "特徴3"],
    },
    {
      name: "プレミアムプラン",
      price: "¥2,000/月",
      features: ["特徴1", "特徴2", "特徴3", "特徴4", "特徴5"],
      highlight: true,
    },
    {
      name: "エリートプラン",
      price: "¥3,000/月",
      features: ["特徴1", "特徴2", "特徴3", "特徴4", "特徴5", "特徴6"],
    },
  ];

  return (
    <div className="bg-blue-100 py-20 px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">プランと価格</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-10 ${
              plan.highlight ? "bg-orange-500 text-white shadow-lg" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-bold mb-3 text-center">{plan.name}</h3>
            <div className="text-center text-2xl mb-5">{plan.price}</div>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  - {feature}
                </li>
              ))}
            </ul>
            <div className="mt-5 text-center">
              <button
                className={`px-5 py-2 rounded ${
                  plan.highlight
                    ? "bg-white text-orange-500"
                    : "bg-orange-500 text-white"
                }`}
              >
                購入する
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
