import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Components/Navbar';
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Header></Header>
    </div>
  )
}

export default App;