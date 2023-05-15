import { useState } from "react";

export function toeik_quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [score, setScore] = useState(0);
  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
  };

  const handleSubmit = () => {
    if (selectedChoice === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedChoice(null);
    setCurrentQuestion(currentQuestion + 1);
  };
  return <></>;
}
