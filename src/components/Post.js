import React from 'react'
//import Button from './Button'
import { Button, Card } from 'react-bootstrap'
import imageUrl from '../images/logo_transparent.png';
import { Modal} from 'react-bootstrap'


const Post = ({post, onDelete}) => {
    return (
        <div className='task'>
            {/* <img src= "logo192.png"></img>
            <h3>{post.title}</h3>
            <p>${post.Price}</p>
            <h4>Description: </h4>
            <p>{post.Description}</p>
        
            <p><b>Contact phone:</b> {post.Contact}</p>
            <p><b>Location: </b>{post.Location}</p>
            <p><Button text = 'Edit' color = 'blue'/>
                <Button text = 'Delete' color = 'red' onClick = {() => onDelete(post.id)}/></p> */}

            <Card border="primary" >
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

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {Post.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{Post.price}</h4>
          <p>
          {Post.description}
          {Post.contact}
          {Post.location}
          {Post.image}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default Post
