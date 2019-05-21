import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(s => s.owned ? null : <Stock stock={s} key={s.id} buySell={this.props.buySell}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
