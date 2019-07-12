import React from 'react'
import PropTypes from 'prop-types'
import '@styles/global.scss'

const MainLayout = ({ element }) => <>{element}</>

MainLayout.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
}

export default MainLayout
