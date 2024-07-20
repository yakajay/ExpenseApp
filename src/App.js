import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Signin/>} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </Router>
    );
};

export default App;
