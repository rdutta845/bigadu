import React from 'react';
import { Col } from 'react-bootstrap';
import Card1 from '../images/Card_1.png';
import Card2 from '../images/Card_2.png';
const Problem = (props) =>{
    return(
        <Col sm={12} className='problem-sec' id='Problem'>
            <p>Give people the <span>much-needed freedom</span> from the smartphone so that they can interact with their surrounding with such ease and record and analyse their experiance. </p>
            <div className='card-sec'>
                <img src={Card1} />
                <img src={Card2} />
            </div>
        </Col>
    )
}
export default Problem;