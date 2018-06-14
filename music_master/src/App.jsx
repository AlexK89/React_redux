import React from 'react';
import Profile from './components/Profile.jsx';
import Gallery from './components/Gallary.jsx';
import './App.css';
import {Glyphicon} from 'react-bootstrap';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			query: '',
			artist: null
		}
	}


	handleSubmit(event) {
		event.preventDefault();

		const BASE_URL = 'https://api.spotify.com/v1/search?';
		const FETCH = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
		const token = 'BQBBMD22JP44jNwbOFO1ob8ZgxW-OVaAoKpzElkKvWiQnGNdo3coHMfQhzL8wVzFGi7ZlKL8sfIEczhhAbuv3Qh3l2YA_kxYhV-6GUBXynlbKFPr0kiQt-PSgzH2gyBu_KxzZNdNOqjWokLNY0bmIjCoE131iJ_CN62e';

		fetch(FETCH, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
			.then(result => result.json())
			.then(json => {
				if (!json.error) {
					const artist = json.artists.items[0];
					console.log(artist);
					this.setState({artist})
				} else {
					this.setState({artist: null})
				}
			});
	}

	render() {
		return (
			<div className="music_master">
				<h1 className="music_master__title">Music Master</h1>
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<input
						type="text"
						placeholder='Search an artist'
						onChange={event => this.setState({query: event.target.value})}/>
					<button type="submit">
						<Glyphicon glyph="search"></Glyphicon>
					</button>
				</form>
				<div className="music_master__result">
					{
						this.state.artist
							?
								<div>
									<Profile artist={this.state.artist}/>
									<Gallery/>
								</div>
							: <div></div>

					}
				</div>
			</div>
		)
	}
}

export default App;