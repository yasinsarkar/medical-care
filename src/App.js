import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import AuthProvider from './components/contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Privacy from './Privacy/Privacy';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/privacy">
            <Privacy></Privacy>
          </Route>
          <PrivateRoute path="/details/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>  
       </AuthProvider>    
    </div>
  );
}

export default App;
