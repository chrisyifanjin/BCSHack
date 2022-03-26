import {useState} from 'react'
import React from 'react'

const EditPost = ({post, onSave}) => {

    const [title, setTitle] = useState(post.title)
    const [price, setPrice] = useState(post.price)
    const [image, setImage] = useState(post.image)
    const [Description, setDescription] = useState(post.description)
    const [location, setLocation] = useState(post.location)
    const [contact, setContact] = useState(post.contact)

    const onSubmit = (e) => {
        const updatedPost = {title, price, image, Description, location, contact}
        e.preventDefault()
        if (!title) {
            alert("Post must have title")
        }
        onSave(post.id, updatedPost)

    }


    return (
        <form className='add-post-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <input type='text' placeholder='Title' 
                value = {title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <input type='text' placeholder='Price' 
                value = {price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <input type='text' placeholder='Description' 
                value = {Description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <input type='image' placeholder='Add Image' alt="image"
                value = {image} onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <input type='text' placeholder='Location' 
                value = {location} onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <input type='text' placeholder='Contact' 
                value = {contact} onChange={(e) => setContact(e.target.value)}/>
            </div>
            <input type='submit' value='Save post'
            className='btn btn-block'/>
        </form>
    )
}

export default EditPost
