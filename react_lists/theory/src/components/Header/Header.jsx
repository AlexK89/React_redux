import React from 'react';
import styles from '../../containers/App.scss';

export const Header = (props) => {
	const buttonColour = props.showPerson ? styles.btn_colour_red : styles.btn_colour_green;

	return (
		<div className="header">
			<h1>React app</h1>
			<p>This is works</p>
			<button className={`${styles.btn} ${buttonColour}`} onClick={props.toggleVisibilityHandler}>Change name
			</button>
		</div>
	)
};
