import React, {useState, useEffect} from 'react';
import './App.css';

const useTitle = (initialTitle)=>{
  const [title, setTitle]= useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("Loading...");
  return (
    <div>
      <div>Hi</div>
    </div>
  );
}

export default App;
