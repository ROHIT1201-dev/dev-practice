import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-red-500'>hello world</h1>
      <AddTodo/>
    </div>
  )
}

export default App
