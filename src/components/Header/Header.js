import * as React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className>
    <nav className>
      <ul className="navigation">
        <li className="link"><Link to='/'>Home</Link></li>
        <li className="link"><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
