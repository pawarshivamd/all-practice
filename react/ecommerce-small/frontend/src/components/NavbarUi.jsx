import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { asyncLogOutUser } from '../store/action/UserAction'

const NavbarUi = () => {
  const user = useSelector((state) => state.user.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handelLogout = () => {
    dispatch(asyncLogOutUser())
    navigate('/login')
  }
  console.log("find user", user)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center align-items-center flex-grow-1">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/products" className='nav-link'>Products</Link>
            {user?.isAdmin && (<Link to="/create-product" className='nav-link'>Create Product</Link>)}
          </Nav>
          {user?.id ? (<Button className='btn btn-danger ms-auto' onClick={handelLogout}>Logout</Button>) : (<Link className='btn btn-primary' to="/login">Login</Link>)}
          <p></p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarUi
