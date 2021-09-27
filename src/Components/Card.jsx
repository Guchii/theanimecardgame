import React from 'react'
const Card = ({HeroData, count}) => {
const myCardStyle = {
    backgroundImage:`url(${HeroData.image})`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
    width: '200px', height: '275px',
    position: 'relative',
    margin: '8px',
};
    return (
        <div className="myCard shadow bg-light rounded" style={myCardStyle}>
            {(count===1)?'':<div className="counter shadow-sm rounded-circle"><span className="counter2">x{ count }</span> </div>}
            <h4 className="heroName">{HeroData['name']}</h4>
            <div className="heroStats" style={{color: 'black'}}>
                <h5 className="">{HeroData.power_level} {HeroData.tier}</h5>
            </div>
        </div>
    );
}
export default Card;
