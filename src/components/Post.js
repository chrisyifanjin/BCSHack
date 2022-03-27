import React from 'react'
//import Button from './Button'
import { Button, Card } from 'react-bootstrap'
import imageUrl from '../images/logo_transparent.png';
import { Modal} from 'react-bootstrap'
import { useState } from "react";
import {Link} from "react-router-dom"

const Post = ({post, onEdit, onDelete, onClick}) => {

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
            <Card border="primary" >
            <Card.Img variant="top" src={imageUrl} alt="logo"/>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${post.Price}</Card.Subtitle>
                <Card.Text>{post.Description}</Card.Text>
               <Button variant="primary" onClick={() => onClick(post, onEdit, onDelete)}
               >More</Button>
                
                
            </Card.Body>
            </Card>

        </div>

    )
}

export default Post;
