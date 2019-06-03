import React from 'react';
import { Col } from 'react-bootstrap';
const Blog = (props) =>{
    const blogArr = ['Blog1', 'Blog2', 'Blog3', 'Blog4', 'Blog5', 'Blog6', 'Blog7', 'Blog8', 'Blog9'];
    return(
        <Col sm={12} className='blogs-sec' id='Solution'>
           {blogArr.map((val, ind) => { 
               return(
            <Col sm={3} className='blog-card' key={ind}>
                <Col sm={12}>
                    <span>{val} </span>
                    <span>Tech </span>
                </Col>
                <Col sm={12}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </Col>
                <Col sm={12}>
                    <span>Read More</span>
                    <span>21 Jun 2018</span>
                </Col>
            </Col>
            )
        })}
        </Col>
    )
}
export default Blog;