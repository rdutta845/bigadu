import React from 'react';
import { Col } from 'react-bootstrap';
import Hero from '../images/Hero_Image.png';
const About = (props) =>{
    return(
        <Col sm={12} className='about-sec' id='About'>
            <h1>The Technology for the <span>Future.</span></h1>
            <img src={Hero}/>
            <p>Your hands are now in your control.</p>
            <p>Allowing vitual control to your smartphone camera.</p>
        </Col>
    )
}
export default About;