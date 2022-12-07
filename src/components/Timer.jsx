import React from "react";

 function Timer({ setTimeOut, questionNumber }) {
  const [timer, setTimer] = React.useState(20);

  React.useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  React.useEffect(() => {
    setTimer(20);
  }, [questionNumber]);
  return timer;
}

export default Timer