import React from 'react'

const Stock = (props) => (
    <div className="card" onClick={() => props.handleClick(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{
          props.stock.name
          }</h5>
        <p className="card-text">{
          props.stock.price
          }</p>
      </div>
    </div>
);

export default Stock
