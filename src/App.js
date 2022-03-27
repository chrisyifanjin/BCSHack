import Header from './components/Header'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import NewModalWindow from './components/NewModalWindow'
import PostDetailsModalWindow from './components/PostDetailsModalWindow'
import { useState, useEffect } from 'react'
import Post from './components/Posts'
import React from "react"
import PostDetails from './components/PostDetails'
import { useAuth0 } from '@auth0/auth0-react'

// import './App.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './components/Profile'
import EditPost from './components/EditPost'

function App() {
  const [showAddPost, setShowAddPost] = useState(false)
  const [showViewPost, setShowViewPost] = useState(false)
  const [posts, setPosts] = useState( [])
  // const [viewPosts, setViewPosts] = useState([])
  const {user, isAuthenticated } = useAuth0();
  const [showEditPost, setShowEditPost] = useState(false)
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


// view post //TODO: DON'T KNOW IF THIS IS RIGHT
// const viewPost =  async (post) => {
//   const res = await fetch('http://localhost:5000/posts/${id}',{
//     method: 'GET',
//     headers: {
//       'Content-type':'application/json'
//     },
//     body: JSON.stringify(post)
//   })

//   const data = await res.json()
//   setViewPosts()
//   // setPosts([...posts, data])
// }

// Delete post
const deletePost = async (id) => {
  await fetch(`http://localhost:5000/posts/${id}`, {
    method: 'DELETE'
  })
  setPosts(posts.filter((post) => post.id !== id))
}

const onClick = (post, onEdit, onDelete) => {
  <PostDetailsModalWindow show= {!showAddPost} setShow = {setShowAddPost} post={post} onEdit ={onEdit} onDelete={onDelete}/>
  // return <PostDetails post={post} onEdit ={onEdit} onDelete={onDelete}/>
}



  return (
    <div className="container">
      <header className="App-header">
        <Header onAdd={() => setShowAddPost(!showAddPost)}
        showAddPost = {showAddPost} setShowAddPost= {setShowAddPost}/>
        <NewModalWindow type="add" onAdd={addPost} show= {showViewPost} setShow = {setShowViewPost}/>
        {/* <NewModalWindow type = "view" onAdd={viewPost} show= {showAddPost} setShow = {setShowAddPost}/> */}
        {isAuthenticated && <Profile />}
        {posts.length > 0 ? 
          <Posts 
            showEditPost = {showEditPost}
            posts = {posts} 
            onDelete = {deletePost}
            onEdit = {editPost}
            onClick = {onClick}
          />: 'No post to show'}
        {/* <EditPost post="Help" /> */}
      </header>
    </div>

    
  );
}

export default App;
