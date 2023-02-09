import { useEffect, useState } from "react";

const Quiz = ({name, score, questions, setQuestions, setScore }) => {
// const[options ,setOptions ] = useState();
// const[currQues, setCurrQues] = useState(0);

  useEffect(() => {
    
  console.log(questions);
  },[questions]);

  return <div>Quiz Page</div>;
  
};

export default Quiz
