import React, { useState } from 'react';
import Joke from './Joke';

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
				/>
				<button onClick={googleIt}>Search</button>
			</div>
			<hr />
			<Joke />
		</div>
	);
}

export default App;
