import PropTypes from 'prop-types'

const Button = ({color, text, onClick, modalIsOpen, setModalIsOpen}) => {
    const modalHandler = (event) => {
        if (text == "New +") {
            setModalIsOpen(true);
        }
    }
    
    return (
    <button 
        onClick={function(event){ onClick(); modalHandler()}} 
        style ={{backgroundColor: color}}
        className = 'btn'
    >
        {text}
    </button>
    )
}


Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
