import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import AddCar from "./Components/AddCar/AddCar";
import AddedCarDetails from "./Components/AddCar/AddedCarDetails";
import CarDetails from './Components/Cars/CarDetails';
import Home from './Components/Home/Home';
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/details/:id'>
          <CarDetails/>
        </Route>
        <Route path='/addCar'>
          <AddCar/>
        </Route>
        <Route path='/addedCarDetails/:id'>
          <AddedCarDetails/>
        </Route>
        {/* 
        
       
        <Route path='/editDetails/:id'>
          <EditDetails/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>*/}
      </Switch> 
    </Router>
  );
}

export default App;
