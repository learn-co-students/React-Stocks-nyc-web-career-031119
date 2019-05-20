import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filters: "All"
  }

  componentDidMount(){
    fetch(`http://localhost:3000/stocks`)
    .then(res => res.json())
    .then(data => this.setState({stocks: data}, console.log('here', this.state)))
  }

  handleClick = (stock) => {
      this.setState({portfolio: [...this.state.portfolio, stock]})

  }

  handleRemove = (id) => {
    // console.log(id.target);
    const filter = this.state.portfolio.filter(stock => {
      return  stock !== id})
      console.log(filter);
        this.setState({portfolio: filter})
  }

  handleSort = () => {
    let test = this.state

    this.setState({stocks: test.stocks.sort(function(a, b){
      return a.name.localeCompare(b.name)}
    )})
  }

  handlePrice = () => {
    this.setState({stocks: this.state.stocks.sort((a, b) => {
      return a.price-b.price
    })})
  }

  handleFilter = (e) => {
    console.log(e.target.value)
    this.setState({filters: e.target.value})
  }

  render() {

    const filtered = this.state.stocks.filter(stock => {
      if (this.state.filters === "All"){
        return stock
      }else {
        return stock.type === this.state.filters
      }
    })

    return (
      <div>
        <Header/>
        <MainContainer
        stocks={filtered}
        portfolio={this.state.portfolio}
        handleClick={this.handleClick}
        handleRemove={this.handleRemove}
        alpha={this.handleSort}
        price={this.handlePrice}
        filter={this.handleFilter}/>
      </div>
    );
  }
}

export default App;
