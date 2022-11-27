import PropTypes from 'prop-types'

const Header = ({title}) => {


  return (
    <header>{title}</header>
  )


}

Header.defaultProps = {
    title: 'Task Tracker1',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header