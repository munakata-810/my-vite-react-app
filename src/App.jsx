import { useState } from "react";

function App() {
  const [count,setCount] = useState(0)

  //増やす処理
  const increment = ()=> {
    setCount(count+1)
  }

  //減らす処理
  const decrement = () => {
    setCount(count -1 )
  }

  //リセット処理
  const reset = () => {
    setCount(0)
  }
  return (
    <div className="container">
    <h1>カウンター</h1>
    <p>{count}</p>

    <div>
      <button onClick={increment} style={{color:"green"}}>増やす</button>
    </div>

    <div>
      <button onClick={decrement} style={{color:"red"}}>減らす</button>
    </div>

    <div>
      <button onClick={reset} style={{color:"blue"}}>リセット</button>
    </div>
  </div>
  )
}

export default App
