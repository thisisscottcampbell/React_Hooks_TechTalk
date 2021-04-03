import React, { useState, useEffect } from 'react';

const Stories = () => {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		fetch('https://news-proxy-server.appspot.com/topstories')
			.then((res) => res.json())
			.then((json) => setStories(json));
	}, []);

	return (
		<div className="Stories">
			<h3>Tech News</h3>
			{stories.map((story) => {
				const { id, by, time, title, url } = story;

				return (
					<div key={id}>
						<a href={url}>{title}</a>
						<div>
							<p>{by}</p>
							<h5>{new Date(time * 1000).toLocaleString()}</h5>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Stories;
