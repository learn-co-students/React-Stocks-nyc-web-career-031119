import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock handleClick={() => this.handleClick(stock)} stock={stock} key={stock.id}  />
    })
  };

  handleClick = stock => {
    this.props.buyStock(stock)
  };

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
