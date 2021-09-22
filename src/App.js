// TODO: Generate a random card out of the cardbox (easy)
// TODO: Separate cards with tier, Change their probability
// TODO: Add a Clock, let user draw after 1 hour.
// TODO: Implement firebase
// TODO: Implement user login and profile
// TODO: add trading support

import React from 'react'
import Sidebar from './Components/Sidebar';
import Cardbox from './Components/Cardbox';
import './App.css'
import {useSelector, useDispatch} from 'react-redux';

const discord_colors = {
    'col1': '#1e2124',
    'col2': '#282b30',
    'col3': '#36393e',
    'col4': '#424549',
    'col5': '#7289da'
}
const App = () => {
    const HeroData= useSelector((state)=> state.changeAllCards);
    const userData= useSelector((state)=> state.changeUserCards);
    const dispatch = useDispatch();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="Sidebar col-3" style={{'background-color': discord_colors.col1, color: 'white'}}>
                    <Sidebar/>
                </div>
                <div className="Cardbox col" style={{'background-color': discord_colors.col2, color: 'white'}}>
                    <Cardbox HeroData={HeroData} userData={userData}/>
                </div>
            </div>
        </div>

    );
}

export default App;