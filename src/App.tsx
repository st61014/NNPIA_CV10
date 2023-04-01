import { useState } from 'react'
import Tasks from "./page/Tasks";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Tasks />
    </div>
  )
}

export default App
