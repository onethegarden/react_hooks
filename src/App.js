import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [item, setItem]= useState(1);
  const increamentItem =()=>setItem(item +1);
  const decreamentItem =()=> setItem(item-1);
  return (
    <div>
     <h1> Hello {item}</h1>
      <button onClick={increamentItem}>Increament</button>
      <button onClick={decreamentItem}>Decreament</button>
    </div>
  );
}

export default App;
