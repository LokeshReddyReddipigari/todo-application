import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './component/Createtodo'
import { Todos } from './component/todo'

function App() {
  const [count, setCount] = useState([]);


  return (
  
      <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
      </div>
  )
}

export default App
