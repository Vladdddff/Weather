import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Weather from './Components/Weather/Weather';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </div>
    );
}

export default App;
