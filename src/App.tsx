import { useState } from 'react'
import { Header } from './components/header'
import reactLogo from './assets/react.svg'
import {v4 as uuidv4 } from 'uuid';

import './global.css'
import styles from './App.module.css';
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'


function App() {

  const [m_TodoList, setTodoList] = useState([]);

  function addTodo(taskText: string) {
    let newTask = {
      id: uuidv4(),
      title: taskText,
      publishedAt: Date.now(),
      completedAt: null,
      isCompleted: false
    }
    setTodoList([...m_TodoList, newTask]);
  }

  function handleTaskCompleted(id: string) {
    let index = m_TodoList.findIndex(todo => todo.id === id);
    let newTodoList = [...m_TodoList];
    newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
    setTodoList(newTodoList);
  }

  function handleOnDelete(id: string) {
    let index = m_TodoList.findIndex(todo => todo.id === id);
    let newTodoList = [...m_TodoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className={styles.container}>
      <Header></Header>

      <TodoInput addTaskCallback={addTodo}></TodoInput>

      <TodoList 
        list={m_TodoList} 
        onCheckBoxClickedCallback={handleTaskCompleted}
        onDeleteCallback={handleOnDelete}
      >
      </TodoList>
    </div>
  )
}

export default App
