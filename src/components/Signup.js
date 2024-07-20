import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.scss'; 

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reenterpassword, setReenterPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Handle signup logic (e.g., API call, validation)
        console.log('Signup clicked');
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <input type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Re-enter Passowrd" value ={reenterpassword} onChange={(e) => setReenterPassword(e.target.value)} />
                <input type='mobile number' placeholder='Mobile Number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </form>
        </div>
    );
};

export default Signup;
