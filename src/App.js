import React, {useState, useRef, useEffect} from 'react';
import './App.css';


const useFullScreen  = () =>{
  const element = useRef();
  const triggerFull = () =>{
    if(element.current){
      element.current.requestFullScreen();
    }
  }
  const exitFull = () =>{
    document.exitFullscreen();
  }
  return { element, triggerFull, exitFull};
}
const App = () => {
  const { element, triggerFull,exitFull } = useFullScreen();
  return (
    <div >
      <div ref={element}>
      <img 
        ref={element}
        src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*"
      />
      <button onClick={triggerFull}>Make fullscreen</button>
      <h1 >hello</h1>
      </div>
      <button onClick={exitFull}>Exit fullscreen</button>
    </div>
  );
}

export default App;
