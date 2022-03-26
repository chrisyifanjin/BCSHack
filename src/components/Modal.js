import { Button, Modal } from 'react-bootstrap'
import AddPost from './AddPost';


const ModalWindow = ({onAdd, show, setShow}) => {
  
    const handleClose = () => setShow(false);
  
    return (
      <div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddPost onAdd = {onAdd} onSave={handleClose}/>
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
  
export default ModalWindow