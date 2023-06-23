import { useEffect, useState } from "react";
import { CircularProgress, AppBar } from "@mui/material";
import "./Quiz.css";
import Question from "../components/Questions/Question";

const Quiz = ({name, score, questions, setQuestions, setScore }) => {
const[options ,setOptions ] = useState();
const[currQues, setCurrQues] = useState(0);


  useEffect(() => { 
  console.log(questions);
  
  
  setOptions(questions && handleShuffle([
    questions[currQues]?.correct_answer,
    ...questions[currQues]?.incorrect_answers]));

  },[questions,currQues]);

console.log(options);
 
 const handleShuffle=(optionss) => {
  return optionss.sort(() => Math.random() - 0.5);
 };

  return (<div className="quizContainer">

    {/* Trying to add a appbar : not successful */}
     {/* <AppBar></AppBar> */}
      
    <span className="welcomeTitle">
      Welcome {name}
    </span>
    <hr/>
    {
      questions ? (
      <>
      <div className="quizInfo">
        <span className="info">{questions[currQues].category}</span>
        <span className="info"> Score:{score}</span>
      </div>
      <Question
      currQues={currQues}
      setCurrQues={setCurrQues}
      questions={questions}
      options={options}
      correct={questions[currQues]?.correct_answer}
      score={score}
      setScore={setScore}
      // setQuestions={setQuestions}
      />
      </>
      ) : ( 
      <CircularProgress style={{margin:100}}
      color="inherit"
      size={150}
      thickness={1}
      />
      )
    }
  </div>
  )
};

export default Quiz;