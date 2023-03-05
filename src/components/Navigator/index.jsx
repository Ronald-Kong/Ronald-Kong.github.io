import React,{useEffect,useRef,useState} from 'react'
import "./index.scss"

export default function Navigator() {
  const bgm_dom=useRef(null)
  const [interact_done,setInteract]=useState(false)

  useEffect(()=>{
    bgm_dom.current=document.getElementById("bgm_player")
    window.addEventListener("mousedown",()=>{setInteract(true)})
  },[])

  useEffect(()=>{
    if(interact_done)
    bgm_dom.current.play();
  },[interact_done])


  return (
    <div id="navigator_container">
        Welcome to my blog!
    <audio id="bgm_player" src='./bgm.mp3' autoPlay loop></audio>
    </div>
  )
}
