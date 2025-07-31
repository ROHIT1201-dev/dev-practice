import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from "./components/Todos";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  async function resReturn(){
    const res = await axios.post("http://localhost:3000/", {
      data: "ajay fuddi ka",
    });

    console.log(res);
  }

  useEffect(() => {
    resReturn
  }, []);


 

  return (
    <div>
      <h1 className="text-red-500">hello world</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App
