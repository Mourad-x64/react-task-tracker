

const Button = ({ color, text, showAddForm }) => {
    return (
        <button
        style={{ backgroundColor: color }} 
        className='btn'
        onClick={ () => showAddForm () }
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'black',
    text: 'Ajouter'
}

export default Button
