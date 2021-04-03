import React, { useState, useEffect } from 'react';

const useFetch = (url, initVal) => {
	const [res, setRes] = useState(initVal);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setRes(json));
	}, []);

	return res;
};

export default useFetch;
