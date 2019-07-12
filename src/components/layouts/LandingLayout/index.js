import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'

const { Header, Sider, Content } = Layout

const LandingLayout = ({ children }) => {
  const [collapsed, toggle] = useState(false)
  return (
    <div className='landing-layout'>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
          <div className='h-20 m-2 bg-gray-400' />
          <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Icon type='user' />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='video-camera' />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='upload' />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className='leading-normal ml-4 text-base'
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => toggle(!collapsed)}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <div style={{ minHeight: '100vh' }}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(LandingLayout)
