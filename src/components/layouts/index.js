import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'styles/global.scss'

const MainLayout = ({ children }) => (
  <div className='main-layout'>
    <Helmet title={process.env.APP_NAME} defer={false} />
    {children}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
