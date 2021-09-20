import React from 'react'
import Card from './Card'
function Cardbox() {
  return (
    <div className="container py-4">
        <div className="row">
          <h4 className='col'>Your Cardbox</h4>
          <button className="btn btn-dark btn-sm dcolor col">Draw a card</button>
        </div>

      <hr />
      <div className="cards">
        <p class="disMessage">No Cards To display</p>
      </div>
      <div className="row">
          <Card/>
            </div>
    </div>
  )
}

export default Cardbox

