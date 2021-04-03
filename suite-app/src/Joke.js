import React, { useState, useEffect } from 'react';
const URL = 'https://official-joke-api.appspot.com/jokes/random';

const Joke = () => {
	const [joke, setJoke] = useState('');
	const { setup, punchline } = joke;
	useEffect(() => {
		fetch(URL)
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

// import React, { useState, useEffect } from 'react';
// import useFetch from './useHooks/useFetch';
// const URL = 'https://official-joke-api.appspot.com/jokes/random';

// const Joke = () => {
// 	const joke = useFetch(URL, {});

// 	const { setup, punchline } = joke;

// 	return (
// 		<div>
// 			<h3>Joke</h3>
// 			<p>{setup}</p>
// 			<p>
// 				<em>{punchline}</em>
// 			</p>
// 		</div>
// 	);
// };

// export default Joke;
