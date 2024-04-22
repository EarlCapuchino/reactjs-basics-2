import React, { useState } from 'react';

function Ternary() {
  const [isHello, setIsHello] = useState(true);  // State to toggle between texts


  return (
    <div>
      {isHello ? <p>Hello</p> : <p>Goodbye</p>}  
      <button onClick={() => setIsHello(!isHello)}>Toggle</button>  
    </div>
  );
}


export default Ternary;