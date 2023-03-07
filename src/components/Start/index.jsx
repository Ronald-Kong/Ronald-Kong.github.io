import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.scss"

export default function Start() {
    let navigate=useNavigate();
    const Go=()=>{
        navigate("/content/programs")
    }
  return (
    <div className='start_container' onClick={Go}>
        <div className="start_text_container">
            <div className='start_text'>欢迎来到我的博客</div>
            <div className='start_text'>Welcome to my blog</div>
            <div className='start_text'>请点击任意键进入</div>
            <div className='start_text'>Please click any key to enter</div>
        </div>
    </div>
  )
}
