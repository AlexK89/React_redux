import React from 'react';

class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		let artist = {
			name: '',
			images: [{url: ''}],
			genres: [],
			followers: {
				total: ''
			}
		};
		artist = this.props.artist !== null ? this.props.artist : artist;

		return (
			<div className="music_master__result__profile">
				<div className="music_master__result__profile__image">
					<img src={artist.images[0].url} alt={artist.name}/>
				</div>
				<h4 className="music_master__result__profile__name">{artist.name}</h4>
				<div className='music_master__result__profile__genres'>
					{artist.genres.map((genre, key) => {
						genre = (genre !== artist.genres[artist.genres.length - 1]) ? `${genre}, ` : `${genre}`;
						return (<span key={key}>{genre}</span>);
					})}
				</div>
				<p>{artist.followers.total}</p>
			</div>
		)
	}
}

export default Profile;