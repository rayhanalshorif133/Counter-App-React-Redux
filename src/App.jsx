import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <div className="App">
        <h1>Welcome to <a href="https://reactjs.org">React.js!</a> and <a href="https://redux.js.org/">redux</a>!</h1>
        <Counter />
      </div>
    </>
  )
}

export default App
