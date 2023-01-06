import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import './Header.css'

function Header() {
  return (
    <div className="header">
        
        <div className='header__left'>
            <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' alt=''/>

            <div className='header__search'>
                <SearchIcon/>
                <input type="text"></input>
            </div>

        </div>
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Messaging"/>
            <HeaderOption Icon={ChatIcon} title="Chat"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="me"/>
        </div>
    </div>
  );
}

export default Header