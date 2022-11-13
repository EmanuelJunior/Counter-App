import { FC, useState } from 'react'


const App:FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="header-app">
        <h1>Contador en React!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non posuere est. Aliquam rhoncus porttitor lacus, sit amet dictum sem rutrum sed. Phasellus ac velit eleifend, dictum justo eu, malesuada erat.</p>
      </header>

      <div className="card">

      </div>
    </div>
  )
}

export default App
