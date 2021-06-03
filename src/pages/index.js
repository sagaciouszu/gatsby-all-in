import React from 'react'
import { Typography } from 'antd'
import LandingLayout from '@layouts/LandingLayout'

export default () => (
  <LandingLayout>
    <div className='flex flex-col items-center'>
      <Typography.Title className='text-primary-color'>
        Fast in every way that matters
      </Typography.Title>
      <Typography.Title level={4} className='text-gray-600'>
        test dickbutt
      </Typography.Title>
      <iframe src="https://kiwiirc.com/nextclient/?settings=1746bda2390f4caec446211e5118e458" style="width:100%;height:680px;border:0;display:block"></iframe>
    </div>
  </LandingLayout>
)
