import { useAuth0 } from '@auth0/auth0-react'
import PropTypes from 'prop-types'
import Button from './Button'
import AuthenticationButton from './auth/authentication-button';
import { Navbar, Nav, NavDropdown, Col} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import imageUrl from '../images/logo_transparent.png';


const Header = ({title, onAdd, showAdd}) => {
    
    const {user, isLoading} = useAuth0();
    
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
           <Col><Button text={showAdd ? 'Close' : '+ New'} onClick={onAdd} /></Col>
           {!isLoading && <AuthenticationButton />}
         </Container>
        </Navbar>
 
        </div>
    )
}


export default Header
