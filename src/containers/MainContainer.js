import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    // console.log("mc", this.props);

    return (
      <div>
        <SearchBar alpha={this.props.alpha} price={this.props.price} filter={this.props.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} handleClick={this.props.handleClick} handleFilter={this.props.filter} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.props.portfolio} handleRemove={this.props.handleRemove}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
