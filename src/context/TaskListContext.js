import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';


export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "wash the car", id: 1},
    { title: "paint", id: 2},
    { title: "wash the dog", id: 3},
  ])

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
    <TaskListContext.Provider value={ { tasks, addTask, removeTask, clearTasks } }>
      { props.children }
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider;