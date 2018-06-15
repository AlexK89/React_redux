import React from 'react';
import '../App.css';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playingUrl: '',
			audio: null,
			playing: false
		}
	}

	playAudio(previewUrl) {
		let audio = new Audio(previewUrl);

		if(!this.state.playing) {
			audio.play();
			this.setState({
				playing:true,
				playingUrl: previewUrl,
				audio
			})
		} else {
			if (this.state.playingUrl === previewUrl) {
				this.state.audio.pause();
				this.setState({
					playing: false
				})
			} else {
				this.state.audio.pause();
				audio.play();
				this.setState({
					playingUrl: previewUrl,
					playing: true,
					audio
				});
			}
		}
	}

	render() {
		const tracks = this.props.tracks;

		return (
			<div className="gallery">
				{
					tracks
						?
							tracks.map((track, k) => {
								return (
									<div key={k} className="gallery__track" onClick={() => this.playAudio(track.preview_url)}>
										<div className="gallery__track__image">
											<img src={track.album.images[0].url} alt={track.name}/>
										</div>
										<div className="gallery__track__description">
											<h4 className="gallery__track__description__title">{track.name}</h4>
											<p>{track.album.name}</p>
											<p>{Math.floor(track.duration_ms / 600, 2) / 100}</p>
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