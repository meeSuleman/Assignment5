import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../api/tasks';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((response) => setTasks(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteTask(id).then(() => setTasks(tasks.filter(task => task.id !== id)));
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.completed ? 'Completed' : 'Pending'}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
