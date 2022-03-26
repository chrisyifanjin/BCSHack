import React from 'react'
//import Button from './Button'
import { Button, Card } from 'react-bootstrap'
import imageUrl from '../images/logo_transparent.png';
import { Modal} from 'react-bootstrap'
import { useState } from "react";


const Post = ({post, onDelete}) => {
    return (
        <div className='task'>
            <Card border="primary">
            <Card.Img variant="top" src={imageUrl} alt="logo"/>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${post.Price}</Card.Subtitle>
                <Card.Text>{post.Description}</Card.Text>
                <Button variant="primary">More</Button>
                
            </Card.Body>
            </Card>
  
        </div>
    )
}

export default Post;
