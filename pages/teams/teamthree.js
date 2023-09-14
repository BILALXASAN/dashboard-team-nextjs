import { Typography } from '@mui/material';
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'

export default function TeamThree() {

  return (
    <Layout>
      <Typography variant='h1' component={'h1'} sx={{textAlign: 'center'}}>
        Uchinchi Jamoa
      </Typography>
      <div className="members">
        <h2>Jamoa a'zolari soni : 56</h2>
        <h2>Jamoa maqsadi : Eng yaxshi dizaynerlar bo'lish</h2>
        <h2>Jamoa shiori: Did - Farosat va Fasohat Oynasi</h2>
      </div>

    </Layout>
  )
}