import React, { useState, useEffect } from 'react'
import Card from './Card'
import { drawCard } from '../scripts/generateRandomCard'

const NothingToShow = () => <p className="disMessage">No Cards to Display</p>

//This array contains all the character cards
const HeroData = [{
  name: "Uzumaki Naruto",
  desc: "Nice Baryon Mode Boom Bam",
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic2.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F03%2FNaruto-Cover.jpg&f=1&nofb=1',
  power_level: 90,
},
{
  name: "Uchiha Sasuke",
  desc: "Rinnegan OP bhai Op",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2F4bec%2Fi%2F2018%2F213%2Fb%2F8%2Fsasuke_with_susanoo_colored_by_levi_ackerman_heicho-dcix5za.jpg&f=1&nofb=1",
  power_level: 90,
},
{
  name: "Big Chungus",
  desc: "Very big",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdbxfanon%2Fimages%2F5%2F5d%2FBig_chungus_vector_by_vexikkk_dcv33c0-pre.png%2Frevision%2Flatest%2Fscale-to-width-down%2F490%3Fcb%3D20190208025911&f=1&nofb=1",
  power_level: 10000
},
{
  name: "Midoriya Izuku",
  desc: "Deku bhai nice one for all",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic2.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F11%2FDeku-Symbol-Featured-Image.jpg&f=1&nofb=1",
  power_level: 90
},
]

const Cardbox = () => {
  const [userData, updateUserData] = useState([]);
  useEffect(() => {
    alert("all cards loaded");
  }, [])

  const addCard = () => {
    updateUserData([...userData, drawCard(HeroData)]);
  }

  let available = userData.length; //boolean

  return (
    <div className="container py-4">
      <div className="row">
        <h4 className='col'>Your Box</h4>
        <button className="btn btn-dark btn-sm dcolor col" onClick={addCard}>Draw a card Total Cards available: {HeroData.length}</button>
      </div>

      <hr />
      <div className="row">
        {available ?
          userData.map((Hero) => {
            return <Card HeroData={Hero} />
          }) : <NothingToShow />}
      </div>
    </div>
  )
}
export default Cardbox