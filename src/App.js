import React, {useState, useRef, useEffect} from 'react';
import './App.css';


const useNotification =(title, options)=>{
  if(!("Notification" in window)){
    return;
  }
  const fireNotif = ()=>{
    if(Notification.permission!=="granted"){
      Notification.requestPermission().then(permission=>{
        if(permission ==="granted"){
          new Notification(title, options);
        }else{
          return;
        }
      })
    }else{
      new Notification(title, options);
    }
  }
  return fireNotif;
}

const App = () => {
  const triggerNotif = useNotification("can i steal your kimchi", {
    body:"i love kimchi dont you?"
  });
  return (
    <div >
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
}

export default App;
