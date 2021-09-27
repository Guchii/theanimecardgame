import React from 'react';

const Sidebar = () => {
    const title = "The Anime Card Game"
    return (
        <div className="container py-4">
            <h4>{title}</h4>
            <hr />
            <div className="row">
                <Profile />
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div className="sticky-bottom">
            <div className="row">
                <ul style={{ listStyle: 'none', }} >
                    <li>Shivom Srivastava</li>
                    <li>4 cards</li>
                    <li>1001 XP</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
