import React from 'react'
import './Achievements.css'

function Achievements() {
  return (
    <div className="container-achievements">
      <div className="card-items">
    <div className="item item--1">
      <span className="quantity">5+</span>
      <span className="text text--1">Years Of Success</span>
    </div>
    <div className="item item--2">
      <span className="quantity">100+</span>
      <span className="text text--2">Sales</span>
    </div>
    <div className="item item--3">
      <span className="quantity">$1.5 M</span>
      <span className="text text--3">Components</span>
    </div>
    <div className="item item--4">
      <span className="quantity">3</span>
      <span className="text text--4">Winning Awards</span>
    </div>
  </div></div>
    
  )
}

export default Achievements