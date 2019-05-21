import React from 'react';

class SearchBar extends React.Component {
  state = {
    alpha: false,
    price: false
  }

  toggleSort = (e) => {
    const sorted = e.target.value
    if (e.target.value === "Alphabetically") {
      this.setState( {alpha: true, price: false}, () => this.props.toggleSort(sorted))
    } else if (e.target.value === "Price") {
      this.setState({alpha: false, price: true}, () => this.props.toggleSort(sorted))
    }
  }

  render () {

    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.alpha} onChange={this.toggleSort}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.price} onChange={this.toggleSort}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.props.handleDropDown}>
            <option value="All">All</option>
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
