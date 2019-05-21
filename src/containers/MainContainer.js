import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state= {
    filteredStocks: [],
    portfolio: [],
    allStocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(data => this.setState({allStocks: data, filteredStocks: data}))
  }

  handlePurchase = (purchasedStock) => {
    const fil = this.state.filteredStocks.filter(stock => {
      return stock.id !== purchasedStock.id
    })
    this.setState({filteredStocks: fil, portfolio: [...this.state.portfolio, purchasedStock]}, () => console.log(this.state))
  }

  handleSale = (soldStock) => {
    const fil = this.state.portfolio.filter(stock => {
      return stock.id !== soldStock.id
    })
    this.setState({portfolio: fil, filteredStocks: [...this.state.filteredStocks, soldStock]}, () => console.log(this.state))
  }

  handleDropDown = (e) => {
    if (e === undefined || e.target.value === "All"){
      this.setState({filteredStocks: this.state.allStocks})
    } else {
      const filterStocks = this.state.allStocks.filter(stock => {
        return stock.type === e.target.value
      })

      this.setState({filteredStocks: filterStocks})
    }
  }

  toggleSort = (sortedValue) => {
    console.log(sortedValue)
    if (sortedValue === "Alphabetically"){
      const sortedAlphaStocks = this.state.filteredStocks.sort((a, b) => {
        return a.name > b.name ? 1 : -1
      })
      this.setState({filteredStocks: sortedAlphaStocks})
    } else if (sortedValue === "Price"){
      const sortedPriceStocks = this.state.filteredStocks.sort((a, b) => {

        return b.price - a.price
      })
      console.log(sortedPriceStocks)
      this.setState({filteredStocks: sortedPriceStocks})
    }
  }

  render() {
    return (
      <div>
        <SearchBar handleDropDown={this.handleDropDown} toggleSort={this.toggleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filteredStocks} handlePurchase={this.handlePurchase}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} handleSale={this.handleSale}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
