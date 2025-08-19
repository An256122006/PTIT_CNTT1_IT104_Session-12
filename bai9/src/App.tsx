import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("Rikkei Academy");

  const handleClick = () => {
    setText("Rikkei Soft");
  };

  return (
    <>
      <div>
        <p>Ten cong ty:{text}</p>
        <button onClick={handleClick}>Change</button>
      </div>
    </>
  )
}

export default App
