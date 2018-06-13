import React from 'react';
import Profile from './components/Profile.jsx';
import Gallery from './components/Gallary.jsx';

class App extends React.Component {
	render() {
		return (
			<div className={'music-master'}>
				<h1 className="music_master__title">Music Master</h1>
				<form >
					<input
						type="text"
						placeholder='Search an artist'/>
					<button type='submit'>Search</button>
				</form>
				<div className="music_master__result">
					<Profile />
					<Gallery />
				</div>
			</div>
		)
	}
}

export default App;