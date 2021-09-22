import React from 'react'

const Card = ({HeroData, count}) => {
    return (
        <div className="card myCard bg-light">
            <img src={HeroData.image} className="img card-img-top rounded py-2"
                 id="cardImage"
                 alt="..."/>
            <div className="card-body" style={{color: 'black'}}>
                <h5 className="card-title">{HeroData['name']} {HeroData.power_level} {HeroData.tier} {count}</h5>
                <hr/>
                <p className="card-text">{HeroData.desc}</p>
            </div>
        </div>
    );
}
export default Card;