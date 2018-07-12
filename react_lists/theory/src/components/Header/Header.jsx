import React from 'react';
import sharedStyles from '../../containers/App.scss';
import { aux } from '../../hoc/Aux.jsx';
import styles from './Header.scss';

export const Header = (props) => {
	const buttonColour = props.showPerson ? sharedStyles.btn_colour_red : sharedStyles.btn_colour_green;

	return (
		<aux>
			<h1>React app</h1>
			<p>This is works</p>
			<button className={`${sharedStyles.btn} ${buttonColour}`} onClick={props.toggleVisibilityHandler}>Change name
			</button>
		</aux>
	)
};
