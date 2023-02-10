import { useState } from "react";
import"./Question.css"
import ErrorMessage from "../ErrorMessage";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Question = ({
      currQues,
      setCurrQues,
      questions,
      options,
      correct,
      score,
      setScore,
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

  const handleQuit =() => {

  };
   
  const history = useHistory();
  const handleNext = () =>{
      if(currQues>8){
        history.push("/result")
      }
      else if (selected){
        setCurrQues(currQues+1)
        setSelected()
      }
      else{setError("Please Select an option first")}
  };


  return (
    <div >
     <h2 className="question">{currQues + 1}. {questions[currQues].question}</h2>
     <div className="options">
     {error && <ErrorMessage></ErrorMessage>}
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
        href="/"
        onClick={handleQuit}>
          Quit</Button>


        <Button className="controlbtn" 
        variant="contained"
        onClick={handleNext}
        >
          Next</Button>


      </div>
    </div>
  )
}

export default Question;
