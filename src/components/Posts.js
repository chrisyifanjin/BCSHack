import Post from './Post'
import { Col, Row, Card} from 'react-bootstrap'

const Posts = ({posts, onDelete}) => {
    
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    posts.map((post, index) => (
                        <Col>
                            <Post key={index} post = {post} onDelete = {onDelete}/>
                        </Col>
                    ))
                ))}
            </Row>
          
        </div>
    )
}

export default Posts

