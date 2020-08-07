import React from 'react';
import './Login.css';
import logo from './assets/images/Spotify_Logo_RGB_Green.png';
import { loginUrl } from './spotify';

function Login() {
    return (
        /* Redirect to Spotify login */
        <div className="login">
            <img src={logo} alt="Logo"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;