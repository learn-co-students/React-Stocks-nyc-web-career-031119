import React, { Component } from 'react';


class SearchBar extends Component {

  state = {
    alpha: true,
    price: null,
    filter: null
  };

  handleFilterChange = e => {
    this.props.filter(e.target.value)
  };

  handleSortChange = e => {
    const value = e.target.value;
    if (value === 'Alphabetically') {
      this.setState({
        alpha: true,
        price: false
      });
      this.props.sort(value);
    } else if (value === 'Price') {
      this.setState({
        alpha: false,
        price: true
      });
      this.props.sort(value);
    }

  };

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.alpha} onChange={this.handleSortChange}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.price} onChange={this.handleSortChange}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.handleFilterChange}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
}

// const SearchBar = () => {
//   return (
//     <div>
//
//       <strong>Sort by:</strong>
//       <label>
//         <input type="radio" value="Alphabetically" checked={null} onChange={null}/>
//         Alphabetically
//       </label>
//       <label>
//         <input type="radio" value="Price" checked={null} onChange={null}/>
//         Price
//       </label>
//       <br/>
//
//       <label>
//         <strong>Filter:</strong>
//         <select onChange={null}>
//           <option value="Tech">Tech</option>
//           <option value="Sportswear">Sportswear</option>
//           <option value="Finance">Finance</option>
//         </select>
//       </label>
//     </div>
//   );
// };

export default SearchBar;
