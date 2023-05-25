import { useState } from 'react'
import './App.css'
import PureReactCounter from './components/PureReactCounter'

function App() {

  return (
    <>
      <div className="App">
        <h1>Welcome to <a href="https://reactjs.org">React.js!</a> and <a href="https://redux.js.org/">redux</a>!</h1>
        <PureReactCounter />
      </div>
    </>
  )
}

export default App
