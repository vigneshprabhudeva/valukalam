import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";
import Home from "./components/pages/Homepage/Home";
import Footer from "./components/pages/Footer/footer";
import Location from "./components/location";
import Book from "./components/Book";
import SignUp from "./components/signup";


function App() {
  return (
    
      <Router>
        
        
      
       
    
  <Navbar/>
  
  
 
  <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
       
        <Route />
        
        <Route path="/map">
            <Location/>
          </Route>
          <Route path="/book">
            <Book/>
          </Route>
          <Route path="/signup">
          <SignUp/>
          </Route>
          <Footer/>
      

      </Router>
  
   
  );
}

export default App;
