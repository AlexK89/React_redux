import React from 'react';
import Profile from './components/Profile.jsx';
import Gallery from './components/Gallary.jsx';
import './App.css';
import {Glyphicon} from 'react-bootstrap';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ''
		}
	}

	setQuery() {
		this.setState({
			query: this.state.inputValue
		})
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className={'music-master'}>
				<h1 className="music_master__title">Music Master</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder='Search an artist'
						onChange={ event => this.setState({ inputValue: event.target.value }) }/>
					<button onClick={ () => { this.setQuery() } }>
						<Glyphicon glyph="search"></Glyphicon>
					</button>
				</form>
				<div className="music_master__result">
					<Profile/>
					<Gallery/>
				</div>
				<h1>{this.state.query}</h1>
			</div>
		)
	}
}

export default App;