import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import "./Quiz.css";

const Quiz = ({name, score, questions, setQuestions, setScore }) => {
const[options ,setOptions ] = useState();
const[currQues, setCurrQues] = useState(0);


  useEffect(() => { 
  console.log(questions);
  
  
  setOptions(questions && handleShuffle([
    questions[currQues]?.correct_answer,
    ...questions[currQues]?.incorrect_answers]));

  },[questions]);

console.log(options);
 
 const handleShuffle=(optionss) => {
  return optionss.sort(() => Math.random() - 0.5);
 };

  return (<div className="quizContainer">
    <span className="welcomeTitle">
      Welcome {name}
    </span>
    {
      questions ? <>Questions</> :  <CircularProgress style={{margin:100}}
      color="inherit"
      size={150}
      thickness={1}/>
    }
  </div>
  )
};

export default Quiz;