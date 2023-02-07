import { useState } from 'react'
import { Header } from './components/header'
import reactLogo from './assets/react.svg'

import './global.css'
import styles from './App.module.css';
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {


  return (
    <div className={styles.container}>
      <Header></Header>

      <TodoInput></TodoInput>

      <TodoList></TodoList>
    </div>
  )
}

export default App
