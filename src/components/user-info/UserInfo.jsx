import React from 'react'
import './user-info.scss'

export const UserInfo = ({ user, darkMode }) => {
  return (
  
    <div className={`user-info ${darkMode ? 'dark-mode' : ''}`}>
      <div className='user-info__img'>
          <img src={user.img} alt="" />
      </div>
      <div className="user-info__name">
        <span>{user.name}</span>
      </div>
    </div>
  )
}
