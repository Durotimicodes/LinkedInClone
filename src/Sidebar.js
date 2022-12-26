import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

  return (

    //  sidebar container
    <div className='sidebar'>

        {/* sidebar top */}
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Edmond Fagbuyi</h2>
            <h4>edmondfagbuyi@gmail.com</h4>
        </div>

        {/* sidebar stats */}
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,500</p>
            </div>
            <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,400</p>
            </div>
        </div>

        {/* sidebar bottom */}
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("softwareengineering")}
            {recentItem("projectmanagement")}
            {recentItem("scrummaster")}
            {recentItem("golang")}
        </div>
    </div>
  )
}

export default Sidebar