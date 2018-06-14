import React from 'react';

class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		let artist = {
			name: '',
			images: [{url: ''}],
			genres: [],
			followers: {
				total: 0
			}
		};
		artist = this.props.artist !== null ? this.props.artist : artist;

		return (
			<div className="profile">
				<div className="profile__image">
					<img src={artist.images[0].url} alt={artist.name}/>
				</div>
				<div className="profile__content">
					<h4 className="profile__content__name">{artist.name}</h4>
					<p className="profile__content__followers">{artist.followers.total} followers</p>
					<p className='profile__content__genres'>
						{artist.genres.map((genre, key) => {
							genre = (genre !== artist.genres[artist.genres.length - 1]) ? `${genre}, ` : `${genre}`;
							return (<span key={key}>{genre}</span>);
						})}
					</p>
				</div>
			</div>
		)
	}
}

export default Profile;