import React from 'react'
import { Typography } from 'antd'
import LandingLayout from '@layouts/LandingLayout'

export default () => (
  <LandingLayout>
    <div className='flex flex-col items-center'>
      <Typography.Title className='text-primary-color'>
        Fast in every way that matters
      </Typography.Title>
      <div class="irc-container">
        <iframe class="irc-iframe" src="https://kiwiirc.com/nextclient/?settings=1746bda2390f4caec446211e5118e458"></iframe>
      </div>
    </div>
  </LandingLayout>
)
