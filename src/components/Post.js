import React from 'react'
//import Button from './Button'
import { Button, Card } from 'react-bootstrap'
import imageUrl from '../images/logo_transparent.png';
import { Modal} from 'react-bootstrap'
import { useState } from "react";


const Post = ({post, onDelete}) => {
    function filterFakePath(path) {
        let len = path.length;
        var position = 0;
        if (path.includes('fakepath')) {
            position = path.indexOf('path') + 5
        }
        return path.slice(position, len);
    }
    return (
        <div className='task'>
            <Card border="primary">
            <Card.Img variant="top" src={post.image !== undefined && post.image !== "" ? filterFakePath(post.image) : imageUrl} alt="logo"/>
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
