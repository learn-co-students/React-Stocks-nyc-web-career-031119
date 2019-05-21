import React from 'react'

const Stock = (props) => {
  let handleClick = () => {
    props.buySell(props.stock.id)
  }

  return (
  <div>
    <div className="card" onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">
            {props.stock.ticker} : {props.stock.price}
          </p>
      </div>
    </div>


  </div>
)};

export default Stock
