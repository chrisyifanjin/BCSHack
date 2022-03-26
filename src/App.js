import Header from './components/Header'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import { useState, useEffect } from 'react'
// import './App.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [showAddPost, setShowAddPost] = useState(false)
  const [posts, setPosts] = useState( [])

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

// Delete post
const deletePost = async (id) => {
  await fetch(`http://localhost:5000/posts/${id}`, {
    method: 'DELETE'
  })
  setPosts(posts.filter((post) => post.id !== id))
}

const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container">
      <header className="App-header">
        <Header onAdd={() => setShowAddPost(!showAddPost)}
        showAddPost = {showAddPost}/>
        {showAddPost && <AddPost onAdd={addPost}/>}
        {posts.length > 0 ? 
        <Posts posts={posts} onDelete = {deletePost}/> : 'No post to show'}
      </header>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    
  );
}
render(<App />);
export default App;
