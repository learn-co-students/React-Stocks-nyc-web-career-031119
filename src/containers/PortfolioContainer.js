import React, { Component } from 'react';
import Stock from '../components/Stock'


class PortfolioContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div >
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(stock =>
            <Stock stocks={stock} handleRemove={this.props.handleRemove}/>)
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
