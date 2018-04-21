import * as React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'
import Demo from '../AppBar/appBar'

const Header = () => (
  <header className>
    <nav className>
      <ul className="navigation">
        <li className="link"><Link to='/'>Home</Link></li>
        <li className="link"><Link to='/schedule'>Schedule</Link></li>
        <li className="link"><Link to='/playground'>Playground</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
