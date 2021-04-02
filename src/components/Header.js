import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({ title, onAdd, showAdd }) =>
{


    /*  const onClick = () =>
     {
         console.log('click')
     } */

    const location = useLocation()
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                {location.pathname === '/' && <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd} />}
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
