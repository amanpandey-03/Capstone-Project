import { TextField ,MenuItem, Button} from '@mui/material'
import  { React,useState } from 'react'
import "./Home.css"
import Categories from "../Data/Categories"



const  Home = ({name,setName}) => {
  const[category,setCategory] = useState("");
  const[difficulty,setDifficulty] = useState("");
  const[error,setError] = useState(false);

  const handleSubmit= () => {
    
  }

  return (

    <div className="container">
      
      
      <div className='picContainer'>
        
      </div>



      <div className='home'>
        
        
          <div className="settings">
            <p>Quiz Settings</p>
          </div>

          <div className='setInput'>

            <TextField
              label="Enter Your Name"
              variant="filled"
              style={{ marginBottom: 25 }}
              onChange={(e) => setName(e.target.value)} 
              value={name}
              />


            <TextField
              select
              label="Select Category"
              variant="filled"
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
              variant="filled"
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
            >Start Test</Button>

          </div>


        


      </div>

      
    </div>
  );
}

export default Home
