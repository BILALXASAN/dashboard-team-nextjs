import { Box, Card, Grid, Typography } from '@mui/material'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { getTeams } from '@/api'
import { menuteam } from '@/data';


export default function Home() {
  const router = useRouter();
  

  return (
    <Layout>
      <Typography variant='h3'>
        Teams
      </Typography>
      <Grid container sx={{mt: 3}} spacing={2}>
        {menuteam.map((item) => (
          <Grid key={item.title} item xs={12} sm={6} md={3}>
            <Card sx={{
              '&:hover': {
                transition: '0.3s',
                cursor: 'pointer',
                background: '#8b14f9',
                
              },
              p:3,
              textAlign: 'center',
              background: '#8a2be2',

            }}
            onClick={() => router.push('/teams' + item.slug)}>
              <Box
                sx={{
                  mb: 2,
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: 'blue',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginInline: 'auto',
                  '&:hover': {
                    transition: '0.3s',
                    background: 'white',
                    '& svg': {
                      color: 'blue'
                    },
                  },
                  '& svg': {
                    color: 'white'
                  }
                }}>
                  {item.icon}
              </Box>
              <Typography sx={{color: 'white'}}>{item.title}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export async function getStaticProps(context) {

  const res = await getTeams();

  return { 
    props: { data: res } 
  }
}