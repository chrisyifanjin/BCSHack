import Post from './Post'

const Posts = ({posts, onDelete}) => {
    
    return (
        <>
          {posts.map((post, index) => (<
              Post key={index} post = {post} onDelete = {onDelete}/>
          ))}
        </>
    )
}

export default Posts

