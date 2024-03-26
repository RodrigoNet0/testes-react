import { ReactDOM } from "react";
import React, { useState } from 'react';

function Home() {
    const [color, setColor] = useState('black');

    const handleClick = () => {
        setColor('blue');
    }

    return (
        <button id="btn" onClick={handleClick} style={{color: color}}> Click aqui papangu</button>
    );
}

export default Home;
