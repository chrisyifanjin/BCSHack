import { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import React from 'react'

const AddPost = ({onAdd, onSave}) => {
    const [title, setTitle] = useState('')
    const [Price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [Description, setDescription] = useState('')
    const [Location, setLocation] = useState('')
    const [Contact, setContact] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            alert('please add a task')
        }
        onAdd({title, Price, Description, Contact, Location, image})

        setTitle('')
        setPrice('')
        setImage('')
        setDescription('')
        setLocation('')
        setContact('')

        onSave()

    }


    return (
        <div>
            <Form className='add-post-form' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title: </Form.Label>
                    <Form.Control type="text" placeholder="Title" value = {title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Price: </Form.Label>
                    <Form.Control type='text' placeholder='Price' value = {Price} onChange={(e) => setPrice(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type='text' placeholder='Description' value = {Description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                
                <Form.Group className="mb-3" >
                    <Form.Label>Contact: </Form.Label>
                    <Form.Control type='text' placeholder='Contact' value = {Contact} onChange={(e) => setContact(e.target.value)}/>
                </Form.Group>
                
                <Form.Group className="mb-3" >
                    <Form.Label>Location: </Form.Label>
                    <Form.Control type='text' placeholder='Location' value = {Location} onChange={(e) => setLocation(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Image: </Form.Label>
                    <Form.Control type='image' placeholder='Add Image' alt="image" value = {image} onChange={(e) => setImage(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type='submit' value='Save post' className='btn btn-block'>
                    Save Post
                </Button>
            </Form>
        </div>
    )
}

export default AddPost
