// TODO: Generate a random card out of the cardbox (easy)
// TODO: Separate cards with tier, Change their probability
// TODO: Add a Clock, let user draw after 1 hour.
// TODO: Implement firebase
// TODO: Implement user login and profile
// TODO: add trading support

import React from "react";
import Sidebar from "./Components/Sidebar";
import Cardbox from "./Components/Cardbox";
import { useEffect } from 'react'
import "./App.css";
import { currentTime } from './scripts/date'

const postData = async(e) => {
    e.preventDefault();
    const res = await fetch(
        "https://animecardgame1-default-rtdb.asia-southeast1.firebasedatabase.app/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: { }
        }
    )
}

const discord_colors = {
col1: "#1e2124",
col2: "#282b30",
col3: "#36393e",
col4: "#424549",
col5: "#7289da",
};

const App = () => {
 useEffect( ()=>{
        console.log(currentTime())
        }
    )
  return (
    <div className="container-fluid myContainer">
      <div className="row">
        <div
          className="Sidebar col-3 sticky-top"
          style={{ backgroundColor: discord_colors.col1, color: "white" }}
        >
          <Sidebar />
        </div>
        <div
          className="Cardbox col"
          style={{ backgroundColor: discord_colors.col2, color: "white" }}
        >
          <Cardbox />
        </div>
      </div>
    </div>
  );
};
export default App;
