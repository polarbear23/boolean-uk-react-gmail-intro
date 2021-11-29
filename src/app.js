import './styles/app.css'
import React from 'react'
import Nav from './nav/nav.js'
import Main from './main/main.js'
import Header from './header/header.js'
function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  )
}

export default App
