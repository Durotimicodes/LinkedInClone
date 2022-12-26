import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    //  sidebar container
    <div className='sidebar'>

        {/* sidebar top */}
        <div className='sidebar__top'>
            <img src='' alt=''/>
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

        </div>
    </div>
  )
}

export default Sidebar