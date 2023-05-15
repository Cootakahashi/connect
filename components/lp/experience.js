export default function Testimonials() {
  const testimonials = [
    {
      name: "山田 太郎",
      quote:
        "このコミュニティは英語学習の大きな助けになりました。友達もたくさんできて、楽しく学べています。",
      image: "../../public/wide/4.png", // 画像のパスを適切に置き換えてください
    },
    {
      name: "佐藤 花子",
      quote: "ここで得た知識と経験は、私の英語力を飛躍的に向上させました。",
      image: "../../public/wide/3.png", // 画像のパスを適切に置き換えてください
    },
    {
      name: "佐藤 花子",
      quote: "ここで得た知識と経験は、私の英語力を飛躍的に向上させました。",
      image: "../../public/wide/3.png", // 画像のパスを適切に置き換えてください
    },
    // 他のテストモニアルを追加できます
  ];

  return (
    <div className="bg-blue-100 py-20 px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">ユーザー体験</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-10">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-20 h-20 mx-auto mb-5"
            />
            <h3 className="text-xl font-bold mb-3 text-center">
              {testimonial.name}
            </h3>
            <p>"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
