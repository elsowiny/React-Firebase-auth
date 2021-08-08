import SignInSide from './components/SignIn/SignInSide';
import Signup from './components/SignUp/Signup';
import Home from './pages/Home/LandingPage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>

   <Router>
     <Switch>
       <Route exact path="/" component={SignInSide}></Route>
       <Route exact path="/home" component={Home}></Route>
       <Route exact path="/signup" component={Signup}></Route>
       <Route exact path="/signin" component={SignInSide}></Route>
     </Switch>
   </Router>
   </AuthProvider>
  );
}

export default App;
