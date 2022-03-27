import { useAuth0 } from '@auth0/auth0-react'
import PropTypes from 'prop-types'
import NewButton from './NewButton'
import AuthenticationButton from './auth/authentication-button';
import { Navbar, Nav, NavDropdown, Col} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import imageUrl from '../images/logo_transparent.png';


const Header = ({title, onAdd, showAddPost, setShowAddPost}) => {
    
    const {user, isLoading, isAuthenticated } = useAuth0();
    

    return ( 

    <div>
        <Navbar bg="light">
         <Container>
           <Col><Navbar.Brand href="#home"><img
          alt=""
          src={imageUrl}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}Friendly Neighbour</Navbar.Brand></Col>
           {isAuthenticated && 
           <Col><NewButton onClick={onAdd} text = "New +" showAddPost={showAddPost} setShowAddPost = {setShowAddPost} />
           </Col>}
           {!isAuthenticated && <Col><p style={{fontSize: 22}}>Log in to post</p></Col>}
           {!isLoading && <AuthenticationButton />}
         </Container>
        </Navbar>
 
      </div>
    )
}


export default Header
