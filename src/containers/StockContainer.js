import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  handleClick = (stock) => {
    this.props.purchaseStock(stock);
  }

  generateStockCards = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} handleClick={() => {this.handleClick(stock)}} />
    });
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.generateStockCards()
        }
      </div>
    );
  }

}

export default StockContainer;
