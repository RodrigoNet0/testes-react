import React, { useState } from "react";
 import "./useState.css"



 function Counter() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
  
    return (
      <div className="container">
        <h1>Testes de botões</h1>
        <button onClick={() => setCounter1(counter1 - 1)} className="black">
          {counter1}
        </button>
        <button onClick={() => {setCounter1(0); setCounter3(0)}} className="blue">
          {counter2}
        </button>
        <button onClick={() => setCounter3(counter3 + 1)} className="red">
          {counter3}
        </button>
      </div>
    );
  }
  
  export default Counter;