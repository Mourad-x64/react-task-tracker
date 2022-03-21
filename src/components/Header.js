import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showAddForm, showAddTask }) => {
    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button 
            color = {( showAddTask ? 'red' : 'green' )} 
            text = {(showAddTask ? "Fermer" : "Ajouter")} 
            showAddForm = { showAddForm }
            />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

