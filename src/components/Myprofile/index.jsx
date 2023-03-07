import React, { useEffect } from 'react'
import "./index.scss"
export default function Myprofile() {
  return (
    <div id="profile_container">
      <div id="personal_information_container">
        <div id="profile_img">
        </div>
        <div id="username">
          <a href="https://github.com/Ronald-Kong">
            @Ronald-Kong
          </a>
        </div>
        </div>
        <audio id="bgm_player" src='./bgm.mp3' autoPlay loop></audio>
    </div>
  )
}
