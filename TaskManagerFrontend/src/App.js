import React from 'react';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;
