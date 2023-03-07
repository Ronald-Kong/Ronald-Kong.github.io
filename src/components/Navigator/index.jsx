import React,{useEffect,useRef,useState,useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import "./index.scss"


export default function Navigator() {
  const arr=useRef(document.getElementsByClassName("navigator_items"));
  const [selected,setSelected]=useState(null);
  const navigate=useNavigate();

  useEffect(()=>{
    setSelected(arr.current[0]);
  },[])


  useEffect(()=>{
    if(selected!==null)
    {
      selected.style["border-bottom"]="2px solid #9c9773";
    }
  },[selected])

  const changeSelected=(e)=>{
    if(e.target!==selected)
    {
      console.log(111)
      selected.style["border-bottom"]="";
      setSelected(e.target);
      navigate(`/content/${e.target.id}`)
    }
  }

  return (
    <div id="navigator_container">
        <div className="navigator_items" id="programs"onClick={changeSelected}>Programs</div>
        <div className="navigator_items" id="assignments" onClick={changeSelected}>Assignments</div>
    </div>
  )
}
