import React from 'react'
import Button from './Button'

const PostDetails = ({post, onEdit, onDelete}) => {    

  return (
    <>
        <div className="split left">
            <div class="centered">
                <img src= "logo192.png"></img>
            </div>
        </div>
        <div className="split right">
            <div class="header">
                <h2>{post.title}</h2>
                <h3>${post.Price}</h3>
            </div>
            <div className="container">
                    <p>{post.Description}{"\n"}{"\n"}</p>
                    <h4>Contact</h4>
                    <p>{post.Contact}</p>
                    <h4>Location</h4>
            </div>
            {/* map */}
            <div className="footer">
            <Button 
                color={'blue'} 
                text={'Edit'}
                onClick = {() => onEdit(post.id)}
            />
            <Button 
                text = 'Delete' 
                color = 'red' 
                onClick = {() => onDelete(post.id)}
            />
            </div>
        </div>
    </>
  )
}

export default PostDetails