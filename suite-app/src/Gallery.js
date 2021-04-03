import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Gallery = () => {
	const [idx, setIdx] = useState(0);
	const [cats, setCats] = useState([]);

	const getCats = async (resCats = []) => {
		if (resCats.length === 6) return resCats;

		const res = await axios.get('https://api.thecatapi.com/v1/images/search');
		resCats.push(res.data[0]);

		return getCats(resCats);
	};

	const newIdx = (i) => (idx === 6 ? setIdx(0) : setIdx(idx + 1));

	useEffect(async () => {
		if (cats.length === 6) return;
		const resCats = await getCats();
		setCats(resCats);

		newIdx();
	}, []);

	useEffect(() => {
		setInterval(() => newIdx(), 3000);
	}, [idx]);

	console.log(idx);

	return (
		<>
			{cats.length && (
				<div className="Gallery">
					<h2>Featured Cat</h2>
					<img src={cats[idx].url} alt="" />
				</div>
			)}
			<h3>Other Cools Cats</h3>
			<div className="Gallery">
				{cats.map((cat, i) => {
					return <img key={uuidv4()} src={cat.url} alt="" />;
				})}
			</div>
		</>
	);
};

export default Gallery;
