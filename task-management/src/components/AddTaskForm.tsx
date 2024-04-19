// AddTaskForm.tsx
import React, { useState } from 'react';
import { Task } from './Types'

interface AddTaskFormProps {
  onAddTask: (newTask: Task) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority,setPriority] = useState('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      priority,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <div className="add-task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input 
          type="text"
          placeholder="Task title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '80%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid transparent', backgroundColor: '#1a1a1a', color: 'rgba(255, 255, 255, 0.87)', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '1em', fontWeight: '500' }}
        />
        <textarea 
          placeholder="Task description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ width: '80%', minHeight: '100px', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid transparent', backgroundColor: '#1a1a1a', color: 'rgba(255, 255, 255, 0.87)', fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', fontSize: '1em', fontWeight: '500' }}
        ></textarea>
        <label htmlFor='proirity'>Priority</label>
        <select 
        id='priority'
        value={priority}
        onChange={e => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        <button type="submit" style={{ width: '80%', padding: '0.6em 1.2em', borderRadius: '8px', border: '1px solid transparent', backgroundColor: '#1a1a1a', color: '#646cff', fontFamily: 'inherit', fontSize: '1em', fontWeight: '500', cursor: 'pointer', transition: 'border-color 0.25s' }}>Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
