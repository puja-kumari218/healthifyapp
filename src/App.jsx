import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Basket from './components/Basket/Basket';
import YogaFitness from './components/YogaFitness/YogaFitness';
import MentalWellBeing from "./components/MentalWellBeing/MentalWellBeing";
import SpecificYogaPose from "./components/SpecificYogaPose/SpecificYogaPose";
import Footer from './components/Footer/Footer';
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 <Router>
      <Header />
     
        <Routes>
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} /> 
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/calorie-check" element={<Basket />} /> 
          <Route exact path="/mental-wellbeing" element={<MentalWellBeing />} /> 
          <Route exact path="/specific-yoga-pose/:yogaPoseId" element={<SpecificYogaPose />} /> 
          <Route exact path="/yoga-poses/standing" element={<YogaFitness category={"standing"} />} /> 
          <Route exact path="/yoga-poses/sitting" element={<YogaFitness category={"sitting"} />} />
          <Route exact path="/yoga-poses/lying" element={<YogaFitness category={"lying"} />} />
        </Routes>
      <Footer />

  </Router>
    </div>
  );
}

export default App;
