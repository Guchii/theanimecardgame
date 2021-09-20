import React from 'react'
const naruto_image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fec%2Fb1%2F17%2Fecb117005126029c219328003f32f81e.jpg&f=1&nofb=1';
const HeroData = {
  name: "nice",
  desc: "Very nice boom bam",
  image: "nice",
  power_level: 100,
}
const Card = () => {
  return (
    <div className="card myCard bg-light">
      <img src={naruto_image} className="img card-img-top rounded py-2 "
        id="cardImage"
        alt="..." />
      <div className="card-body" style={{ color: 'black' }}>
        <h5 className="card-title">Uzumaki Naruto</h5>
        <p className="card-text">Nice Baryon Mode Boom Bam</p>
      </div>
    </div>
  )
}

export default Card
