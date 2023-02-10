import { Button } from "@mui/material"
import "./Result.css"



const Result = ({name,score}) => {

  return (
   
    <div className="finalresult">
      <span className="resultmsg">Final Score : {score}</span>
      <Button
      className="resultbtn"
      size="large"
      variant="contained"
        href="/"
      >Back to Home</Button>
    </div>
  )
};

export default Result
