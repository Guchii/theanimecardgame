// TODO: Separate cards with tier, Change their probability
// TODO: Implement firebase
// TODO: Implement user login and profile
// TODO: add trading support

import React, { useEffect } from "react"
import Sidebar from "./Components/Sidebar"
import Cardbox from "./Components/Cardbox"
import "./App.css"

const discord_colors = {
    col1: "#1e2124",
    col2: "#282b30",
    col3: "#36393e",
    col4: "#424549",
    col5: "#7289da",
}

const App = () => {
    useEffect(() => {
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault()
        })
    }, [])
    return (
        <div className="container-fluid myContainer">
            <div className="row">
                <div
                    className="Sidebar col-3 sticky-top"
                    style={{
                        backgroundColor: discord_colors.col1,
                        color: "white",
                    }}
                >
                    <Sidebar />
                </div>
                <div
                    className="Cardbox col"
                    style={{
                        backgroundColor: discord_colors.col2,
                        color: "white",
                    }}
                >
                    <Cardbox />
                </div>
            </div>
        </div>
    )
}
export default App
