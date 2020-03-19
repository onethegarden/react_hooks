import React, {useRef, useEffect} from 'react';
import './App.css';

const useBeforeLeave = (onBefore) => {
  /*if(typeof onBefore !=="function"){
    return;
  }*/
  const handle = (event) => {
    const {clientY} = event;
    if(clientY <= 0){
      onBefore();
    }
  }
  useEffect(()=>{
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  },[])
}

const App = () => {
  const beForLife = () => {
    console.log("please dont leave");
  }
  useBeforeLeave(beForLife);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
