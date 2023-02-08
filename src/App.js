import { BrowserRouter , Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz'
import Result from './pages/Result'

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./school.svg)"}}>
      <Header/>

       <Switch>
        
         <Route path='/' exact>
            <Home/>
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
