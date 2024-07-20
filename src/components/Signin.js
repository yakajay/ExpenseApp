import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signin.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic (e.g., API call, validation)
        console.log('Login clicked');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </form>
        </div>
    );
};

export default Login;
