import React, {useRef, useEffect} from 'react';
import './App.css';

const useClick = (onClick) =>{
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return () =>{
      element.curruent.removeEventlistner("click" , onClick);
    }
  },[])
  return element;
}

const App = () => {
  const sayHello = () =>console.log("sayHello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref ={title} >hi</h1>
    </div>
  );
}

export default App;
