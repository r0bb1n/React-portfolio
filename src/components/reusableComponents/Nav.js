import {Link} from 'react-router-dom'

const Nav = () => {
    return (
      <div className="navBar">
        <nav>
          <ul className="navList">
            <li className="links"><Link className="links" to="/">Home</Link></li>
            <li className="links"><Link className="links" to="/about">About</Link></li>
            <li className="links"><Link className="links" to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
  
  export default Nav