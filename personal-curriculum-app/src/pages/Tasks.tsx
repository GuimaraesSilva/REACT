import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import { Task } from '../types/types';

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('/tasks.json')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h1>Your Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
