import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import stormcloudSvg from '../assets/stormcloud.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
          <img src={stormcloudSvg} width="40" height="40" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle 
  className="navToggle"
  aria-controls="basic-navbar-nav"
/>
        <Navbar.Collapse className="navDropdown" id="basic-navbar-nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <NavDropdown title="Projects" className="navDropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/TraderRecipes" className="nav-link">TraderRecipes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/RepoLab" className ="nav-link">repoLab</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;