import React from 'react'
import ProfileCard from './ProfileCard'
import { profiles } from '../data/static'
const Profiles = () => {
    return (
        <div className='profile-cards'>
            {
                profiles.map((profile) => (
                    // <ProfileCard id={profile.id} name={profile.name} role={profile.role} bio={profile.bio} />
                    <ProfileCard {...profile}/>
                ))
            }

        </div>
    )
}

export default Profiles