import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="Footer">
            <p>
                This project was coded by
                <a href="https://github.com/evasousa23" target="/" className='footer-link'>
                    Eva Carpinteiro
                </a>
                and is open source {""}
                <a href="https://github.com/evasousa23/react-app-weather-final" target="/" className='footer-link'>
                    {""} on GitHub
                </a>
            </p>
      
        </div>
    );
}