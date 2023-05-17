import './App.css';
import AddOwnerProject from './components/AddOwnerProject';
import AllOwenerProject from './components/AllOwenerProject';
import AddFeeback from "./components/AddFeedback"
import "./App.css";

import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home';
import Footer from "./components/Footer";
import DeleleOwnerProject from './components/DeleteOwnerProject';
import UpdateOwnerProject from './components/UpdateOwnerProject';


function App() {
  return (
   
    <div className="App">
    <div className='all'>
    <Router>
    <Header className></Header>
     <Routes>
     <Route path="/home" element={<Home/>}></Route>
     <Route path="/addOwnerProject" element={<AddOwnerProject />}></Route>
     <Route path="/allOwenerProject" element={<AllOwenerProject />}></Route>
     <Route path="/addFeedback" element={<AddFeeback />}></Route>
     <Route path="/deleteOwnerProject" element={<DeleleOwnerProject />}></Route>
     <Route path="/updateOwnerProject" element={<UpdateOwnerProject />}></Route>
     </Routes>
     <Footer className></Footer>
     </Router>
     </div>
    </div>
    
  );
}

export default App;
