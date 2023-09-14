import { Typography } from '@mui/material';
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'

export default function TeamTwo() {

  return (
    <Layout>
      <Typography variant='h1' component={'h1'} sx={{textAlign: 'center'}}>
        Ikkinchi Jamoa
      </Typography>
      <div className="members">
        <h2>Jamoa a'zolari soni : 37</h2>
        <h2>Jamoa maqsadi : Eng malakali ijodkorlar bo'lish</h2>
        <h2>Jamoa shiori: Joziba ramzi - Olma(APPLE)</h2>
      </div>

    </Layout>
  )
}