import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, Form, Row, Col } from 'react-bootstrap';
import { Ecom } from '../context/Api';
import logo from '../assets/logo.png';
import Cart from './Cart';

function NavBar() {
  const { newItem, filterItems, handleSearch } = useContext(Ecom);

  return (
    <div>
      <Navbar bg="secondary" expand="lg" className='fixed-top'>
        <Container>
          <Row className="w-100 align-items-center">
            <Col xs={6} md={4} lg={3} className='text-white'>
              <Navbar.Brand href="#">
                <img src={logo} alt="" className='w-25' />
              </Navbar.Brand>
            </Col>
            <Col xs={6} md={8}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto gap-2">
                  {/* Category Filter Buttons in the Navbar */}
                  {newItem.map((cat, index) => (
                    <Nav.Link
                      key={index}
                      onClick={() => filterItems(cat)} // Call filterItems with the selected category
                      className="text-white text-uppercase"
                      variant="outline-dark"
                    >
                      {cat}
                    </Nav.Link>
                  ))}
                  <Nav.Link
                    onClick={() => filterItems("")} // Show all items
                    className="text-white text-uppercase"
                  >
                    All
                  </Nav.Link>
                </Nav>
                {/* Search Input */}
                <Form className="d-flex mt-2">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => handleSearch(e.target.value)} // Call the handleSearch function
                  />
                </Form>

                <Cart/>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
