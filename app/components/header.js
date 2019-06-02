import React from 'react';
import { Col } from 'react-bootstrap';
import Logo from  '../images/Logo.png'; 
import AnchorLink from 'react-anchor-link-smooth-scroll'
 const Header = () => {
    const navBarContent = ['About', 'Problem', 'Solution', 'Team', 'Contact us']
    return(
        <Col className="header-sec">
            <Col sm={6} md={6} lg={6} xs={6} className="logo-sec">
                <img src={Logo} />
            </Col>
            <Col sm={6} md={6} lg={6} xs={6} className="navbar-sec">
                {navBarContent.map((val, ind) => {
                    const link = '#' + val;
                    return(<AnchorLink href={link} offset='90' key={ind}> {val} </AnchorLink>)
                })}
            </Col>
        </Col>
    )
}
export default Header;