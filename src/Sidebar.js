//rfce
import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                   <Avatar className="sidebar_avatar"   />
                   <h2>Janith Rathnayaa</h2>
                   <h4>janithrathnayaka@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                   <div className="sidebar_stat">
                      <p>Who views you</p>
                      <p className="sidebar_statNumber">2,543</p>
                   </div>
                   <div className="sidebar_stat">
                      <p>Views on post</p>
                      <p className="sidebar_statNumber">2,500</p>
                   </div>
            </div>

            <div className="sidebar_bottom">
                    <p>Recent</p>

            </div>
        </div>
    )
}

export default Sidebar
