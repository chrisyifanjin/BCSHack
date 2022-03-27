import PropTypes from 'prop-types'

const MoreButton = ({color, text, onClick}) => {
    const modalHandler = (event) => {

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

export default MoreButton
