import React from 'react'
import PropTypes from 'prop-types'
import '@styles/global.scss'

const MainLayout = ({ children }) => (
  <div className='main-layout'>{children}</div>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
