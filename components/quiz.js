import BlogId from "@/pages/blog/[id]";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export function QuizQuestion({
  question,
  pinyin,
  answers,
  visible,
  setVisible,
  connectID,
  ids,
  correctAnswer,
}) {
  const [correctButton, setCorrect] = useState(false);
  const [isinCorrect, setinCorrect] = useState(false);
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [pinyinButton, setPinyin] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [move, setMove] = useState(false);
  const [audio, setAudio] = useState(null);
  const [playBtn, setPlayBtn] = useState(null);

  // const [shuffledAnswers, setShuffledAnswers] = useState([]);
  // const handleAnswer = (answer) => {
  //   if (answer) {
  //     setCorrectButton(true);
  //     setIncorrectButton(false);
  //   } else {
  //     setCorrectButton(false);
  //     setIncorrectButton(true);
  //   }
  // };
  function shuffleArray(array) {
    // Fisher-Yates シャッフルアルゴリズムを使用して、配列をランダムにシャッフルする
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  console.log(answers);
  console.log(answers[0]);
  const answers_list = [answers[0], answers[1], answers[2]];
  const answers1 = answers_list[0];
  const answers2 = answers_list[1];
  const answers3 = answers_list[2];

  useEffect(() => {
    const shuffledAnswers = answers_list.map((answer) => shuffleArray(answer));
    console.log(shuffledAnswers);
    // console.log(answers1);
    // console.log(answers2);
    // console.log(answers3);
  }, []);

  // const answers1 = shuffleArray([...items]);
  // const answers2 = shuffleArray([...items2]);
  // const answers3 = shuffleArray([...items3]);

  const pinyinHandle = (e) => {
    e.preventDefault();
    setPinyin(pinyinButton ? false : true);
  };
  const router = useRouter();
  const handleClick = (e, answer) => {
    e.preventDefault();
    setUserAnswer([...userAnswer, answer]);
    for (let i = 0; i < 3; i++) {
      if (eval(`visible${i + 1}`)) {
        if (answer === correctAnswer[i]) {
          setCorrect(true);
          setScore(score + 1);
          if (visible3) {
            setMove(true);
          }
        } else {
          setinCorrect(true);
          if (visible3) {
            setMove(true);
          }
        }
        setTimeout(function () {
          eval(`setVisible${i === 2 ? "" : i + 2}(true)`);
          setCorrect(false);
          setinCorrect(false);
          eval(`setVisible${i + 1}(false)`);
        }, 1000);
        break;
      }
    }
  };
  if (move) {
    router.push({
      pathname: `/resultgrammar`,
      query: {
        score: score,
        userAnswer: userAnswer,
        connectID: connectID,
        ids: ids,
        correctAnswer: correctAnswer,
      },
    });
  }
  useEffect(() => {
    setAudio(document.getElementById("myAudio"));
    setPlayBtn(document.getElementById("playBtn"));

    // マウント時にイベントリスナーを追加する
    if (playBtn && audio) {
      playBtn.addEventListener("click", handleClick);
    }

    // アンマウント時にイベントリスナーを削除する
    return () => {
      if (playBtn && audio) {
        playBtn.removeEventListener("click", handleClick);
      }
    };
  }, [playBtn, audio]);

  const handleClick2 = () => {
    audio.paused ? audio.play() : audio.pause();
  };

  return visible ? (
    <>
      <div className="flex flex-col items-center mb-40">
        <h1 className="text-2xl text-3xl bg-gradient-to-br from-green-500 via-green-600 to-green-700 flex items-center justify-center pb-2 text-gray-200 text-center pt-8 w-full">
          {" "}
          今日の文法問題
        </h1>
        <h2 className="ml-auto mr-20 p-3">{1}/3</h2>
        {visible1 ? (
          <>
            <div className="text-xl py-8 px-20 bg-slate-100 mx-10 rounded-md ">
              <h1>{question[0]}</h1>
              <button
                className="transition-all text-slate-500 px-2 py-1 rounded-xl border border-red-200 hover:bg-red-200 hover:text-blue-500  text-sm "
                onClick={(e) => {
                  pinyinHandle(e);
                }}
              >
                拼音
              </button>
              {pinyinButton ? <h1>{pinyin[0]}</h1> : null}

              <figure className="flex justify-center items-center py-8">
                <span className="text-2xl mr-10"> 問題 </span>
                <audio
                  id="myAudio"
                  preload="auto"
                  src="/voice/wen.wav"
                  className=""
                  //   autoPlay
                >
                  <source src="/voice/wen.wav" type="audio/wav"></source>
                  Your browser does not support the audio element.
                </audio>

                <button id="playBtn" className="">
                  <Image
                    className="hover:scale-110 transition duration-200 ease-in-out"
                    src="/vocablary/1.png"
                    height={88}
                    width={88}
                    alt="button"
                    priority
                  />
                </button>
              </figure>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-20">
              {answers1.map((answer, index) => (
                <button
                  key={index}
                  className="whitespace-nowrap transition-all text-blue-500 rounded-xl mx-10 mb-2 px-48 py-3 border border-blue-500 hover:bg-blue-500 hover:scale-105 hover:font-bold"
                  onClick={(e) => {
                    handleClick(e, answer);
                    setSelectedButtonIndex(index);
                  }}
                  style={{
                    backgroundColor:
                      selectedButtonIndex == index && correctButton
                        ? "rgb(0, 200, 83)"
                        : selectedButtonIndex == index && isinCorrect
                        ? "red"
                        : "white",
                  }}
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        ) : visible2 ? (
          <>
            {" "}
            <div className="text-xl py-8 px-20 bg-slate-100 mx-10 rounded-md ">
              <h1>{question[1]}</h1>
              <button
                className="transition-all text-slate-500 px-2 py-1 rounded-xl border border-red-200 hover:bg-red-200 hover:text-blue-500  text-sm "
                onClick={(e) => {
                  pinyinHandle(e);
                }}
              >
                拼音
              </button>
              {pinyinButton ? <h1>{pinyin[0]}</h1> : null}

              <figure className="flex justify-center items-center py-8">
                <span className="text-2xl mr-10"> 問題 </span>
                <audio
                  id="myAudio"
                  preload="auto"
                  src="/voice/wen.wav"
                  className=""
                  //   autoPlay
                >
                  <source src="/voice/wen.wav" type="audio/wav"></source>
                  Your browser does not support the audio element.
                </audio>

                <button id="playBtn" className="">
                  <Image
                    className="hover:scale-110 transition duration-200 ease-in-out"
                    src="/vocablary/1.png"
                    height={88}
                    width={88}
                    alt="button"
                    priority
                  />
                </button>
              </figure>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-20">
              {answers2.map((answer, index) => (
                <button
                  key={index}
                  className="whitespace-nowrap transition-all text-blue-500 rounded-xl mx-10 mb-2 px-48 py-3 border border-blue-500 hover:bg-blue-500 hover:scale-105 hover:font-bold"
                  onClick={(e) => {
                    handleClick(e, answer);
                    setSelectedButtonIndex(index);
                  }}
                  style={{
                    backgroundColor:
                      selectedButtonIndex == index && correctButton
                        ? "rgb(0, 200, 83)"
                        : selectedButtonIndex == index && isinCorrect
                        ? "red"
                        : "white",
                  }}
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        ) : visible3 ? (
          <>
            {" "}
            <div className="text-xl py-8 px-20 bg-slate-100 mx-10 rounded-md ">
              <h1>{question[2]}</h1>
              <button
                className="transition-all text-slate-500 px-2 py-1 rounded-xl border border-red-200 hover:bg-red-200 hover:text-blue-500  text-sm "
                onClick={(e) => {
                  pinyinHandle(e);
                }}
              >
                拼音
              </button>
              {pinyinButton ? <h1>{pinyin[0]}</h1> : null}

              <figure className="flex justify-center items-center py-8">
                <span className="text-2xl mr-10"> 問題 </span>
                <audio
                  id="myAudio"
                  preload="auto"
                  src="/voice/wen.wav"
                  className=""
                  //   autoPlay
                >
                  <source src="/voice/wen.wav" type="audio/wav"></source>
                  Your browser does not support the audio element.
                </audio>

                <button id="playBtn" className="">
                  <Image
                    className="hover:scale-110 transition duration-200 ease-in-out"
                    src="/vocablary/1.png"
                    height={88}
                    width={88}
                    alt="button"
                    priority
                  />
                </button>
              </figure>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-20">
              {answers3.map((answer, index) => (
                <button
                  key={index}
                  className="whitespace-nowrap transition-all text-blue-500 rounded-xl mx-10 mb-2 px-48 py-3 border border-blue-500 hover:bg-blue-500 hover:scale-105 hover:font-bold"
                  onClick={(e) => {
                    handleClick(e, answer);
                    setSelectedButtonIndex(index);
                  }}
                  style={{
                    backgroundColor:
                      selectedButtonIndex == index && correctButton
                        ? "rgb(0, 200, 83)"
                        : selectedButtonIndex == index && isinCorrect
                        ? "red"
                        : "white",
                  }}
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  ) : null;
}
