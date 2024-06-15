import React from "react";
import './styles.css';


function Props({img, title, provider}) {
    return (


        <div className="body">
            <div className="container">
                <img src={img} alt="" />
                <h1>{title}</h1>
                <p>{provider}</p>
            </div>


        </div>
    );
}

export default Props