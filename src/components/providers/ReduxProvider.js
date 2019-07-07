import React from 'react'
import { Provider } from 'react-redux'
import initializeStore from 'store'
import PropTypes from 'prop-types'

const ReduxProvider = ({ children }) => (
  <Provider store={initializeStore()}>{children}</Provider>
)

ReduxProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
}

export default ReduxProvider
