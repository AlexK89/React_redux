import React from 'react';

export const withClass = (props) => {
	return (
		<div className={props.className}>
			{props.children}
		</div>
	)
};

export default withClass;