import { Button, Modal } from 'react-bootstrap'
import AddPost from './AddPost';
import PostDetails from './PostDetails';


const PostDetailsModalWindow = ({show, setShow, post, onEdit, onDelete}) => {
  
    const handleClose = () => setShow(false);
  
    return (
      <div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PostDetails post={post} onEdit={onEdit} onDelete={onDelete}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
export default PostDetailsModalWindow