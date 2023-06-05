import logo from './logo.svg';
import './App.css';
//import { Header } rom 'tar';
import {Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Category from "./routes/Category";
import Artist from "./routes/Artist";
import Blog from "./routes/Blog";

function App() {
  return (
    <>
    <div className="App">
      <Routes>
         <Route path='/' element={<Home/>}/>  
         <Route path='/about' element={<About/>}/>       
         <Route path='/category' element={<Category/>}/>          
         <Route path='/artist' element={<Artist/>}/>        
         <Route path='/blog' element={<Blog/>}/>      
      </Routes>
    </div>
    </>
  );
}

export default App;

