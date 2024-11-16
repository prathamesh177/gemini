import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context';
const Sidebar = () => {
  const[extended,setExtented]=useState(false);
  const {onSent , prevPrompts,setRecentPropmpts}=useContext(Context)



  return (
    <div>
      <div>
      <div className='sidebar'>
        <div className='top'>
          <img onClick={()=>setExtented(prev=>!prev)}  className='menu' src={assets.menu_icon}  />
          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended? <p>New Chat</p>:null}
          </div>
          {extended ?
          <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>Question</p>
          </div>
        </div>:null
        
        }
          
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p>:null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
           {extended?<p>History</p>:null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Settings</p>:null}
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
