import { Link } from 'react-router-dom';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NavBar = ({ user, handleSignout }) => {
  return (
    <>
      {user ? (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Superstore</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/products" >Products List</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Link to="" onClick={handleSignout}><Button variant="secondary">Sign Out</Button></Link>
          </Container>
        </Navbar>
      ) : (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Superstore</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            <ButtonGroup className="ms-auto">
              <Link to="/signin"><Button className='me-3' variant="secondary">Sign In</Button></Link>
              <Link to="/signup"><Button variant="secondary">Sign Up</Button></Link>
            </ButtonGroup>
          </Container>
        </Navbar>
      )}
    </>
  )
}

export default NavBar;