import React from 'react';
import tornado from './assets/tornado.gif';
import Home from './homepage';
import './background.css';

export default function Background(){
    const isMobile = window.innerWidth <= 450;

    return (
        <div className="homepage">
            { isMobile && <img className="background" src={ tornado }  alt="tornado Background" /> }
            <Home/>
        </div>
    );
}