// TaskList.tsx
import React from 'react';
import { Task } from './Types'

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      <h2 style={{position:'relative',top:'50%',left:'50%'}}>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.description}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
