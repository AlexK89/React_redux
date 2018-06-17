import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1 className="app__title">Reminder Pro</h1>
				<div className="form-inline">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder={"I have to..."}
						/>
					</div>
					<button
						className={"btn btn-success"}>
						Add reminder
					</button>
				</div>
			</div>
		)
	};
}

export default App;