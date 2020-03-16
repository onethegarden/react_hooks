export const useClick = (onClick) =>{
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