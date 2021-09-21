import React from 'react'
import Card from './Card'

const NothingToShow = () => <p className="disMessage">No Cards to Display</p>

const HeroData = [{
  name: "Uzumaki Naruto",
  desc: "Nice Baryon Mode Boom Bam",
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fec%2Fb1%2F17%2Fecb117005126029c219328003f32f81e.jpg&f=1&nofb=1',
  power_level: 100,
},
{
  name: "Uchiha Sasuke",
  desc: "Rinnegan OP bhai Op",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2F4bec%2Fi%2F2018%2F213%2Fb%2F8%2Fsasuke_with_susanoo_colored_by_levi_ackerman_heicho-dcix5za.jpg&f=1&nofb=1",
  power_level: 100,
}]

function Cardbox() {
  let available = true;
  // available = false;
  return (
    <div className="container py-4">
      <div className="row">
        <h4 className='col'>Your Box</h4>
        <button className="btn btn-dark btn-sm dcolor col">Draw a card</button>
      </div>

      <hr />
      <div className="row">
        {available ?<> <Card HeroData={HeroData[0]}/> <Card HeroData={HeroData[1]}/></>: <NothingToShow />}
      </div>
    </div>
  )
}
export default Cardbox
