import React, { useContext } from 'react';
import { Ecom } from '../context/Api';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
// import './ProductList.css'; // Import custom CSS

const ProductList = () => {
  const { filteredProducts } = useContext(Ecom); // Get the filtered products

  return (
    <div className='mt-header'>
    <Container className=" ">
      {/* Product Cards */}
      <Row className="g-4">
        {filteredProducts.map((item) => {
          const { id, image, title, description } = item;
          return (
            <Col key={id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-sm custom-card  border border-5 p-3 mt-2">
                <div className="image-container">
                  <Card.Img
                   className=''
                  variant="top" src={image} alt=
                  {title} />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="description">{description}</Card.Text>
                  <Button variant="primary" className="mt-auto">View Product</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    </div>
  );
};

export default ProductList;
