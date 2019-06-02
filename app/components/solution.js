import React from 'react';
import { Col } from 'react-bootstrap';
import VideoPlayer from './videoPlayer';
const Solution = (props) =>{
    return(
        <Col sm={12} className='solution-sec' id='Solution'>
            <VideoPlayer/>
        </Col>
    )
}
export default Solution;