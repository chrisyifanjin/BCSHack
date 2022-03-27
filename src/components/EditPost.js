import {useState} from 'react'
import React from 'react'
import { Form, Button} from 'react-bootstrap'

const EditPost = ({post, onSave}) => {

    const [title, setTitle] = useState(post.title)
    // const [price, setPrice] = useState(post.price)
    const [image, setImage] = useState(post.image)
    const [Description, setDescription] = useState(post.description)
    const [location, setLocation] = useState(post.location)
    // const [contact, setContact] = useState(post.contact)

    const onSubmit = (e) => {
        // const updatedPost = {title, price, image, Description, location, contact}
        e.preventDefault()
        if (!title) {
            alert("Post must have title")
        }
        // onSave(post.id, updatedPost)

    }


    return (
        <Form className='add-post-form' onSubmit={onSubmit}>
            <Form.Group className = 'form-control'>
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" placeholder="Title" value = {title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="form-control" >
                    <Form.Label>Price: </Form.Label>
                    {/* <Form.Control type='text' placeholder='Price' value = {Price} onChange={(e) => setPrice(e.target.value)}/> */}
                </Form.Group>

                <Form.Group className="form-control" >
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type='text' placeholder='Description' value = {Description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                
                <Form.Group className="form-control" >
                    <Form.Label>Contact: </Form.Label>
                    {/* <Form.Control type='text' placeholder='Contact' value = {Contact} onChange={(e) => setContact(e.target.value)}/> */}
                </Form.Group>
                
                <Form.Group className="form-control" >
                    <Form.Label>Location: </Form.Label>
                    <Form.Control type='text' placeholder='Location' value = {Location} onChange={(e) => setLocation(e.target.value)}/>
                </Form.Group>

                <Form.Group className="form-control" >
                    <Form.Label>Image: </Form.Label>
                    <Form.Control type='image' placeholder='Add Image' alt="image" value = {image} onChange={(e) => setImage(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type='submit' value='Save post' className='btn btn-block'>
                    Save Post
                </Button>
            </Form>
    )
}

export default EditPost