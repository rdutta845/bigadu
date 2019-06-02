
import React from 'react';
import { Carousel, Col } from 'react-bootstrap';
const OurProduct = () => {

    return(
    <Col sm={12} className='ourproduct-sec'>
    <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://us.123rf.com/450wm/karandaev/karandaev1507/karandaev150700393/42663721-office-leather-desk-table-with-computer-supplies-and-coffee-cup-top-view-with-copy-space.jpg?ver=6"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </Col>
    )
}
export default OurProduct;