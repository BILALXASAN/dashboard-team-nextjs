import { Typography } from '@mui/material';
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'

export default function TeamOne() {

  return (
    <Layout>
      <Typography variant='h1' component={'h1'} sx={{textAlign: 'center'}}>
        Birinchi Jamoa
      </Typography>
      <div className="members">
        <h2>Jamoa a'zolari soni : 27</h2>
        <h2>Jamoa maqsadi : Eng yaxshi dasturchilar bo'lish</h2>
        <h2>Jamoa shiori: Intilganga tole yor</h2>
      </div>
    </Layout>
  )
}
