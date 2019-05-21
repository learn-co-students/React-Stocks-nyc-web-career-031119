import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderUserStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock  stock={stock} key={stock.id} handleClick={() => this.handleClick(stock)}/>
    })
  };

  handleClick = stock => {
    this.props.sellStock(stock)
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        { this.renderUserStocks() }
      </div>
    );
  }
}

export default PortfolioContainer;
