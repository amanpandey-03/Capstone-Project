import { BrowserRouter , Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./school.svg)"}}>
      <Header/>

        <Route path='/' exact>

          <Switch>
             <Home/>
          </Switch>

        </Route>

    </div>
    </BrowserRouter>
  );
}

export default App;
