import React from 'react'

const Sidebar = () => {
    const title = "The Anime Card Game"
    return (
        <div className="container py-4">
            <h4>{title}</h4>
            <hr/>
            <div className="row">
                <Profile/>
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div>
            Sign in to save progress.
        </div>
    )
}

export default Sidebar;