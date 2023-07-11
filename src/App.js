
import React from 'react';
import './index.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./componant/Home";
import About from "./componant/About";
import Gallery from './componant/Gallery';
import Contact from './componant/Contact';
import Blogpageleft from './componant/Blogpageleft';
import Eventpage from './componant/Eventpage';
import Blogpageright from './componant/Blogpageright';
import Blogpagefull from './componant/Blogpagefull';
import Runcamppage from './componant/Runcamppage';

function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        {/* <Route path="/event" element={ <Event/> } /> */}
        <Route path="/event" element={<Eventpage/>}/>
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/blogleft" element={<Blogpageleft/>}/>
        <Route path="/blogright" element={<Blogpageright/>}/>
        <Route path="/blogfull" element={<Blogpagefull/>}/>
        <Route path='/runcamp' element={<Runcamppage/>}/>



      </Routes>
    </div>
  );
}

export default App;
