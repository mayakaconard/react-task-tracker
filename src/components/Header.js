import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) =>
{

    const onClick = () =>
    {
        console.log('click')
    }
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button text='Add' color='green' onClick={onClick} />
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,

}

// Css in Js
// const headingStyle = {
//     color: 'red',
//     backgroundColor:'black'
// }
export default Header
