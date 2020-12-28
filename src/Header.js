import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className='header'>
       
            <div className="header_left">
                 <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                 <div className="header_search">
                     <SearchIcon />
                     <input type="text" />
                 </div>
            </div>

            <div className="header_right">
                 <HeaderOption Icon={HomeIcon} title="Home" /> 
                 <HeaderOption Icon={SupervisorAccountIcon} title="My Network" /> 
                 <HeaderOption Icon={BusinessCenterIcon} title="Jobs" /> 
                 <HeaderOption Icon={ChatIcon} title="Messanging" /> 
                 <HeaderOption Icon={NotificationsIcon} title="Notifications" /> 
                 <HeaderOption avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="me" /> 
            </div>
        </div>
    )
}

export default Header
