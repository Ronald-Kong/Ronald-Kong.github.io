import React from 'react';
import "./App.scss"
import Myprofile from './components/Myprofile';
import Navigator from './components/Navigator';
import Content from './components/Content';
import Footer from './components/Footer';
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
          <Content />
          </div>
          <div className='footer'>
          <Footer />
          </div>
        </div>
       </div>
    </div>
  );
}
