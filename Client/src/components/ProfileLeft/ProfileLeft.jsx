import React from 'react'
import LogoSearch from '../LeftSide/LogoSearch/LogoSearch'
import FollowersCard from '../LeftSide/FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}
export default ProfileLeft