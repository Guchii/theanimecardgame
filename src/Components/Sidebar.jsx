import React from "react"
import { useSelector } from "react-redux"

const Sidebar = () => {
    const title = "The Anime Card Game"
    return (
        <div className="container-fluid py-4">
            <h4>{title}</h4>
            <hr />
            <div className="row">
                <Profile />
            </div>
        </div>
    )
}

const Profile = () => {
    const userInfo = useSelector((state) => state.userInfoReducer)
    const userCards = useSelector((state) => state.userCardsReducer)
    return (
        <>
            <div className="col-lg-2 col-sm-12 profileImage ">
                <img
                    src={userInfo.image}
                    className="rounded-circle"
                    alt=""
                    style={{ height: "3em", width: "3em" }}
                />
            </div>
            <div className="col-lg-10 col profileData">
                <span>Shivom Srivastava</span>
                <br />
                <span>{userCards.length} cards</span>
            </div>
        </>
    )
}

export default Sidebar
