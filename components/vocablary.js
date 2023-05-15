import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export function VocablaryQuestion({
  answer,
  wordsList,
  startSlug,
  correctAnswers,
}) {
  const [score, setScore] = useState(0); // スコアを定義する
  const [consecutiveScore, consecutiveSetScore] = useState(0); // スコアを定義する
  const [maxConsecutiveScore, maxConsecutiveSetScore] = useState(0); // スコアを定義する
  const [countPage, setCountPage] = useState(1); // スコアを定義する
  const [movePage, setMovePage] = useState(false); // スコアを定義する
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [correctButton, setCorrect] = useState(false);
  const [isinCorrect, setinCorrect] = useState(false);
  const [correctNum, setCorrectNum] = useState([]);

  const listList = correctAnswers.map((obj) => Object.values(obj)[0]);
  const router = useRouter();

  const handleClick = (e, word) => {
    e.preventDefault();
    setUserAnswers([...userAnswers, Object.values(word)[0][0]]);
    setCountPage(countPage + 1);
    if (countPage === 10) {
      setMovePage(true);
    }

    if (answer === Object.values(word)[0][0]) {
      setCorrect(true);
      // setCorrectNum([...correctNum, countpage]);

      const currentSlug = router.query.slug;
      const nextSlug = Number(currentSlug) + 1;
      const newConsecutiveScore = consecutiveScore + 1;
      const newScore = score + 1;
      consecutiveSetScore(newConsecutiveScore);
      setScore(newScore);

      // 最大連続スコアを更新
      if (newConsecutiveScore > maxConsecutiveSetScore) {
        maxConsecutiveSetScore(newConsecutiveScore);
      }
      setTimeout(() => {
        router.push({
          pathname: `/vocablary/${nextSlug}`,
          query: {
            score: newScore,
            consecutiveScore: newConsecutiveScore,
            maxConsecutiveScore: maxConsecutiveScore,
            answers: userAnswers,
          },
        });
      }, 200);
    } else {
      setinCorrect(true);
      const currentSlug = router.query.slug;
      const nextSlug = Number(currentSlug) + 1;
      const newConsecutiveScore = 0;

      consecutiveSetScore(newConsecutiveScore);
      setTimeout(() => {
        router.push({
          pathname: `/vocablary/${nextSlug}`,
          query: {
            score: score,
            consecutiveScore: newConsecutiveScore,
            maxConsecutiveScore: maxConsecutiveScore,
            answers: userAnswers,
          },
        });
      }, 200);
    }
  };

  useEffect(() => {
    setTimeout(function () {
      setCorrect(false);
      setinCorrect(false);
    }, 200);
  }, [correctButton, isinCorrect]);

  if (movePage) {
    router.push({
      pathname: `/resultpage`,
      query: {
        score: score,
        consecutiveScore: consecutiveScore,
        maxConsecutiveScore: maxConsecutiveScore,
        answers: userAnswers,
        startSlug: startSlug,
        correctAnswers: encodeURIComponent(JSON.stringify(listList)),
      },
    });
  }

  return (
    <div>
      {consecutiveScore >= 3 && consecutiveScore < 5 && (
        <div className="text-xl text-grad-gold text-right pb-5 pr-3">
          {consecutiveScore}問連続正解 厉害！
        </div>
      )}
      {consecutiveScore >= 5 && consecutiveScore < 8 && (
        <div className="text-xl text-grad-gold text-right pb-5 pr-3">
          {consecutiveScore}問連続正解 努力人！
        </div>
      )}
      {consecutiveScore >= 8 && (
        <div className="text-xl text-grad-gold text-right pb-5 pr-3">
          {consecutiveScore}問連続正解 天才！
        </div>
      )}
      <ul>
        <div className="font-serif grid grid-cols-2 justify-items-center gap-8">
          {wordsList.map((word, index) => (
            <button
              onClick={(e) => {
                handleClick(e, word);
                setSelectedButtonIndex(index);
              }}
              key={index}
              className="answer-box bg-slate-300 w-60 rounded-md text-center h-16 pt-2 hover:bg-green-200 hover:scale-110 transition duration-500 ease-in-out"
              style={{
                backgroundColor:
                  selectedButtonIndex == index && correctButton
                    ? "rgb(0, 200, 83)"
                    : selectedButtonIndex == index && isinCorrect
                    ? "red"
                    : "white",
              }}
            >
              <p className="font-semibold text-xl ">{`${
                Object.values(word)[0][0]
              } `}</p>
              <p>{Object.values(word)[0][1]}</p>
            </button>
          ))}
        </div>
      </ul>
    </div>
  );
}
