import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div>
      <h2>Welcome to the Student Registration App</h2>
      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/registration'>Register</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Main
