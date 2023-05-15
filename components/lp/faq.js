import { useState } from "react";

export default function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "質問1",
      answer: "答え1",
    },
    {
      id: 2,
      question: "質問2",
      answer: "答え2",
    },
    {
      id: 3,
      question: "質問3",
      answer: "答え3",
    },
  ];

  return (
    <div className="bg-blue-100 py-20 px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">よくある質問</h2>
      <div className="mb-10">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-5 mb-5 cursor-pointer"
            onClick={() =>
              setSelectedQuestion(
                selectedQuestion === question.id ? null : question.id
              )
            }
          >
            <p className="font-bold">{question.question}</p>
            {selectedQuestion === question.id && (
              <p className="mt-2">{question.answer}</p>
            )}
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-10 text-center">会社所在地</h2>
      <p className="text-center mb-5">〒123-4567 東京都中央区銀座1-1-1</p>
      <div className="w-full h-64 bg-gray-200 rounded shadow">
        ここにGoogleマップなどを埋め込む
      </div>
    </div>
  );
}
