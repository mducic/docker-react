import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='Appa '>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
           Pozdrav drugari!
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
