import React, {useRef, useEffect} from 'react';
import './App.css';

const useConfirm = (message="", onConfirm, onCancel) => {
 if(!onConfirm || typeof onConfirm !=="function"){
    return;
  }
  if(onCancel && typeof onConfirm !=="function"){
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)){
      onConfirm();
    }else{
      onCancel();
    }
  }
  return confirmAction;
}

const App = () => {
  const deleteWorld = () =>console.log("delete");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("are you sure?", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default App;
