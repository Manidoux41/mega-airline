import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Mega Airline</h1>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/compagnie'>La compagnie</Link>
            </li>
            <li>
              <Link to='/fleet'>La flotte</Link>
            </li>
            <li>
              <Link to='/direction'>Direction</Link>
            </li>
            <li>
              <Link to='/inscription'>Inscription</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header