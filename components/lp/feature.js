export default function Features() {
  return (
    <div className="bg-blue-100 py-20 px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">
        コミュニティの特徴
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center">
          <div className="bg-orange-500 rounded-full p-5 mb-5">
            <i className="fas fa-users text-white text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">グローバルネットワーク</h3>
          <p>世界中のメンバーとつながり、一緒に学びましょう。</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-orange-500 rounded-full p-5 mb-5">
            <i className="fas fa-book-open text-white text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">豊富な学習資源</h3>
          <p>最新の英語学習資源を提供します。</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-orange-500 rounded-full p-5 mb-5">
            <i className="fas fa-comments text-white text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">リアルタイムチャット</h3>
          <p>メンバーとリアルタイムで交流し、英語力を向上させましょう。</p>
        </div>
      </div>
    </div>
  );
}
