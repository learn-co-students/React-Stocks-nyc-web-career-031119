import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar
          filterByType={this.props.filterByType}
          alphaSort={this.props.alphaSort}
          priceSort={this.props.priceSort}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.props.stocks}
                buySell={this.props.buySell}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.props.stocks}
                buySell={this.props.buySell}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
