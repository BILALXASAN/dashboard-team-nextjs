import { Typography } from '@mui/material';
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import TeamOne from './teamone';
import TeamTwo from './teamtwo';
import TeamThree from './teamthree';
import { getTeaming } from '@/api';

export default function Home({ data }) {
    console.log(data);
    const router = useRouter();
  return (
    <Layout>
        {router.query.teams === 'teamone' ? <TeamOne /> : 
        router.query.teams === 'teamtwo' ? <TeamTwo /> : 
        router.query.teams === 'teamthree' ? <TeamThree /> : <Typography>Xatolik bor</Typography>}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  
  const TeamName = context.query.teams;

  const res = await getTeaming(TeamName); 
  return {
    props: { data: res },
  }
}