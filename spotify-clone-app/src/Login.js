import React from 'react';
import './Login.css';
import logo from './assets/images/Spotify_Logo_RGB_Green.png'

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="Logo"/>
            <a>LOGIN WITH SPOTIFY</a>
            {/* Spotify logo */}
            {/* Login with Spotify button */}
        </div>
    );
}

export default Login;