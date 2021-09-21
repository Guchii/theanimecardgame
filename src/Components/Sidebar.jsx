import React from 'react'

function Sidebar() {
  return (
    <div className="container py-4">
      <h4>The Anime Card Game </h4>
      <hr />
      <div className="row">
          <Profile/>
            </div>
    </div>
  )
}

const Profile = () => {
    return(
        <div>
          I am the profile component.  
        </div>
    )
}

export default Sidebar

