import React from 'react';
import '../App.css';

class Gallery extends React.Component {
	render() {
		const tracks = this.props.tracks;

		return (
			<div className="gallery">
				{
					tracks
						?
							tracks.map((track, k) => {
								return (
									<div key={k} className="gallery__track">
										<div className="gallery__track__image">
											<img src={track.album.images[0].url} alt={track.name}/>
										</div>
										<div className="gallery__track__description">
											<h6 className="gallery__track__description__title">{track.name}</h6>
										</div>
									</div>
								)
							})
						: <div></div>
				}
			</div>
		)
	}
}

export default Gallery;