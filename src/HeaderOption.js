import React from 'react';
import "./HeaderOption.css";
import {Avatar} from '@mui/material'

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
        {/* if i pass in an icon only then should the component render */}
        {Icon && <Icon className='headerOption__icon'/>}
        {/* if i get pass the condition then go ahead and render the avatar */}
        {avatar && (
          <Avatar className='headerOption__icon' src={avatar}/>
        )}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption