import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Gallery from './Gallery';

function App() {
	const [userQuery, setUserQuery] = useState('');

	const updateUserQuery = (e) => setUserQuery(e.target.value);

	const googleIt = () => {
		window.open(`https://google.com/search?q=${userQuery}`, '_blank');
		setUserQuery('');
	};

	const handleEnter = (e) => e.key === 'Enter' && googleIt();

	return (
		<div className="App">
			<h1>What Up!</h1>
			<div className="form">
				<input
					value={userQuery}
					onChange={updateUserQuery}
					onKeyPress={handleEnter}
					placeholder="search for anything..."
				/>
				<button onClick={googleIt}>Search</button>
			</div>
			<hr />
			<Joke />
			<hr />
			<Stories />
			<hr />
			<Tasks />
			<hr />
			<Gallery />
		</div>
	);
}

export default App;
