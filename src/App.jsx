import React from 'react';
import { Outlet } from 'react-router-dom';
import "./App.scss"
import Myprofile from './components/Myprofile';
import Navigator from './components/Navigator';
export default function App() {
  return (
    <div>
       <div className='base'>
        <div className='profile'>
          <Myprofile />
        </div>
        <div className='right_side'>
          <div className="top_bar">
          <Navigator />
          </div>
          <div className='main_content'>
          <Outlet/>
          </div>
        </div>
       </div>
    </div>
  );
}
