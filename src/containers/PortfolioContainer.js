import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  handleClick = (stock) => {
    this.props.sellStock(stock);
  }

  generateStockCards = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} handleClick={() => {this.handleClick(stock)}}/>
    });
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.generateStockCards()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
