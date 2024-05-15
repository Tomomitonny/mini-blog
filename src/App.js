import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  Blog  from './Blog';
import Home from './Home';
import  Details  from './Details';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/details/:id"  element={
              <Details />
            } />

        </Routes>
      </Router>

        

    </>
  );
}

export default App;
