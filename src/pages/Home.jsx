import { TextField ,MenuItem, Button, AppBar} from '@mui/material'
import  { React,useState } from 'react'
import "./Home.css"
import Categories from "../Data/Categories"
import ErrorMessage from '../components/ErrorMessage'
import { useHistory } from 'react-router-dom'



const  Home = ({name,setName,fetchQuestions}) => {
  const[category,setCategory] = useState("");
  const[difficulty,setDifficulty] = useState("");
  const[error,setError] = useState(false);


const history = useHistory();

  const handleSubmit= () => {
    if(!category || !difficulty || !name){
      setError(true);
      return;
    }
    else{
      setError(false);
      fetchQuestions(category,difficulty);
      history.push("/quiz");
    }
  };

  return (

    <div className="container">
       
      

      <div className='imgContainer'></div>
     


      {/* <div className='home'> */}
        
        
          

          <div className='setInput'>
          
          
            <span className='quizSet'>Quiz Settings</span>

            <TextField
              label="Enter Your Name"
              variant="outlined"
              style={{ marginBottom: 25 }}
              onChange={(e) => setName(e.target.value)} 
              value={name}
              />


            <TextField
              select
              label="Select Category"
              variant="outlined"
              style={{ marginBottom: 25 }}
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {Categories.map((cat) => (
                <MenuItem
                  key={cat.category}
                  value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>


            <TextField
              select
              label="Select Difficulty"
              variant="outlined"
              style={{ marginBottom: 25 }}
               onChange={(e) => setDifficulty(e.target.value)}
               value= {difficulty}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            
            <Button
            variant="contained"
            size="large" 
            onClick={handleSubmit}
            style={{ marginBottom: 25 }}
            >Start Test</Button>

          </div>

      
    </div>
  );
}

export default Home
