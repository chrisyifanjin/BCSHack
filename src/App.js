import Header from './components/Header'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import ModalWindow from './components/Modal'
import { useState, useEffect } from 'react'
import Post from './components/Posts'
import React from "react"

// import './App.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [showAddPost, setShowAddPost] = useState(false)
  const [showEditPost, setShowEditPost] = useState(false)
  const [posts, setPosts] = useState([])
  // const [post, setPost] = useState()
  const [editingPost, setEditingPost] = useState()

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }
    getPosts()
  }, [])

  // Fetch Tasks
  const fetchPosts = async() => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()

    return data
  }

// Add post
const addPost =  async (post) => {
  const res = await fetch('http://localhost:5000/posts',{
    method: 'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(post)
  })

  const data = await res.json()

  setPosts([...posts, data])
}


// Edit post
const editPost = async(id) => {
  posts.map((post) => post.id === id && setEditingPost(post))
  setShowEditPost(!showEditPost)
  showEditPost = {showEditPost}
}

// Save edited post
const savePost = async(id, editedPost) => {
  const res = await fetch(`http://localhost:5000/posts/${id}`,{
    method: 'PUT',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(editedPost)
  })
  const data = res.json()
  setPosts(posts.map((post) => post.id === id ? editedPost : post))
}

// Delete post
const deletePost = async (id) => {
  await fetch(`http://localhost:5000/posts/${id}`, {
    method: 'DELETE'
  })
  setPosts(posts.filter((post) => post.id !== id))
}


return (
  <div className="container">
    <header className="App-header">
      <Header 
        onAdd = {() => setShowAddPost(!showAddPost)}
        showAddPost = {showAddPost}
      />
      {showAddPost && <AddPost onAdd = {addPost}/>}
      {showEditPost && <EditPost 
                            post = {editingPost}
                            onSave = {savePost}/>}
      {posts.length > 0 ?
      <Posts 
          showEditPost = {showEditPost}
          posts = {posts} 
          onDelete = {deletePost}
          onEdit = {editPost}
      />
      : 'No post to show'}
    </header>
  </div>
);
}

export default App;
