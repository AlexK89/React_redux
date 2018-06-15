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
			artist: null,
			tracks: null
		}
	}


	handleSubmit(event) {
		event.preventDefault();

		const BASE_URL = 'https://api.spotify.com/v1/search?';
		let FETCH = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
		const TOP_TRACKS = 'https://api.spotify.com/v1/artists';
		const access_token = 'BQAEHKImq4gfOAY2hyahyq2eioU2YUDBkjCUx6HyST07x5UyNopx108ppG7SXqxH7wj41Jz7ZAMdW1driuav53oDUJugQ9kiaaSV1UZrd1pVxg8UBLlY_N6Z-iRjai0UILFhkNmURT2cQkiXqtEZiSeZBGTAKw1zdy9A';

		fetch(FETCH, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${access_token}`
			}
		})
			.then(result => result.json())
			.then(json => {
				if (!json.error && json.artists.items.length) {
					const artist = json.artists.items[0];
					console.log('Artists: ', json.artists.items.length);
					this.setState({artist});

					FETCH = `${TOP_TRACKS}/${artist.id}/top-tracks?country=GB`;

					fetch(FETCH, {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${access_token}`
						}
					})
						.then(result => result.json())
						.then(json => {
							if (!json.error) {
								const tracks = json.tracks;
								console.log('Tracks: ',tracks);
								this.setState({tracks});
							}
						})


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
									<Gallery tracks={this.state.tracks}/>
								</div>
							: <div></div>
					}
				</div>
			</div>
		)
	}
}

export default App;