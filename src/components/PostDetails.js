import React from 'react'

import {Button, Container, Row, Col } from 'react-bootstrap'
import Map from "/Map"
const PostDetails = ({post, onEdit, onDelete}) => {    

  return (
    <div>
    <Container>
    <Row>
        <Col>
        <div className="split left">
            <div class="centered">
                <img src= "logo192.png"></img>
            </div>
        </div>
        </Col>

        <Col>
        <div className="split right">
            <div class="header">
                <h2 style={{fontWeight: "bold", fontSize: "20"}}>{post.title}</h2>
                <h3 style={{fontSize: "15"}}>${post.Price}</h3>
            </div>
            <div className="container">
                    <h4 style={{fontWeight: "bold", fontSize: 15}}>Description</h4>
                    <p style={{fontSize: 10}}>{post.Description}{"\n"}{"\n"}</p>
                    <h4 style={{fontWeight: "bold", fontSize: 15}}>Contact</h4>
                    <p style={{fontSize: 10}}>{post.Contact}</p>
                    <h4 style={{fontWeight: "bold", fontSize: 15}}>Location</h4>
            </div>
            <div>
                <Map />
                </div>
            
            <div className="footer">
            <Row>
            <Col xs={3}><Button variant="primary" onClick = {() => onEdit(post.id)}>Edit  </Button>{' '}</Col>
            <Col xs={1}><Button variant="danger" onClick = {() => onDelete(post.id)}>Delete</Button>{' '}</Col>
            </Row>
            </div>
        </div>
        </Col>
    </Row>
    </Container>
    </div>
  )
}
export default PostDetails