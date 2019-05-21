import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = 'http://localhost:3000/stocks';

class App extends Component {
  state = {
    all: [],
    stocks: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      let newStocks = data.map(s => ({...s, owned:false}));
      // console.log(newStocks);
      this.setState({all:newStocks})
      this.setState({stocks:this.state.all});
    })
  }

  filterByType = (e) => {
    let filtered = this.state.all.filter(s => s.type === e.target.value);
    this.setState({stocks:filtered});
  }

  buySell = (id) => {
    // console.log('ya done clicked', id);
    let updatedStocks = this.state.stocks.map(
      s => {
      if (s.id === id) {
          return {...s, owned: !s.owned}
        } else {
          return s
        }
      }
    );
    this.setState({stocks:updatedStocks});
  }

  sortAlphabetically = (e) => {
    if(e.target.value){
      let alphabetical = this.state.stocks.sort((a,b) => a.name > b.name ? 1 : -1);
      this.setState({stocks: alphabetical});
    } else {
      this.setState({stocks:this.state.all})
    }
    console.log('sorting alphabetically');

  }

  sortByPrice = (e) => {
    if(e.target.value){
      let byPrice = this.state.stocks.sort((a,b) => a.price - b.price);
      this.setState({stocks: byPrice});
    } else {
      this.setState({stocks:this.state.all})
    }
    console.log('sorting by price');
  }

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.state.stocks}
          buySell={this.buySell}
          filterByType={this.filterByType}
          alphaSort={this.sortAlphabetically}
          priceSort={this.sortByPrice}
        />
      </div>
    );
  }
}

export default App;
