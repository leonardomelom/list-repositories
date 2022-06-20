import React from 'react';
import '../index.css';
export function Counter(props) {
  const [ count, setCount ] = React.useState(0);
  const showCountState = document.getElementById("counter");
  
  function increment(){
      showCountState.innerHTML = 'contando!';
      setCount((state) => {
        return state + 1
      })
  }

  function removeElement(){
    showCountState.innerHTML = 'removendo';
    setCount((state) => {
      return state - 1
    })
  }
  
return (
    <div>
      <h1 id="counter"></h1>
      <h2>{count}</h2>
      <button type='button' onClick={increment}>Increment</button>
      <button type='button' id="remove" onClick={removeElement}>Remove</button>
    </div>
  );
}

 
