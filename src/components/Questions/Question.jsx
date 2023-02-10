import { useState } from "react";
import"./Question.css"
import ErrorMessage from "../ErrorMessage";
import { Button } from "@mui/material";

const Question = ({
      currQues,
      setCurrQues,
      questions,
      options,
      correct,
      score,
      setScore,
      setQuestions,
}) => {

const [selected , setSelected] = useState()
const [error , setError] = useState(false)

  const handleSelect = (i) => {
      if(selected===i && selected===correct ){
          return "select";
      }
      else if(selected===i && selected !== correct ){
        return "wrong";
    }
    else if (i===correct){
      return "select";
    }
  };


  const handleCheck = (i) => {
    setSelected(i);
    if(i===correct) setScore(score+1);
    setError(false);
  };

  return (
    <div >
     <h2 className="question">{currQues + 1}. {questions[currQues].question}</h2>
     <div className="options">
     {error && <ErrorMessage>Please choose atleast one answer</ErrorMessage>}
     <div className="buttonContainer">
     {  
      options &&
      options.map((i) => (
      <button 
      onClick={() => handleCheck(i)}
      className={`singleOption ${selected && handleSelect(i)}`}
      key={i}
      disabled={selected}
      >{i}
      </button>))}
      </div>
      
     </div>
     <div className="controls">
        <Button 
        className="controlbtn" 
        variant="contained"
        color="secondary"
        href="/">
          Quit</Button>


        <Button className="controlbtn" 
        variant="contained"
        >
          Next</Button>


      </div>
    </div>
  )
}

export default Question;
