import React, { useState, useEffect } from 'react';

const Joke = () => {
	const [joke, setJoke] = useState('');
	const { setup, punchline } = joke;
	useEffect(() => {
		fetch('https://official-joke-api.appspot.com/jokes/random')
			.then((res) => res.json())
			.then((json) => setJoke(json));
	}, []);
	return (
		<div>
			<h3>Joke</h3>
			<p>{setup}</p>
			<p>
				<em>{punchline}</em>
			</p>
		</div>
	);
};

export default Joke;
