import { useScrollTrigger } from "@mui/material";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import { useState } from "react";

function App() {

const [name,setName]= useState("");

// https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple

const [questions,setQuestions]= useState();
const [score,setScore]= useState(0);

const fetchQuestions=()=>{

  
}

  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./school.svg)"}} >
    
      <Header/>

       <Switch>

         <Route path='/' exact>
            <Home name={name} 
            setName={setName} 
            fetchQuestions={fetchQuestions}/>
        </Route>

        <Route path='/quiz' exact>
            <Quiz/>
        </Route>

        <Route path='/result' exact>
            <Result/>
        </Route>

       </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
