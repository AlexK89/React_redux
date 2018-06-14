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
		const token = 'BQA4dYNhE9YXMSh5ZIVsZtbRuCeOc6hI4S67jKrCq2FBd0kTLdqU5A0Uy3cn11jtLtsPuMwTi_mkbQjCa75eXZkJsbYJrdnwe4qgvgfp-dRvRjkTLzEkBxolvmmUyfeFMj133EktkQhPoOG5TR0w6HXSL2okv-miyWl0';

		fetch(FETCH, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		.then(result => result.json())
		.then(json => {
			const artist = json.artists.items[0];
			console.log(artist);
			this.setState({artist})
		});
	}

	render() {
		return (
			<div className={'music-master'}>
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
					<Profile artist={this.state.artist}/>
					<Gallery/>
				</div>
			</div>
		)
	}
}

export default App;