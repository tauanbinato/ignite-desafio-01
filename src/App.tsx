import { useState } from 'react'
import { Header } from './components/header'
import reactLogo from './assets/react.svg'

import './global.css'
import { TodoInput } from './components/TodoInput'

function App() {


  return (
    <div>
      <Header></Header>

      <TodoInput></TodoInput>
    </div>
  )
}

export default App
