import { BrowserRouter ,  Route ,HashRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz'
import Result from "./pages/Result";
import { useState } from "react";
import axios from "axios";

function App() {

const [name,setName]= useState("");
const [questions,setQuestions]= useState();
const [score,setScore]= useState(0);

const fetchQuestions= async(category="",difficulty="")=>{

  const {data} = await axios.get(
  `https://opentdb.com/api.php?amount=10${
    category && `&category=${category}`
  }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  );
 setQuestions(data.results);
//  console.log(data.results);
};

  return (
    <HashRouter>
    <div className="app" >
    
      <Header/>

       <Switch>

         <Route path='/' exact>
            <Home name={name} 
            setName={setName} 
            fetchQuestions={fetchQuestions}
            />
        </Route>

        <Route path='/home' exact>
            <Home name={name} 
            setName={setName} 
            fetchQuestions={fetchQuestions}
            />
        </Route>

        <Route path='/quiz' exact>
            <Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            />
        </Route>

        <Route path='/result' exact>
            <Result name={name}
            score = {score}/>
        </Route>

       </Switch>

    </div>
    </HashRouter>
  );
}

export default App;
