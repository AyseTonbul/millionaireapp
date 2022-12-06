import React from "react";
import useSound from "use-sound";
import play from "../assets/src_sounds_play.mp3";
import correct from "../assets/src_sounds_correct.mp3";
import wrong from "../assets/src_sounds_wrong.mp3";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = React.useState(null);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [className, setClassName] = React.useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  React.useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  React.useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    
      delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
       
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
      
      }
    
      })
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}