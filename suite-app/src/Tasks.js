import React, { useState, useEffect } from 'react';
import useInput from './useHooks/useInput';
import { v4 as uuidv4 } from 'uuid';

const TASK_STORAGE_KEY = 'TASKS_STORAGE_KEY';

const storeTasks = (taskData) =>
	localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(taskData));

const readTasks = () => JSON.parse(localStorage.getItem(TASK_STORAGE_KEY));

const Tasks = () => {
	const [text, setText, resetText] = useInput('');
	const storedTasks = readTasks();
	const [tasks, setTasks] = useState(storedTasks.tasks);
	const [completedTasks, setCompletedTasks] = useState([]);

	//const updateTaskText = (e) => setText(e.target.value);

	const addTask = () => {
		setTasks([...tasks, { text, id: uuidv4() }]);
		resetText();
		//setText('');
	};

	const handleEnter = (e) => e.key === 'Enter' && addTask();

	const finishTask = (completedTask) => {
		setCompletedTasks([...completedTasks, completedTask]);
		setTasks(tasks.filter((task) => task.id !== completedTask.id));
	};

	const renderTasks = tasks.map((task) => {
		const { id, text } = task;

		return (
			<div key={id} onClick={() => finishTask(task)}>
				{text}
			</div>
		);
	});

	const renderCompleted = completedTasks.map((task) => {
		const { id, text } = task;

		return (
			<div key={id} onClick={() => finishTask(task)}>
				{text}
			</div>
		);
	});

	useEffect(() => storeTasks({ tasks, completedTasks }));

	return (
		<div>
			<h3>Tasks</h3>
			<div className="form">
				<input value={text} onChange={setText} onKeyPress={handleEnter} />
				<button onClick={addTask}>Add Task</button>
			</div>
			<div className="task-list">{renderTasks}</div>
			<div className="completed-list">{renderCompleted}</div>
		</div>
	);
};

export default Tasks;
