import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log("sc", this.props);
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock =>(
          //render the list of stocks here
          // console.log("sc", this.props)

           <Stock key={stock.id} stocks={stock} handleClick={this.props.handleClick} sold={this.props.sold}/>))
        }
      </div>

    )
  }

}

export default StockContainer;
