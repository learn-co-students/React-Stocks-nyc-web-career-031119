import React, {Component} from 'react';
import StockContainer     from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar          from '../components/SearchBar'

class MainContainer extends Component {

	state = {
		stocks:     [],
		userStocks: [],
		filter: null
	};

	fetchStocks = () => {
		fetch('http://localhost:3000/stocks')
			.then(r => r.json())
			.then(data => this.setState({stocks: data}))
	};

	componentDidMount() {
		this.fetchStocks()
	}

	handleBuyStock = stock => {
		if (!this.state.userStocks.includes(stock)) {
			this.setState(prevState => ({
				userStocks: [...prevState.userStocks, stock]
			}))
		}
		else {
			console.log("Already in Portfolio")
		}
	};

	sort = value => {
		if (value === 'Alphabetically') {
			const byAlpha = [...this.state.stocks].sort((a, b) => {
				const nameA = a.name.toLowerCase();
				const nameB = b.name.toLowerCase();
				if (nameA < nameB) {
					return -1
				}
				else if (nameA > nameB) {
					return +1
				}
				return 0
			});
			this.setState({
				stocks: byAlpha
			})
		}
		else if (value === 'Price') {
			const byPrice = [...this.state.stocks].sort((a,b) => {
				return b.price - a.price
			});
			this.setState({
				stocks: byPrice
			})
		}
	};

	handleFilter = value => {
		this.setState({
			filter: value
		})

		// const type = value.toLowerCase();
		// if (type === 'tech') {
		// 	console.log(type);
		// 	this.setState({
		// 		stocks: this.state.stocks.filter(stock => stock.type === type)
		// 	})
		// }
		// else if (type === 'sportswear') {
		// 	console.log(type);
		// 	this.setState({
		// 		stocks: this.state.stocks.filter(stock => stock.type === type)
		// 	})
		// }
		// else if (type === 'finance') {
		// 	console.log(type);
		//
		// 	this.setState({
		// 		stocks: this.state.stocks.filter(stock => stock.type === type)
		// 	})
		// }
	};

	filterStocks = () => {
		if (this.state.filter) {
			return this.state.stocks.filter(stock => stock.type === this.state.filter)
		}
		return this.state.stocks
	};

	handleRemovingStock = stock => {
		this.setState(prevState => ({
			userStocks: prevState.userStocks.filter(userStock => userStock !== stock)
		}))
	};

	render() {
		return (
			<div>

				<SearchBar sort={this.sort} filter={this.handleFilter}/>

				<div className="row">
					<div className="col-8">

						<StockContainer portfolio={false} stocks={this.filterStocks()} buyStock={this.handleBuyStock}/>

					</div>
					<div className="col-4">

						<PortfolioContainer portfolio={true} stocks={this.state.userStocks} sellStock={this.handleRemovingStock}/>

					</div>
				</div>
			</div>
		);
	}

}

export default MainContainer;
