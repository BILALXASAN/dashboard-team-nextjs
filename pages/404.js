import React from 'react'
import Layout from '../components/Layout'
import { Typography } from '@mui/material'
import { Error } from '@mui/icons-material'

export default function Home() {
  return (
    <Layout>
        <Typography variant='h2' component={'h2'} sx={{textAlign: 'center', color: 'red', display: 'flex', justifyContent: 'center',}}>
            <Error sx={{width: 70, height: 70, me: 3}} />
            Bunday sahifa mavjud emas!
        </Typography>
    </Layout>
  )
}
