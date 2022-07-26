import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

import Home from "./home.js"
import About from "./about.js"
import "./style.css"

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/:imdbID" element={<About />} />
      </Routes>
      </BrowserRouter>
      {/* {
    movies.map((movie) => {
        return <p>{movie.Title}</p>
    })
    } */}
    </>
  );
}


render(<App />, document.getElementById("root"));
