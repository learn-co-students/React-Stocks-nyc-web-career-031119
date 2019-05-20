import React from 'react'

const Stock = (props) => {
  const {name, ticker, price, id} = props.stocks
  // console.log(props.stocks);
  return(
    <div>
      <div className="card" onClick={props.handleClick? ()=>props.handleClick(props.stocks) : ()=>props.handleRemove(props.stocks)} >
        <div className="card-body"  >
          <h5 className="card-title">{
              //Company Name
              name
            }</h5>
          <p className="card-text">{
            // console.log(props.stocks)

              ticker } : { price }
            </p>
        </div>
      </div>
    </div>
  );
};

export default Stock
