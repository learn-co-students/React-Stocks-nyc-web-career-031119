import React from 'react';

class SearchBar extends React.Component {

  state = {
    aphabetButton: null,
    priceButton: null,
    selectedType: null
  }

  handleSortChange = (e) => {
    if (e.target.value === "Alphabetically") {
      this.setState({
        alphabetButton: true,
        priceButton: false
      })
      this.props.sortByAlphabet();
    } else if (e.target.value === "Price") {
      this.setState({
        alphabetButton: false,
        priceButton: true
      });
      this.props.sortByPrice();
    }
  }

  render() {

    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.alphabetButton} onChange={this.handleSortChange}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.priceButton} onChange={this.handleSortChange}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.props.filterStocks}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>


      </div>
    );
  }
}


export default SearchBar;
