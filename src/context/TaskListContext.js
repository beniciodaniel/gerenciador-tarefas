import React, { createContext, useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';


export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []; //1

  const [tasks, setTasks] = useState(initialState); //2 

  const [editItem, setEditItem] = useState(null);

  useEffect(() => { //3
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const findItem = id => {
    const item = tasks.find(task => task.id === id);
    setEditItem(item);
  }

  const editTask = ( title, id ) => {
    const newTasks = tasks.map(task => task.id === id ? { title: title, id: id } : task)
    setTasks(newTasks);
    setEditItem(null)    
  }

  const addTask = ( title ) => {
    setTasks([ ...tasks, { title: title, id: uuid() }])
  }

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id) )
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <TaskListContext.Provider value={ { tasks, addTask, removeTask, clearTasks, findItem, editItem, editTask } }>
      { props.children }
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider;