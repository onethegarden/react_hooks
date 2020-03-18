import React, {useRef, useEffect} from 'react';
import './App.css';

const usePreventLeave = () =>{
  const listener = event =>{
    event.preventDefault();
    event.returnValue = "";
  } 
   const enablePrevent = () => window.addEventListener("beforeunload",listener);
   const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);
   return {enablePrevent, disablePrevent};
}

const App = () => {
  const {enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
}

export default App;
