import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'



function Header(){
    return(
        <header id="main-header">
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="#home">PotosiMuseos</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
				<Link className='nav-link' to='/'>inicio</Link>
				<Nav.Link href="#pricing">Acerca de</Nav.Link>
				<NavDropdown title="buscar" id="collasible-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
				</Nav>
				<Nav>
				<Nav.Link href="#deets">More deets</Nav.Link>
				<Nav.Link eventKey={2} href="#memes">
					Dank memes
				</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</Container>
			</Navbar>
	    </header>
    )
}
export default Header