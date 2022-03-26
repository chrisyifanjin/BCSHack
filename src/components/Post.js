import React from 'react'
import Button from './Button'

const Post = ({post, onDelete}) => {
    return (
        <div className='task'>
            <img src= "logo192.png"></img>
            <h3>{post.title}</h3>
            <p>${post.Price}</p>
            <h4>Description: </h4>
            <p>{post.Description}</p>
        
            <p><b>Contact phone:</b> {post.Contact}</p>
            <p><b>Location: </b>{post.Location}</p>
            <p><Button text = 'Edit' color = 'blue'/>
                <Button text = 'Delete' color = 'red' onClick = {() => onDelete(post.id)}/></p>
        </div>
    )
}

export default Post
