import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className='header'>
                <div className="logo nav-left">
                    Expense Tracker
                </div>
                <div className="nav-items">
                    <div><Link to="/login">Login</Link></div>
                    <div><Link to="/signup">Sign Up</Link></div>
                </div>
            </div>
            <div className='banner'>
                <img src="https://www.shutterstock.com/shutterstock/photos/2136984013/display_1500/stock-photo-woman-tracking-budget-using-fintech-app-on-computer-2136984013.jpg"></img>
            </div>
        </div>
    );
};

export default Home;
