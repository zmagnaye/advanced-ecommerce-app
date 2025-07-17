import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <nav>
        <Link to = "/"> Home </Link> | <Link to = "/cart"> Cart </Link>
      </nav>

      <Routes>
        <Route path="/" element = { <Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
