import React from 'react';

import './App.css';
import Centercontainer from './Centercontainer';





export default function App() {
    return (
        <div className="App">
            <div className="container-sm">
                <div>
                    <Centercontainer defaultCity="Porto" />
                </div>

               
            </div>
        </div>
    );
}