import React from 'react';
import Profile from './components/Profile.jsx';
import Gallery from './components/Gallary.jsx';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends React.Component {
	render() {
		return (
			<div className={'music-master'}>
				<h1 className="music_master__title">Music Master</h1>
				<FormGroup >
					<InputGroup>
						<FormControl
							type="text"
							placeholder='Search an artist'/>
						<InputGroup.Addon>
							<Glyphicon glyph="search"></Glyphicon>
						</InputGroup.Addon>
					</InputGroup>
				</FormGroup>
				<div className="music_master__result">
					<Profile />
					<Gallery />
				</div>
			</div>
		)
	}
}

export default App;