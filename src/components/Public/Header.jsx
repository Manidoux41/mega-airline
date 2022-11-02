import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
        <div className="logo">
          <img src={Logo} alt="logo mega" />
        </div>
        <div className="burger">
          <span></span>
        </div>
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