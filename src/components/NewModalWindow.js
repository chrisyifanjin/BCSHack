import { Button, Modal } from 'react-bootstrap'
import AddPost from './AddPost';
import PostDetails from './PostDetails';


const NewModalWindow = ({type, post, onAdd, show, setShow}) => {
  
    const handleClose = () => setShow(false);
  
    return (
      <div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {type=="add" && <Modal.Title>Add a new post</Modal.Title>}
            {type=="view" && <Modal.Title>Post Details</Modal.Title>}
          </Modal.Header>
          <Modal.Body>
            {type=="add" && <AddPost onAdd = {onAdd} onSave={handleClose}/>}
            {type=="view" && <PostDetails/>}
            
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
  
export default NewModalWindow