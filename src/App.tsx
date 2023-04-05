import { useState } from 'react'
import Tasks from "./page/Tasks";
import Header from "./component/ui/Header";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header />
        <Tasks />
    </div>
  )
}

export default App
