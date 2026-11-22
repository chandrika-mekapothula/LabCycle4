import React from 'react'
import type{Profile} from '../types/profile.type'
const ProfileCard = ({id,name,role,bio}:Profile) => {
  return (
  
    <>
        <div className='profile'>
            <h2>{id}</h2>
            <h1>{name}</h1>
            <h3>{role}</h3>
            <p>{bio}</p>
        </div>
    </>

  )
}

export default ProfileCard