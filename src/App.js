import LandingPagePrivate from './pages/Home/LandingPagePrivate';
import SignInSide from './components/SignIn/SignInSide';
import Signup from './components/SignUp/Signup';
import Home from './pages/Home/LandingPage';
import Logout from './components/Logout/Logout';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from './privateRoutes/PrivateRoute';

import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>

   <Router>
     <Switch>
       <Route exact path="/" component={Home}></Route>
       <PrivateRoute path="/LandingPagePrivate" component={LandingPagePrivate}></PrivateRoute>
       <Route exact path="/home" component={Home}></Route>
       <Route exact path="/signup" component={Signup}></Route>
       <Route exact path="/signin" component={SignInSide}></Route>
       <Route exact path="/logout" component={Logout}></Route>
     </Switch>
   </Router>
   </AuthProvider>
  );
}

export default App;
