import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const STOCKS_URL = 'http://localhost:3000/stocks';

class MainContainer extends Component {

  state = {
    stocks: [],
    purchasedStocks: [],
    filterTerm: null
  }

  componentDidMount() {
    fetch(STOCKS_URL)
      .then(res => res.json())
      .then(stocksData => {
        this.setState({ stocks: stocksData });
      })
      .catch(error => {
        alert(error.message);
        console.log(error.message);
      })
  }

  sortByAlphabet = () => {
    let alphatized = [...this.state.stocks].sort(function(a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({ stocks: alphatized });
  }

  sortByPrice = () => {
    let priceSorted = [...this.state.stocks].sort((a, b) => {
      return a.price - b.price
    });
    this.setState({ stocks: priceSorted });
  }

  purchaseStock = (stock) => {
    const myStocks = this.state.purchasedStocks.map(stock => stock.id);
    if (myStocks.includes(stock.id)) {
      alert("You already bought this stock. You only get one share. :(")
    } else {
      this.setState((state, props) => {
        return { purchasedStocks: [...this.state.purchasedStocks, stock] }
      })
    }
  }

  sellStock = (clickedStock) => {
    let array = [...this.state.purchasedStocks].filter(stock => {
      return stock.id !== clickedStock.id
    })
    this.setState({ purchasedStocks: array });
  }

  filterStocks = (e) => {
    this.setState({ filterTerm: e.target.value });
  }

  render() {
    console.log("stocks: ", this.state.stocks);
    console.log("purchasedStocks: ", this.state.purchasedStocks)
    const filteredStocks = this.state.stocks.filter(stock => {
      if (this.state.filterTerm) {
        return stock.type === this.state.filterTerm;
      } else {
        return stock;
      }
    })
    return (
      <div>
        <SearchBar sortByAlphabet={this.sortByAlphabet} sortByPrice={this.sortByPrice} filterStocks={this.filterStocks} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={filteredStocks} purchaseStock={this.purchaseStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.purchasedStocks} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
