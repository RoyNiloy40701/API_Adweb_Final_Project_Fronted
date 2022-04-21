import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainpage from './Component/MainPage';
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration';
import VerifyRegister from './Component/Registration/VerifyRegister';
import HomePage from './Component/Home/HomePage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <div className="wrapper">
          <Switch>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route exact path="/verify">
              <VerifyRegister></VerifyRegister>
            </Route>

            <Route path="/manager">
              <Mainpage></Mainpage>
            </Route>
            <Route path="/">
            <HomePage></HomePage>
            </Route>
            <Route path="/home">
            <HomePage></HomePage>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>



    </div>
  );
}

export default App;
