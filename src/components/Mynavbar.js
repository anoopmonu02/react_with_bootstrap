import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types'

export default function Mynavbar(props) {
  return (
    <Navbar bg={`${props.mode}`} data-bs-theme={`${props.mode}`}>
      <Container className="container-fluid">
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">{props.aboutText}</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Form className={`d-flex text-${props.mode==='light'?'dark':'light'} justify-content-end ml-auto float-right`}>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Enable Darkmode"
                className='ml-auto float-right justify-content-end'
                onClick={props.toggleMode}
                style={{alignSelf: 'center'}}
              />              
            </Form>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Mynavbar.propTypes= {
  /* use isRequired if value must be present */
  title: PropTypes.string.isRequired, 
  aboutTitle: PropTypes.string
}

/* When props value not found default value set */
Mynavbar.defaultProps= {
    title: "Title Name", 
    aboutTitle: "About Text"
}