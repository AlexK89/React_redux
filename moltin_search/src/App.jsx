import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
			pagination: 2,
			pageNumber : 1,
			offset: null,
			allProducts: 0
		}
	}

	async getToken() {
		const CLIENT_ID = '';
		const CLIENT_SECRET = '';

		const TOKEN_URL = `https://api.moltin.com/oauth/access_token`;

		return await fetch(TOKEN_URL, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
		})
			.then(result => result.json())
			.then(token => token.access_token);
	}

	fetchData = () => {
		this.getToken()
			.then(token => {
				console.log('Page number: ', this.state.pageNumber);
				this.setState({
					offset: this.state.pagination * this.state.pageNumber
				});
				console.log('Offset: ', this.state.offset);
				const FETCH_URL = `https://api.moltin.com/v2/products?page[limit]=${this.state.pagination}&page[offset]=${this.state.offset}`;
				fetch(FETCH_URL, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`,
					}
				})
					.then(response => response.json())
					.then(json => {
						console.log('meta: ', json);
						this.setState({
							data: json.data,
							allProducts: json.meta.results.all
						});
					})
			})
	};

	nextPage = () => {
		const pageNumber = this.state.pageNumber + 1;

		if ((pageNumber * this.state.pagination) <= this.state.allProducts) {
			this.setState({
				pageNumber
			});
			this.fetchData();
		}
	};

	previousPage = () => {
		const pageNumber = this.state.pageNumber - 1;

		if ((pageNumber * this.state.pagination) > 0 ) {
			this.setState({
				pageNumber
			});
			this.fetchData();
		}
	};

	render() {
		let data = this.state.data;

		return (
			<div>
				<div className="buttons">
					<button onClick={this.fetchData}>Get Data</button>
					<button onClick={this.previousPage}>Previous</button>
					<button onClick={this.nextPage}>Next</button>
				</div>
				<div className="items">
					{
						data
							?
							data.map((item, key) => {
								return (
									<div className={'item'} key={key}>
										<p>Name: {item.name}</p>
										<p>Description: {item.description}</p>
										<p>SKU: {item.sku}</p>
									</div>
								)
							})
							:
							<div>Empty</div>
					}
				</div>
			</div>
		)
	}
}

export default App;