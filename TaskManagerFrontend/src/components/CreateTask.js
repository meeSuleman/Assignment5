import React, { useState } from 'react';
import { createTask } from '../api/tasks';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description, completed: false }).then(() => {
      setTitle('');
      setDescription('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
