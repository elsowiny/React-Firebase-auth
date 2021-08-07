import SignInSide from './components/SignIn/SignInSide';
import Signup from './components/SignUp/Signup';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import './App.css';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={SignInSide}></Route>
       <Route exact path="/signup" component={Signup}></Route>
       <Route exact path="/signin" component={SignInSide}></Route>
     </Switch>
   </Router>
  );
}

export default App;
