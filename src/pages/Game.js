import React, { useState } from "react";
import "../styles/Game.css";

const questions = [
  {
    id: 1,
    question: "Who is this character?",
    image: "https://genk.mediacdn.vn/2018/5/4/3-1525428991714540602113.jpg",
    options: [
      { text: "Naruto", isCorrect: true },
      { text: "Sasuke", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Who is this character?",
    image: "https://i.pinimg.com/originals/99/9e/8b/999e8bdf39a060efa35de31b2b082100.jpg",
    options: [
      { text: "Luffy", isCorrect: false },
      { text: "Zoro", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "Who is this character?",
    image: "https://i.pinimg.com/550x/0d/65/3f/0d653f8b9b6549b51da85224b6239e2d.jpg",
    options: [
      { text: "Gojo", isCorrect: true },
      { text: "Goku", isCorrect: false },
    ],
  },
];

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      alert(`Game Over! Your score: ${score + (isCorrect ? 1 : 0)}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="game">
      <h2>Guess the Cosplay</h2>
      <div className="question">
        <p>{currentQuestion.question}</p>
        <img src={currentQuestion.image} alt="Cosplay" />
        <div className="answers">
          {currentQuestion.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option.isCorrect)}>
              {option.text}
            </button>
          ))}
        </div>
      </div>
      <p className="score">Score: {score}</p>
    </div>
  );
};

export default Game;
