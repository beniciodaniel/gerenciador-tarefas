import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const { addTask, clearTasks, editItem, editTask } = useContext(TaskListContext);
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
    console.log(title);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('')
    } else {
      editTask(title, editItem.id) //importante
    }
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem);
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input" 
        placeholder="Adicionar tarefa..." 
        required 
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">{editItem ? 'Atualizar' : 'Adicionar'}</button>
        <button onClick={() => clearTasks()} type="submit" className="btn clear-btn">Limpar</button>
      </div>
    </form>
  )
}

export default TaskForm
