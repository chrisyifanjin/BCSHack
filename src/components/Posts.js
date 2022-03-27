import Post from './Post'
import { Col, Row, Card} from 'react-bootstrap'

const Posts = ({showEditPost, posts, onDelete, onEdit, onClick}) => {

    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    posts.map((post, index) => (
                        <Col>
                            <Post key={index} post = {post} onDelete = {onDelete} onEdit = {onEdit} onClick = {onClick}/>
                        </Col>
                    ))
                ))}
            </Row>
          
        </div>
    )
}

export default Posts

