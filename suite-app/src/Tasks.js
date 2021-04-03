import React, { useState } from 'react';
import useInput from './useHooks/useInput';
import { v4 as uuidv4 } from 'uuid';

const Tasks = () => {
	const [text, setText, resetText] = useInput('');
	const [tasks, setTasks] = useState([]);
	const [completedTasks, setCompletedTasks] = useState([]);

	//const updateTaskText = (e) => setText(e.target.value);

	const addTask = () => {
		setTasks([...tasks, { text, id: uuidv4() }]);
		resetText();
		//setText('');
	};

	const handleEnter = (e) => e.key === 'Enter' && addTask();

	const renderTasks = tasks.map((task) => {
		const { id, text } = task;

		return <div key={id}>{text}</div>;
	});

	return (
		<div>
			<h3>Tasks</h3>
			<div className="form">
				<input value={text} onChange={setText} onKeyPress={handleEnter} />
				<button onClick={addTask}>Add Task</button>
			</div>
			<div className="task-list">{renderTasks}</div>
		</div>
	);
};

export default Tasks;
