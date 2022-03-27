import PropTypes from 'prop-types'

const NewButton = ({color, text, onClick, modalIsOpen, setModalIsOpen}) => {
    const modalHandler = (event) => {
        if (text == "New +" || text == "More") {
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


NewButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default NewButton
